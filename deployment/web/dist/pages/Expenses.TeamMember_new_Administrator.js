import { reactExports, asPluginWidgets, selectTranslation } from '../index-UACZNrBd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DHtf5l1V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-DV0c4BuZ.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dsqydtfd.js';
import { AssociationProperty } from '../AssociationProperty-CFikPVbv.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CyHwmz97.js';
import { DatabaseObjectListProperty } from '../CTcC6PjV-B-x7hXp6.js';
import { SwitchWidgetModule, RadioButtonGroup, FileManager, FileUploadProperty } from '../Switch-BqeO-gYm.js';
import { ListAttributeProperty } from '../ListAttributeProperty-B_FVRtoG.js';
import { WebDynamicImageProperty } from '../WebDynamicImageProperty-BpIKW97h.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-Co3mfJiM.js';
import { ComboboxWidgetModule } from '../Combobox-C14aZ6uJ.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CvgwjdAQ.js';
import { ImageWidgetModule, Container, Text } from '../Text-Hz4G3gHr.js';
import { DataView } from '../DataView-DBkSrPOT.js';
import { Div } from '../Div-Dhe9jsr5.js';
import { Label } from '../Label-BvzEsVpa.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-BrA-9v8O.js';
import { AttributeProperty } from '../BQKVXLaf-mvtyIvU3.js';
import '../uEIG9e6s-DbIaJy7J.js';
import '../InlineText-edXOhouE.js';
import '../bdxqAC6d-D5pvApxC.js';
import '../SprintrFeedback-CHsxspHz.js';
import '../ListExpressionProperty-2EKdiBPA.js';
import '../WebIconProperty-Dp1h0TWT.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Switch = Object.getOwnPropertyDescriptor(SwitchWidgetModule, "Switch")?.value || Object.getOwnPropertyDescriptor(SwitchWidgetModule, "default")?.value;
const { $Container, $Text, $DataView, $Div, $FormGroup, $TextBox, $Combobox, $RadioButtonGroup, $Switch, $Label, $Image, $FileManager, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Text, DataView, Div, FormGroup, TextBox, Combobox, RadioButtonGroup, Switch, Label, Image, FileManager, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p27.Expenses.TeamMember_new_Administrator.container1",
      $widgetId: "p27.Expenses.TeamMember_new_Administrator.container1",
      class: "mx-name-container1 pageheader spacing-outer-bottom-large",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Text,
          {
            key: "p27.Expenses.TeamMember_new_Administrator.text40",
            $widgetId: "p27.Expenses.TeamMember_new_Administrator.text40",
            class: "mx-name-text40 pageheader-title spacing-outer-bottom",
            style: void 0,
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New Team Member" }, "args": {} }
              })
            ]),
            renderMode: "h1"
          }
        )
      ],
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p27.Expenses.TeamMember_new_Administrator.dataView1",
      $widgetId: "p27.Expenses.TeamMember_new_Administrator.dataView1",
      class: "mx-name-dataView1 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p27.12",
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
            key: "p27.Expenses.TeamMember_new_Administrator.dataView2",
            $widgetId: "p27.Expenses.TeamMember_new_Administrator.dataView2",
            class: "mx-name-dataView2 form-horizontal",
            style: void 0,
            tabIndex: void 0,
            object: AssociationObjectProperty({
              "dataSourceId": "p27.15",
              "scope": "$AccountPasswordData",
              "editable": true,
              "path": "Administration.AccountPasswordData_Account/Expenses.TeamMember",
              "operationId": "W6+jjpcDoFiIGwyu7UrCRQ"
            }),
            emptyMessage: TextProperty({
              "value": selectTranslation([
                ""
              ])
            }),
            body: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid3",
                  $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid3",
                  class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0",
                        $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0",
                        class: "row",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0$column0",
                              $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0$column0",
                              class: "col-lg col-md col Col-xs-12",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.textBox1$formGroup",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox1$formGroup",
                                    class: "mx-name-textBox1 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p27.Expenses.TeamMember_new_Administrator.textBox1",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox1",
                                          inputValue: AttributeProperty({
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "path": "",
                                            "entity": "Expenses.TeamMember",
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
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox1"
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
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox1"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.textBox2$formGroup",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox2$formGroup",
                                    class: "mx-name-textBox2 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p27.Expenses.TeamMember_new_Administrator.textBox2",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox2",
                                          inputValue: AttributeProperty({
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "path": "",
                                            "entity": "Expenses.TeamMember",
                                            "attribute": "Email",
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
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox2"
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
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox2"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.textBox3$formGroup",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox3$formGroup",
                                    class: "mx-name-textBox3 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p27.Expenses.TeamMember_new_Administrator.textBox3",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox3",
                                          inputValue: AttributeProperty({
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "path": "",
                                            "entity": "Expenses.TeamMember",
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
                                          readOnlyStyle: "control",
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
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox3"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Username" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox3"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox3"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.comboBox2$formGroup",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.comboBox2$formGroup",
                                    class: "mx-name-comboBox2",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p27.Expenses.TeamMember_new_Administrator.comboBox2",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.comboBox2",
                                          source: "context",
                                          optionsSourceType: "association",
                                          optionsSourceDatabaseDataSource: void 0,
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceDatabaseCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "System.Language",
                                            "attribute": "Code",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p27.4",
                                            "isList": false
                                          }),
                                          optionsSourceAssociationCaptionExpression: void 0,
                                          attributeAssociation: AssociationProperty({
                                            "type": "Reference",
                                            "entity": "Expenses.TeamMember",
                                            "path": "",
                                            "attribute": "System.User_Language",
                                            "endpointEntity": "System.Language",
                                            "selectableObjectsId": "p27.4",
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p27.4",
                                            "entity": "System.Language",
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "operationId": "Bfumbm0Ki1+sRYzdxJLKlQ",
                                            "sort": []
                                          }),
                                          optionsSourceStaticDataSource: [],
                                          emptyOptionText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          noOptionsText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          clearable: true,
                                          optionsSourceAssociationCustomContentType: "no",
                                          optionsSourceAssociationCustomContent: void 0,
                                          optionsSourceDatabaseCustomContentType: "no",
                                          staticDataSourceCustomContentType: "no",
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
                                          readOnlyStyle: "bordered",
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
                                          lazyLoading: true,
                                          loadingType: "spinner",
                                          selectedItemsSorting: "none",
                                          filterType: "contains",
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox2"
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
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox2"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.comboBox3$formGroup",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.comboBox3$formGroup",
                                    class: "mx-name-comboBox3",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p27.Expenses.TeamMember_new_Administrator.comboBox3",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.comboBox3",
                                          source: "context",
                                          optionsSourceType: "association",
                                          optionsSourceDatabaseDataSource: void 0,
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceDatabaseCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "System.TimeZone",
                                            "attribute": "Code",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p27.5",
                                            "isList": false
                                          }),
                                          optionsSourceAssociationCaptionExpression: void 0,
                                          attributeAssociation: AssociationProperty({
                                            "type": "Reference",
                                            "entity": "Expenses.TeamMember",
                                            "path": "",
                                            "attribute": "System.User_TimeZone",
                                            "endpointEntity": "System.TimeZone",
                                            "selectableObjectsId": "p27.5",
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p27.5",
                                            "entity": "System.TimeZone",
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "operationId": "78kaD5LnMluQxWQ1eQSLvg",
                                            "sort": []
                                          }),
                                          optionsSourceStaticDataSource: [],
                                          emptyOptionText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          noOptionsText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          clearable: true,
                                          optionsSourceAssociationCustomContentType: "no",
                                          optionsSourceAssociationCustomContent: void 0,
                                          optionsSourceDatabaseCustomContentType: "no",
                                          staticDataSourceCustomContentType: "no",
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
                                          readOnlyStyle: "bordered",
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
                                          lazyLoading: true,
                                          loadingType: "spinner",
                                          selectedItemsSorting: "none",
                                          filterType: "contains",
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox3"
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
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox3"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox3"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.radioButtons1$formGroup",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.radioButtons1$formGroup",
                                    class: "mx-name-radioButtons1 mx-radiobuttons inline",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $RadioButtonGroup,
                                        {
                                          key: "p27.Expenses.TeamMember_new_Administrator.radioButtons1",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.radioButtons1",
                                          value: AttributeProperty({
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "path": "",
                                            "entity": "Expenses.TeamMember",
                                            "attribute": "IsLocalUser",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null
                                          }),
                                          readOnlyStyle: "control",
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          ariaLabel: void 0,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.radioButtons1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Is local user" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.radioButtons1"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.radioButtons1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.switch1$formGroup",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.switch1$formGroup",
                                    class: "mx-name-switch1",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Switch,
                                        {
                                          key: "p27.Expenses.TeamMember_new_Administrator.switch1",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.switch1",
                                          booleanAttribute: AttributeProperty({
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "path": "",
                                            "entity": "Expenses.TeamMember",
                                            "attribute": "Blocked",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          action: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.switch1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Switch" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.switch1"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.switch1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.switch2$formGroup",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.switch2$formGroup",
                                    class: "mx-name-switch2",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Switch,
                                        {
                                          key: "p27.Expenses.TeamMember_new_Administrator.switch2",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.switch2",
                                          booleanAttribute: AttributeProperty({
                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                            "path": "",
                                            "entity": "Expenses.TeamMember",
                                            "attribute": "Active",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          action: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.switch2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Switch" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.switch2"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.switch2"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0$column1",
                              $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0$column1",
                              class: "col-lg col-md col Cls-xs-12",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $DataView,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.dataView3",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.dataView3",
                                    class: "mx-name-dataView3 form-horizontal",
                                    style: void 0,
                                    tabIndex: void 0,
                                    object: AssociationObjectProperty({
                                      "dataSourceId": "p27.50",
                                      "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                      "editable": true,
                                      "path": "Expenses.TeamMember_Profilpicture/Expenses.Profilpicture",
                                      "operationId": "Q1YJpzk/Yl+v8jAjw8hruw"
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
                                          key: "p27.Expenses.TeamMember_new_Administrator.container2",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.container2",
                                          class: "mx-name-container2 form-group",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Label,
                                              {
                                                key: "p27.Expenses.TeamMember_new_Administrator.label1",
                                                $widgetId: "p27.Expenses.TeamMember_new_Administrator.label1",
                                                class: "mx-name-label1 control-label spacing-inner-left-large",
                                                style: void 0,
                                                id: DerivedUniqueIdProperty({
                                                  "widgetId": "p27.Expenses.TeamMember_new_Administrator.label1"
                                                }),
                                                caption: TextProperty({
                                                  "value": selectTranslation([
                                                    "Profil Image"
                                                  ])
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
                                          key: "p27.Expenses.TeamMember_new_Administrator.container3",
                                          $widgetId: "p27.Expenses.TeamMember_new_Administrator.container3",
                                          class: "mx-name-container3",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p27.Expenses.TeamMember_new_Administrator.image2",
                                                $widgetId: "p27.Expenses.TeamMember_new_Administrator.image2",
                                                datasource: "image",
                                                imageObject: WebDynamicImageProperty({
                                                  "scope": "p27.Expenses.TeamMember_new_Administrator.dataView3",
                                                  "showAsThumbnail": false,
                                                  "shareObject": false
                                                }),
                                                defaultImageDynamic: WebStaticImageProperty({
                                                  "image": { "uri": "img/Atlas_Web_Content$Content$user.png" }
                                                }),
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: void 0,
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "percentage",
                                                width: 70,
                                                heightUnit: "auto",
                                                height: 100,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image2 img-circle spacing-outer-bottom-large spacing-inner-bottom-none",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p27.Expenses.TeamMember_new_Administrator.imageUploader1$formGroup",
                                                $widgetId: "p27.Expenses.TeamMember_new_Administrator.imageUploader1$formGroup",
                                                class: "mx-imageuploader mx-name-imageUploader1 mx-imageuploader",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $FileManager,
                                                    {
                                                      key: "p27.Expenses.TeamMember_new_Administrator.imageUploader1",
                                                      $widgetId: "p27.Expenses.TeamMember_new_Administrator.imageUploader1",
                                                      upload: FileUploadProperty({
                                                        "scope": "p27.Expenses.TeamMember_new_Administrator.dataView3",
                                                        "thumbnailSize": {
                                                          "width": 100,
                                                          "height": 75
                                                        }
                                                      }),
                                                      maxFileSize: 5,
                                                      extensions: "",
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p27.Expenses.TeamMember_new_Administrator.imageUploader1"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Upload image" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p27.Expenses.TeamMember_new_Administrator.imageUploader1"
                                                }),
                                                width: 3,
                                                orientation: "horizontal",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.imageUploader1"
                                                })
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    hideFooter: false,
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
            ],
            hideFooter: false,
            footer: void 0
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid2",
            $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid2",
            class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0",
                  $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0$column0",
                        $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p27.Expenses.TeamMember_new_Administrator.textBox4$formGroup",
                              $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox4$formGroup",
                              class: "mx-name-textBox4 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.textBox4",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "p27.Expenses.TeamMember_new_Administrator.dataView1",
                                      "path": "",
                                      "entity": "Administration.AccountPasswordData",
                                      "attribute": "NewPassword",
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
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox4"
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
                                "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox4"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p27.Expenses.TeamMember_new_Administrator.textBox5$formGroup",
                              $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox5$formGroup",
                              class: "mx-name-textBox5 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p27.Expenses.TeamMember_new_Administrator.textBox5",
                                    $widgetId: "p27.Expenses.TeamMember_new_Administrator.textBox5",
                                    inputValue: AttributeProperty({
                                      "scope": "p27.Expenses.TeamMember_new_Administrator.dataView1",
                                      "path": "",
                                      "entity": "Administration.AccountPasswordData",
                                      "attribute": "ConfirmPassword",
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
                                      "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox5"
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
                                "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox5"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox5"
                              })
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0$column1",
                        $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0$column1",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: void 0
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p27.Expenses.TeamMember_new_Administrator.actionButton1$visibility",
            $widgetId: "p27.Expenses.TeamMember_new_Administrator.actionButton1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p27.Expenses.TeamMember_new_Administrator.actionButton1",
                  $widgetId: "p27.Expenses.TeamMember_new_Administrator.actionButton1",
                  buttonId: "p27.Expenses.TeamMember_new_Administrator.actionButton1",
                  class: "mx-name-actionButton1",
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
                    "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "wRZR8+/UJlm8sDhMbnCTDw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
            key: "p27.Expenses.TeamMember_new_Administrator.actionButton2",
            $widgetId: "p27.Expenses.TeamMember_new_Administrator.actionButton2",
            buttonId: "p27.Expenses.TeamMember_new_Administrator.actionButton2",
            class: "mx-name-actionButton2",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-danger",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "xg7miRGnRV2MP0m4b76g4w", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid1",
      $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid1$row0",
            $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p27.Expenses.TeamMember_new_Administrator.layoutGrid1$row0$column0",
                  $widgetId: "p27.Expenses.TeamMember_new_Administrator.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: void 0
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
  "Team member new Administrator"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
