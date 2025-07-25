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
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $DataView, $FormGroup, $TextBox, $Combobox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, Combobox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p9.Administration.MyAccount.dataView1"
        $widgetId="p9.Administration.MyAccount.dataView1"
        class={"mx-name-dataView1 form-horizontal"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p9.9",
            "scope": "$Account",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$FormGroup key="p9.Administration.MyAccount.textBox2$formGroup"
                $widgetId="p9.Administration.MyAccount.textBox2$formGroup"
                class={"mx-name-textBox2 mx-textbox"}
                style={undefined}
                control={[
                    <$TextBox key="p9.Administration.MyAccount.textBox2"
                        $widgetId="p9.Administration.MyAccount.textBox2"
                        inputValue={AttributeProperty({
                            "scope": "p9.Administration.MyAccount.dataView1",
                            "path": "",
                            "entity": "Administration.Account",
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
                        readOnlyStyle={"text"}
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
                            "widgetId": "p9.Administration.MyAccount.textBox2"
                        })} />
                ]}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                    })
                ])}
                labelFor={DerivedUniqueIdProperty({
                    "widgetId": "p9.Administration.MyAccount.textBox2"
                })}
                width={3}
                orientation={"horizontal"}
                hasError={ValidationProperty({
                    "inputWidgetId": "p9.Administration.MyAccount.textBox2"
                })} />,
            <$FormGroup key="p9.Administration.MyAccount.textBox5$formGroup"
                $widgetId="p9.Administration.MyAccount.textBox5$formGroup"
                class={"mx-name-textBox5 mx-textbox"}
                style={undefined}
                control={[
                    <$TextBox key="p9.Administration.MyAccount.textBox5"
                        $widgetId="p9.Administration.MyAccount.textBox5"
                        inputValue={AttributeProperty({
                            "scope": "p9.Administration.MyAccount.dataView1",
                            "path": "",
                            "entity": "Administration.Account",
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
                        readOnlyStyle={"text"}
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
                            "widgetId": "p9.Administration.MyAccount.textBox5"
                        })} />
                ]}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                    })
                ])}
                labelFor={DerivedUniqueIdProperty({
                    "widgetId": "p9.Administration.MyAccount.textBox5"
                })}
                width={3}
                orientation={"horizontal"}
                hasError={ValidationProperty({
                    "inputWidgetId": "p9.Administration.MyAccount.textBox5"
                })} />,
            <$FormGroup key="p9.Administration.MyAccount.comboBox3$formGroup"
                $widgetId="p9.Administration.MyAccount.comboBox3$formGroup"
                class={"mx-name-comboBox3"}
                style={undefined}
                control={[
                    <$Combobox key="p9.Administration.MyAccount.comboBox3"
                        $widgetId="p9.Administration.MyAccount.comboBox3"
                        optionsSourceType={"association"}
                        attributeAssociation={AssociationProperty({
                            "type": "Reference",
                            "entity": "Administration.Account",
                            "path": "",
                            "attribute": "System.User_Language",
                            "endpointEntity": "System.Language",
                            "selectableObjectsId": "p9.0",
                            "scope": "p9.Administration.MyAccount.dataView1",
                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                        })}
                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                            "dataSourceId": "p9.0",
                            "entity": "System.Language",
                            "scope": "p9.Administration.MyAccount.dataView1",
                            "operationId": "Q60qfILmMVmFnOZk8ZAGbA",
                            "sort": []
                        })}
                        optionsSourceAssociationCaptionType={"attribute"}
                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                            "path": "",
                            "entity": "System.Language",
                            "attribute": "Description",
                            "attributeType": "String",
                            "sortable": true,
                            "filterable": true,
                            "dataSourceId": "p9.0",
                            "isList": false
                        })}
                        optionsSourceAssociationCaptionExpression={undefined}
                        emptyOptionText={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        filterType={"contains"}
                        noOptionsText={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        clearable={true}
                        optionsSourceAssociationCustomContentType={"no"}
                        optionsSourceAssociationCustomContent={undefined}
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
                        source={"context"}
                        optionsSourceDatabaseDataSource={undefined}
                        optionsSourceDatabaseCaptionType={"attribute"}
                        optionsSourceStaticDataSource={[]}
                        optionsSourceDatabaseCustomContentType={"no"}
                        staticDataSourceCustomContentType={"no"}
                        readOnlyStyle={"text"}
                        lazyLoading={true}
                        loadingType={"spinner"}
                        selectedItemsSorting={"none"}
                        tabIndex={undefined}
                        id={DerivedUniqueIdProperty({
                            "widgetId": "p9.Administration.MyAccount.comboBox3"
                        })} />
                ]}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
                    })
                ])}
                labelFor={DerivedUniqueIdProperty({
                    "widgetId": "p9.Administration.MyAccount.comboBox3"
                })}
                width={3}
                orientation={"horizontal"}
                hasError={ValidationProperty({
                    "inputWidgetId": "p9.Administration.MyAccount.comboBox3"
                })} />,
            <$ConditionalVisibilityWrapper key="p9.Administration.MyAccount.microflowTrigger1$visibility"
                $widgetId="p9.Administration.MyAccount.microflowTrigger1$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Requestor" }, { "type": "literal", "value": "Approver" } ] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p9.Administration.MyAccount.microflowTrigger1"
                        $widgetId="p9.Administration.MyAccount.microflowTrigger1"
                        buttonId={"p9.Administration.MyAccount.microflowTrigger1"}
                        class={"mx-name-microflowTrigger1"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"button"}
                        role={undefined}
                        buttonClass={"btn-default"}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Change password" }, "args": {} }
                            })
                        ])}
                        tooltip={TextProperty({
                            "value": t([
                                ""
                            ])
                        })}
                        icon={undefined}
                        action={ActionProperty({
                            "action": { "type": "callMicroflow", "argMap": { "Account": { "widget": "$Account", "source": "object" } }, "config": { "operationId": "D9SM4CyTHlmMUxL5oqbEjA", "allowedRoles": [ "Administrator", "Requestor", "Approver" ] }, "disabledDuringExecution": false },
                            "abortOnServerValidation": true
                        })} />
                ]} />
        ]}
        hideFooter={false}
        footer={[
            <$ActionButton key="p9.Administration.MyAccount.saveButton1"
                $widgetId="p9.Administration.MyAccount.saveButton1"
                buttonId={"p9.Administration.MyAccount.saveButton1"}
                class={"mx-name-saveButton1"}
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
                    "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p9.Administration.MyAccount.dataView1", "source": "object" } }, "config": { "operationId": "ci25rjxvrVaFC2xiGOoa3A", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />,
            <$ActionButton key="p9.Administration.MyAccount.cancelButton1"
                $widgetId="p9.Administration.MyAccount.cancelButton1"
                buttonId={"p9.Administration.MyAccount.cancelButton1"}
                class={"mx-name-cancelButton1"}
                style={undefined}
                tabIndex={undefined}
                renderType={"button"}
                role={undefined}
                buttonClass={"btn-default"}
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
                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "XVQdH/w5/FCIGijAVbidFQ", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />
        ]} />
]}</PageFragment>);

export const title = t([
    "My Account"
]);

export const classes = "";

export const cancelChangesOperationId = "Sbd3Sig/E1i7mQOIHFHQfg";
export const closeButton = "p9.Administration.MyAccount.cancelButton1";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
