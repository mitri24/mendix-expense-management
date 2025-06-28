import { addEnumerations, t } from "mendix";

export const ACT_Open_Feedback_Modal = {
  "name": "FeedbackModule.ACT_Open_Feedback_Modal",
  "instructions": [
    {
      "type": "openForm",
      "label": "684845d2-69e9-4704-afc2-8f8fddc88cab",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "3c9d1722-c741-4322-81c9-c80ec64c982d",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
