import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Body": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Model_Info": {
      "callbacks": {}
    },
    "Model_Header": {
      "callbacks": {}
    },
    "Steps": {
      "callbacks": {}
    },
    "Step_1": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Div26": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "Div43": {
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Step_2": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "Div34": {
      "callbacks": {}
    },
    "Flex64": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Step_3": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "run_btn": {
      "callbacks": {
        "onClick": [
          {
            "sendFile": {
              "alias": "Video_Upload",
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Logs": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Div42": {
      "callbacks": {}
    },
    "Flex85": {
      "callbacks": {}
    },
    "Flex84": {
      "callbacks": {}
    },
    "TextBox43": {
      "custom": {
        "text": "Model by Babylon"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "custom": {
        "text": "Made with Atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Ellipse%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "Babylog provides a standard for efficient logging of prediction data: model information, inference statistics, predictions, and raw input images are bundled up into one file in binary format."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Model_Name": {
      "custom": {
        "text": "Model Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "STEP 1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Ellipse%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Red%20Abstract%20Income%20Money%20YouTube%20Thumbnail%20(1)%201image.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div29": {
      "callbacks": {}
    },
    "TextBox54": {
      "custom": {
        "text": "Upload a Video"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Video_Upload": {
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload",
        "disabled": false
      },
      "callbacks": {
        "onChange": []
      }
    },
    "File_Upload": {
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload",
        "disabled": true,
        "multuple": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upload.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div30": {
      "callbacks": {}
    },
    "TextBox56": {
      "custom": {
        "text": "Choose logging interval (min)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "interval_slider": {
      "custom": {
        "minValue": 0,
        "maxValue": 30,
        "value": 15
      },
      "callbacks": {
        "onChange": [],
        "onFinish": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "30 m"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "0 m"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "interval_input": {
      "custom": {
        "value": "15",
        "placeholder": ""
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Ellipse%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "STEP 2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "STEP 3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Ellipse%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div38": {
      "callbacks": {}
    },
    "TextBox62": {
      "custom": {
        "text": "Run"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Run"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "OUTPUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "30 mins ago"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Polygon%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "60 mins ago"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Polygon%202.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "2023-03-01 00:46:24,638 - babylogger - INFO :34 :  babylog.config contents:  &#10;INFO:babylogger:babylog.config contents:  2023-03-01 00:46:24,641 - babylogger - INFO :35 :  {'device': {'ip': '127.0.0.1', 'port': 5555, 'name': 'DEVICE_NAME', 'group': 'GROUP_NAME'}, 'data': {'interval': 0, 'max_workers': 4}, 'S3_storage': {'aws_access_key_id': 'YOUR_ACCESS_KEY', 'aws_secret_access_key': 'YOUR_SECRET_KEY', 'bucket_name': 'YOUR_BUCKET_NAME', 'bucket_region': 'YOUR_BUCKET_REGION'}} INFO:babylogger:{'device': {'ip': '127.0.0.1', 'port': 5555, 'name': 'DEVICE_NAME', 'group': 'GROUP_NAME'}, 'data': {'interval': 0, 'max_workers': 4}, 'S3_storage': {'aws_access_key_id': 'YOUR_ACCESS_KEY', 'aws_secret_access_key': 'YOUR_SECRET_KEY', 'bucket_name': 'YOUR_BUCKET_NAME', 'bucket_region': 'YOUR_BUCKET_REGION'}} 2023-03-01 00:46:24,644 - babylogger - INFO :62 :  initialized babylog client INFO:babylogger:initialized babylog client 2023-03-01 00:46:24,648 - babylogger - INFO :187 :  shutting down babylog client INFO:babylogger:shutting down babylog client 2023-03-01 00:46:24,705 - babylogger - INFO :169 :  successfully logged \"./babylog/DETECTION/yolov8n_pretrained/0.0.1/GROUP_NAME/DEVICE_NAME/2023-03-01/2023-03-01 00:46:24.704.bin\" locally INFO:babylogger:successfully logged \"./babylog/DETECTION/yolov8n_pretrained/0.0.1/GROUP_NAME/DEVICE_NAME/2023-03-01/2023-03-01 00:46:24.704.bin\" locally"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
