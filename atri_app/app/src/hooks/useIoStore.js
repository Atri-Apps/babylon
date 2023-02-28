import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {
    "Video_Upload": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    },
    "File_Upload": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  }
}});

export default useIoStore;
