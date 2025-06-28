import { reactExports, asPluginWidgets, selectTranslation } from '../index-UACZNrBd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DHtf5l1V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-DV0c4BuZ.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dsqydtfd.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CyHwmz97.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CvgwjdAQ.js';
import { DataView } from '../DataView-DBkSrPOT.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DUY6vSOW.js';
import { AttributeProperty } from '../BQKVXLaf-mvtyIvU3.js';
import '../uEIG9e6s-DbIaJy7J.js';
import '../bdxqAC6d-D5pvApxC.js';

const React = { createElement: reactExports.createElement };
const { $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p2.Administration.ChangePasswordForm.dataView2",
      $widgetId: "p2.Administration.ChangePasswordForm.dataView2",
      class: "mx-name-dataView2 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p2.6",
        "scope": "$AccountPasswordData",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": selectTranslation([
          ""
        ])
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p2.Administration.ChangePasswordForm.textBox3$formGroup",
            $widgetId: "p2.Administration.ChangePasswordForm.textBox3$formGroup",
            class: "mx-name-textBox3 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p2.Administration.ChangePasswordForm.textBox3",
                  $widgetId: "p2.Administration.ChangePasswordForm.textBox3",
                  inputValue: AttributeProperty({
                    "scope": "p2.Administration.ChangePasswordForm.dataView2",
                    "path": "",
                    "entity": "Administration.AccountPasswordData",
                    "attribute": "NewPassword",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                    "formatting": {}
                  }),
                  isPassword: true,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: void 0,
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: true,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p2.Administration.ChangePasswordForm.textBox3"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p2.Administration.ChangePasswordForm.textBox3"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p2.Administration.ChangePasswordForm.textBox3"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p2.Administration.ChangePasswordForm.textBox1$formGroup",
            $widgetId: "p2.Administration.ChangePasswordForm.textBox1$formGroup",
            class: "mx-name-textBox1 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p2.Administration.ChangePasswordForm.textBox1",
                  $widgetId: "p2.Administration.ChangePasswordForm.textBox1",
                  inputValue: AttributeProperty({
                    "scope": "p2.Administration.ChangePasswordForm.dataView2",
                    "path": "",
                    "entity": "Administration.AccountPasswordData",
                    "attribute": "ConfirmPassword",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                    "formatting": {}
                  }),
                  isPassword: true,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: void 0,
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: true,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p2.Administration.ChangePasswordForm.textBox1"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p2.Administration.ChangePasswordForm.textBox1"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p2.Administration.ChangePasswordForm.textBox1"
            })
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p2.Administration.ChangePasswordForm.microflowButton1$visibility",
            $widgetId: "p2.Administration.ChangePasswordForm.microflowButton1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p2.Administration.ChangePasswordForm.microflowButton1",
                  $widgetId: "p2.Administration.ChangePasswordForm.microflowButton1",
                  buttonId: "p2.Administration.ChangePasswordForm.microflowButton1",
                  class: "mx-name-microflowButton1",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "button",
                  role: void 0,
                  buttonClass: "btn-success",
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Change" }, "args": {} }
                    })
                  ]),
                  tooltip: TextProperty({
                    "value": selectTranslation([
                      ""
                    ])
                  }),
                  icon: void 0,
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "K1AFepBadF2rQErVlJd36Q", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                    "abortOnServerValidation": true
                  })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p2.Administration.ChangePasswordForm.cancelButton1",
            $widgetId: "p2.Administration.ChangePasswordForm.cancelButton1",
            buttonId: "p2.Administration.ChangePasswordForm.cancelButton1",
            class: "mx-name-cancelButton1",
            style: void 0,
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "TYctBlq02VGHRG3A/qA29Q", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Change Password"
]);
const classes = "";
const cancelChangesOperationId = "aUzBmOpVulaZ0Mqe9k547g";
const closeButton = "p2.Administration.ChangePasswordForm.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
