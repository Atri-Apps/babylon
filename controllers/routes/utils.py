import time
from typing import Dict, List
from datetime import datetime

from typing import Dict, List
from babylog import Babylog, VisionModelType, InferenceDevice, LoggedPrediction
from babylog.logger import babylogger
import numpy as np
from ultralytics import YOLO
from torch import device
import cv2 as cv

from .image_utils import ImageSequence


def demo_babylog(video: ImageSequence, config_path: str, logging_interval: int = 10000):
    try:
        model = YOLO("yolov8n.pt")  # loading a pretrained model, in this case the YOLOV8 nano model
        bl = Babylog(config_path)  # save_local is True by default
        bl.config.data_params.interval = logging_interval  # ms
        for frame in video.get_frames():
            start_time = time.time()  # not using cuda time  measurement since inference is on cpu
            if frame is None:
                continue
            results = model(frame, device=device('cpu'))
            latency = int((time.time() - start_time) * 1000)
            boxes = results[0].boxes.numpy()  # Boxes object for bbox outputs
            boxes_xywh = boxes.xywh  # bounding boxes in x, y, width, height format
            cls = boxes.cls  # detected classes
            conf = boxes.conf  # detection confidence
            # convert the bounding boxes to babylog's format
            boxes_babylog = [{'x': int(box[0]),
                              'y': int(box[1]),
                              'width': int(box[2]),
                              'height': int(box[3]),
                              'confidence': float(conf_),
                              'classification': {model.names[int(cls_)]: 1.0}}
                             for box, conf_, cls_ in zip(boxes_xywh, conf, cls)
                             ]
            bl.log(
                image=frame,
                model_type=VisionModelType.DETECTION,
                model_name="yolov8n_pretrained",
                model_version="0.0.0",
                latency=latency,
                inference_device=InferenceDevice.CPU,
                detection=boxes_babylog,
            )

        bl.shutdown()
    except Exception as e:
        babylogger.error(f'caught exception: {e}')
        return False

    return True


def overlay_bboxes(detections: List[Dict], predicted_image: np.array):
    for detection in detections:
        x = detection['x']; y = detection['y']; w = detection['width']; h = detection['height']
        top_left = (x-w//2, y-h//2)
        bottom_right = (x+w//2, y+h//2)

        # visualizing the bounding boxes
        color = (np.array([0., 0., 1.]) * 255).astype(np.uint8).tolist()
        text = '{}:{:.1f}%'.format(detection['classificationResult'][0]['className'], detection['confidence'] * 100)
        txt_color = (255, 255, 255)
        font = cv.FONT_HERSHEY_SIMPLEX
        txt_size = cv.getTextSize(text, font, 0.8, 1)[0]

        cv.rectangle(predicted_image, top_left, bottom_right, color, 2)
        txt_bk_color = (np.array([0.8, 0., 0.8]) * 255).astype(np.uint8).tolist()
        cv.rectangle(
            predicted_image,
            (top_left[0], top_left[1] + 1),
            (top_left[0] + int(0.5*txt_size[0]) + 1, top_left[1] + int(1.5*txt_size[1])),
            txt_bk_color,
            -1
        )
        cv.putText(predicted_image, text, (top_left[0], top_left[1] + txt_size[1]), font, 0.4, txt_color, thickness=1)

    return predicted_image


def prediction_stats(logged_prediction: LoggedPrediction):
    device = logged_prediction.inference_stats['inferenceDevice']
    latency = logged_prediction.inference_stats['latency']
    inference_stats = 'Inference stats: {}, {}ms'.format(device, latency)
    model_version = logged_prediction.model['version']
    model_name = logged_prediction.model['name']
    model_stats = 'Model info: {} v{}'.format(model_name, model_version)

    return f'{model_stats}\n{inference_stats}'


def get_predictions(filepaths: List[str], max_predictions: int = 10):
    filepaths = sorted(filepaths)
    filepaths = filepaths[-max_predictions:]
    for filepath in filepaths:
        logged_prediction = LoggedPrediction.from_path(filepath)
        if logged_prediction.image is not None:
            image = overlay_bboxes(detections=logged_prediction.detection, predicted_image=logged_prediction.image)
            stats = prediction_stats(logged_prediction=logged_prediction)
            yield image, stats
        else:
            yield None, None








