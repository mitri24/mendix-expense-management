import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebDynamicImageProperty } from "mendix/WebDynamicImageProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import * as ImageWidgetModule from "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_TopBar.js";

const { $Div, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $ListView, $Image } = asPluginWidgets({ Div, Container, Text, ConditionalVisibilityWrapper, ActionButton, ListView, Image });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2"
        $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row0"
                $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row0$column0"
                        $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p26.Expenses.TeamMember_overview_Administrator.container1"
                                $widgetId="p26.Expenses.TeamMember_overview_Administrator.container1"
                                class={"mx-name-container1 pageheader spacing-outer-bottom-large"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid3"
                                        $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid3"
                                        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid pageheader"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0"
                                                $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0"
                                                class={"row"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0$column0"
                                                        $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0$column0"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p26.Expenses.TeamMember_overview_Administrator.text40"
                                                                $widgetId="p26.Expenses.TeamMember_overview_Administrator.text40"
                                                                class={"mx-name-text40 pageheader-title spacing-outer-bottom"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Team Member Management\n" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"h1"} />,
                                                            <$ConditionalVisibilityWrapper key="p26.Expenses.TeamMember_overview_Administrator.actionButton6$visibility"
                                                                $widgetId="p26.Expenses.TeamMember_overview_Administrator.actionButton6$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p26.Expenses.TeamMember_overview_Administrator.actionButton6"
                                                                        $widgetId="p26.Expenses.TeamMember_overview_Administrator.actionButton6"
                                                                        buttonId={"p26.Expenses.TeamMember_overview_Administrator.actionButton6"}
                                                                        class={"mx-name-actionButton6"}
                                                                        style={undefined}
                                                                        tabIndex={undefined}
                                                                        renderType={"button"}
                                                                        role={undefined}
                                                                        buttonClass={"btn-default"}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "New Team Members" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        tooltip={TextProperty({
                                                                            "value": t([
                                                                                ""
                                                                            ])
                                                                        })}
                                                                        icon={undefined}
                                                                        action={ActionProperty({
                                                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "WF3QI2dxlFCq+ZkV6HfObg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                            "abortOnServerValidation": true
                                                                        })} />
                                                                ]} />
                                                        ]} />,
                                                    <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0$column1"
                                                        $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0$column1"
                                                        class={"col-lg-auto col-md-auto col-auto"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p26.Expenses.TeamMember_overview_Administrator.actionButton2"
                                                                $widgetId="p26.Expenses.TeamMember_overview_Administrator.actionButton2"
                                                                buttonId={"p26.Expenses.TeamMember_overview_Administrator.actionButton2"}
                                                                class={"mx-name-actionButton2"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-primary"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Action" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={undefined} />,
                                                            <$ActionButton key="p26.Expenses.TeamMember_overview_Administrator.actionButton3"
                                                                $widgetId="p26.Expenses.TeamMember_overview_Administrator.actionButton3"
                                                                buttonId={"p26.Expenses.TeamMember_overview_Administrator.actionButton3"}
                                                                class={"mx-name-actionButton3 spacing-outer-left"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Action" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={undefined} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />,
            <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row1"
                $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row1"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row1$column0"
                        $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row1$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$ListView key="p26.Expenses.TeamMember_overview_Administrator.listView1"
                                $widgetId="p26.Expenses.TeamMember_overview_Administrator.listView1"
                                class={"mx-name-listView1 lv-col-md-4"}
                                style={undefined}
                                listValue={DatabaseObjectListProperty({
                                    "dataSourceId": "p26.6",
                                    "entity": "Expenses.TeamMember",
                                    "operationId": "Ya/Skx6w5VG2IZ7aeTIUig",
                                    "sort": [
                                        [
                                            "Expenses.TeamMember_Profilpicture/Expenses.Profilpicture/System.owner/System.User/System.owner/System.User/System.changedBy/Expenses.TeamMember/FullName",
                                            "asc"
                                        ]
                                    ]
                                })}
                                searchAttributes={[
                                    ListAttributeProperty({
                                        "path": "",
                                        "entity": "Expenses.TeamMember",
                                        "attribute": "FullName",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p26.6",
                                        "isList": false
                                    })
                                ]}
                                itemTemplate={TemplatedWidgetProperty({
                                    "dataSourceId": "p26.6",
                                    "editable": false,
                                    "children": () => [
                                        <$Container key="p26.Expenses.TeamMember_overview_Administrator.container13"
                                            $widgetId="p26.Expenses.TeamMember_overview_Administrator.container13"
                                            class={"mx-name-container13 card spacing-outer-bottom-medium"}
                                            style={undefined}
                                            renderMode={"div"}
                                            onClick={undefined}
                                            content={[
                                                <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid1"
                                                    $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid1"
                                                    class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-bottom-large"}
                                                    style={undefined}
                                                    content={[
                                                        <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0"
                                                            $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0"
                                                            class={"row align-children-center"}
                                                            style={undefined}
                                                            content={[
                                                                <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0$column0"
                                                                    $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0$column0"
                                                                    class={"col-lg-auto col-md-auto col-auto align-self-center"}
                                                                    style={undefined}
                                                                    content={[
                                                                        <$Image key="p26.Expenses.TeamMember_overview_Administrator.image1"
                                                                            $widgetId="p26.Expenses.TeamMember_overview_Administrator.image1"
                                                                            datasource={"image"}
                                                                            imageObject={WebDynamicImageProperty({
                                                                                "scope": "p26.Expenses.TeamMember_overview_Administrator.listView1",
                                                                                "showAsThumbnail": false,
                                                                                "shareObject": false,
                                                                                "path": "Expenses.TeamMember_Profilpicture/Expenses.Profilpicture"
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
                                                                            widthUnit={"pixels"}
                                                                            width={80}
                                                                            heightUnit={"pixels"}
                                                                            height={80}
                                                                            iconSize={14}
                                                                            displayAs={"thumbnail"}
                                                                            responsive={false}
                                                                            class={"mx-name-image1 Img-circle"}
                                                                            style={undefined}
                                                                            tabIndex={undefined} />
                                                                    ]} />,
                                                                <$Div key="p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0$column1"
                                                                    $widgetId="p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0$column1"
                                                                    class={"col-lg col-md col"}
                                                                    style={undefined}
                                                                    content={[
                                                                        <$Text key="p26.Expenses.TeamMember_overview_Administrator.text10"
                                                                            $widgetId="p26.Expenses.TeamMember_overview_Administrator.text10"
                                                                            class={"mx-name-text10 spacing-outer-bottom-none"}
                                                                            style={undefined}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "List item title" }, "args": {} }
                                                                                })
                                                                            ])}
                                                                            renderMode={"h4"} />,
                                                                        <$Text key="p26.Expenses.TeamMember_overview_Administrator.text41"
                                                                            $widgetId="p26.Expenses.TeamMember_overview_Administrator.text41"
                                                                            class={"mx-name-text41 spacing-outer-bottom-none"}
                                                                            style={undefined}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Secondary text" }, "args": {} }
                                                                                })
                                                                            ])}
                                                                            renderMode={"p"} />,
                                                                        <$Container key="p26.Expenses.TeamMember_overview_Administrator.container2"
                                                                            $widgetId="p26.Expenses.TeamMember_overview_Administrator.container2"
                                                                            class={"mx-name-container2 Spacing-outer-bottom-large row-left"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p26.Expenses.TeamMember_overview_Administrator.actionButton1$visibility"
                                                                                    $widgetId="p26.Expenses.TeamMember_overview_Administrator.actionButton1$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$ActionButton key="p26.Expenses.TeamMember_overview_Administrator.actionButton1"
                                                                                            $widgetId="p26.Expenses.TeamMember_overview_Administrator.actionButton1"
                                                                                            buttonId={"p26.Expenses.TeamMember_overview_Administrator.actionButton1"}
                                                                                            class={"mx-name-actionButton1 btn-block"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined}
                                                                                            renderType={"button"}
                                                                                            role={undefined}
                                                                                            buttonClass={"btn-primary"}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Edit" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            tooltip={TextProperty({
                                                                                                "value": t([
                                                                                                    ""
                                                                                                ])
                                                                                            })}
                                                                                            icon={WebIconProperty({
                                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add-circle" }
                                                                                            })}
                                                                                            action={ActionProperty({
                                                                                                "action": { "type": "openPage", "argMap": { "param$TeamMember": { "widget": "p26.Expenses.TeamMember_overview_Administrator.listView1", "source": "object" } }, "config": { "name": "Expenses/TeamMember_Edit_Administrator.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                "abortOnServerValidation": true
                                                                                            })} />
                                                                                    ]} />,
                                                                                <$ConditionalVisibilityWrapper key="p26.Expenses.TeamMember_overview_Administrator.actionButton5$visibility"
                                                                                    $widgetId="p26.Expenses.TeamMember_overview_Administrator.actionButton5$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$ActionButton key="p26.Expenses.TeamMember_overview_Administrator.actionButton5"
                                                                                            $widgetId="p26.Expenses.TeamMember_overview_Administrator.actionButton5"
                                                                                            buttonId={"p26.Expenses.TeamMember_overview_Administrator.actionButton5"}
                                                                                            class={"mx-name-actionButton5 spacing-outer-left-large"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined}
                                                                                            renderType={"button"}
                                                                                            role={undefined}
                                                                                            buttonClass={"btn-danger"}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            tooltip={TextProperty({
                                                                                                "value": t([
                                                                                                    ""
                                                                                                ])
                                                                                            })}
                                                                                            icon={WebIconProperty({
                                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-remove-circle" }
                                                                                            })}
                                                                                            action={ActionProperty({
                                                                                                "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p26.Expenses.TeamMember_overview_Administrator.listView1", "source": "object" } }, "config": { "closePage": false, "operationId": "P/z7l3VQ3lu3UlR2XUQGDg" }, "disabledDuringExecution": true },
                                                                                                "abortOnServerValidation": true
                                                                                            })} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ]} />
                                                            ]} />
                                                    ]} />
                                            ]}
                                            ariaHidden={false} />
                                    ]
                                })}
                                onClick={undefined}
                                pageSize={10} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Team member overview Administrator"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
