import { reactExports, asPluginWidgets, PlaceholderProperty, selectTranslation } from '../index-UACZNrBd.js';
import { ScrollContainer, Placeholder, PageFragment, ExpressionProperty } from '../ScrollContainer-DHtf5l1V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-DV0c4BuZ.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dsqydtfd.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CyHwmz97.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CvgwjdAQ.js';
import { DataView } from '../DataView-DBkSrPOT.js';
import { Div } from '../Div-Dhe9jsr5.js';
import { AttributeProperty } from '../BQKVXLaf-mvtyIvU3.js';
import '../uEIG9e6s-DbIaJy7J.js';
import '../bdxqAC6d-D5pvApxC.js';

const React$1 = { createElement: reactExports.createElement };
const { $ScrollContainer, $Placeholder } = asPluginWidgets({ ScrollContainer, Placeholder });
const region$Main$1 = [
  /* @__PURE__ */ React$1.createElement(
    $ScrollContainer,
    {
      key: "l35.Expenses.Atlas_Login.scrollContainer1",
      $widgetId: "l35.Expenses.Atlas_Login.scrollContainer1",
      class: "mx-name-scrollContainer1",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": false
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $Placeholder,
            {
              key: "l35.Expenses.Atlas_Login.Main",
              $widgetId: "l35.Expenses.Atlas_Login.Main",
              content: PlaceholderProperty({
                "id": "Expenses.Atlas_Login.Main"
              })
            }
          )
        ],
        "class": ""
      }
    }
  )
];
const content$1 = {
  "Main": region$Main$1
};

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p30.Expenses.Registration_NewEdit.layoutGrid1",
      $widgetId: "p30.Expenses.Registration_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p30.Expenses.Registration_NewEdit.layoutGrid1$row0",
            $widgetId: "p30.Expenses.Registration_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p30.Expenses.Registration_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p30.Expenses.Registration_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p30.Expenses.Registration_NewEdit.dataView6",
                        $widgetId: "p30.Expenses.Registration_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p30.12",
                          "scope": "$Registration",
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
                              key: "p30.Expenses.Registration_NewEdit.textBox1$formGroup",
                              $widgetId: "p30.Expenses.Registration_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p30.Expenses.Registration_NewEdit.textBox1",
                                    $widgetId: "p30.Expenses.Registration_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "Expenses.Registration",
                                      "attribute": "FullName",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p30.Expenses.Registration_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p30.Expenses.Registration_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p30.Expenses.Registration_NewEdit.textBox2$formGroup",
                              $widgetId: "p30.Expenses.Registration_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p30.Expenses.Registration_NewEdit.textBox2",
                                    $widgetId: "p30.Expenses.Registration_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "Expenses.Registration",
                                      "attribute": "UserName",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p30.Expenses.Registration_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p30.Expenses.Registration_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p30.Expenses.Registration_NewEdit.textBox3$formGroup",
                              $widgetId: "p30.Expenses.Registration_NewEdit.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p30.Expenses.Registration_NewEdit.textBox3",
                                    $widgetId: "p30.Expenses.Registration_NewEdit.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "Expenses.Registration",
                                      "attribute": "EmailAdress",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p30.Expenses.Registration_NewEdit.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Email adress" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p30.Expenses.Registration_NewEdit.textBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p30.Expenses.Registration_NewEdit.textBox4$formGroup",
                              $widgetId: "p30.Expenses.Registration_NewEdit.textBox4$formGroup",
                              class: "mx-name-textBox4 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p30.Expenses.Registration_NewEdit.textBox4",
                                    $widgetId: "p30.Expenses.Registration_NewEdit.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "Expenses.Registration",
                                      "attribute": "Password",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: true,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p30.Expenses.Registration_NewEdit.textBox4"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Password" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p30.Expenses.Registration_NewEdit.textBox4"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p30.Expenses.Registration_NewEdit.textBox5$formGroup",
                              $widgetId: "p30.Expenses.Registration_NewEdit.textBox5$formGroup",
                              class: "mx-name-textBox5 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p30.Expenses.Registration_NewEdit.textBox5",
                                    $widgetId: "p30.Expenses.Registration_NewEdit.textBox5",
                                    inputValue: AttributeProperty({
                                      "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "Expenses.Registration",
                                      "attribute": "ConfirmPassword",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: true,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p30.Expenses.Registration_NewEdit.textBox5"
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
                                "widgetId": "p30.Expenses.Registration_NewEdit.textBox5"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox5"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p30.Expenses.Registration_NewEdit.actionButton1$visibility",
                              $widgetId: "p30.Expenses.Registration_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Anonymous" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p30.Expenses.Registration_NewEdit.actionButton1",
                                    $widgetId: "p30.Expenses.Registration_NewEdit.actionButton1",
                                    buttonId: "p30.Expenses.Registration_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Create my account" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Registration": { "widget": "$Registration", "source": "object" } }, "config": { "operationId": "XukXdtueDlCHYHmEjVxbpg", "validate": "view", "allowedRoles": ["Anonymous"] }, "disabledDuringExecution": true },
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
                              key: "p30.Expenses.Registration_NewEdit.actionButton2",
                              $widgetId: "p30.Expenses.Registration_NewEdit.actionButton2",
                              buttonId: "p30.Expenses.Registration_NewEdit.actionButton2",
                              class: "mx-name-actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "DpK0LRphhFi7Snjv5hbLKw", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
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
      ]
    }
  )
]);
const title = selectTranslation([
  "Edit Registration"
]);
const classes = "";
const style = {};
const content = {
  ...content$1,
  "Expenses.Atlas_Login.Main": region$Main
};

export { classes, content, style, title };
