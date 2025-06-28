import { addEnumerations, t } from "mendix";

export const ACT_Feedback_ClearImage = {
  "name": "FeedbackModule.ACT_Feedback_ClearImage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "d5f2c254-703e-4a29-be42-9677dd10ca1a",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "3cb7fe38-78a9-4aa6-925e-ebdfcc4d4d27",
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
      "type": "return",
      "label": "5de0dbb0-286d-4335-aa8f-46998cdcdb23",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
