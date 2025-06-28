import { getAugmentedNamespace, getUserRoleNames, hideProgress, showProgress, selectTranslation, LogManager, asProperty, getSession, handleError, DescribedError, fromConstant$, dynUnavailable, pageScope, getNanoflowArguments$, toFriendlyId, nanoflowEngine, ensure, readUntracked, MxObject, available, unavailable, reactExports, jsxRuntimeExports, classNames, asPluginWidgets } from '../index-UACZNrBd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DHtf5l1V.js';
import { fromObjectProperty$, ActionButton, TextProperty, ActionProperty } from '../ActionButton-DV0c4BuZ.js';
import { debounce, Alert, getAriaLabelProps, getValidationAriaProps, FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CyHwmz97.js';
import { handleDataSourceExecutionError } from '../ymLH28GV-Dq2RASU6.js';
import { WebIconProperty } from '../WebIconProperty-Dp1h0TWT.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CvgwjdAQ.js';
import { ImageWidgetModule, Container, Text } from '../Text-Hz4G3gHr.js';
import { DataView } from '../DataView-DBkSrPOT.js';
import { Div } from '../Div-Dhe9jsr5.js';
import { Label } from '../Label-BvzEsVpa.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DUY6vSOW.js';
import { AttributeProperty } from '../BQKVXLaf-mvtyIvU3.js';
import '../uEIG9e6s-DbIaJy7J.js';
import '../InlineText-edXOhouE.js';
import '../bdxqAC6d-D5pvApxC.js';

var AsyncStorage = {};

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Get locally stored JSON object stored in clients internet browser. Identified by a unique key. Can be accessed by the GetStorageItemObject action. Please note that users can clear the device storage.
 * @param {string} key - This field is required.
 * @param {string} entity - This field is required.
 * @returns {Promise.<MxObject>}
 */
async function GetStorageItemObject(key, entity) {
  // BEGIN USER CODE
  if (!key) {
    return Promise.reject(new Error("Input parameter 'Key' is required"));
  }
  if (!entity) {
    return Promise.reject(new Error("Input parameter 'Entity' is required"));
  }
  return getItem(key).then(result => {
    if (result === null) {
      return Promise.reject(new Error(`Storage item '${key}' does not exist`));
    }
    const value = JSON.parse(result);
    return getOrCreateMxObject(entity, value).then(newObject => {
      const newValue = serializeMxObject(newObject);
      return setItem(key, JSON.stringify(newValue)).then(() => newObject);
    });
  });
  function getItem(key) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.getItem(key);
    }
    if (window) {
      const value = window.localStorage.getItem(key);
      return Promise.resolve(value);
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function getOrCreateMxObject(entity, value) {
    return getMxObject(value.guid).then(existingObject => {
      if (existingObject) {
        return existingObject;
      } else {
        return createMxObject(entity, value);
      }
    });
  }
  function getMxObject(guid) {
    return new Promise((resolve, reject) => {
      mx.data.get({
        guid,
        callback: mxObject => resolve(mxObject),
        error: error => reject(error)
      });
    });
  }
  function createMxObject(entity, value) {
    return new Promise((resolve, reject) => {
      mx.data.create({
        entity,
        callback: mxObject => {
          Object.keys(value).filter(attribute => attribute !== "guid").forEach(attributeName => {
            const attributeValue = value[attributeName];
            mxObject.set(attributeName, attributeValue);
          });
          resolve(mxObject);
        },
        error: () => reject(new Error(`Could not create '${entity}' object`))
      });
    });
  }
  function serializeMxObject(object) {
    return object.getAttributes().reduce((accumulator, attributeName) => {
      accumulator[attributeName] = object.get(attributeName);
      return accumulator;
    }, {
      guid: object.getGuid()
    });
  }
  // END USER CODE
}

var GetStorageItemObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GetStorageItemObject: GetStorageItemObject
});

var require$$0$6 = /*@__PURE__*/getAugmentedNamespace(GetStorageItemObject$1);

const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "tryCatch",
      "label": "413e48b8-f541-4f22-a357-a00eb74b7bf7",
      "catchTarget": "221bd21f-5963-4fa3-8b90-7447a05e5ed9",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require$$0$6.GetStorageItemObject,
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

var FeedbackModule_SUB_Feedback_GetOrCreate = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SUB_Feedback_GetOrCreate: SUB_Feedback_GetOrCreate
});

var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(FeedbackModule_SUB_Feedback_GetOrCreate);

// BEGIN EXTRA CODE

const handleUserRoles = async () => {
  try {
    if (typeof getUserRoleNames !== "function" || getUserRoleNames === undefined) {
      console.error("Feedback module cannot get the user role name.");
      return undefined;
    }
    const userRoles = getUserRoleNames();
    if (!Array.isArray(userRoles) || userRoles.length === 0) {
      return undefined;
    }
    return userRoles[0];
  } catch (error) {
    console.error("Feedback module cannot get the user role name.", error);
    return undefined;
  }
};
const handlePagePath = async () => {
  try {
    return window.history.state.pageName;
  } catch (error) {
    console.error("Feedback module cannot get the Mendix App page name", error);
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Returns meta data from the clients internet browser. 
 * 
 * This includes; 
 * 
 * ActiveUserRoles
 * PageName
 * EnvironmentURL
 * Browser
 * ScreenWidth
 * ScreenHeight
 * @param {MxObject} feedback
 * @returns {Promise.<MxObject>}
 */
async function JS_PopulateFeedbackMetadata(feedback) {
  // BEGIN USER CODE
  try {
    const userRoles = await handleUserRoles();
    const pagePath = await handlePagePath();
    feedback.set("ActiveUserRoles", userRoles);
    feedback.set("PageName", pagePath);
    feedback.set("EnvironmentURL", window.location.href);
    feedback.set("Browser", navigator.userAgent);
    feedback.set("ScreenWidth", window.screen.width);
    feedback.set("ScreenHeight", window.screen.height);
    return feedback;
  } catch (error) {
    console.error("Feedback Module cannot correctly set meta data.", error);
  }
  ;
  // END USER CODE
}

var JS_PopulateFeedbackMetadata$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_PopulateFeedbackMetadata: JS_PopulateFeedbackMetadata
});

