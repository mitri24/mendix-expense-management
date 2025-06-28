import { reactExports, asPluginWidgets, selectTranslation } from '../index-UACZNrBd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DHtf5l1V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-DV0c4BuZ.js';
import { DatabaseObjectListProperty } from '../CTcC6PjV-B-x7hXp6.js';
import { ListAttributeProperty } from '../ListAttributeProperty-B_FVRtoG.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BQpdF_32.js';
import { WebDynamicImageProperty } from '../WebDynamicImageProperty-BpIKW97h.js';
import { WebIconProperty } from '../WebIconProperty-Dp1h0TWT.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-Co3mfJiM.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CvgwjdAQ.js';
import { ImageWidgetModule, Container, Text } from '../Text-Hz4G3gHr.js';
import { Div } from '../Div-Dhe9jsr5.js';
import { ListView } from '../ListView-oH4y20_d.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-BrA-9v8O.js';
import '../uEIG9e6s-DbIaJy7J.js';
import '../BQKVXLaf-mvtyIvU3.js';
import '../InlineText-edXOhouE.js';
import '../SprintrFeedback-CHsxspHz.js';
import '../ListExpressionProperty-2EKdiBPA.js';

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $ListView, $Image } = asPluginWidgets({ Div, Container, Text, ConditionalVisibilityWrapper, ActionButton, ListView, Image });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2",
      $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row0",
            $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row0$column0",
                  $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p26.Expenses.TeamMember_overview_Administrator.container1",
                        $widgetId: "p26.Expenses.TeamMember_overview_Administrator.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid3",
                              $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid3",
                              class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid pageheader",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0",
                                    $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0$column0",
                                          $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p26.Expenses.TeamMember_overview_Administrator.text40",
                                                $widgetId: "p26.Expenses.TeamMember_overview_Administrator.text40",
                                                class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Team Member Management\n" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "h1"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p26.Expenses.TeamMember_overview_Administrator.actionButton6$visibility",
                                                $widgetId: "p26.Expenses.TeamMember_overview_Administrator.actionButton6$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p26.Expenses.TeamMember_overview_Administrator.actionButton6",
                                                      $widgetId: "p26.Expenses.TeamMember_overview_Administrator.actionButton6",
                                                      buttonId: "p26.Expenses.TeamMember_overview_Administrator.actionButton6",
                                                      class: "mx-name-actionButton6",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      renderType: "button",
                                                      role: void 0,
                                                      buttonClass: "btn-default",
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "New Team Members" }, "args": {} }
                                                        })
                                                      ]),
                                                      tooltip: TextProperty({
                                                        "value": selectTranslation([
                                                          ""
                                                        ])
                                                      }),
                                                      icon: void 0,
                                                      action: ActionProperty({
                                                        "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "WF3QI2dxlFCq+ZkV6HfObg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                        "abortOnServerValidation": true
                                                      })
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0$column1",
                                          $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid3$row0$column1",
                                          class: "col-lg-auto col-md-auto col-auto",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p26.Expenses.TeamMember_overview_Administrator.actionButton2",
                                                $widgetId: "p26.Expenses.TeamMember_overview_Administrator.actionButton2",
                                                buttonId: "p26.Expenses.TeamMember_overview_Administrator.actionButton2",
                                                class: "mx-name-actionButton2",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-primary",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Action" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: void 0
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p26.Expenses.TeamMember_overview_Administrator.actionButton3",
                                                $widgetId: "p26.Expenses.TeamMember_overview_Administrator.actionButton3",
                                                buttonId: "p26.Expenses.TeamMember_overview_Administrator.actionButton3",
                                                class: "mx-name-actionButton3 spacing-outer-left",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Action" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: void 0
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
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row1",
            $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row1$column0",
                  $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid2$row1$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ListView,
                      {
                        key: "p26.Expenses.TeamMember_overview_Administrator.listView1",
                        $widgetId: "p26.Expenses.TeamMember_overview_Administrator.listView1",
                        class: "mx-name-listView1 lv-col-md-4",
                        style: void 0,
                        listValue: DatabaseObjectListProperty({
                          "dataSourceId": "p26.6",
                          "entity": "Expenses.TeamMember",
                          "operationId": "Ya/Skx6w5VG2IZ7aeTIUig",
                          "sort": [
                            [
                              "Expenses.TeamMember_Profilpicture/Expenses.Profilpicture/System.owner/System.User/System.owner/System.User/System.changedBy/Expenses.TeamMember/FullName",
                              "asc"
                            ]
                          ]
                        }),
                        searchAttributes: [
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
                        ],
                        itemTemplate: TemplatedWidgetProperty({
                          "dataSourceId": "p26.6",
                          "editable": false,
                          "children": () => [
                            /* @__PURE__ */ React.createElement(
                              $Container,
                              {
                                key: "p26.Expenses.TeamMember_overview_Administrator.container13",
                                $widgetId: "p26.Expenses.TeamMember_overview_Administrator.container13",
                                class: "mx-name-container13 card spacing-outer-bottom-medium",
                                style: void 0,
                                renderMode: "div",
                                onClick: void 0,
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid1",
                                      $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid1",
                                      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-bottom-large",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Div,
                                          {
                                            key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0",
                                            $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0",
                                            class: "row align-children-center",
                                            style: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0$column0",
                                                  $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0$column0",
                                                  class: "col-lg-auto col-md-auto col-auto align-self-center",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "p26.Expenses.TeamMember_overview_Administrator.image1",
                                                        $widgetId: "p26.Expenses.TeamMember_overview_Administrator.image1",
                                                        datasource: "image",
                                                        imageObject: WebDynamicImageProperty({
                                                          "scope": "p26.Expenses.TeamMember_overview_Administrator.listView1",
                                                          "showAsThumbnail": false,
                                                          "shareObject": false,
                                                          "path": "Expenses.TeamMember_Profilpicture/Expenses.Profilpicture"
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
                                                        widthUnit: "pixels",
                                                        width: 80,
                                                        heightUnit: "pixels",
                                                        height: 80,
                                                        iconSize: 14,
                                                        displayAs: "thumbnail",
                                                        responsive: false,
                                                        class: "mx-name-image1 Img-circle",
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
                                                  key: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0$column1",
                                                  $widgetId: "p26.Expenses.TeamMember_overview_Administrator.layoutGrid1$row0$column1",
                                                  class: "col-lg col-md col",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p26.Expenses.TeamMember_overview_Administrator.text10",
                                                        $widgetId: "p26.Expenses.TeamMember_overview_Administrator.text10",
                                                        class: "mx-name-text10 spacing-outer-bottom-none",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "List item title" }, "args": {} }
                                                          })
                                                        ]),
                                                        renderMode: "h4"
                                                      }
                                                    ),
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p26.Expenses.TeamMember_overview_Administrator.text41",
                                                        $widgetId: "p26.Expenses.TeamMember_overview_Administrator.text41",
                                                        class: "mx-name-text41 spacing-outer-bottom-none",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Secondary text" }, "args": {} }
                                                          })
                                                        ]),
                                                        renderMode: "p"
                                                      }
                                                    ),
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p26.Expenses.TeamMember_overview_Administrator.container2",
                                                        $widgetId: "p26.Expenses.TeamMember_overview_Administrator.container2",
                                                        class: "mx-name-container2 Spacing-outer-bottom-large row-left",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p26.Expenses.TeamMember_overview_Administrator.actionButton1$visibility",
                                                              $widgetId: "p26.Expenses.TeamMember_overview_Administrator.actionButton1$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ActionButton,
                                                                  {
                                                                    key: "p26.Expenses.TeamMember_overview_Administrator.actionButton1",
                                                                    $widgetId: "p26.Expenses.TeamMember_overview_Administrator.actionButton1",
                                                                    buttonId: "p26.Expenses.TeamMember_overview_Administrator.actionButton1",
                                                                    class: "mx-name-actionButton1 btn-block",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    renderType: "button",
                                                                    role: void 0,
                                                                    buttonClass: "btn-primary",
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Edit" }, "args": {} }
                                                                      })
                                                                    ]),
                                                                    tooltip: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    icon: WebIconProperty({
                                                                      "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add-circle" }
                                                                    }),
                                                                    action: ActionProperty({
                                                                      "action": { "type": "openPage", "argMap": { "param$TeamMember": { "widget": "p26.Expenses.TeamMember_overview_Administrator.listView1", "source": "object" } }, "config": { "name": "Expenses/TeamMember_Edit_Administrator.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                      "abortOnServerValidation": true
                                                                    })
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p26.Expenses.TeamMember_overview_Administrator.actionButton5$visibility",
                                                              $widgetId: "p26.Expenses.TeamMember_overview_Administrator.actionButton5$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ActionButton,
                                                                  {
                                                                    key: "p26.Expenses.TeamMember_overview_Administrator.actionButton5",
                                                                    $widgetId: "p26.Expenses.TeamMember_overview_Administrator.actionButton5",
                                                                    buttonId: "p26.Expenses.TeamMember_overview_Administrator.actionButton5",
                                                                    class: "mx-name-actionButton5 spacing-outer-left-large",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    renderType: "button",
                                                                    role: void 0,
                                                                    buttonClass: "btn-danger",
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                                      })
                                                                    ]),
                                                                    tooltip: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    icon: WebIconProperty({
                                                                      "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-remove-circle" }
                                                                    }),
                                                                    action: ActionProperty({
                                                                      "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p26.Expenses.TeamMember_overview_Administrator.listView1", "source": "object" } }, "config": { "closePage": false, "operationId": "P/z7l3VQ3lu3UlR2XUQGDg" }, "disabledDuringExecution": true },
                                                                      "abortOnServerValidation": true
                                                                    })
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
                                ariaHidden: false
                              }
                            )
                          ]
                        }),
                        onClick: void 0,
                        pageSize: 10
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
  "Team member overview Administrator"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
