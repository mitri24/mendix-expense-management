import { reactExports, jsxRuntimeExports, classNames, asPluginWidgets, Fragment, selectTranslation, PlaceholderProperty } from './index-UACZNrBd.js';
import { useMenuActiveItem, preProcessMenus, createAnchor, LanguageSelectorWidgetModule, SprintrFeedbackWidgetModule, SidebarToggle, NavigationTree, require$$0 } from './SprintrFeedback-CHsxspHz.js';
import { ActionProperty, TextProperty } from './ActionButton-DV0c4BuZ.js';
import { DatabaseObjectListProperty } from './CTcC6PjV-B-x7hXp6.js';
import { ScrollContainer, Placeholder, ExpressionProperty } from './ScrollContainer-DHtf5l1V.js';
import { ListExpressionProperty } from './ListExpressionProperty-2EKdiBPA.js';
import { WebIconProperty } from './WebIconProperty-Dp1h0TWT.js';
import { WebStaticImageProperty } from './WebStaticImageProperty-Co3mfJiM.js';
import { ImageWidgetModule, Container } from './Text-Hz4G3gHr.js';
import { Div } from './Div-Dhe9jsr5.js';

function MenuBar(props) {
  const [activeItemId, setActiveItem] = useMenuActiveItem(), [expandedItemId, setExpandedItemId] = reactExports.useState();
  function onClick(menu) {
    menu.items?.length ? setExpandedItemId((oldExpanded) => oldExpanded !== menu.stableId ? menu.stableId : void 0) : (setActiveItem(menu), setExpandedItemId(void 0));
  }
  return reactExports.useEffect(() => {
    const onGlobalClick = () => setExpandedItemId(void 0);
    return document.addEventListener("click", onGlobalClick), () => document.removeEventListener("click", onGlobalClick);
  }, []), jsxRuntimeExports.jsx("div", { className: classNames("navbar", "navbar-default", "mx-navbar", props.class), style: props.style, tabIndex: -1, children: jsxRuntimeExports.jsx("ul", { className: "nav navbar-nav", role: "menu", children: preProcessMenus(props.menu).map((menu, index) => {
    const hasChildren = Boolean(menu.items?.length);
    return jsxRuntimeExports.jsxs("li", { className: classNames("mx-navbar-item", { dropdown: hasChildren, active: activeItemId === menu.stableId, open: expandedItemId === menu.stableId }), role: "none", children: [createAnchor(props.name, menu, expandedItemId === menu.stableId, onClick, hasChildren ? { children: jsxRuntimeExports.jsx("b", { className: "caret" }) } : {}), hasChildren && jsxRuntimeExports.jsx("ul", { className: "dropdown-menu mx-navbar-submenu", role: "menu", children: menu.items.map((subMenu, subIndex) => jsxRuntimeExports.jsx("li", { className: classNames("mx-navbar-subitem", { active: activeItemId === subMenu.stableId }), role: "none", children: createAnchor(props.name, subMenu, false, onClick) }, subIndex)) })] }, index);
  }) }) });
}

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const LanguageSelector = Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "LanguageSelector")?.value || Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "default")?.value;
const SprintrFeedback = Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "SprintrFeedback")?.value || Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "default")?.value;
const { $ScrollContainer, $Fragment, $SprintrFeedback, $Div, $Container, $SidebarToggle, $Image, $MenuBar, $LanguageSelector, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, SprintrFeedback, Div, Container, SidebarToggle, Image, MenuBar, LanguageSelector, NavigationTree, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l22.Atlas_Core.Atlas_TopBar.layoutContainer",
      $widgetId: "l22.Atlas_Core.Atlas_TopBar.layoutContainer",
      class: "mx-name-layoutContainer",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "sidebar",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $Fragment,
            {
              key: "l22.Atlas_Core.Atlas_TopBar.snippetCall1",
              $widgetId: "l22.Atlas_Core.Atlas_TopBar.snippetCall1",
              content: [
                /* @__PURE__ */ React.createElement(
                  $SprintrFeedback,
                  {
                    key: "l22.Atlas_Core.FeedbackWidget.feedback1",
                    $widgetId: "l22.Atlas_Core.FeedbackWidget.feedback1",
                    sprintrapp: "ab32e53e-5bf5-4d56-83b4-39ee6e11ad59",
                    foreignObjectRendering: false,
                    scrollableAreaSelector: ".mx-scrollcontainer-fixed > .mx-scrollcontainer-middle > .mx-scrollcontainer-wrapper",
                    showFeedbackModalMethod: "default",
                    showFeedbackModalAction: ActionProperty({
                      "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => require$$0.ACT_Open_Feedback_Modal, "allowedRoles": [] }, "disabledDuringExecution": false },
                      "argumentTypes": {}
                    }),
                    showAdvancedSettings: false,
                    title_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Feedback" }, "args": {} }
                      })
                    ]),
                    take_screenshot_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Take screenshot" }, "args": {} }
                      })
                    ]),
                    annotate_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Annotate" }, "args": {} }
                      })
                    ]),
                    done_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                      })
                    ]),
                    cancel_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                      })
                    ]),
                    clear_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
                      })
                    ]),
                    userDefinedButtonStyle: "side",
                    showInDesignMode: true,
                    class: "mx-name-feedback1",
                    style: void 0,
                    tabIndex: void 0
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Div,
            {
              key: "l22.Atlas_Core.Atlas_TopBar.layoutGrid1",
              $widgetId: "l22.Atlas_Core.Atlas_TopBar.layoutGrid1",
              class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
              style: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Div,
                  {
                    key: "l22.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    $widgetId: "l22.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    class: "row",
                    style: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $Div,
                        {
                          key: "l22.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          $widgetId: "l22.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          class: "col-lg-12 col-md-12 col-12",
                          style: void 0,
                          content: [
                            /* @__PURE__ */ React.createElement(
                              $Container,
                              {
                                key: "l22.Atlas_Core.Atlas_TopBar.container2",
                                $widgetId: "l22.Atlas_Core.Atlas_TopBar.container2",
                                class: "mx-name-container2 topbar-content",
                                style: void 0,
                                renderMode: "div",
                                onClick: void 0,
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $SidebarToggle,
                                    {
                                      key: "l22.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      $widgetId: "l22.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      buttonId: "l22.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      renderType: "button",
                                      buttonClass: "btn-primary",
                                      caption: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })
                                      ]),
                                      tooltip: TextProperty({
                                        "value": selectTranslation([
                                          "Toggle Menu"
                                        ])
                                      }),
                                      icon: WebIconProperty({
                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-navigation-menu" }
                                      }),
                                      class: "mx-name-sidebarToggle3 toggle-btn",
                                      style: void 0,
                                      tabIndex: void 0
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      $widgetId: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Div,
                                          {
                                            key: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            $widgetId: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            class: "row align-children-center",
                                            style: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  $widgetId: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "l22.Atlas_Core.Atlas_TopBar.staticImage1",
                                                        $widgetId: "l22.Atlas_Core.Atlas_TopBar.staticImage1",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
                                                        }),
                                                        defaultImageDynamic: void 0,
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
                                                        widthUnit: "auto",
                                                        width: 100,
                                                        heightUnit: "auto",
                                                        height: 100,
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: false,
                                                        class: "mx-name-staticImage1",
                                                        style: void 0,
                                                        tabIndex: void 0
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  $widgetId: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  class: "col-lg col-md col",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $MenuBar,
                                                      {
                                                        key: "l22.Atlas_Core.Atlas_TopBar.menuBar1",
                                                        $widgetId: "l22.Atlas_Core.Atlas_TopBar.menuBar1",
                                                        class: "mx-name-menuBar1 hidden-xs hide-icons",
                                                        style: void 0,
                                                        menu: [
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Home"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "Expenses/Home_Web.page.xml", "location": "content", "allowedRoles": ["Requestor"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Team Members"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user-neutral-group" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "Expenses/TeamMember_overview_Administrator.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
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
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  $widgetId: "l22.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Fragment,
                                                      {
                                                        key: "l22.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        $widgetId: "l22.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $LanguageSelector,
                                                            {
                                                              key: "l22.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              $widgetId: "l22.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              languageOptions: DatabaseObjectListProperty({
                                                                "dataSourceId": "l22.2",
                                                                "entity": "System.Language",
                                                                "operationId": "jDCr5tRTy1yFnr1jymWTJw",
                                                                "sort": [
                                                                  [
                                                                    "Description",
                                                                    "asc"
                                                                  ]
                                                                ]
                                                              }),
                                                              languageCaption: ListExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "l22.Atlas_Core.LanguageSelectorWidget.languageSelector1", "source": "object" } } },
                                                                "dataSourceId": "l22.2"
                                                              }),
                                                              position: "bottom",
                                                              trigger: "click",
                                                              hideForSingle: false,
                                                              screenReaderLabelCaption: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                })
                                                              ]),
                                                              class: "mx-name-languageSelector1",
                                                              style: void 0,
                                                              tabIndex: void 0
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
                                ],
                                ariaHidden: false
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
        "sizeMode": "auto",
        "class": "region-topbar"
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $NavigationTree,
            {
              key: "l22.Atlas_Core.Atlas_TopBar.navigationTree1",
              $widgetId: "l22.Atlas_Core.Atlas_TopBar.navigationTree1",
              class: "mx-name-navigationTree1",
              style: void 0,
              menu: [
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Home"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "Expenses/Home_Web.page.xml", "location": "content", "allowedRoles": ["Requestor"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Team Members"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user-neutral-group" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "Expenses/TeamMember_overview_Administrator.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
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
              ]
            }
          )
        ],
        "sizeMode": "pixels",
        "sizeValue": 320,
        "class": "region-sidebar",
        "toggleMode": "push",
        "initiallyOpen": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l22.Atlas_Core.Atlas_TopBar.Main",
              $widgetId: "l22.Atlas_Core.Atlas_TopBar.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.Atlas_TopBar.Main"
              })
            }
          )
        ],
        "class": "region-content"
      }
    }
  )
];
const content = {
  "Main": region$Main
};

export { content };