var require$$1$2 = /*@__PURE__*/getAugmentedNamespace(JS_PopulateFeedbackMetadata$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Store a Mendix object in device storage, identified by a unique key. Can be accesed by the GetStargeItemObject action. Please note that users can clear the device storage.
 * @param {string} key - This field is required.
 * @param {MxObject} value - This field is required.
 * @returns {Promise.<void>}
 */
async function SetStorageItemObject(key, value) {
  // BEGIN USER CODE
  if (!key) {
    return Promise.reject(new Error("Input parameter 'Key' is required"));
  }
  if (!value) {
    return Promise.reject(new Error("Input parameter 'Value' is required"));
  }
  const serializedObject = serializeMxObject(value);
  return setItem(key, JSON.stringify(serializedObject));
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function serializeMxObject(object) {
    return object.getAttributes().reduce((accumulator, attributeName) => {
      accumulator[attributeName] = object.get(attributeName);
      return accumulator;
    }, {
      guid: object.getGuid()
    });
  }
  // END USER CODE
}

var SetStorageItemObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SetStorageItemObject: SetStorageItemObject
});

var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(SetStorageItemObject$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<void>}
 */
async function JS_Recalculate_MendixModal_Error_PopUp_Zindex() {
  // BEGIN USER CODE

  function setModalZindex(cssSelector, zIndexValue) {
    try {
      const htmlElement = document.querySelectorAll(cssSelector);
      if (!htmlElement.length) {
        return;
      }
      htmlElement.forEach(item => item.style.zIndex = zIndexValue);
    } catch (error) {
      console.warn("Feedback Module JS Action JS_Recalculate_Modal_Zindex could not execute correctly.", error);
    }
  }
  ;
  setTimeout(() => {
    setModalZindex(".mx-dialog-info, mx-dialog-warning, .mx-dialog-error", "90");
    setModalZindex(".mx-underlay", "80");
  }, 500);
  // END USER CODE
}

var JS_Recalculate_MendixModal_Error_PopUp_Zindex$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_Recalculate_MendixModal_Error_PopUp_Zindex: JS_Recalculate_MendixModal_Error_PopUp_Zindex
});

var require$$3$2 = /*@__PURE__*/getAugmentedNamespace(JS_Recalculate_MendixModal_Error_PopUp_Zindex$1);

const DS_Feedback_Populate = {
  "name": "FeedbackModule.DS_Feedback_Populate",
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "f6766497-66db-499b-bb07-44d4ae58333b",
      "flow": () => require$$0$5.SUB_Feedback_GetOrCreate,
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
      "action": () => require$$1$2.JS_PopulateFeedbackMetadata,
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
      "action": () => require$$0$4.SetStorageItemObject,
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
      "action": () => require$$3$2.JS_Recalculate_MendixModal_Error_PopUp_Zindex,
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

var FeedbackModule_DS_Feedback_Populate = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DS_Feedback_Populate: DS_Feedback_Populate
});

var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(FeedbackModule_DS_Feedback_Populate);

const OCH_Feedback_SaveToLocalStorage = {
  "name": "FeedbackModule.OCH_Feedback_SaveToLocalStorage",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "fcdb2a60-8269-4c0e-b666-364c673a30a5",
      "action": () => require$$0$4.SetStorageItemObject,
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

var FeedbackModule_OCH_Feedback_SaveToLocalStorage = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OCH_Feedback_SaveToLocalStorage: OCH_Feedback_SaveToLocalStorage
});

var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(FeedbackModule_OCH_Feedback_SaveToLocalStorage);

// BEGIN EXTRA CODE
// messageActionTypes are to identify the postMessage types between the JS Action & Feedback Widget.
const messageAction_toggleAnnotateMode$1 = "mxFeedbackWidget_toggleScreenshotMode"; // The Feedback widget reads this to trigger a specific screenshot mode stage.
const messageAction_isBase64$1 = "mxFeedbackWidget_convertedToBase64"; // We expect this string from the widget when screenshot mode in enabled.
const messageAction_actionCancelled$1 = "mxFeedbackWidget_actionCancelled"; // The Feedback widget will send this back if screenshot/annotation actions are cancelled by the user.

/* 
	The widget and JS action communicate with the following postMessage object structure:
	messageObject = {messageActionType: string;messageData: string;}
*/
const messageObject = {
  "messageActionType": messageAction_toggleAnnotateMode$1 //The Feedback widget reads this to trigger a specific Mode.
};
const parseJson = event => {
  try {
    return JSON.parse(event);
  } catch {
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Lets to take a screenshot of the current visible page
 * 
 * More detailed explanation:
 * The Mendix Feedback Widget handles annotation, screenshot and also renders a default styled button on your page. 
 * 
 * Usage:
 * You should use this JavaScript action to trigger the screenshot functionality.
 * 
 * Return Type:
 * Will return a image base64 string
 * 
 * @returns {Promise.<string>}
 */
async function JS_ToggleFeedbackScreenshotWidget() {
  // BEGIN USER CODE
  postMessage(JSON.stringify(messageObject), window.origin); // Send a message to the Feedback Wiget to trigger screenshot mode.

  return new Promise(resolve => {
    function handleEvent(event) {
      const parsedData = parseJson(event.data);
      if (parsedData && event.origin === window.origin) {
        if (parsedData.messageActionType === messageAction_isBase64$1) {
          window.removeEventListener("message", handleEvent);
          resolve(parsedData.messageData); // Resolve & return the base64 image to the nanoflow.
        }
        ;
        if (parsedData.messageActionType === messageAction_actionCancelled$1) {
          resolve("uploadCancelled");
        }
      }
    }
    ;
    window.addEventListener("message", handleEvent); // Listen and wait for the Feedback Widget to send back the edited screenshot as base64.
  });
  // END USER CODE
}

var JS_ToggleFeedbackScreenshotWidget$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_ToggleFeedbackScreenshotWidget: JS_ToggleFeedbackScreenshotWidget
});

