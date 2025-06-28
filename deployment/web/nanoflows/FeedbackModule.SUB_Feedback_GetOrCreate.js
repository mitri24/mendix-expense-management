import { addEnumerations, t } from "mendix";

export const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "tryCatch",
      "label": "413e48b8-f541-4f22-a357-a00eb74b7bf7",
      "catchTarget": "221bd21f-5963-4fa3-8b90-7447a05e5ed9",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/javascriptsource/feedbackmodule/actions/GetStorageItemObject").GetStorageItemObject,
          "outputVar": "LocalFeedback",
          "parameters": [
            {
              "kind": "primitive",
              "value": {
                "type": "constant",
                "name": "FeedbackModule.LocalStorageKey"
              }
            },
            {
              "kind": "primitive",
              "value": {
                "type": "literal",
                "value": "FeedbackModule.Feedback"
              }
            }
          ]
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "switch",
      "label": "a754cc52-161c-4c5a-b9d4-264dc6b5449d",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "LocalFeedback"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "9c5f898e-d3fb-4c42-a379-2b319d124eb7",
        "true": "2967db38-f73a-4a04-8e9e-926da0c55795"
      }
    },
    {
      "type": "return",
      "label": "2967db38-f73a-4a04-8e9e-926da0c55795",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "9c5f898e-d3fb-4c42-a379-2b319d124eb7",
      "target": "aad667b2-76be-41b8-909e-9ee824119663"
    },
    {
      "type": "createObject",
      "label": "aad667b2-76be-41b8-909e-9ee824119663",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "06a11bff-795b-4b3b-ab16-6c6e0d20aac0",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "221bd21f-5963-4fa3-8b90-7447a05e5ed9",
      "target": "9c5f898e-d3fb-4c42-a379-2b319d124eb7"
    },
    {
      "type": "jump",
      "label": "9c5f898e-d3fb-4c42-a379-2b319d124eb7",
      "target": "aad667b2-76be-41b8-909e-9ee824119663"
    }
  ]
};
