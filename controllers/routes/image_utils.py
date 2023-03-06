import os

from babylog.logger import babylogger
import cv2 as cv
from tqdm import tqdm


class ImageSequence:
    def __init__(self, path=None, extensions=None, timestamp_file=None,
                 rotate=False, scale=0.5, **kwargs):
        self.path = path
        self.rotate = rotate
        self.scale = scale
        self.width = None
        self.height = None
        self.frame_count = None
        self.video = None
        self.images = None
        self.scaled_dim = None
        self.frame_num = 0
        self.playback_speed = 50
        self.raw_video_string = "Scaled Raw Image"
        self.frame = None
        self.is_image = False
        self.is_video = False

        if timestamp_file is None:
            self.timestamps = None
        else:
            with open(timestamp_file, 'r') as filehandle:
                self.timestamps = [timestamp.rstrip() for timestamp in filehandle.readlines()]

        if self.path is not None:
            if self.check_directory():
                self.is_video = False
                if not extensions:
                    extensions = [".jpg", ".jpeg", ".png"]
                self.images = [f for f in sorted(os.listdir(self.path)) if os.path.splitext(f)[1] in extensions]
                babylogger.info('Found {} images in folder'.format(len(self.images)))
                if not self.images:
                    self.is_image = False
                    raise NotImplementedError
                else:
                    self.is_image = True
            elif self.check_video():
                self.is_video = True
            else:
                raise NotImplementedError

            if self.is_video:
                self.video = cv.VideoCapture(self.path)

        self.get_dimensions()
        self.scaled_dim = (int(self.width * self.scale),
                           int(self.height * self.scale))
        config = {'video': self.is_video, 'image': self.is_image,
                  'scaled dimensions': self.scaled_dim,
                  'frame count': self.frame_count}
        babylogger.info('[CONFIG video]: {}'.format(config))
        super().__init__(**kwargs)

    def check_directory(self):
        return os.path.isdir(self.path)

    def check_file(self):
        return os.path.isfile(self.path)

    def check_video(self):
        extensions = [".mp4", ".avi"]
        if os.path.splitext(self.path)[1] in extensions:
            return True
        return False

    def get_dimensions(self):
        if self.is_video:
            width = self.video.get(cv.CAP_PROP_FRAME_WIDTH)
            height = self.video.get(cv.CAP_PROP_FRAME_HEIGHT)
            self.width = width if not self.rotate else height
            self.height = height if not self.rotate else width
            self.frame_count = int(self.video.get(cv.CAP_PROP_FRAME_COUNT))
            if self.frame_count <= 0:
                self.frame_count = 0
                while True:
                    ret, _ = self.video.read()
                    if not ret:
                        break
                    self.frame_count += 1
                self.video.release()
                self.video = cv.VideoCapture(self.path)

        if self.is_image:
            image = cv.imread(self.path + '/' + self.images[0])
            self.width = image.shape[1]
            self.height = image.shape[0]
            self.frame_count = len(self.images)

    def get_frame(self, frame_num):
        self.frame_num = frame_num
        if self.is_video:
            self.video.set(cv.CAP_PROP_POS_FRAMES, frame_num)
            ret, frame = self.video.read()
            if not ret:
                frame = None
                babylogger.info('Could not read frame')
            else:
                pass

        if self.is_image:
            image_path = self.images[frame_num]
            try:
                frame = cv.imread(self.path + '/' + image_path)
            except Exception as e:
                babylogger.error('{e}'.format(e))
                frame = None

        try:
            frame = cv.rotate(frame, cv.ROTATE_90_COUNTERCLOCKWISE) if self.rotate else frame
            frame = cv.resize(frame, self.scaled_dim, interpolation=cv.INTER_AREA)
        except cv.error as e:
            babylogger.error('Invalid frame!')
            frame = None
            pass

        self.frame = frame

    def check_frames(self, max_frames: int = 300):
        if self.frame_count > max_frames:
            return False
        return True

    def check_resolution(self, max_resolution: int = 1920):
        if max(self.scaled_dim) > max_resolution:
            return False
        return True

    def get_frames(self):
        for i in tqdm(range(self.frame_count)):
            self.get_frame(i)
            yield self.frame
