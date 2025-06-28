import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Expenses.Atlas_Login.js";

const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p30.Expenses.Registration_NewEdit.layoutGrid1"
        $widgetId="p30.Expenses.Registration_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p30.Expenses.Registration_NewEdit.layoutGrid1$row0"
                $widgetId="p30.Expenses.Registration_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p30.Expenses.Registration_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p30.Expenses.Registration_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p30.Expenses.Registration_NewEdit.dataView6"
                                $widgetId="p30.Expenses.Registration_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p30.12",
                                    "scope": "$Registration",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p30.Expenses.Registration_NewEdit.textBox1$formGroup"
                                        $widgetId="p30.Expenses.Registration_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p30.Expenses.Registration_NewEdit.textBox1"
                                                $widgetId="p30.Expenses.Registration_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "Expenses.Registration",
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
                                                    "widgetId": "p30.Expenses.Registration_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p30.Expenses.Registration_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p30.Expenses.Registration_NewEdit.textBox2$formGroup"
                                        $widgetId="p30.Expenses.Registration_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p30.Expenses.Registration_NewEdit.textBox2"
                                                $widgetId="p30.Expenses.Registration_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "Expenses.Registration",
                                                    "attribute": "UserName",
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
                                                    "widgetId": "p30.Expenses.Registration_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p30.Expenses.Registration_NewEdit.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p30.Expenses.Registration_NewEdit.textBox3$formGroup"
                                        $widgetId="p30.Expenses.Registration_NewEdit.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p30.Expenses.Registration_NewEdit.textBox3"
                                                $widgetId="p30.Expenses.Registration_NewEdit.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "Expenses.Registration",
                                                    "attribute": "EmailAdress",
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
                                                    "widgetId": "p30.Expenses.Registration_NewEdit.textBox3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Email adress" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p30.Expenses.Registration_NewEdit.textBox3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox3"
                                        })} />,
                                    <$FormGroup key="p30.Expenses.Registration_NewEdit.textBox4$formGroup"
                                        $widgetId="p30.Expenses.Registration_NewEdit.textBox4$formGroup"
                                        class={"mx-name-textBox4 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p30.Expenses.Registration_NewEdit.textBox4"
                                                $widgetId="p30.Expenses.Registration_NewEdit.textBox4"
                                                inputValue={AttributeProperty({
                                                    "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "Expenses.Registration",
                                                    "attribute": "Password",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={true}
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
                                                    "widgetId": "p30.Expenses.Registration_NewEdit.textBox4"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Password" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p30.Expenses.Registration_NewEdit.textBox4"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox4"
                                        })} />,
                                    <$FormGroup key="p30.Expenses.Registration_NewEdit.textBox5$formGroup"
                                        $widgetId="p30.Expenses.Registration_NewEdit.textBox5$formGroup"
                                        class={"mx-name-textBox5 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p30.Expenses.Registration_NewEdit.textBox5"
                                                $widgetId="p30.Expenses.Registration_NewEdit.textBox5"
                                                inputValue={AttributeProperty({
                                                    "scope": "p30.Expenses.Registration_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "Expenses.Registration",
                                                    "attribute": "ConfirmPassword",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={true}
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
                                                    "widgetId": "p30.Expenses.Registration_NewEdit.textBox5"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p30.Expenses.Registration_NewEdit.textBox5"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p30.Expenses.Registration_NewEdit.textBox5"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p30.Expenses.Registration_NewEdit.actionButton1$visibility"
                                        $widgetId="p30.Expenses.Registration_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Anonymous" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p30.Expenses.Registration_NewEdit.actionButton1"
                                                $widgetId="p30.Expenses.Registration_NewEdit.actionButton1"
                                                buttonId={"p30.Expenses.Registration_NewEdit.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-primary"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Create my account" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "Registration": { "widget": "$Registration", "source": "object" } }, "config": { "operationId": "XukXdtueDlCHYHmEjVxbpg", "validate": "view", "allowedRoles": [ "Anonymous" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p30.Expenses.Registration_NewEdit.actionButton2"
                                        $widgetId="p30.Expenses.Registration_NewEdit.actionButton2"
                                        buttonId={"p30.Expenses.Registration_NewEdit.actionButton2"}
                                        class={"mx-name-actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "DpK0LRphhFi7Snjv5hbLKw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Registration"
]);

export const classes = "";

export const style = {};
export const content = { ...parentContent,
    "Expenses.Atlas_Login.Main": region$Main,
};
