import { reactExports, asPluginWidgets, selectTranslation } from '../index-UACZNrBd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DHtf5l1V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-DV0c4BuZ.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dsqydtfd.js';
import { AssociationProperty } from '../AssociationProperty-CFikPVbv.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CyHwmz97.js';
import { DatabaseObjectListProperty } from '../CTcC6PjV-B-x7hXp6.js';
import { ListAttributeProperty } from '../ListAttributeProperty-B_FVRtoG.js';
import { ComboboxWidgetModule } from '../Combobox-C14aZ6uJ.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CvgwjdAQ.js';
import { DataView } from '../DataView-DBkSrPOT.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DUY6vSOW.js';
import { AttributeProperty } from '../BQKVXLaf-mvtyIvU3.js';
import '../uEIG9e6s-DbIaJy7J.js';
import '../bdxqAC6d-D5pvApxC.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $DataView, $FormGroup, $TextBox, $Combobox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, Combobox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p9.Administration.MyAccount.dataView1",
      $widgetId: "p9.Administration.MyAccount.dataView1",
      class: "mx-name-dataView1 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p9.9",
        "scope": "$Account",
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
            key: "p9.Administration.MyAccount.textBox2$formGroup",
            $widgetId: "p9.Administration.MyAccount.textBox2$formGroup",
            class: "mx-name-textBox2 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p9.Administration.MyAccount.textBox2",
                  $widgetId: "p9.Administration.MyAccount.textBox2",
                  inputValue: AttributeProperty({
                    "scope": "p9.Administration.MyAccount.dataView1",
                    "path": "",
                    "entity": "Administration.Account",
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
                  readOnlyStyle: "text",
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
                    "widgetId": "p9.Administration.MyAccount.textBox2"
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
              "widgetId": "p9.Administration.MyAccount.textBox2"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p9.Administration.MyAccount.textBox2"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p9.Administration.MyAccount.textBox5$formGroup",
            $widgetId: "p9.Administration.MyAccount.textBox5$formGroup",
            class: "mx-name-textBox5 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p9.Administration.MyAccount.textBox5",
                  $widgetId: "p9.Administration.MyAccount.textBox5",
                  inputValue: AttributeProperty({
                    "scope": "p9.Administration.MyAccount.dataView1",
                    "path": "",
                    "entity": "Administration.Account",
                    "attribute": "Name",
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
                  readOnlyStyle: "text",
                  maxLength: 100,
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
                    "widgetId": "p9.Administration.MyAccount.textBox5"
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
              "widgetId": "p9.Administration.MyAccount.textBox5"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p9.Administration.MyAccount.textBox5"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p9.Administration.MyAccount.comboBox3$formGroup",
            $widgetId: "p9.Administration.MyAccount.comboBox3$formGroup",
            class: "mx-name-comboBox3",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $Combobox,
                {
                  key: "p9.Administration.MyAccount.comboBox3",
                  $widgetId: "p9.Administration.MyAccount.comboBox3",
                  optionsSourceType: "association",
                  attributeAssociation: AssociationProperty({
                    "type": "Reference",
                    "entity": "Administration.Account",
                    "path": "",
                    "attribute": "System.User_Language",
                    "endpointEntity": "System.Language",
                    "selectableObjectsId": "p9.0",
                    "scope": "p9.Administration.MyAccount.dataView1",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                  }),
                  optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                    "dataSourceId": "p9.0",
                    "entity": "System.Language",
                    "scope": "p9.Administration.MyAccount.dataView1",
                    "operationId": "Q60qfILmMVmFnOZk8ZAGbA",
                    "sort": []
                  }),
                  optionsSourceAssociationCaptionType: "attribute",
                  optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                    "path": "",
                    "entity": "System.Language",
                    "attribute": "Description",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p9.0",
                    "isList": false
                  }),
                  optionsSourceAssociationCaptionExpression: void 0,
                  emptyOptionText: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  filterType: "contains",
                  noOptionsText: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  clearable: true,
                  optionsSourceAssociationCustomContentType: "no",
                  optionsSourceAssociationCustomContent: void 0,
                  showFooter: false,
                  menuFooterContent: void 0,
                  selectionMethod: "checkbox",
                  selectedItemsStyle: "text",
                  selectAllButton: false,
                  selectAllButtonCaption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                    })
                  ]),
                  onChangeEvent: void 0,
                  onEnterEvent: void 0,
                  onLeaveEvent: void 0,
                  ariaRequired: ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                  }),
                  clearButtonAriaLabel: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                    })
                  ]),
                  removeValueAriaLabel: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                    })
                  ]),
                  a11ySelectedValue: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                    })
                  ]),
                  a11yOptionsAvailable: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                    })
                  ]),
                  a11yInstructions: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                    })
                  ]),
                  source: "context",
                  optionsSourceDatabaseDataSource: void 0,
                  optionsSourceDatabaseCaptionType: "attribute",
                  optionsSourceStaticDataSource: [],
                  optionsSourceDatabaseCustomContentType: "no",
                  staticDataSourceCustomContentType: "no",
                  readOnlyStyle: "text",
                  lazyLoading: true,
                  loadingType: "spinner",
                  selectedItemsSorting: "none",
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p9.Administration.MyAccount.comboBox3"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p9.Administration.MyAccount.comboBox3"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p9.Administration.MyAccount.comboBox3"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p9.Administration.MyAccount.microflowTrigger1$visibility",
            $widgetId: "p9.Administration.MyAccount.microflowTrigger1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Requestor" }, { "type": "literal", "value": "Approver" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p9.Administration.MyAccount.microflowTrigger1",
                  $widgetId: "p9.Administration.MyAccount.microflowTrigger1",
                  buttonId: "p9.Administration.MyAccount.microflowTrigger1",
                  class: "mx-name-microflowTrigger1",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "button",
                  role: void 0,
                  buttonClass: "btn-default",
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Change password" }, "args": {} }
                    })
                  ]),
                  tooltip: TextProperty({
                    "value": selectTranslation([
                      ""
                    ])
                  }),
                  icon: void 0,
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "Account": { "widget": "$Account", "source": "object" } }, "config": { "operationId": "D9SM4CyTHlmMUxL5oqbEjA", "allowedRoles": ["Administrator", "Requestor", "Approver"] }, "disabledDuringExecution": false },
                    "abortOnServerValidation": true
                  })
                }
              )
            ]
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p9.Administration.MyAccount.saveButton1",
            $widgetId: "p9.Administration.MyAccount.saveButton1",
            buttonId: "p9.Administration.MyAccount.saveButton1",
            class: "mx-name-saveButton1",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-success",
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
              })
            ]),
            tooltip: TextProperty({
              "value": selectTranslation([
                ""
              ])
            }),
            icon: void 0,
            action: ActionProperty({
              "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p9.Administration.MyAccount.dataView1", "source": "object" } }, "config": { "operationId": "ci25rjxvrVaFC2xiGOoa3A", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p9.Administration.MyAccount.cancelButton1",
            $widgetId: "p9.Administration.MyAccount.cancelButton1",
            buttonId: "p9.Administration.MyAccount.cancelButton1",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "XVQdH/w5/FCIGijAVbidFQ", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "My Account"
]);
const classes = "";
const cancelChangesOperationId = "Sbd3Sig/E1i7mQOIHFHQfg";
const closeButton = "p9.Administration.MyAccount.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
