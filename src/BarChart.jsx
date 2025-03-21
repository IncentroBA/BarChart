import "./ui/BarChart.css";
import { createElement, useCallback, useEffect, useRef, useState } from "react";

export default function BarChart({
    context,
    chartValue,
    colors,
    customSortOrder,
    chartName,
    disableIndicators,
    legendOrientation,
    roundedCorners,
    sortAttribute,
    sortOrder,
    unit,
    unitPosition
}) {
    const [canRender, setCanRender] = useState(false);
    const containerRef = useRef([]);
    const colorArray = ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"];
    const [total, setTotal] = useState(0);
    const rounded = roundedCorners ? "barchart-chart--rounded" : null;

    const tooltipRef = useCallback(tooltipNode => {
        if (tooltipNode?.getBoundingClientRect().right >= window.innerWidth) {
            tooltipNode.classList.add("align-right");
        }
    }, []);

    function showTooltip(index) {
        index.classList.add("show-tooltip");
    }

    function hideTooltip(index) {
        index.classList.remove("show-tooltip");
    }

    useEffect(() => {
        function calcTotal() {
            const totals = [];
            context.items.map((item, index) => totals.push(Number(chartValue.get(context.items[index]).displayValue)));
            setTotal(totals.reduce((a, b) => a + b, 0));
        }
        function setSortOrder() {
            let sortInstrs = [];
            if (!customSortOrder && sortAttribute === "chartName" && chartName.sortable) {
                sortInstrs = [[chartName.id, sortOrder]];
            } else if (!customSortOrder && sortAttribute === "chartValue" && chartValue.sortable) {
                sortInstrs = [[chartValue.id, sortOrder]];
            } else if (customSortOrder && customSortOrder.sortable) {
                sortInstrs = [[customSortOrder.id, sortOrder]];
            }
            context.setSortOrder(sortInstrs);
        }

        if (context && context.status === "available" && context.items.length > 0) {
            setSortOrder();
            calcTotal();
            setCanRender(true);
        }
    }, [context, colors, customSortOrder, sortAttribute, chartName, chartValue, sortOrder]);

    if (canRender) {
        return (
            <div className="barchart-widget">
                <ul className={`barchart-legend barchart-legend--${legendOrientation}`}>
                    {context.items &&
                        context.items.map((item, index) => (
                            <li
                                key={item}
                                ref={element => (containerRef.current[index] = element)}
                                name={`barchart-legend-index-${index}`}
                                onMouseEnter={() => showTooltip(containerRef.current[index])}
                                onMouseLeave={() => hideTooltip(containerRef.current[index])}
                            >
                                <span
                                    style={{
                                        backgroundColor: `var(--barchart-color-${[index]}, ${
                                            colors[index] ? colors[index].value : colorArray[index]
                                        })`
                                    }}
                                ></span>
                                <p>{chartName.get(context.items[index]).displayValue}</p>
                            </li>
                        ))}
                </ul>
                <ul className={`barchart-chart ${rounded}`}>
                    {context.items &&
                        context.items.map((item, index) => (
                            <li
                                key={item}
                                ref={element => (containerRef.current[index] = element)}
                                name={`barchart-index-${index}`}
                                onMouseEnter={() => showTooltip(containerRef.current[index])}
                                onMouseLeave={() => hideTooltip(containerRef.current[index])}
                                style={{
                                    flex: chartValue.get(context.items[index]).displayValue,
                                    backgroundColor: `var(--barchart-color-${[index]}, ${
                                        colors[index] ? colors[index].value : colorArray[index]
                                    })`
                                }}
                            >
                                <div className="barchart-tooltip" ref={tooltipRef}>
                                    <p>
                                        <span>
                                            {unitPosition === "before" && unit && unit}
                                            {chartValue.get(context.items[index]).displayValue}
                                            {unitPosition === "after" && unit && unit}
                                        </span>{" "}
                                        {chartName.get(context.items[index]).displayValue}
                                    </p>
                                </div>
                            </li>
                        ))}
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
                            {total / 2}
                            {unitPosition === "after" && unit && unit}
                        </span>
                        <span className="barchart-indicator">
                            {unitPosition === "before" && unit && unit}
                            {total}
                            {unitPosition === "after" && unit && unit}
                        </span>
                    </div>
                )}
            </div>
        );
    } else {
        return <div className="barchart-widget"></div>;
    }
}
