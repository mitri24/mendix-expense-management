import { addEnumerations, t } from "mendix";

export const DS_Feedback_Populate = {
  "name": "FeedbackModule.DS_Feedback_Populate",
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "f6766497-66db-499b-bb07-44d4ae58333b",
      "flow": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/nanoflows/FeedbackModule.SUB_Feedback_GetOrCreate").SUB_Feedback_GetOrCreate,
      "parameters": [],
      "outputVar": "Feedback"
    },
    {
      "type": "microflowCall",
      "label": "a014ed9c-c3d0-4cff-8ed4-2bc258692fa1",
      "operationId": "Vnk8CAnFP1m7TbMDeYCDLw",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "f6ddccbe-2c5c-4fed-a125-0ee16d8708eb",
      "inputVar": "Feedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "variable",
          "variable": "Feedback",
          "path": "_showEmail"
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "conditional",
          "condition": {
            "type": "conditional",
            "condition": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": null
                }
              ]
            },
            "then": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": ""
                }
              ]
            },
            "else": {
              "type": "literal",
              "value": false
            }
          },
          "then": {
            "type": "literal",
            "value": false
          },
          "else": {
            "type": "literal",
            "value": true
          }
        }
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "7c417941-f60a-4f0f-a469-384476821ef9",
      "action": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/javascriptsource/feedbackmodule/actions/JS_PopulateFeedbackMetadata").JS_PopulateFeedbackMetadata,
      "parameters": [
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
      "label": "1958afa1-7c1b-4089-974c-6e5abe677688",
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
      "label": "0279a429-b515-4cf3-9ff0-447af6d10624",
      "action": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/javascriptsource/feedbackmodule/actions/JS_Recalculate_MendixModal_Error_PopUp_Zindex").JS_Recalculate_MendixModal_Error_PopUp_Zindex,
      "parameters": []
    },
    {
      "type": "return",
      "label": "c58990c7-206f-4fa4-adb2-385fca7edea3",
      "result": {
        "type": "variable",
        "variable": "Feedback"
      },
      "resultKind": "object"
    }
  ]
};
