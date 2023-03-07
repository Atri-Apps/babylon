import glob

import cv2
from babylog import LoggedPrediction

from .image_utils import ImageSequence
from .utils import demo_babylog, get_predictions, overlay_bboxes, prediction_stats


def main():
    # Load Video
    MAX_VIDEO_FRAMES = 300  # limit video frames passed by user
    MAX_RESOLUTION = 1920  # limit resolution for video to FHD

    video = ImageSequence('input.mp4')
    if not video.check_frames(max_frames=MAX_VIDEO_FRAMES) \
            or not video.check_resolution(max_resolution=MAX_RESOLUTION):
        return
    success = demo_babylog(video=video, config_path='../babylog_resources/babylog.config.yaml', logging_interval=1000)
    if not success:
        return
    logfile_paths = glob.glob("./babylog/**/*.bin", recursive=True)

    for image, stats in get_predictions(logfile_paths):
        print(stats)
        cv2.imshow('image', image)
        cv2.waitKey(0)


if __name__ == "__main__":
    main()
