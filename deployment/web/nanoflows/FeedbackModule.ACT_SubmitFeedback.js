import { addEnumerations, t } from "mendix";

export const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "d0adbce6-3041-4285-b9ce-c234d4c84ff0",
      "operationId": "JbKO640u7Farr0eIYGu+oA",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "isValid"
    },
    {
      "type": "switch",
      "label": "0400e0da-a880-4b30-96c9-c59d9258e1d0",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "de27ac24-cb59-4361-9705-bd057f08ca88",
        "false": "6d9777c9-8171-4221-8959-d37ec24f8146"
      }
    },
    {
      "type": "return",
      "label": "6d9777c9-8171-4221-8959-d37ec24f8146",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "de27ac24-cb59-4361-9705-bd057f08ca88",
      "operationId": "r+HNxotheVCMWfAI+y6Zlw",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "ResponseHelper"
    },
    {
      "type": "closeForm",
      "label": "28ecaadd-6a8a-4c80-b734-862f2b7e67d5",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "1cd5d8bc-a120-42b0-ae47-1f3f7795c0fc",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "ResponseHelper"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "46571a38-d806-4282-bace-ce47addf76ad",
        "false": "4af31554-022b-4cc4-bf59-27941188b485"
      }
    },
    {
      "type": "jump",
      "label": "4af31554-022b-4cc4-bf59-27941188b485",
      "target": "5865850d-7ec4-4a5d-a3b6-23ae64437822"
    },
    {
      "type": "openForm",
      "label": "5865850d-7ec4-4a5d-a3b6-23ae64437822",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "a451fe6c-ce86-4abd-9266-df91e7b85982",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "46571a38-d806-4282-bace-ce47addf76ad",
      "path": "FeedbackModule/PopupSuccess.page.xml",
      "params": {
        "name": "FeedbackModule/PopupSuccess.page.xml",
        "location": "modal",
        "resizable": false
      },
      "inputArgs": {
        "$Response": {
          "type": "variable",
          "variable": "ResponseHelper"
        }
      }
    },
    {
      "type": "nanoflowCall",
      "label": "a85cf54b-0084-413f-8a1c-03ab416f1693",
      "flow": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/nanoflows/FeedbackModule.SUB_Feedback_ResetLocalStorage").SUB_Feedback_ResetLocalStorage,
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
      "type": "return",
      "label": "ed79bff3-16ef-4547-b0fc-034837a81887",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
