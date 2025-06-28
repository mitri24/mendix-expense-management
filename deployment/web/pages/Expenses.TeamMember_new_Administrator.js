import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { FileUploadProperty } from "mendix/FileUploadProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebDynamicImageProperty } from "mendix/WebDynamicImageProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FileManager } from "mendix/widgets/web/FileManager";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import * as ImageWidgetModule from "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { Label } from "mendix/widgets/web/Label";
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import * as SwitchWidgetModule from "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/custom/switch/Switch.mjs";
const Switch = Object.getOwnPropertyDescriptor(SwitchWidgetModule, "Switch")?.value || Object.getOwnPropertyDescriptor(SwitchWidgetModule, "default")?.value;   
import "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/custom/switch/Switch.css";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_TopBar.js";

const { $Container, $Text, $DataView, $Div, $FormGroup, $TextBox, $Combobox, $RadioButtonGroup, $Switch, $Label, $Image, $FileManager, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Text, DataView, Div, FormGroup, TextBox, Combobox, RadioButtonGroup, Switch, Label, Image, FileManager, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Container key="p27.Expenses.TeamMember_new_Administrator.container1"
        $widgetId="p27.Expenses.TeamMember_new_Administrator.container1"
        class={"mx-name-container1 pageheader spacing-outer-bottom-large"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
            <$Text key="p27.Expenses.TeamMember_new_Administrator.text40"
                $widgetId="p27.Expenses.TeamMember_new_Administrator.text40"
                class={"mx-name-text40 pageheader-title spacing-outer-bottom"}
                style={undefined}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "New Team Member" }, "args": {} }
                    })
                ])}
                renderMode={"h1"} />
        ]}
        ariaHidden={false} />,
    <$DataView key="p27.Expenses.TeamMember_new_Administrator.dataView1"
        $widgetId="p27.Expenses.TeamMember_new_Administrator.dataView1"
        class={"mx-name-dataView1 form-horizontal"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p27.12",
            "scope": "$AccountPasswordData",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$DataView key="p27.Expenses.TeamMember_new_Administrator.dataView2"
                $widgetId="p27.Expenses.TeamMember_new_Administrator.dataView2"
                class={"mx-name-dataView2 form-horizontal"}
                style={undefined}
                tabIndex={undefined}
                object={AssociationObjectProperty({
                    "dataSourceId": "p27.15",
                    "scope": "$AccountPasswordData",
                    "editable": true,
                    "path": "Administration.AccountPasswordData_Account/Expenses.TeamMember",
                    "operationId": "W6+jjpcDoFiIGwyu7UrCRQ"
                })}
                emptyMessage={TextProperty({
                    "value": t([
                        ""
                    ])
                })}
                body={[
                    <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid3"
                        $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid3"
                        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                        style={undefined}
                        content={[
                            <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0"
                                $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0"
                                class={"row"}
                                style={undefined}
                                content={[
                                    <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0$column0"
                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0$column0"
                                        class={"col-lg col-md col Col-xs-12"}
                                        style={undefined}
                                        content={[
                                            <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.textBox1$formGroup"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox1$formGroup"
                                                class={"mx-name-textBox1 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p27.Expenses.TeamMember_new_Administrator.textBox1"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox1"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "path": "",
                                                            "entity": "Expenses.TeamMember",
                                                            "attribute": "FullName",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={false}
                                                        placeholder={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        mask={""}
                                                        readOnlyStyle={"control"}
                                                        maxLength={200}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        onEnterKeyPress={undefined}
                                                        ariaLabel={undefined}
                                                        autocomplete={"on"}
                                                        submitWhileEditing={false}
                                                        submitDelay={300}
                                                        ariaRequired={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox1"
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox1"
                                                })} />,
                                            <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.textBox2$formGroup"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox2$formGroup"
                                                class={"mx-name-textBox2 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p27.Expenses.TeamMember_new_Administrator.textBox2"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox2"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "path": "",
                                                            "entity": "Expenses.TeamMember",
                                                            "attribute": "Email",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={false}
                                                        placeholder={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        mask={""}
                                                        readOnlyStyle={"control"}
                                                        maxLength={200}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        onEnterKeyPress={undefined}
                                                        ariaLabel={undefined}
                                                        autocomplete={"on"}
                                                        submitWhileEditing={false}
                                                        submitDelay={300}
                                                        ariaRequired={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Email" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox2"
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox2"
                                                })} />,
                                            <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.textBox3$formGroup"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox3$formGroup"
                                                class={"mx-name-textBox3 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p27.Expenses.TeamMember_new_Administrator.textBox3"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox3"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "path": "",
                                                            "entity": "Expenses.TeamMember",
                                                            "attribute": "Name",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={false}
                                                        placeholder={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        mask={""}
                                                        readOnlyStyle={"control"}
                                                        maxLength={100}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        onEnterKeyPress={undefined}
                                                        ariaLabel={undefined}
                                                        autocomplete={"on"}
                                                        submitWhileEditing={false}
                                                        submitDelay={300}
                                                        ariaRequired={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Username" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox3"
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox3"
                                                })} />,
                                            <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.comboBox2$formGroup"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.comboBox2$formGroup"
                                                class={"mx-name-comboBox2"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p27.Expenses.TeamMember_new_Administrator.comboBox2"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.comboBox2"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "System.Language",
                                                            "attribute": "Code",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p27.4",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "Expenses.TeamMember",
                                                            "path": "",
                                                            "attribute": "System.User_Language",
                                                            "endpointEntity": "System.Language",
                                                            "selectableObjectsId": "p27.4",
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p27.4",
                                                            "entity": "System.Language",
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "operationId": "Bfumbm0Ki1+sRYzdxJLKlQ",
                                                            "sort": []
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        readOnlyStyle={"bordered"}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                        })}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        selectedItemsSorting={"none"}
                                                        filterType={"contains"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox2"
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox2"
                                                })} />,
                                            <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.comboBox3$formGroup"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.comboBox3$formGroup"
                                                class={"mx-name-comboBox3"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p27.Expenses.TeamMember_new_Administrator.comboBox3"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.comboBox3"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "System.TimeZone",
                                                            "attribute": "Code",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p27.5",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "Expenses.TeamMember",
                                                            "path": "",
                                                            "attribute": "System.User_TimeZone",
                                                            "endpointEntity": "System.TimeZone",
                                                            "selectableObjectsId": "p27.5",
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p27.5",
                                                            "entity": "System.TimeZone",
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "operationId": "78kaD5LnMluQxWQ1eQSLvg",
                                                            "sort": []
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        readOnlyStyle={"bordered"}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                        })}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        selectedItemsSorting={"none"}
                                                        filterType={"contains"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Time zone" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox3"
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.comboBox3"
                                                })} />,
                                            <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.radioButtons1$formGroup"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.radioButtons1$formGroup"
                                                class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p27.Expenses.TeamMember_new_Administrator.radioButtons1"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.radioButtons1"
                                                        value={AttributeProperty({
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "path": "",
                                                            "entity": "Expenses.TeamMember",
                                                            "attribute": "IsLocalUser",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null
                                                        })}
                                                        readOnlyStyle={"control"}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        ariaLabel={undefined}
                                                        ariaRequired={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.radioButtons1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Is local user" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.radioButtons1"
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.radioButtons1"
                                                })} />,
                                            <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.switch1$formGroup"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.switch1$formGroup"
                                                class={"mx-name-switch1"}
                                                style={undefined}
                                                control={[
                                                    <$Switch key="p27.Expenses.TeamMember_new_Administrator.switch1"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.switch1"
                                                        booleanAttribute={AttributeProperty({
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "path": "",
                                                            "entity": "Expenses.TeamMember",
                                                            "attribute": "Blocked",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false
                                                        })}
                                                        action={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.switch1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Switch" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.switch1"
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.switch1"
                                                })} />,
                                            <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.switch2$formGroup"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.switch2$formGroup"
                                                class={"mx-name-switch2"}
                                                style={undefined}
                                                control={[
                                                    <$Switch key="p27.Expenses.TeamMember_new_Administrator.switch2"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.switch2"
                                                        booleanAttribute={AttributeProperty({
                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                            "path": "",
                                                            "entity": "Expenses.TeamMember",
                                                            "attribute": "Active",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false
                                                        })}
                                                        action={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.switch2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Switch" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.switch2"
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.switch2"
                                                })} />
                                        ]} />,
                                    <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0$column1"
                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid3$row0$column1"
                                        class={"col-lg col-md col Cls-xs-12"}
                                        style={undefined}
                                        content={[
                                            <$DataView key="p27.Expenses.TeamMember_new_Administrator.dataView3"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.dataView3"
                                                class={"mx-name-dataView3 form-horizontal"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                object={AssociationObjectProperty({
                                                    "dataSourceId": "p27.50",
                                                    "scope": "p27.Expenses.TeamMember_new_Administrator.dataView2",
                                                    "editable": true,
                                                    "path": "Expenses.TeamMember_Profilpicture/Expenses.Profilpicture",
                                                    "operationId": "Q1YJpzk/Yl+v8jAjw8hruw"
                                                })}
                                                emptyMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                body={[
                                                    <$Container key="p27.Expenses.TeamMember_new_Administrator.container2"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.container2"
                                                        class={"mx-name-container2 form-group"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Label key="p27.Expenses.TeamMember_new_Administrator.label1"
                                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.label1"
                                                                class={"mx-name-label1 control-label spacing-inner-left-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.label1"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Profil Image"
                                                                    ])
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p27.Expenses.TeamMember_new_Administrator.container3"
                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.container3"
                                                        class={"mx-name-container3"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p27.Expenses.TeamMember_new_Administrator.image2"
                                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.image2"
                                                                datasource={"image"}
                                                                imageObject={WebDynamicImageProperty({
                                                                    "scope": "p27.Expenses.TeamMember_new_Administrator.dataView3",
                                                                    "showAsThumbnail": false,
                                                                    "shareObject": false
                                                                })}
                                                                defaultImageDynamic={WebStaticImageProperty({
                                                                    "image": { "uri": "img/Atlas_Web_Content$Content$user.png" }
                                                                })}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={undefined}
                                                                isBackgroundImage={false}
                                                                children={undefined}
                                                                onClickType={"action"}
                                                                onClick={undefined}
                                                                alternativeText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                widthUnit={"percentage"}
                                                                width={70}
                                                                heightUnit={"auto"}
                                                                height={100}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image2 img-circle spacing-outer-bottom-large spacing-inner-bottom-none"}
                                                                style={undefined}
                                                                tabIndex={undefined} />,
                                                            <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.imageUploader1$formGroup"
                                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.imageUploader1$formGroup"
                                                                class={"mx-imageuploader mx-name-imageUploader1 mx-imageuploader"}
                                                                style={undefined}
                                                                control={[
                                                                    <$FileManager key="p27.Expenses.TeamMember_new_Administrator.imageUploader1"
                                                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.imageUploader1"
                                                                        upload={FileUploadProperty({
                                                                            "scope": "p27.Expenses.TeamMember_new_Administrator.dataView3",
                                                                            "thumbnailSize": {
                                                                                "width": 100,
                                                                                "height": 75
                                                                            }
                                                                        })}
                                                                        maxFileSize={5}
                                                                        extensions={""}
                                                                        tabIndex={undefined}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.imageUploader1"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Upload image" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.imageUploader1"
                                                                })}
                                                                width={3}
                                                                orientation={"horizontal"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.imageUploader1"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                hideFooter={false}
                                                footer={undefined} />
                                        ]} />
                                ]} />
                        ]} />
                ]}
                hideFooter={false}
                footer={undefined} />,
            <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid2"
                $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid2"
                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0"
                        $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0$column0"
                                $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.textBox4$formGroup"
                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox4$formGroup"
                                        class={"mx-name-textBox4 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p27.Expenses.TeamMember_new_Administrator.textBox4"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox4"
                                                inputValue={AttributeProperty({
                                                    "scope": "p27.Expenses.TeamMember_new_Administrator.dataView1",
                                                    "path": "",
                                                    "entity": "Administration.AccountPasswordData",
                                                    "attribute": "NewPassword",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox4"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox4"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox4"
                                        })} />,
                                    <$FormGroup key="p27.Expenses.TeamMember_new_Administrator.textBox5$formGroup"
                                        $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox5$formGroup"
                                        class={"mx-name-textBox5 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p27.Expenses.TeamMember_new_Administrator.textBox5"
                                                $widgetId="p27.Expenses.TeamMember_new_Administrator.textBox5"
                                                inputValue={AttributeProperty({
                                                    "scope": "p27.Expenses.TeamMember_new_Administrator.dataView1",
                                                    "path": "",
                                                    "entity": "Administration.AccountPasswordData",
                                                    "attribute": "ConfirmPassword",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox5"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p27.Expenses.TeamMember_new_Administrator.textBox5"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p27.Expenses.TeamMember_new_Administrator.textBox5"
                                        })} />
                                ]} />,
                            <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0$column1"
                                $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid2$row0$column1"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={undefined} />
                        ]} />
                ]} />
        ]}
        hideFooter={false}
        footer={[
            <$ConditionalVisibilityWrapper key="p27.Expenses.TeamMember_new_Administrator.actionButton1$visibility"
                $widgetId="p27.Expenses.TeamMember_new_Administrator.actionButton1$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p27.Expenses.TeamMember_new_Administrator.actionButton1"
                        $widgetId="p27.Expenses.TeamMember_new_Administrator.actionButton1"
                        buttonId={"p27.Expenses.TeamMember_new_Administrator.actionButton1"}
                        class={"mx-name-actionButton1"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"button"}
                        role={undefined}
                        buttonClass={"btn-success"}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                            })
                        ])}
                        tooltip={TextProperty({
                            "value": t([
                                ""
                            ])
                        })}
                        icon={undefined}
                        action={ActionProperty({
                            "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "wRZR8+/UJlm8sDhMbnCTDw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                            "abortOnServerValidation": true
                        })} />
                ]} />,
            <$ActionButton key="p27.Expenses.TeamMember_new_Administrator.actionButton2"
                $widgetId="p27.Expenses.TeamMember_new_Administrator.actionButton2"
                buttonId={"p27.Expenses.TeamMember_new_Administrator.actionButton2"}
                class={"mx-name-actionButton2"}
                style={undefined}
                tabIndex={undefined}
                renderType={"button"}
                role={undefined}
                buttonClass={"btn-danger"}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                    })
                ])}
                tooltip={TextProperty({
                    "value": t([
                        ""
                    ])
                })}
                icon={undefined}
                action={ActionProperty({
                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "xg7miRGnRV2MP0m4b76g4w", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />
        ]} />,
    <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid1"
        $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid1$row0"
                $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p27.Expenses.TeamMember_new_Administrator.layoutGrid1$row0$column0"
                        $widgetId="p27.Expenses.TeamMember_new_Administrator.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={undefined} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Team member new Administrator"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