var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(JS_ToggleFeedbackScreenshotWidget$1);

const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "9064fe71-639f-4c73-b8e5-a3c651b8e6c4"
    },
    {
      "type": "javaScriptActionCall",
      "label": "2c4f938b-9264-4f59-905e-6f0ef0aa4314",
      "action": () => require$$0$2.JS_ToggleFeedbackScreenshotWidget,
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

var FeedbackModule_ACT_Feedback_TriggerScreenshotMode = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ACT_Feedback_TriggerScreenshotMode: ACT_Feedback_TriggerScreenshotMode
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(FeedbackModule_ACT_Feedback_TriggerScreenshotMode);

// BEGIN EXTRA CODE
var isUploading = false;
async function storeFileAndGetResourceUrl(file) {
  return URL.createObjectURL(file); // Saves the file to locally memory and returns a URL path to the Blob object.
}
;
function removeDomElements(_ref) {
  let {
    fileInput,
    progressId
  } = _ref;
  console.log("progressId", progressId);
  if (progressId) hideProgress({
    progressId
  });
  if (fileInput) document.body.removeChild(fileInput);
  isUploading = false;
}
;
function validateFileTypes(_ref2) {
  let {
    acceptedTypes,
    fileType
  } = _ref2;
  if (!acceptedTypes && !fileType) return false;
  const accepted = acceptedTypes.split(",");
  return accepted.some(type => new RegExp(type).test(fileType));
}
;
function validateFileSize(_ref3) {
  let {
    uploadedFile,
    maxSize
  } = _ref3;
  if (!uploadedFile && !maxSize) return false;
  const uploadedSize = uploadedFile.size / 1024 / 1024; // Convert to MB
  return uploadedSize < maxSize.c[0] + 0.1; // 0.1 MB extra tolerance
}
;
// END EXTRA CODE

/**
 * What does this JavaScript Action do?
 * 
 * This is a custom build JavaScript Action that triggers the file upload dialog box to open in your internet browser. 
 * 
 * Dependency Note: 
 * This JavaScript action should be used with the JavaScript Action called 'JS_RevokeUploadedFileFromMemory' so that the image uploaded is removed from local memory :)
 * 
 * Explanation of this JavaScript Action & Memory management.
 * 
 * We use createObjectURL() to upload and store files in local memory. We can access and cosume this in memory image resource via the URL path that is returned from the createObjectURL() method. 
 * 
 * However, each time you call createObjectURL(), a new object is created in memory, even if you've already created one for the same object. 
 * So each of these must be released by calling the JS Action called 'JS_RevokeUploadedFileFromMemory' when you no longer need them.
 * 
 * Browsers will release object URLs automatically when the document is unloaded; however, for optimal performance and memory usage, if there are safe times when you can explicitly unload them, you should do so with the JavaScriptAction called 'JS_RevokeUploadedFileFromMemory'.
 * @param {string} userDefined_mimeTypes
 * @param {Big} userDefined_fileUploadSize
 * @returns {Promise.<string>}
 */
async function JS_UploadAndConvertToFileBlobURL(userDefined_mimeTypes, userDefined_fileUploadSize) {
  // BEGIN USER CODE
  return new Promise((resolve, reject) => {
    try {
      // Create and append the HTML input element to the body
      const fileInput = document.createElement("input");
      fileInput.style.position = "absolute";
      fileInput.style.left = "-9999px";
      fileInput.name = "fileupload";
      fileInput.id = "fileupload";
      fileInput.type = "file";
      if (userDefined_mimeTypes) {
        fileInput.accept = userDefined_mimeTypes;
      }
      fileInput.multiple = false;
      fileInput.onchange = handleFileUpload;
      document.body.appendChild(fileInput);
      fileInput.addEventListener("cancel", () => resolve("uploadCancelled"));
      fileInput.click();

      // A function used to validate & store the uploaded file to local memory.
      function handleFileUpload(event) {
        isUploading = true;
        const newFile = event.target.files[0];
        const progressId = showProgress();

        // Check if the uploaded file type matches the user defined accepted types.
        if (!validateFileTypes({
          acceptedTypes: fileInput.accept,
          fileType: newFile.type
        })) {
          removeDomElements({
            fileInput,
            progressId
          });
          return resolve("fileTypeNotAccepted");
        }
        // Check if the uploaded file matches the user defined upload size.
        if (!validateFileSize({
          uploadedFile: newFile,
          maxSize: userDefined_fileUploadSize
        })) {
          removeDomElements({
            fileInput,
            progressId
          });
          return resolve("fileSizeNotAccepted");
        }
        // Store file locally on users device and return path to resource.
        storeFileAndGetResourceUrl(newFile).then(fileBlobURL => {
          if (fileBlobURL && typeof fileBlobURL === "string") {
            removeDomElements({
              fileInput,
              progressId
            });
            return resolve(fileBlobURL);
          } else {
            removeDomElements({
              fileInput,
              progressId
            });
            return resolve("fileNotConverted");
          }
        });
      }
      ;
    } catch (error) {
      reject(error);
    }
    ;
  });
  // END USER CODE
}

var JS_UploadAndConvertToFileBlobURL$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_UploadAndConvertToFileBlobURL: JS_UploadAndConvertToFileBlobURL
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(JS_UploadAndConvertToFileBlobURL$1);

// BEGIN EXTRA CODE
// messageActionTypes are to identify the postMessage types between the JS Action & Feedback Widget.
const messageAction_toggleAnnotateMode = "mxFeedbackWidget_toggleAnnotateMode"; // The Feedback widget reads this to trigger a specific screenshot mode stage.
const messageAction_isBase64 = "mxFeedbackWidget_convertedToBase64"; // We expect this string from the widget when screenshot mode in enabled.
const messageAction_actionCancelled = "mxFeedbackWidget_actionCancelled"; // The Feedback widget will send this back if screenshot/annotation actions are cancelled by the user.

const parseJSON = event => {
  try {
    return JSON.parse(event);
  } catch {
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * When you upload a screenshot manually the image can be annotatated. 
 * 
 * More detailed explanation:
 * The Mendix Feedback Widget handles annotation and also renders a default styled button on your page. 
 * 
 * In order to trigger the annotation mode you have to use this JavaScript action to send the widget the correct image payload.
 * 
 * Return Type:
 * Will return base 64 image string
 * @param {string} fileBlobURL
 * @returns {Promise.<string>}
 */
async function JS_ToggleFeedbackAnnotateWidget(fileBlobURL) {
  // BEGIN USER CODE
  /* 
  The widget and JS action communicate with the following postMessage object structure:
  messageObject = {messageActionType: string;messageData: string;}
  */
  const messageObject = {
    "messageActionType": messageAction_toggleAnnotateMode,
    // The widget reads this to trigger the Annotate Mode.
    "messageData": fileBlobURL // The widget uses this URL reference to get access to the locally stored image blob.
  };
  postMessage(JSON.stringify(messageObject), window.origin); // Send the serialized message object to Feedback Wiget to trigger annotate mode.

  return new Promise(resolve => {
    function handleEvent(event) {
      const parsedData = parseJSON(event.data); // Convert the received string to an object.

      if (event.origin === window.origin) {
        if (parsedData && parsedData.messageActionType === messageAction_isBase64) {
          window.removeEventListener("message", handleEvent);
          resolve(parsedData.messageData); // Resolve & return the base64 image to the nanoflow.
        }
        ;
        if (parsedData && parsedData.messageActionType === messageAction_actionCancelled) {
          resolve();
        }
      }
    }
    ;
    window.addEventListener("message", handleEvent); // Listen and wait for the Feedback Widget to send the base64 image.
  });
  // END USER CODE
}

var JS_ToggleFeedbackAnnotateWidget$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_ToggleFeedbackAnnotateWidget: JS_ToggleFeedbackAnnotateWidget
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(JS_ToggleFeedbackAnnotateWidget$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * After you have uploaded an image it removes locally stored image from memory. This is a custom build action.
 * 
 * Dependency Note: 
 * This JavaScript action should be used only when you have inserted the Image Upload JavaScript Action called 'JS_UploadAndConvertToFileBlobURL' into your nanoflow.
 * 
 * More detailed explanation:  Memory management.
 * 
 * To upload a image we use a custom build Javascript action called  'JS_UploadAndConvertToFileBlobURL'.
 * Inside this action we use a JavaScript method called createObjectURL() to upload and store files in local memory. We can access and cosume this in memory image resource via the URL path that is returned from the createObjectURL() method. 
 * 
 * However, each time you call createObjectURL(), a new object is created in memory, even if you've already created one for the same object. 
 * So each of these must be released by calling this action called 'JS_RevokeUploadedFileFromMemory' when you no longer need them.
 * 
 * Browsers will release object URLs automatically when the document is unloaded; however, for optimal performance and memory usage, if there are safe times when you can explicitly unload them, you should do so with the JavaScriptAction called 'JS_RevokeUploadedFileFromMemory'.
 * @param {string} fileBlobURL - You have to pass the fileBlobURL that was created using the URL.createObjectURL() in the JS Action called 'JS_UploadAndConvertToFileBlobURL'
 * @returns {Promise.<void>}
 */
async function JS_RevokeUploadedFileFromMemory(fileBlobURL) {
  // BEGIN USER CODE
  /* We use the URL.createObjectURL() static method which creates a string containing a URL representing the
     image uploaded. 
     The image blob is stored in the clients browser and takes up memory whilst the session is active. So here we 
     revoke the image when the user deletes the image. Note that the image is automaticlly revoked when the browser refreshes
     or closes.
  
     You have to pass the fileBlobURL that was created using the URL.createObjectURL() in the JS Action called 'JS_UploadAndConvertToFileBlobURL'
   */
  if (fileBlobURL && typeof fileBlobURL === "string") {
    URL.revokeObjectURL(fileBlobURL);
  } else {
    throw new Error("Image was not removed from browser memory");
  }
  // END USER CODE
}

var JS_RevokeUploadedFileFromMemory$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_RevokeUploadedFileFromMemory: JS_RevokeUploadedFileFromMemory
});

var require$$3$1 = /*@__PURE__*/getAugmentedNamespace(JS_RevokeUploadedFileFromMemory$1);

const ACT_Feedback_UploadImage = {
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
      "action": () => require$$0$1.JS_UploadAndConvertToFileBlobURL,
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
      "message": selectTranslation([
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
      "action": () => require$$1.JS_ToggleFeedbackAnnotateWidget,
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
      "action": () => require$$0$4.SetStorageItemObject,
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
      "action": () => require$$3$1.JS_RevokeUploadedFileFromMemory,
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
      "message": selectTranslation([
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
      "message": selectTranslation([
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

var FeedbackModule_ACT_Feedback_UploadImage = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ACT_Feedback_UploadImage: ACT_Feedback_UploadImage
});

var require$$3 = /*@__PURE__*/getAugmentedNamespace(FeedbackModule_ACT_Feedback_UploadImage);

const ACT_Feedback_ClearImage = {
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
      "action": () => require$$0$4.SetStorageItemObject,
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

var FeedbackModule_ACT_Feedback_ClearImage = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ACT_Feedback_ClearImage: ACT_Feedback_ClearImage
});

var require$$4 = /*@__PURE__*/getAugmentedNamespace(FeedbackModule_ACT_Feedback_ClearImage);

const ACT_Feedback_ClearForm = {
  "name": "FeedbackModule.ACT_Feedback_ClearForm",
  "instructions": [
    {
      "type": "changeObject",
      "label": "2d60f159-a456-4d85-b8a5-6c7c1d50f913",
      "inputVar": "Feedback",
      "member": "Subject",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Description",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "Feedback",
              "path": "_showEmail"
            },
            {
              "type": "literal",
              "value": false
            }
          ]
        },
        "then": {
          "type": "variable",
          "variable": "Feedback",
          "path": "SubmitterEmail"
        },
        "else": {
          "type": "literal",
          "value": null
        }
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "91e3f4d1-ae21-45d0-856e-4db70ae2b0d1",
      "action": () => require$$0$4.SetStorageItemObject,
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
      "label": "b5546cfe-d8eb-432d-bdef-fbe75e178ac9",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

var FeedbackModule_ACT_Feedback_ClearForm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ACT_Feedback_ClearForm: ACT_Feedback_ClearForm
});

var require$$5 = /*@__PURE__*/getAugmentedNamespace(FeedbackModule_ACT_Feedback_ClearForm);

const SUB_Feedback_ResetLocalStorage = {
  "name": "FeedbackModule.SUB_Feedback_ResetLocalStorage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "a9829d04-bf16-4d41-bc15-076491119fe5",
      "inputVar": "Feedback",
      "member": "Subject",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Description",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterUUID",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterDisplayName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ActiveUserRoles",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "PageName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Browser",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "EnvironmentURL",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenshotName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Priority",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenWidth",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenHeight",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "93d6de9b-9cea-4e83-b02f-e3c8b0ba2747",
      "action": () => require$$0$4.SetStorageItemObject,
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
      "label": "19ce63d0-abf2-4659-899a-e2fb9129ea28",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

var FeedbackModule_SUB_Feedback_ResetLocalStorage = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SUB_Feedback_ResetLocalStorage: SUB_Feedback_ResetLocalStorage
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(FeedbackModule_SUB_Feedback_ResetLocalStorage);

const ACT_SubmitFeedback = {
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
      "flow": () => require$$0.SUB_Feedback_ResetLocalStorage,
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

var FeedbackModule_ACT_SubmitFeedback = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ACT_SubmitFeedback: ACT_SubmitFeedback
});

var require$$6 = /*@__PURE__*/getAugmentedNamespace(FeedbackModule_ACT_SubmitFeedback);

const logger = LogManager.get().getLogger(), NanoflowObjectProperty = asProperty((config, store, widgetId) => {
  const allowedRoles = config.source.allowedRoles, session = getSession();
  if (void 0 !== allowedRoles && !session.hasSomeRole(allowedRoles))
    return handleError(new DescribedError("Unable to execute action because you do not have sufficient permissions.")), fromConstant$(dynUnavailable());
  const [currentForm$] = store.useSlot(pageScope, "form");
  return fromObjectProperty$(config, store, widgetId, getNanoflowArguments$(config.argMap, store, widgetId, `data source of ${widgetId}`), async (args) => {
    !function(args2) {
      logger.debug(`Fetching object using nanoflow '${config.source.nanoflow}' for widget ${toFriendlyId(widgetId)}`, "parameter mapping:", args2);
    }(args);
    try {
      const result = await nanoflowEngine.execute(config.source.nanoflow, args, ensure(readUntracked(currentForm$))[0]), mxObject = result instanceof MxObject ? result : void 0;
      return function(mxObject2) {
        logger.debug(mxObject2 ? `Received object '${mxObject2.getGuid()}' for widget ${toFriendlyId(widgetId)}` : `Received no object for widget ${toFriendlyId(widgetId)}`);
      }(mxObject), mxObject ? available(mxObject) : unavailable();
    } catch (e) {
      return handleDataSourceExecutionError(widgetId, e, "nanoflow"), unavailable();
    }
  });
});

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var index$1 = reactExports.useLayoutEffect, updateRef = function(ref, value) {
  "function" != typeof ref ? ref.current = value : ref(value);
}, HIDDEN_TEXTAREA_STYLE = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0", display: "block" }, forceHiddenStyles$1 = function(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
}, hiddenTextarea = null, getHeight = function(node, sizingData) {
  var height = node.scrollHeight;
  return "border-box" === sizingData.sizingStyle.boxSizing ? height + sizingData.borderSize : height - sizingData.paddingSize;
};
var noop = function() {
}, SIZING_STYLE = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak", "wordSpacing", "scrollbarGutter"], isIE = !!document.documentElement.currentStyle, getSizingData$1 = function(node) {
  var style = window.getComputedStyle(node);
  if (null === style)
    return null;
  var obj, sizingStyle = (obj = style, SIZING_STYLE.reduce(function(acc, prop) {
    return acc[prop] = obj[prop], acc;
  }, {})), boxSizing = sizingStyle.boxSizing;
  return "" === boxSizing ? null : (isIE && "border-box" === boxSizing && (sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px"), { sizingStyle, paddingSize: parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop), borderSize: parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth) });
};
function useListener(target, type, listener) {
  var value, ref, latestListener = (value = listener, ref = reactExports.useRef(value), index$1(function() {
    ref.current = value;
  }), ref);
  reactExports.useLayoutEffect(function() {
    var handler = function(ev) {
      return latestListener.current(ev);
    };
    if (target)
      return target.addEventListener(type, handler), function() {
        return target.removeEventListener(type, handler);
      };
  }, []);
}
var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], TextareaAutosize = function(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = void 0 === _ref$onChange ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = void 0 === _ref$onHeightChange ? noop : _ref$onHeightChange, props = function(r, e) {
    if (null == r)
      return {};
    var t = {};
    for (var n in r)
      if ({}.hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n))
          continue;
        t[n] = r[n];
      }
    return t;
  }(_ref, _excluded), isControlled = void 0 !== props.value, libRef = reactExports.useRef(null), ref = function(libRef2, userRef2) {
    var prevUserRef = reactExports.useRef();
    return reactExports.useCallback(function(instance) {
      libRef2.current = instance, prevUserRef.current && updateRef(prevUserRef.current, null), prevUserRef.current = userRef2, userRef2 && updateRef(userRef2, instance);
    }, [userRef2]);
  }(libRef, userRef), heightRef = reactExports.useRef(0), measurementsCacheRef = reactExports.useRef(), resizeTextarea = function() {
    var node = libRef.current, nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (nodeSizingData) {
      measurementsCacheRef.current = nodeSizingData;
      var _calculateNodeHeight = function(sizingData, value, minRows2, maxRows2) {
        void 0 === minRows2 && (minRows2 = 1), void 0 === maxRows2 && (maxRows2 = 1 / 0), hiddenTextarea || ((hiddenTextarea = document.createElement("textarea")).setAttribute("tabindex", "-1"), hiddenTextarea.setAttribute("aria-hidden", "true"), forceHiddenStyles$1(hiddenTextarea)), null === hiddenTextarea.parentNode && document.body.appendChild(hiddenTextarea);
        var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle, boxSizing = sizingStyle.boxSizing;
        Object.keys(sizingStyle).forEach(function(_key) {
          var key = _key;
          hiddenTextarea.style[key] = sizingStyle[key];
        }), forceHiddenStyles$1(hiddenTextarea), hiddenTextarea.value = value;
        var height2 = getHeight(hiddenTextarea, sizingData);
        hiddenTextarea.value = value, height2 = getHeight(hiddenTextarea, sizingData), hiddenTextarea.value = "x";
        var rowHeight2 = hiddenTextarea.scrollHeight - paddingSize, minHeight = rowHeight2 * minRows2;
        "border-box" === boxSizing && (minHeight = minHeight + paddingSize + borderSize), height2 = Math.max(minHeight, height2);
        var maxHeight = rowHeight2 * maxRows2;
        return "border-box" === boxSizing && (maxHeight = maxHeight + paddingSize + borderSize), [height2 = Math.min(maxHeight, height2), rowHeight2];
      }(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
      heightRef.current !== height && (heightRef.current = height, node.style.setProperty("height", height + "px", "important"), onHeightChange(height, { rowHeight }));
    }
  };
  return reactExports.useLayoutEffect(resizeTextarea), function(libRef2, listener) {
    useListener(document.body, "reset", function(ev) {
      libRef2.current.form === ev.target && listener(ev);
    });
  }(libRef, function() {
    if (!isControlled) {
      var currentValue = libRef.current.value;
      requestAnimationFrame(function() {
        var node = libRef.current;
        node && currentValue !== node.value && resizeTextarea();
      });
    }
  }), useListener(window, "resize", resizeTextarea), function(listener) {
    useListener(document.fonts, "loadingdone", listener);
  }(resizeTextarea), reactExports.createElement("textarea", _extends({}, props, { onChange: function(event) {
    isControlled || resizeTextarea(), onChange(event);
  }, ref }));
}, index = reactExports.forwardRef(TextareaAutosize);
class TextArea extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = {}, this.onChangeHandler = this.onChange.bind(this), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this), this.onChangeBehaviourHandler = this.createOnChangeBehaviour();
  }
  componentDidMount() {
    const maxLength = this.props.maxLength;
    void 0 !== maxLength && this.props.inputValue.setValidator((val) => void 0 !== val && val.length > maxLength ? this.props.textTooLongMessage.value : void 0);
  }
  componentDidUpdate(prevProps) {
    this.props.inputValue.displayValue !== prevProps.inputValue.displayValue && this.setState({ editedValue: void 0 }), "available" !== prevProps.inputValue.status && "available" === this.props.inputValue.status && this.props.autoGrow && setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
  }
  createOnChangeBehaviour() {
    return this.props.submitWhileEditing ? debounce(this.submitValue.bind(this), ensure(this.props.submitDelay)) : () => {
    };
  }
  getCurrentValue() {
    return this.state.editedValue ?? this.props.inputValue.displayValue;
  }
  submitValue() {
    const inputValue = this.props.inputValue, currentValue = this.getCurrentValue();
    currentValue !== inputValue.displayValue ? inputValue.setValue(currentValue) : this.setState({ editedValue: void 0 });
  }
  onChange(e) {
    this.setState({ editedValue: e.target.value }, () => {
      !this.props.inputValue.readOnly && e.target instanceof HTMLTextAreaElement && document.activeElement !== e.target && this.submitValue();
    }), this.onChangeBehaviourHandler();
  }
  onFocus() {
    this.dispatchAction("onEnter");
  }
  onBlur() {
    this.submitValue(), this.dispatchAction("onLeave");
  }
  render() {
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [this.props.inputValue.readOnly && "control" !== this.props.readOnlyStyle ? this.renderAsText() : this.renderAsInput(), this.renderCounterMessage(), jsxRuntimeExports.jsx(Alert, { id: `${this.props.id}-error`, validation: this.props.inputValue.validation })] });
  }
  renderCounterMessage() {
    return !this.props.inputValue.readOnly && this.props.maxLength && this.props.counterMessage?.value ? jsxRuntimeExports.jsx("label", { className: "mx-textarea-counter", children: this.props.counterMessage.value.replace("{1}", this.getCurrentValue().length.toString()).replace("{2}", this.props.maxLength.toString()) }) : null;
  }
  renderAsInput() {
    return jsxRuntimeExports.jsx(index, { id: this.props.id, className: classNames("form-control", "mx-textarea-input", { "mx-textarea-noresize": !this.props.autoGrow }), value: this.getCurrentValue(), tabIndex: this.props.tabIndex, maxLength: this.props.maxLength, minRows: this.props.autoGrow ? 2 : this.props.numberOfLines, maxRows: this.props.autoGrow ? void 0 : this.props.numberOfLines, placeholder: this.props.placeholder.value && this.props.placeholder.value.length > 0 ? this.props.placeholder.value : void 0, onChange: this.onChangeHandler, onFocus: this.onFocusHandler, onBlur: this.onBlurHandler, disabled: this.props.inputValue.readOnly, ...getAriaLabelProps(this.props.ariaLabel?.value), ...getValidationAriaProps(this.props.inputValue.validation, this.props.id), "aria-required": this.props.ariaRequired });
  }
  renderAsText() {
    return jsxRuntimeExports.jsx("div", { className: "form-control-static", children: this.getCurrentValue() || "\xA0" });
  }
  dispatchAction(property) {
    const prop = this.props[property];
    "available" === this.props.inputValue.status && prop && prop.execute();
  }
}

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $FormGroup, $TextBox, $TextArea, $Label, $ConditionalVisibilityWrapper, $ActionButton, $Image } = asPluginWidgets({ Div, DataView, Container, Text, FormGroup, TextBox, TextArea, Label, ConditionalVisibilityWrapper, ActionButton, Image });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p10.FeedbackModule.ShareFeedback.layoutGrid1",
      $widgetId: "p10.FeedbackModule.ShareFeedback.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p10.FeedbackModule.ShareFeedback.layoutGrid1$row0",
            $widgetId: "p10.FeedbackModule.ShareFeedback.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p10.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
                  $widgetId: "p10.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p10.FeedbackModule.ShareFeedback.dataView5",
                        $widgetId: "p10.FeedbackModule.ShareFeedback.dataView5",
                        class: "mx-name-dataView5 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: NanoflowObjectProperty({
                          "dataSourceId": "p10.20",
                          "editable": true,
                          "source": { "nanoflow": () => require$$0$3.DS_Feedback_Populate, "allowedRoles": [] },
                          "argMap": {}
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p10.FeedbackModule.ShareFeedback.container5",
                              $widgetId: "p10.FeedbackModule.ShareFeedback.container5",
                              class: "mx-name-container5 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.text1",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.text1",
                                    class: "mx-name-text1",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Help us make your experience better and share your feedback with us!" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "p"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
                                    class: "mx-name-feedback_subject mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p10.FeedbackModule.ShareFeedback.feedback_subject",
                                          $widgetId: "p10.FeedbackModule.ShareFeedback.feedback_subject",
                                          inputValue: AttributeProperty({
                                            "scope": "p10.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Subject",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$1$1.OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Summarize your feedback in a few words" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "control",
                                          maxLength: 200,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p10.FeedbackModule.ShareFeedback.feedback_subject"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Subject" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p10.FeedbackModule.ShareFeedback.feedback_subject"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p10.FeedbackModule.ShareFeedback.feedback_subject"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.textArea2$formGroup",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.textArea2$formGroup",
                                    class: "mx-name-textArea2 mx-textarea",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextArea,
                                        {
                                          key: "p10.FeedbackModule.ShareFeedback.textArea2",
                                          $widgetId: "p10.FeedbackModule.ShareFeedback.textArea2",
                                          inputValue: AttributeProperty({
                                            "scope": "p10.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Description",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$1$1.OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null
                                          }),
                                          counterMessage: void 0,
                                          maxLength: void 0,
                                          numberOfLines: 5,
                                          autoGrow: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Please add a detailed description, including steps you took before finding issue, or how this idea would help improve the experience for you and other users" }, "args": {} }
                                            })
                                          ]),
                                          readOnlyStyle: "control",
                                          textTooLongMessage: void 0,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          ariaLabel: void 0,
                                          ariaRequired: void 0,
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p10.FeedbackModule.ShareFeedback.textArea2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p10.FeedbackModule.ShareFeedback.textArea2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p10.FeedbackModule.ShareFeedback.textArea2"
                                    })
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p10.FeedbackModule.ShareFeedback.container4",
                              $widgetId: "p10.FeedbackModule.ShareFeedback.container4",
                              class: "mx-name-container4 col-left spacing-outer-bottom",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Label,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.label1",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.label1",
                                    class: "mx-name-label1 text-semibold spacing-outer-bottom-none",
                                    style: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p10.FeedbackModule.ShareFeedback.label1"
                                    }),
                                    caption: TextProperty({
                                      "value": selectTranslation([
                                        "Attachment"
                                      ])
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.text2",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.text2",
                                    class: "mx-name-text2 text-light",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Upload a jpg, jpeg, png or gif image file of max. 5MB." }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p10.FeedbackModule.ShareFeedback.container2",
                              $widgetId: "p10.FeedbackModule.ShareFeedback.container2",
                              class: "mx-name-container2 flexcontainer justify-content-start spacing-outer-bottom-medium",
                              style: {
                                "gap": "8px"
                              },
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.actionButton4$visibility",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.actionButton4$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p10.FeedbackModule.ShareFeedback.actionButton4",
                                          $widgetId: "p10.FeedbackModule.ShareFeedback.actionButton4",
                                          buttonId: "p10.FeedbackModule.ShareFeedback.actionButton4",
                                          class: "mx-name-actionButton4",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Take Screenshot" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-camera" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$2.ACT_Feedback_TriggerScreenshotMode, "allowedRoles": [] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.actionButton5$visibility",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.actionButton5$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p10.FeedbackModule.ShareFeedback.actionButton5",
                                          $widgetId: "p10.FeedbackModule.ShareFeedback.actionButton5",
                                          buttonId: "p10.FeedbackModule.ShareFeedback.actionButton5",
                                          class: "mx-name-actionButton5",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Upload" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-open" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$3.ACT_Feedback_UploadImage, "allowedRoles": [] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p10.FeedbackModule.ShareFeedback.container6$visibility",
                              $widgetId: "p10.FeedbackModule.ShareFeedback.container6$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ImageB64" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.container6",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.container6",
                                    class: "mx-name-container6 mxfeedback-screenshot-preview spacing-outer-bottom-medium",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p10.FeedbackModule.ShareFeedback.container7",
                                          $widgetId: "p10.FeedbackModule.ShareFeedback.container7",
                                          class: "mx-name-container7",
                                          style: {
                                            "position": "relative"
                                          },
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p10.FeedbackModule.ShareFeedback.actionButton1$visibility",
                                                $widgetId: "p10.FeedbackModule.ShareFeedback.actionButton1$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p10.FeedbackModule.ShareFeedback.actionButton1",
                                                      $widgetId: "p10.FeedbackModule.ShareFeedback.actionButton1",
                                                      buttonId: "p10.FeedbackModule.ShareFeedback.actionButton1",
                                                      class: "mx-name-actionButton1 mxfeedback-screenshot-preview__delete-button",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      renderType: "button",
                                                      role: void 0,
                                                      buttonClass: "btn-default",
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      tooltip: TextProperty({
                                                        "value": selectTranslation([
                                                          ""
                                                        ])
                                                      }),
                                                      icon: WebIconProperty({
                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-remove" }
                                                      }),
                                                      action: ActionProperty({
                                                        "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$4.ACT_Feedback_ClearImage, "allowedRoles": [] }, "disabledDuringExecution": true },
                                                        "abortOnServerValidation": true
                                                      })
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p10.FeedbackModule.ShareFeedback.image1",
                                                $widgetId: "p10.FeedbackModule.ShareFeedback.image1",
                                                datasource: "imageUrl",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ImageB64" }, "args": { "currentObject": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: void 0,
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "A Preview of the Feedback image that was from the screenshot or upload" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "auto",
                                                width: 100,
                                                heightUnit: "auto",
                                                height: 100,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image1 mxfeedback-screenshot-preview__image img-center img-contain",
                                                style: {
                                                  "width": "auto"
                                                },
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p10.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              $widgetId: "p10.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "_showEmail" }, "args": { "currentObject": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.textBox1$formGroup",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.textBox1$formGroup",
                                    class: "mx-name-textBox1 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p10.FeedbackModule.ShareFeedback.textBox1",
                                          $widgetId: "p10.FeedbackModule.ShareFeedback.textBox1",
                                          inputValue: AttributeProperty({
                                            "scope": "p10.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "SubmitterEmail",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$1$1.OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "name@company.com" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "control",
                                          maxLength: 200,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p10.FeedbackModule.ShareFeedback.textBox1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Email" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p10.FeedbackModule.ShareFeedback.textBox1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p10.FeedbackModule.ShareFeedback.textBox1"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p10.FeedbackModule.ShareFeedback.container3",
                              $widgetId: "p10.FeedbackModule.ShareFeedback.container3",
                              class: "mx-name-container3 flex-row flexcontainer justify-content-end",
                              style: {
                                "gap": "8px"
                              },
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.feedback_cancel",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.feedback_cancel",
                                    buttonId: "p10.FeedbackModule.ShareFeedback.feedback_cancel",
                                    class: "mx-name-feedback_cancel",
                                    style: {
                                      "border": "0"
                                    },
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.feedback_clear$visibility",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.feedback_clear$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p10.FeedbackModule.ShareFeedback.feedback_clear",
                                          $widgetId: "p10.FeedbackModule.ShareFeedback.feedback_clear",
                                          buttonId: "p10.FeedbackModule.ShareFeedback.feedback_clear",
                                          class: "mx-name-feedback_clear btn-bordered",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$5.ACT_Feedback_ClearForm, "allowedRoles": [] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p10.FeedbackModule.ShareFeedback.feedback_submit$visibility",
                                    $widgetId: "p10.FeedbackModule.ShareFeedback.feedback_submit$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p10.FeedbackModule.ShareFeedback.feedback_submit",
                                          $widgetId: "p10.FeedbackModule.ShareFeedback.feedback_submit",
                                          buttonId: "p10.FeedbackModule.ShareFeedback.feedback_submit",
                                          class: "mx-name-feedback_submit",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-primary",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Submit" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p10.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$6.ACT_SubmitFeedback, "allowedRoles": [] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: true,
                        footer: void 0
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Share your feedback"
]);
const classes = "";
const cancelChangesOperationId = "gK8eCwDbzFeg5pPrY8U0EA";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
