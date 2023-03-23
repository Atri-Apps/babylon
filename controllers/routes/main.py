import glob

import cv2

from .atri import Atri
from fastapi import Request, Response
from atri_utils import *

from .image_utils import ImageSequence
from .utils import demo_babylog, get_predictions

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Video_Upload.onChange:
        # sanity check if user has successfully uploaded a file
        if at.Video_Upload.io.files != None:
            print("Video file selected", at.Video_Upload.io.files)

    # Load Video
    MAX_VIDEO_FRAMES = 300  # limit video frames passed by user
    MAX_RESOLUTION = 1920  # limit resolution for video to FHD

    # TODO: replace with filepath
    video = ImageSequence('input.mp4')
    if not video.check_frames(max_frames=MAX_VIDEO_FRAMES) \
            or not video.check_resolution(max_resolution=MAX_RESOLUTION):
        return  # TODO: check response here

    # TODO: replace with logging interval from slider
    success = demo_babylog(video=video, config_path='../babylog_resources/babylog.config.yaml', logging_interval=10000)
    if not success:
        return  # TODO: check response here
    # TODO: replace with correct filepaths
    logfile_paths = glob.glob("./babylog/**/*.bin", recursive=True)

    for image, stats in get_predictions(logfile_paths):
        pass
        # TODO: cleanup here
        directory_name = 'dir_'
        filename = 'test_'
        cv2.imwrite(f'{directory_name}/{filename}.jpg', image)







