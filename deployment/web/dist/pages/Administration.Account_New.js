import { reactExports, asPluginWidgets, selectTranslation } from '../index-UACZNrBd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DHtf5l1V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-DV0c4BuZ.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dsqydtfd.js';
import { AssociationProperty } from '../AssociationProperty-CFikPVbv.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CyHwmz97.js';
import { DatabaseObjectListProperty } from '../CTcC6PjV-B-x7hXp6.js';
import { ListAttributeProperty } from '../ListAttributeProperty-B_FVRtoG.js';
import { ListExpressionProperty } from '../ListExpressionProperty-2EKdiBPA.js';
import { CheckBox } from '../CheckBox-B4JBg10S.js';
import { ComboboxWidgetModule } from '../Combobox-C14aZ6uJ.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CvgwjdAQ.js';
import { DataView } from '../DataView-DBkSrPOT.js';
import { Div } from '../Div-Dhe9jsr5.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DUY6vSOW.js';
import { AttributeProperty } from '../BQKVXLaf-mvtyIvU3.js';
import '../uEIG9e6s-DbIaJy7J.js';
import '../bdxqAC6d-D5pvApxC.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $Combobox, $CheckBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Combobox, CheckBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p6.Administration.Account_New.layoutGrid1",
      $widgetId: "p6.Administration.Account_New.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p6.Administration.Account_New.layoutGrid1$row0",
            $widgetId: "p6.Administration.Account_New.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p6.Administration.Account_New.layoutGrid1$row0$column0",
                  $widgetId: "p6.Administration.Account_New.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p6.Administration.Account_New.dataView2",
                        $widgetId: "p6.Administration.Account_New.dataView2",
                        class: "mx-name-dataView2 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p6.15",
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
                            $DataView,
                            {
                              key: "p6.Administration.Account_New.dataView1",
                              $widgetId: "p6.Administration.Account_New.dataView1",
                              class: "mx-name-dataView1 form-horizontal",
                              style: void 0,
                              tabIndex: void 0,
                              object: AssociationObjectProperty({
                                "dataSourceId": "p6.18",
                                "scope": "$AccountPasswordData",
                                "editable": true,
                                "path": "Administration.AccountPasswordData_Account/Administration.Account",
                                "operationId": "fmssQNk36V2Q+KhoXz2XMg"
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
                                    key: "p6.Administration.Account_New.textBox6$formGroup",
                                    $widgetId: "p6.Administration.Account_New.textBox6$formGroup",
                                    class: "mx-name-textBox6 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p6.Administration.Account_New.textBox6",
                                          $widgetId: "p6.Administration.Account_New.textBox6",
                                          inputValue: AttributeProperty({
                                            "scope": "p6.Administration.Account_New.dataView1",
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
                                            "widgetId": "p6.Administration.Account_New.textBox6"
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
                                      "widgetId": "p6.Administration.Account_New.textBox6"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p6.Administration.Account_New.textBox6"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p6.Administration.Account_New.textBox9$formGroup",
                                    $widgetId: "p6.Administration.Account_New.textBox9$formGroup",
                                    class: "mx-name-textBox9 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p6.Administration.Account_New.textBox9",
                                          $widgetId: "p6.Administration.Account_New.textBox9",
                                          inputValue: AttributeProperty({
                                            "scope": "p6.Administration.Account_New.dataView1",
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
                                            "widgetId": "p6.Administration.Account_New.textBox9"
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
                                      "widgetId": "p6.Administration.Account_New.textBox9"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p6.Administration.Account_New.textBox9"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p6.Administration.Account_New.comboBox1$formGroup",
                                    $widgetId: "p6.Administration.Account_New.comboBox1$formGroup",
                                    class: "mx-name-comboBox1",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p6.Administration.Account_New.comboBox1",
                                          $widgetId: "p6.Administration.Account_New.comboBox1",
                                          optionsSourceType: "association",
                                          attributeAssociation: AssociationProperty({
                                            "type": "ReferenceSet",
                                            "entity": "Administration.Account",
                                            "path": "",
                                            "attribute": "System.UserRoles",
                                            "endpointEntity": "System.UserRole",
                                            "selectableObjectsId": "p6.0",
                                            "scope": "p6.Administration.Account_New.dataView1",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p6.0",
                                            "entity": "System.UserRole",
                                            "scope": "p6.Administration.Account_New.dataView1",
                                            "operationId": "73XYQZWg71ue8Q/65wW6CA",
                                            "sort": [
                                              [
                                                "Name",
                                                "asc"
                                              ]
                                            ],
                                            "constraints": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole1", "right": { "type": "attribute", "attribute": "System.grantableRoles", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "rightEntity": "System.User", "rightEntityAlias": "System.User", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.User", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "id", "context": "System.User", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] } } }
                                          }),
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "System.UserRole",
                                            "attribute": "Name",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p6.0",
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
                                            "widgetId": "p6.Administration.Account_New.comboBox1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "User role(s)" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p6.Administration.Account_New.comboBox1"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p6.Administration.Account_New.comboBox1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p6.Administration.Account_New.checkBox1$formGroup",
                                    $widgetId: "p6.Administration.Account_New.checkBox1$formGroup",
                                    class: "mx-name-checkBox1 mx-checkbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $CheckBox,
                                        {
                                          key: "p6.Administration.Account_New.checkBox1",
                                          $widgetId: "p6.Administration.Account_New.checkBox1",
                                          value: AttributeProperty({
                                            "scope": "p6.Administration.Account_New.dataView1",
                                            "path": "",
                                            "entity": "Administration.Account",
                                            "attribute": "Blocked",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null
                                          }),
                                          readOnlyStyle: "text",
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          caption: void 0,
                                          ariaLabel: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p6.Administration.Account_New.checkBox1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Blocked" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p6.Administration.Account_New.checkBox1"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p6.Administration.Account_New.checkBox1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p6.Administration.Account_New.checkBox2$formGroup",
                                    $widgetId: "p6.Administration.Account_New.checkBox2$formGroup",
                                    class: "mx-name-checkBox2 mx-checkbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $CheckBox,
                                        {
                                          key: "p6.Administration.Account_New.checkBox2",
                                          $widgetId: "p6.Administration.Account_New.checkBox2",
                                          value: AttributeProperty({
                                            "scope": "p6.Administration.Account_New.dataView1",
                                            "path": "",
                                            "entity": "Administration.Account",
                                            "attribute": "Active",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null
                                          }),
                                          readOnlyStyle: "text",
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          caption: void 0,
                                          ariaLabel: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p6.Administration.Account_New.checkBox2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p6.Administration.Account_New.checkBox2"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p6.Administration.Account_New.checkBox2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p6.Administration.Account_New.comboBox3$formGroup",
                                    $widgetId: "p6.Administration.Account_New.comboBox3$formGroup",
                                    class: "mx-name-comboBox3",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p6.Administration.Account_New.comboBox3",
                                          $widgetId: "p6.Administration.Account_New.comboBox3",
                                          optionsSourceType: "association",
                                          attributeAssociation: AssociationProperty({
                                            "type": "Reference",
                                            "entity": "Administration.Account",
                                            "path": "",
                                            "attribute": "System.User_Language",
                                            "endpointEntity": "System.Language",
                                            "selectableObjectsId": "p6.1",
                                            "scope": "p6.Administration.Account_New.dataView1",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p6.1",
                                            "entity": "System.Language",
                                            "scope": "p6.Administration.Account_New.dataView1",
                                            "operationId": "E3v1qFWHUVGs0CutHuh8zw",
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
                                            "dataSourceId": "p6.1",
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
                                            "widgetId": "p6.Administration.Account_New.comboBox3"
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
                                      "widgetId": "p6.Administration.Account_New.comboBox3"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p6.Administration.Account_New.comboBox3"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p6.Administration.Account_New.comboBox2$formGroup",
                                    $widgetId: "p6.Administration.Account_New.comboBox2$formGroup",
                                    class: "mx-name-comboBox2",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p6.Administration.Account_New.comboBox2",
                                          $widgetId: "p6.Administration.Account_New.comboBox2",
                                          optionsSourceType: "association",
                                          attributeAssociation: AssociationProperty({
                                            "type": "Reference",
                                            "entity": "Administration.Account",
                                            "path": "",
                                            "attribute": "System.User_TimeZone",
                                            "endpointEntity": "System.TimeZone",
                                            "selectableObjectsId": "p6.2",
                                            "scope": "p6.Administration.Account_New.dataView1",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p6.2",
                                            "entity": "System.TimeZone",
                                            "scope": "p6.Administration.Account_New.dataView1",
                                            "operationId": "UDTtuK8Px1aEnk1R1QDosw",
                                            "sort": [
                                              [
                                                "RawOffset",
                                                "asc"
                                              ],
                                              [
                                                "Description",
                                                "asc"
                                              ]
                                            ]
                                          }),
                                          optionsSourceAssociationCaptionType: "expression",
                                          optionsSourceAssociationCaptionExpression: ListExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "p6.Administration.Account_New.comboBox2", "source": "object" } } },
                                            "dataSourceId": "p6.2"
                                          }),
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
                                            "widgetId": "p6.Administration.Account_New.comboBox2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Time zone" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p6.Administration.Account_New.comboBox2"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p6.Administration.Account_New.comboBox2"
                                    })
                                  }
                                )
                              ],
                              hideFooter: true,
                              footer: void 0
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p6.Administration.Account_New.textBox5$formGroup",
                              $widgetId: "p6.Administration.Account_New.textBox5$formGroup",
                              class: "mx-name-textBox5 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p6.Administration.Account_New.textBox5",
                                    $widgetId: "p6.Administration.Account_New.textBox5",
                                    inputValue: AttributeProperty({
                                      "scope": "p6.Administration.Account_New.dataView2",
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
                                      "widgetId": "p6.Administration.Account_New.textBox5"
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
                                "widgetId": "p6.Administration.Account_New.textBox5"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p6.Administration.Account_New.textBox5"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p6.Administration.Account_New.textBox7$formGroup",
                              $widgetId: "p6.Administration.Account_New.textBox7$formGroup",
                              class: "mx-name-textBox7 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p6.Administration.Account_New.textBox7",
                                    $widgetId: "p6.Administration.Account_New.textBox7",
                                    inputValue: AttributeProperty({
                                      "scope": "p6.Administration.Account_New.dataView2",
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
                                      "widgetId": "p6.Administration.Account_New.textBox7"
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
                                "widgetId": "p6.Administration.Account_New.textBox7"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p6.Administration.Account_New.textBox7"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p6.Administration.Account_New.microflowButton1$visibility",
                              $widgetId: "p6.Administration.Account_New.microflowButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p6.Administration.Account_New.microflowButton1",
                                    $widgetId: "p6.Administration.Account_New.microflowButton1",
                                    buttonId: "p6.Administration.Account_New.microflowButton1",
                                    class: "mx-name-microflowButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "wRZR8+/UJlm8sDhMbnCTDw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                              key: "p6.Administration.Account_New.cancelButton1",
                              $widgetId: "p6.Administration.Account_New.cancelButton1",
                              buttonId: "p6.Administration.Account_New.cancelButton1",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "QCwY4SBBv1OeSTLr3ijEHw", "closePage": true }, "disabledDuringExecution": true },
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
  "New Account"
]);
const classes = "";
const cancelChangesOperationId = "DpzouoORI12suGJmAW97uA";
const closeButton = "p6.Administration.Account_New.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
