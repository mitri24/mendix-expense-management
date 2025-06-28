import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ExpressionProperty } from "mendix/ExpressionProperty";

import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Expenses.Atlas_Costum.js";

const { $Container, $Div, $Text } = asPluginWidgets({ Container, Div, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Container key="p34.Expenses.Home_Web.container1"
        $widgetId="p34.Expenses.Home_Web.container1"
        class={"mx-name-container1 pageheader"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
            <$Div key="p34.Expenses.Home_Web.layoutGrid2"
                $widgetId="p34.Expenses.Home_Web.layoutGrid2"
                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p34.Expenses.Home_Web.layoutGrid2$row0"
                        $widgetId="p34.Expenses.Home_Web.layoutGrid2$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p34.Expenses.Home_Web.layoutGrid2$row0$column0"
                                $widgetId="p34.Expenses.Home_Web.layoutGrid2$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Text key="p34.Expenses.Home_Web.text1"
                                        $widgetId="p34.Expenses.Home_Web.text1"
                                        class={"mx-name-text1 pageheader-title spacing-outer-bottom"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Home" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h3"} />,
                                    <$Text key="p34.Expenses.Home_Web.text3"
                                        $widgetId="p34.Expenses.Home_Web.text3"
                                        class={"mx-name-text3 pageheader-subtitle text-detail"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Getting started:\r\n- This page is the home page of your new app.\r\n- The Domain model defines your data structure.\r\n- The MyFirstLogic microflow shows how to start building app logic. \r\nBy doing a Right-click on the MyFirstModule you can add new pages, logic, or other documents to your app.\r\n\r\nFor a quick start: https://docs.mendix.com/quickstarts\r\n\r\n" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />
                                ]} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />,
    <$Div key="p34.Expenses.Home_Web.layoutGrid1"
        $widgetId="p34.Expenses.Home_Web.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p34.Expenses.Home_Web.layoutGrid1$row0"
                $widgetId="p34.Expenses.Home_Web.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p34.Expenses.Home_Web.layoutGrid1$row0$column0"
                        $widgetId="p34.Expenses.Home_Web.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={undefined} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Homepage"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "Expenses.Atlas_Costum.Main": region$Main,
};
