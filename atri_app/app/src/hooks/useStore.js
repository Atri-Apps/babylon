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
    "Header": {
      "callbacks": {}
    },
    "Logo": {
      "callbacks": {}
    },
    "Navigation_Options": {
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
    "Model_Social": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex8": {
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
    "Flex74": {
      "callbacks": {}
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
    "Login_Button": {
      "custom": {
        "text": "Log In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Logo_Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%202atri_labs.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Logo_Image_Name": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_with_name%203.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Showcase": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Docs": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
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
    "TextBox4": {
      "custom": {
        "text": "42"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vectorlike.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vectorshare.png"
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
    "Upload5": {
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload",
        "disabled": false
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
    "Div32": {
      "callbacks": {}
    },
    "Div33": {
      "callbacks": {}
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
    "Input2": {
      "custom": {
        "value": "15",
        "placeholder": ""
      },
      "callbacks": {}
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
    "TextBox105": {
      "custom": {
        "text": "url = \"https://predict.pyqai.com\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "json_input = { \"model\": 154, \"version\": 441, \"account\": , \"input_sequence\":\"Your input goes here\", \"max_new_tokens\":50}"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "headers = { 'Authorization': \"\",'Content-Type': 'application/json'}"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "print(json.loads(response.content)['response']['response'])"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "response = requests.post(headers=headers, json = json_input, url = url )"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "import json"
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
        "text": "import requests"
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
