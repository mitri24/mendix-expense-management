import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { addEnumerations, asPluginWidgets, t } from "mendix";

const { $ScrollContainer, $Placeholder } = asPluginWidgets({ ScrollContainer, Placeholder });

const region$Main = [
    <$ScrollContainer key="l35.Expenses.Atlas_Login.scrollContainer1"
        $widgetId="l35.Expenses.Atlas_Login.scrollContainer1"
        class={"mx-name-scrollContainer1"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"headline"}
        top={{
            "enabled": false
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
                <$Placeholder key="l35.Expenses.Atlas_Login.Main"
                    $widgetId="l35.Expenses.Atlas_Login.Main"
                    content={PlaceholderProperty({
                        "id": "Expenses.Atlas_Login.Main"
                    })} />
            ],
            "class": ""
        }} />
];

export const content = {
    "Main": region$Main,
};
