import { addEnumerations, t } from "mendix";

export const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "9064fe71-639f-4c73-b8e5-a3c651b8e6c4"
    },
    {
      "type": "javaScriptActionCall",
      "label": "2c4f938b-9264-4f59-905e-6f0ef0aa4314",
      "action": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackScreenshotWidget").JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "464dc23c-47b2-42fb-85df-0383737e0d79",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "ab788011-4246-45f3-99c4-dbfbbed75c61",
        "false": "c127a7bc-8740-4ab3-bfd5-f9753bfccc98"
      }
    },
    {
      "type": "jump",
      "label": "c127a7bc-8740-4ab3-bfd5-f9753bfccc98",
      "target": "c4d7f2b5-413e-4806-903c-5372d5371416"
    },
    {
      "type": "jump",
      "label": "c4d7f2b5-413e-4806-903c-5372d5371416",
      "target": "3bb94912-61b2-4e59-b1b4-10b2efe176bc"
    },
    {
      "type": "jump",
      "label": "3bb94912-61b2-4e59-b1b4-10b2efe176bc",
      "target": "bc022932-4ba6-4b23-b865-32c237b3bcc7"
    },
    {
      "type": "openForm",
      "label": "bc022932-4ba6-4b23-b865-32c237b3bcc7",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "931068ba-410e-473d-b8ff-6147420ff903",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "ab788011-4246-45f3-99c4-dbfbbed75c61",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "7af615ee-ae3f-41cb-9e70-cfca7b201894",
        "false": "7b2f790e-2b86-413d-9a31-ca1cd5f81143"
      }
    },
    {
      "type": "return",
      "label": "7b2f790e-2b86-413d-9a31-ca1cd5f81143",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "changeObject",
      "label": "7af615ee-ae3f-41cb-9e70-cfca7b201894",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "1EsWsVBIhV2fiGVL9OVSew",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "3bb94912-61b2-4e59-b1b4-10b2efe176bc",
      "target": "bc022932-4ba6-4b23-b865-32c237b3bcc7"
    }
  ]
};
