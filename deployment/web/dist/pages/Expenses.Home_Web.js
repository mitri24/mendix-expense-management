import { reactExports, asPluginWidgets, selectTranslation } from '../index-UACZNrBd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DHtf5l1V.js';
import { Container, Text } from '../Text-Hz4G3gHr.js';
import { Div } from '../Div-Dhe9jsr5.js';
import { content as content$1 } from '../Expenses.Atlas_Costum-eehfdcT_.js';
import '../InlineText-edXOhouE.js';
import '../SprintrFeedback-CHsxspHz.js';
import '../ActionButton-DV0c4BuZ.js';
import '../Atlas_Core.Atlas_TopBar-BrA-9v8O.js';
import '../CTcC6PjV-B-x7hXp6.js';
import '../uEIG9e6s-DbIaJy7J.js';
import '../ListExpressionProperty-2EKdiBPA.js';
import '../WebIconProperty-Dp1h0TWT.js';
import '../WebStaticImageProperty-Co3mfJiM.js';

const React = { createElement: reactExports.createElement };
const { $Container, $Div, $Text } = asPluginWidgets({ Container, Div, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p34.Expenses.Home_Web.container1",
      $widgetId: "p34.Expenses.Home_Web.container1",
      class: "mx-name-container1 pageheader",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p34.Expenses.Home_Web.layoutGrid2",
            $widgetId: "p34.Expenses.Home_Web.layoutGrid2",
            class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p34.Expenses.Home_Web.layoutGrid2$row0",
                  $widgetId: "p34.Expenses.Home_Web.layoutGrid2$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p34.Expenses.Home_Web.layoutGrid2$row0$column0",
                        $widgetId: "p34.Expenses.Home_Web.layoutGrid2$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p34.Expenses.Home_Web.text1",
                              $widgetId: "p34.Expenses.Home_Web.text1",
                              class: "mx-name-text1 pageheader-title spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Home" }, "args": {} }
                                })
                              ]),
                              renderMode: "h3"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p34.Expenses.Home_Web.text3",
                              $widgetId: "p34.Expenses.Home_Web.text3",
                              class: "mx-name-text3 pageheader-subtitle text-detail",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Getting started:\r\n- This page is the home page of your new app.\r\n- The Domain model defines your data structure.\r\n- The MyFirstLogic microflow shows how to start building app logic. \r\nBy doing a Right-click on the MyFirstModule you can add new pages, logic, or other documents to your app.\r\n\r\nFor a quick start: https://docs.mendix.com/quickstarts\r\n\r\n" }, "args": {} }
                                })
                              ]),
                              renderMode: "p"
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
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p34.Expenses.Home_Web.layoutGrid1",
      $widgetId: "p34.Expenses.Home_Web.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p34.Expenses.Home_Web.layoutGrid1$row0",
            $widgetId: "p34.Expenses.Home_Web.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p34.Expenses.Home_Web.layoutGrid1$row0$column0",
                  $widgetId: "p34.Expenses.Home_Web.layoutGrid1$row0$column0",
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
]);
const title = selectTranslation([
  "Homepage"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Expenses.Atlas_Costum.Main": region$Main
};

export { classes, content, style, title };
