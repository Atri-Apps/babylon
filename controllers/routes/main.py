import glob

from .atri import Atri
from fastapi import Request, Response
from atri_utils import *

from .image_utils import ImageSequence
from .utils import demo_babylog, get_

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

    video = ImageSequence('input.mp4')  # TODO: replace with filepath
    if not video.check_frames(max_frames=MAX_VIDEO_FRAMES) \
            or not video.check_resolution(max_resolution=MAX_RESOLUTION):
        return  # TODO: check response here

    logfile_paths = glob.glob("./babylog/**/*.bin", recursive=True)  # TODO: replace with correct filepaths

    for image, stats in get_predictions(logfile_paths):  # TODO: cleanup here
        pass







