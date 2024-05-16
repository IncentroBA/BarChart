import { createElement } from "react";

export function preview({
    colors,
    chartName,
    disableIndicators,
    legendOrientation,
    roundedCorners,
    unit,
    unitPosition
}) {
    const colorArray = ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"];
    const rounded = roundedCorners ? "barchart-chart--rounded" : null;

    return (
        <div className="barchart-widget">
            <ul className={`barchart-legend barchart-legend-preview--${legendOrientation}`}>
                <li name={`barchart-legend-index-1`}>
                    <span
                        style={{
                            backgroundColor: `var(--barchart-color-1, ${colors[0] ? colors[0].value : colorArray[0]})`
                        }}
                    ></span>
                    <p>{chartName}</p>
                </li>
                <li name={`barchart-legend-index-2`}>
                    <span
                        style={{
                            backgroundColor: `var(--barchart-color-2, ${colors[1] ? colors[1].value : colorArray[1]})`
                        }}
                    ></span>
                    <p>{chartName}</p>
                </li>
                <li name={`barchart-legend-index-3`}>
                    <span
                        style={{
                            backgroundColor: `var(--barchart-color-3, ${colors[2] ? colors[2].value : colorArray[2]})`
                        }}
                    ></span>
                    <p>{chartName}</p>
                </li>
            </ul>
            <ul className={`barchart-chart ${rounded}`}>
                <li
                    name={`barchart-index-1`}
                    style={{
                        flex: 3,
                        backgroundColor: `var(--barchart-color-1, ${colors[0] ? colors[0].value : colorArray[0]})`
                    }}
                ></li>
                <li
                    name={`barchart-index-2`}
                    style={{
                        flex: 2,
                        backgroundColor: `var(--barchart-color-2, ${colors[1] ? colors[1].value : colorArray[1]})`
                    }}
                ></li>
                <li
                    name={`barchart-index-3`}
                    style={{
                        flex: 1,
                        backgroundColor: `var(--barchart-color-3, ${colors[2] ? colors[2].value : colorArray[2]})`
                    }}
                ></li>
            </ul>
            {!disableIndicators && (
                <div className="barchart-meter">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
            )}
            {!disableIndicators && (
                <div className="barchart-indicators">
                    <span className="barchart-indicator">
                        {unitPosition === "before" && unit && unit}0{unitPosition === "after" && unit && unit}
                    </span>
                    <span className="barchart-indicator">
                        {unitPosition === "before" && unit && unit}
                        50
                        {unitPosition === "after" && unit && unit}
                    </span>
                    <span className="barchart-indicator">
                        {unitPosition === "before" && unit && unit}
                        100
                        {unitPosition === "after" && unit && unit}
                    </span>
                </div>
            )}
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/BarChart.css");
}
