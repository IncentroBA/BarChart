import "./ui/BarChart.css";
import { createElement, useEffect, useRef, useCallback, useState } from "react";

export default function BarChart({ context, chartValue, colors, chartName }) {
    const [canRender, setCanRender] = useState(false);
    const containerRef = useRef([]);
    const colorArray = ["#78909C", "#90A4AE", "#B0BEC5", "#CFD8DC", "#ECEFF1", "#607D8B"];

    const tooltipRef = useCallback(tooltipNode => {
        if (tooltipNode.getBoundingClientRect().right >= window.innerWidth) {
            tooltipNode.classList.add("align-right");
        }
    }, []);

    useEffect(() => {
        if (context && context.status === "available" && context.items.length > 0) {
            setCanRender(true);
        }
    }, [context, colors]);

    function showTooltip(index) {
        index.classList.add("show-tooltip");
    }

    function hideTooltip(index) {
        index.classList.remove("show-tooltip");
    }

    if (canRender) {
        return (
            <div className="barchart-widget">
                <ul className="barchart-legend">
                    {context.items.map((item, index) => (
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
                <ul className="barchart-chart">
                    {context.items.map((item, index) => (
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
                                    <span>{chartValue.get(context.items[index]).displayValue}% </span>
                                    {chartName.get(context.items[index]).displayValue}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
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
                <div className="barchart-indicators">
                    <span className="barchart-indicator">0%</span>
                    <span className="barchart-indicator">50%</span>
                    <span className="barchart-indicator">100%</span>
                </div>
            </div>
        );
    } else {
        return <div className="barchart-widget"></div>;
    }
}
