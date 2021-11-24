import "./ui/BarChart.css";
import { createElement, useEffect, useRef, useState } from "react";

export default function BarChart({ context, chartValue, colors, chartName }) {
    const [canRender, setCanRender] = useState(false);
    const containerRef = useRef([]);

    useEffect(() => {
        if (context && context.status === "available" && context.items.length > 0) {
            setCanRender(true);
        }
    }, [context, colors]);

    if (canRender) {
        return (
            <div className="barchart-widget">
                <ul className="barchart-legend">
                    {context.items.map((item, index) => (
                        <li
                            key={item}
                            ref={element => (containerRef.current[index] = element)}
                            name={`barchart-legend-index-${index}`}
                        >
                            <span style={{ backgroundColor: colors[index] && colors[index].value }}></span>
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
                            style={{
                                flex: chartValue.get(context.items[index]).displayValue,
                                backgroundColor: colors[index] && colors[index].value
                            }}
                        >
                            {chartValue.get(context.items[index]).displayValue >= 5 && (
                                <span>{chartValue.get(context.items[index]).displayValue}%</span>
                            )}
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
