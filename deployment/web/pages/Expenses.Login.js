import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import * as ImageWidgetModule from "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Expenses.Atlas_Costum.js";

const { $Div, $Image, $Container, $Text } = asPluginWidgets({ Div, Image, Container, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p33.Expenses.Login.layoutGrid1"
        $widgetId="p33.Expenses.Login.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-none h-100"}
        style={undefined}
        content={[
            <$Div key="p33.Expenses.Login.layoutGrid1$row0"
                $widgetId="p33.Expenses.Login.layoutGrid1$row0"
                class={"row no-gutters h-100"}
                style={undefined}
                content={[
                    <$Div key="p33.Expenses.Login.layoutGrid1$row0$column0"
                        $widgetId="p33.Expenses.Login.layoutGrid1$row0$column0"
                        class={"col-lg col-md col-auto align-self-center h-100"}
                        style={undefined}
                        content={[
                            <$Image key="p33.Expenses.Login.image1"
                                $widgetId="p33.Expenses.Login.image1"
                                datasource={"image"}
                                imageObject={WebStaticImageProperty({
                                    "image": { "uri": "img/Atlas_Web_Content$Content$PT_DetailFullScreenImage_Waves.png" }
                                })}
                                defaultImageDynamic={undefined}
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
                                width={100}
                                heightUnit={"auto"}
                                height={100}
                                iconSize={14}
                                displayAs={"fullImage"}
                                responsive={false}
                                class={"mx-name-image1 img-auto hide-phone"}
                                style={undefined}
                                tabIndex={undefined} />
                        ]} />,
                    <$Div key="p33.Expenses.Login.layoutGrid1$row0$column1"
                        $widgetId="p33.Expenses.Login.layoutGrid1$row0$column1"
                        class={"col-lg col-md col-12 col-center h-100"}
                        style={undefined}
                        content={[
                            <$Div key="p33.Expenses.Login.layoutGrid2"
                                $widgetId="p33.Expenses.Login.layoutGrid2"
                                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-large"}
                                style={undefined}
                                content={[
                                    <$Div key="p33.Expenses.Login.layoutGrid2$row0"
                                        $widgetId="p33.Expenses.Login.layoutGrid2$row0"
                                        class={"row no-gutters"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p33.Expenses.Login.layoutGrid2$row0$column0"
                                                $widgetId="p33.Expenses.Login.layoutGrid2$row0$column0"
                                                class={"col-lg col-md col"}
                                                style={undefined}
                                                content={[
                                                    <$Container key="p33.Expenses.Login.container1"
                                                        $widgetId="p33.Expenses.Login.container1"
                                                        class={"mx-name-container1 pageheader col-left pull-left spacing-outer-bottom-large"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p33.Expenses.Login.text40"
                                                                $widgetId="p33.Expenses.Login.text40"
                                                                class={"mx-name-text40 pageheader-title spacing-outer-bottom pull-left"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Welcome to North Sea Shipbuilders Expenses" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"h1"} />,
                                                            <$Text key="p33.Expenses.Login.text39"
                                                                $widgetId="p33.Expenses.Login.text39"
                                                                class={"mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-none"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Supporting text" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"p"} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]} />,
                                    <$Div key="p33.Expenses.Login.layoutGrid2$row1"
                                        $widgetId="p33.Expenses.Login.layoutGrid2$row1"
                                        class={"row no-gutters"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p33.Expenses.Login.layoutGrid2$row1$column0"
                                                $widgetId="p33.Expenses.Login.layoutGrid2$row1$column0"
                                                class={"col-lg col-md col"}
                                                style={undefined}
                                                content={undefined} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Login"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "Expenses.Atlas_Costum.Main": region$Main,
};
