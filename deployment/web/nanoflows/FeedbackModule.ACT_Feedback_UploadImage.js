import { addEnumerations, t } from "mendix";

export const ACT_Feedback_UploadImage = {
  "name": "FeedbackModule.ACT_Feedback_UploadImage",
  "instructions": [
    {
      "type": "setVariable",
      "label": "ca11d986-dfbe-4c4c-b900-c4cac7d0bb7c",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "290ee87e-5cde-44df-821d-6ea7c02f445d",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "aabf9992-64fb-488c-aec5-8ec28236d66b",
      "action": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/javascriptsource/feedbackmodule/actions/JS_UploadAndConvertToFileBlobURL").JS_UploadAndConvertToFileBlobURL,
      "outputVar": "fileBlobURL",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "mimeTypes"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileUploadSize"
          }
        }
      ]
    },
    {
      "type": "switch",
      "label": "d5ea96eb-ea9c-4254-acb1-86ef3b64b906",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "465dae93-b8a4-423e-b0b3-4d397c853d64",
        "false": "9cd0863c-9146-4a14-bd73-2274ee2e80ac"
      }
    },
    {
      "type": "return",
      "label": "9cd0863c-9146-4a14-bd73-2274ee2e80ac",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "465dae93-b8a4-423e-b0b3-4d397c853d64",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "7e5c883f-161f-48b1-8a9b-c7a22b80b955",
        "true": "58f12b4f-3dbf-47f3-ad8c-53bda9b4b567"
      }
    },
    {
      "type": "switch",
      "label": "58f12b4f-3dbf-47f3-ad8c-53bda9b4b567",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileSizeNotAccepted"
          }
        ]
      },
      "targets": {
        "true": "c52345a8-5e15-4e45-8ba6-a8bb1678ac4b",
        "false": "599f23d1-2520-4f98-950d-eab805f56755"
      }
    },
    {
      "type": "showMessage",
      "label": "599f23d1-2520-4f98-950d-eab805f56755",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Maximum image size allowed is 5MB."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "efad3ee8-746c-4191-9659-4a461f82b4e3",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "c52345a8-5e15-4e45-8ba6-a8bb1678ac4b",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileTypeNotAccepted"
          }
        ]
      },
      "targets": {
        "false": "efe5baa6-bf27-4e86-bfe8-6006ab837029",
        "true": "b8d5e2ff-15f2-49e7-b3e6-cd082508a670"
      }
    },
    {
      "type": "closeForm",
      "label": "b8d5e2ff-15f2-49e7-b3e6-cd082508a670"
    },
    {
      "type": "javaScriptActionCall",
      "label": "f867187c-32cc-4f97-9fc9-f1daad022297",
      "action": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackAnnotateWidget").JS_ToggleFeedbackAnnotateWidget,
      "outputVar": "base64ImageFromWidget",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "4e833f6a-d2ba-403b-8c42-2da88bd9e5cd",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "0LJs7OLIqVyTXOi/+VmG8g",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "c4b2a2b2-6f3f-4dbd-8aef-e6b41924b190",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "f290bda7-e532-44b8-a785-435d4639f089",
      "action": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/javascriptsource/feedbackmodule/actions/SetStorageItemObject").SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "a375d1b6-4c00-4d60-92cb-58ff7cf4fa8d",
      "action": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/javascriptsource/feedbackmodule/actions/JS_RevokeUploadedFileFromMemory").JS_RevokeUploadedFileFromMemory,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "49c0ec42-edef-40d0-bbc8-afc537eb462f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "efe5baa6-bf27-4e86-bfe8-6006ab837029",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Only images with format of .gif .jpg .jpeg .png are allowed"
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "7def1dbf-5acf-4150-a27b-efbfdc9e7f66",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "7e5c883f-161f-48b1-8a9b-c7a22b80b955",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Upload failed, please try again."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "8113e481-badc-43c2-bf35-6e26e5f79694",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
