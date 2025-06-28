import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Fragment } from "mendix/widgets/web/Fragment";
import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "./Atlas_Core.Atlas_TopBar.js";

const { $ScrollContainer, $Fragment, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, Placeholder });

const region$Main = [
    <$ScrollContainer key="l32.Expenses.Atlas_Costum.scrollContainer1"
        $widgetId="l32.Expenses.Atlas_Costum.scrollContainer1"
        class={"mx-name-scrollContainer1"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"headline"}
        top={{
            "enabled": true,
            "content": [
                <$Fragment key="l32.Expenses.Atlas_Costum.snippetCall1"
                    $widgetId="l32.Expenses.Atlas_Costum.snippetCall1"
                    content={undefined} />,
                <$Placeholder key="l32.Expenses.Atlas_Costum.Top"
                    $widgetId="l32.Expenses.Atlas_Costum.Top"
                    content={PlaceholderProperty({
                        "id": "Expenses.Atlas_Costum.Top"
                    })} />
            ],
            "sizeMode": "auto",
            "class": ""
        }}
        bottom={{
            "enabled": false
        }}
        left={{
            "enabled": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
                <$Placeholder key="l32.Expenses.Atlas_Costum.Main"
                    $widgetId="l32.Expenses.Atlas_Costum.Main"
                    content={PlaceholderProperty({
                        "id": "Expenses.Atlas_Costum.Main"
                    })} />
            ],
            "class": ""
        }} />
];

export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
