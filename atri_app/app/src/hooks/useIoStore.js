import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {
    "Upload5": {
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
