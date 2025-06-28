import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListExpressionProperty } from "mendix/ListExpressionProperty";
import { PlaceholderProperty } from "mendix/PlaceholderProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import * as LanguageSelectorWidgetModule from "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/languageselector/LanguageSelector.mjs";
const LanguageSelector = Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "LanguageSelector")?.value || Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "default")?.value;   
import "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/com/mendix/widget/web/languageselector/LanguageSelector.css";
import { NavigationTree } from "mendix/widgets/web/NavigationTree";
import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { SidebarToggle } from "mendix/widgets/web/SidebarToggle";
import * as SprintrFeedbackWidgetModule from "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets/SprintrFeedbackWidget/SprintrFeedback.mjs";
const SprintrFeedback = Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "SprintrFeedback")?.value || Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "default")?.value;   
import { addEnumerations, asPluginWidgets, t } from "mendix";

const { $ScrollContainer, $Fragment, $SprintrFeedback, $Div, $Container, $SidebarToggle, $Image, $LanguageSelector, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, SprintrFeedback, Div, Container, SidebarToggle, Image, LanguageSelector, NavigationTree, Placeholder });

const region$Main = [
    <$ScrollContainer key="l21.Atlas_Core.Atlas_Default.layoutContainer"
        $widgetId="l21.Atlas_Core.Atlas_Default.layoutContainer"
        class={"mx-name-layoutContainer"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"headline"}
        top={{
            "enabled": true,
            "content": [
                <$Fragment key="l21.Atlas_Core.Atlas_Default.snippetCall1"
                    $widgetId="l21.Atlas_Core.Atlas_Default.snippetCall1"
                    content={[
                        <$SprintrFeedback key="l21.Atlas_Core.FeedbackWidget.feedback1"
                            $widgetId="l21.Atlas_Core.FeedbackWidget.feedback1"
                            sprintrapp={"ab32e53e-5bf5-4d56-83b4-39ee6e11ad59"}
                            foreignObjectRendering={false}
                            scrollableAreaSelector={".mx-scrollcontainer-fixed > .mx-scrollcontainer-middle > .mx-scrollcontainer-wrapper"}
                            showFeedbackModalMethod={"default"}
                            showFeedbackModalAction={ActionProperty({
                                "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => require("/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/nanoflows/FeedbackModule.ACT_Open_Feedback_Modal").ACT_Open_Feedback_Modal, "allowedRoles": [] }, "disabledDuringExecution": false },
                                "argumentTypes": { }
                            })}
                            showAdvancedSettings={false}
                            title_label={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Feedback" }, "args": {} }
                                })
                            ])}
                            take_screenshot_label={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Take screenshot" }, "args": {} }
                                })
                            ])}
                            annotate_label={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Annotate" }, "args": {} }
                                })
                            ])}
                            done_label={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                                })
                            ])}
                            cancel_label={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                })
                            ])}
                            clear_label={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
                                })
                            ])}
                            userDefinedButtonStyle={"side"}
                            showInDesignMode={true}
                            class={"mx-name-feedback1"}
                            style={undefined}
                            tabIndex={undefined} />
                    ]} />,
                <$Div key="l21.Atlas_Core.Atlas_Default.layoutGrid1"
                    $widgetId="l21.Atlas_Core.Atlas_Default.layoutGrid1"
                    class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                    style={undefined}
                    content={[
                        <$Div key="l21.Atlas_Core.Atlas_Default.layoutGrid1$row0"
                            $widgetId="l21.Atlas_Core.Atlas_Default.layoutGrid1$row0"
                            class={"row"}
                            style={undefined}
                            content={[
                                <$Div key="l21.Atlas_Core.Atlas_Default.layoutGrid1$row0$column0"
                                    $widgetId="l21.Atlas_Core.Atlas_Default.layoutGrid1$row0$column0"
                                    class={"col-lg-12 col-md-12 col-12"}
                                    style={undefined}
                                    content={[
                                        <$Container key="l21.Atlas_Core.Atlas_Default.container1"
                                            $widgetId="l21.Atlas_Core.Atlas_Default.container1"
                                            class={"mx-name-container1 topbar-content"}
                                            style={undefined}
                                            renderMode={"div"}
                                            onClick={undefined}
                                            content={[
                                                <$SidebarToggle key="l21.Atlas_Core.Atlas_Default.sidebarToggle3"
                                                    $widgetId="l21.Atlas_Core.Atlas_Default.sidebarToggle3"
                                                    buttonId={"l21.Atlas_Core.Atlas_Default.sidebarToggle3"}
                                                    renderType={"button"}
                                                    buttonClass={"btn-primary"}
                                                    caption={t([
                                                        ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                    ])}
                                                    tooltip={TextProperty({
                                                        "value": t([
                                                            "Toggle Menu"
                                                        ])
                                                    })}
                                                    icon={WebIconProperty({
                                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-navigation-menu" }
                                                    })}
                                                    class={"mx-name-sidebarToggle3 toggle-btn"}
                                                    style={undefined}
                                                    tabIndex={undefined} />,
                                                <$Div key="l21.Atlas_Core.Atlas_Default.layoutGrid2"
                                                    $widgetId="l21.Atlas_Core.Atlas_Default.layoutGrid2"
                                                    class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand"}
                                                    style={undefined}
                                                    content={[
                                                        <$Div key="l21.Atlas_Core.Atlas_Default.layoutGrid2$row0"
                                                            $widgetId="l21.Atlas_Core.Atlas_Default.layoutGrid2$row0"
                                                            class={"row align-children-center"}
                                                            style={undefined}
                                                            content={[
                                                                <$Div key="l21.Atlas_Core.Atlas_Default.layoutGrid2$row0$column0"
                                                                    $widgetId="l21.Atlas_Core.Atlas_Default.layoutGrid2$row0$column0"
                                                                    class={"col-lg col-md col"}
                                                                    style={undefined}
                                                                    content={[
                                                                        <$Image key="l21.Atlas_Core.Atlas_Default.staticImage1"
                                                                            $widgetId="l21.Atlas_Core.Atlas_Default.staticImage1"
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
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
                                                                            widthUnit={"auto"}
                                                                            width={100}
                                                                            heightUnit={"auto"}
                                                                            height={100}
                                                                            iconSize={14}
                                                                            displayAs={"fullImage"}
                                                                            responsive={false}
                                                                            class={"mx-name-staticImage1"}
                                                                            style={undefined}
                                                                            tabIndex={undefined} />
                                                                    ]} />,
                                                                <$Div key="l21.Atlas_Core.Atlas_Default.layoutGrid2$row0$column1"
                                                                    $widgetId="l21.Atlas_Core.Atlas_Default.layoutGrid2$row0$column1"
                                                                    class={"col-lg-auto col-md-auto col-auto align-self-center"}
                                                                    style={undefined}
                                                                    content={[
                                                                        <$Fragment key="l21.Atlas_Core.Atlas_Default.snippetCall2"
                                                                            $widgetId="l21.Atlas_Core.Atlas_Default.snippetCall2"
                                                                            content={[
                                                                                <$LanguageSelector key="l21.Atlas_Core.LanguageSelectorWidget.languageSelector1"
                                                                                    $widgetId="l21.Atlas_Core.LanguageSelectorWidget.languageSelector1"
                                                                                    languageOptions={DatabaseObjectListProperty({
                                                                                        "dataSourceId": "l21.2",
                                                                                        "entity": "System.Language",
                                                                                        "operationId": "q1j8mQVI/lSESpMFn44tig",
                                                                                        "sort": [
                                                                                            [
                                                                                                "Description",
                                                                                                "asc"
                                                                                            ]
                                                                                        ]
                                                                                    })}
                                                                                    languageCaption={ListExpressionProperty({
                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "l21.Atlas_Core.LanguageSelectorWidget.languageSelector1", "source": "object" } } },
                                                                                        "dataSourceId": "l21.2"
                                                                                    })}
                                                                                    position={"bottom"}
                                                                                    trigger={"click"}
                                                                                    hideForSingle={false}
                                                                                    screenReaderLabelCaption={t([
                                                                                        ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                        })
                                                                                    ])}
                                                                                    class={"mx-name-languageSelector1"}
                                                                                    style={undefined}
                                                                                    tabIndex={undefined} />
                                                                            ]} />
                                                                    ]} />
                                                            ]} />
                                                    ]} />
                                            ]}
                                            ariaHidden={false} />
                                    ]} />
                            ]} />
                    ]} />
            ],
            "sizeMode": "auto",
            "class": "region-topbar"
        }}
        bottom={{
            "enabled": false
        }}
        left={{
            "enabled": true,
            "content": [
                <$NavigationTree key="l21.Atlas_Core.Atlas_Default.navigationTree3"
                    $widgetId="l21.Atlas_Core.Atlas_Default.navigationTree3"
                    class={"mx-name-navigationTree3"}
                    style={undefined}
                    menu={[
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Home"
                                ])
                            }),
                            "icon": WebIconProperty({
                                "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                            }),
                            "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "Expenses/Home_Web.page.xml", "location": "content", "allowedRoles": [ "Requestor" ] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                            })
                        },
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Team Members"
                                ])
                            }),
                            "icon": WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user-neutral-group" }
                            }),
                            "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "Expenses/TeamMember_overview_Administrator.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                            })
                        },
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Sign out"
                                ])
                            }),
                            "icon": WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-logout" }
                            }),
                            "action": ActionProperty({
                                "action": { "type": "signOut", "argMap": {}, "config": { "namedUser": true }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                            })
                        }
                    ]} />
            ],
            "sizeMode": "pixels",
            "sizeValue": 232,
            "class": "region-sidebar",
            "toggleMode": "shrink",
            "initiallyOpen": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
                <$Placeholder key="l21.Atlas_Core.Atlas_Default.Main"
                    $widgetId="l21.Atlas_Core.Atlas_Default.Main"
                    content={PlaceholderProperty({
                        "id": "Atlas_Core.Atlas_Default.Main"
                    })} />
            ],
            "class": "region-content"
        }} />
];

export const content = {
    "Main": region$Main,
};
