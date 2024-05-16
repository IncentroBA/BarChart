## BarChart

Display a simple single-line percentage divided bar chart.

## Features

-   The chart can be sorted by `name`, `value`, or can be assigned a custom sort order `integer`.
-   Assign your own colors for the BarChart.
-   Legend orientation: `horizontal`, `vertical`
-   Define a unit type for the chart (€, %, kg, ...) and display this before/after the value.

## Usage

General

-   Assign a data source context.
-   Assign `integer` value attribute.
-   Assign `string` name attribute.

Sorting

-   specify desired sorting settings

Colors

-   The chart comes with default colors. Here you can overwrite those with a list of your own.

Visual details

-   Set some visual aspects to your own needs

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
