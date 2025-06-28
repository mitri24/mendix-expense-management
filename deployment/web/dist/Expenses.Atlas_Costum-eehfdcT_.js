import { reactExports, asPluginWidgets, Fragment, PlaceholderProperty } from './index-UACZNrBd.js';
import './SprintrFeedback-CHsxspHz.js';
import { ScrollContainer, Placeholder } from './ScrollContainer-DHtf5l1V.js';
import { content as content$1 } from './Atlas_Core.Atlas_TopBar-BrA-9v8O.js';

const React = { createElement: reactExports.createElement };
const { $ScrollContainer, $Fragment, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l32.Expenses.Atlas_Costum.scrollContainer1",
      $widgetId: "l32.Expenses.Atlas_Costum.scrollContainer1",
      class: "mx-name-scrollContainer1",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $Fragment,
            {
              key: "l32.Expenses.Atlas_Costum.snippetCall1",
              $widgetId: "l32.Expenses.Atlas_Costum.snippetCall1",
              content: void 0
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l32.Expenses.Atlas_Costum.Top",
              $widgetId: "l32.Expenses.Atlas_Costum.Top",
              content: PlaceholderProperty({
                "id": "Expenses.Atlas_Costum.Top"
              })
            }
          )
        ],
        "sizeMode": "auto",
        "class": ""
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l32.Expenses.Atlas_Costum.Main",
              $widgetId: "l32.Expenses.Atlas_Costum.Main",
              content: PlaceholderProperty({
                "id": "Expenses.Atlas_Costum.Main"
              })
            }
          )
        ],
        "class": ""
      }
    }
  )
];
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { content };
