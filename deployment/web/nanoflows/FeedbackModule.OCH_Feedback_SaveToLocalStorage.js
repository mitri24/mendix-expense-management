import { addEnumerations, t } from "mendix";

export const OCH_Feedback_SaveToLocalStorage = {
  "name": "FeedbackModule.OCH_Feedback_SaveToLocalStorage",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "fcdb2a60-8269-4c0e-b666-364c673a30a5",
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
      "label": "c9aa6a6d-64ec-4501-af53-e3b203718cad",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
