define(['react'], (function (react) { 'use strict';

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".barchart-widget {\n    margin-bottom: 24px;\n    position: relative;\n}\n\n.barchart-widget .barchart-legend {\n    margin-bottom: 30px;\n    padding: 0;\n}\n\n.barchart-widget .barchart-legend--horizontal {\n    display: grid;\n    gap: 8px ​16px;\n    grid-template-columns: repeat(auto-fit, 250px);\n}\n\n.barchart-widget .barchart-legend--vertical {\n    display: flex;\n    flex-direction: column;\n    width: max-content;\n}\n\n.barchart-widget .barchart-legend li {\n    align-items: center;\n    display: flex;\n    list-style: none;\n}\n\n.barchart-widget .barchart-legend li:hover {\n    cursor: pointer;\n}\n\n.barchart-widget .barchart-legend p {\n    margin: 0;\n}\n\n.barchart-widget .barchart-legend span {\n    border-radius: 50px;\n    display: block;\n    height: 16px;\n    margin-right: 8px;\n    width: 16px;\n}\n\n.barchart-widget .barchart-chart {\n    align-self: center;\n    display: flex;\n    grid-template-columns: repeat(100, 1fr);\n    grid-auto-flow: column;\n    margin: 0;\n    padding: 0;\n}\n\n.barchart-widget .barchart-chart li {\n    list-style: none;\n    min-height: 20px;\n    position: relative;\n}\n\n.barchart-widget .barchart-chart.barchart-chart--rounded li:first-of-type {\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n}\n\n.barchart-widget .barchart-chart.barchart-chart--rounded li:last-of-type {\n    border-top-right-radius: 50px;\n    border-bottom-right-radius: 50px;\n}\n\n.barchart-widget .barchart-chart li:hover {\n    cursor: pointer;\n}\n\n.barchart-widget .barchart-chart li .barchart-tooltip {\n    background-color: white;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);\n    border-radius: 4px;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.2s ease, transform 0.2s ease;\n    will-change: opacity;\n    width: max-content;\n    z-index: 1;\n}\n\n.barchart-widget .barchart-chart li .barchart-tooltip.align-right {\n    right: 0;\n}\n\n.barchart-widget .barchart-chart li .barchart-tooltip p {\n    margin: 0;\n    padding: 4px 8px;\n}\n\n.barchart-widget .barchart-chart li.show-tooltip .barchart-tooltip {\n    opacity: 1;\n    transform: translateY(-60%);\n}\n\n.barchart-widget .barchart-meter {\n    border-top: solid 1px black;\n    display: flex;\n    justify-content: space-between;\n}\n\n.barchart-widget .barchart-meter .item {\n    background-color: black;\n    height: 9px;\n    width: 1px;\n}\n\n.barchart-widget .barchart-indicators {\n    display: flex;\n}\n\n.barchart-widget .barchart-indicator {\n    flex: 1;\n}\n\n.barchart-widget .barchart-indicator:nth-child(2) {\n    text-align: center;\n}\n\n.barchart-widget .barchart-indicator:last-of-type {\n    text-align: right;\n}\n\n.barchart-widget .barchart-tooltip {\n    position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhckNoYXJ0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixrREFBa0Q7SUFDbEQsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6IkJhckNoYXJ0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJjaGFydC13aWRnZXQge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1sZWdlbmQge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtbGVnZW5kLS1ob3Jpem9udGFsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogOHB4IOKAizE2cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDI1MHB4KTtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtbGVnZW5kLS12ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtbGVnZW5kIGxpIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtbGVnZW5kIGxpOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYXJjaGFydC13aWRnZXQgLmJhcmNoYXJ0LWxlZ2VuZCBwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5iYXJjaGFydC13aWRnZXQgLmJhcmNoYXJ0LWxlZ2VuZCBzcGFuIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB3aWR0aDogMTZweDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtY2hhcnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwMCwgMWZyKTtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtY2hhcnQuYmFyY2hhcnQtY2hhcnQtLXJvdW5kZWQgbGk6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydC5iYXJjaGFydC1jaGFydC0tcm91bmRlZCBsaTpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydCBsaTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydCBsaSAuYmFyY2hhcnQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydCBsaSAuYmFyY2hhcnQtdG9vbHRpcC5hbGlnbi1yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5iYXJjaGFydC13aWRnZXQgLmJhcmNoYXJ0LWNoYXJ0IGxpIC5iYXJjaGFydC10b29sdGlwIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydCBsaS5zaG93LXRvb2x0aXAgLmJhcmNoYXJ0LXRvb2x0aXAge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MCUpO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1tZXRlciB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1tZXRlciAuaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiA5cHg7XG4gICAgd2lkdGg6IDFweDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtaW5kaWNhdG9ycyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtaW5kaWNhdG9yIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1pbmRpY2F0b3I6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYXJjaGFydC13aWRnZXQgLmJhcmNoYXJ0LWluZGljYXRvcjpsYXN0LW9mLXR5cGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC10b29sdGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */";
  styleInject(css_248z);

  function BarChart({
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
    const [canRender, setCanRender] = react.useState(false);
    const containerRef = react.useRef([]);
    const colorArray = ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"];
    const [total, setTotal] = react.useState(0);
    const rounded = roundedCorners ? "barchart-chart--rounded" : null;
    const tooltipRef = react.useCallback(tooltipNode => {
      if (tooltipNode.getBoundingClientRect().right >= window.innerWidth) {
        tooltipNode.classList.add("align-right");
      }
    }, []);
    let sortInstrs = [];

    function showTooltip(index) {
      index.classList.add("show-tooltip");
    }

    function hideTooltip(index) {
      index.classList.remove("show-tooltip");
    }

    function calcTotal() {
      const totals = [];
      context.items.map((item, index) => totals.push(Number(chartValue.get(context.items[index]).displayValue)));
      setTotal(totals.reduce((a, b) => a + b, 0));
    }

    function setSortOrder() {
      if (!customSortOrder && sortAttribute === "chartName" && chartName.sortable) {
        sortInstrs = [[chartName.id, sortOrder]];
      } else if (!customSortOrder && sortAttribute === "chartValue" && chartValue.sortable) {
        sortInstrs = [[chartValue.id, sortOrder]];
      } else if (customSortOrder && customSortOrder.sortable) {
        sortInstrs = [[customSortOrder.id, sortOrder]];
      }

      context.setSortOrder(sortInstrs);
    }

    react.useEffect(() => {
      if (context && context.status === "available" && context.items.length > 0) {
        setSortOrder();
        calcTotal();
        setCanRender(true);
      }
    }, [context, colors]);

    if (canRender) {
      return react.createElement("div", {
        className: "barchart-widget"
      }, react.createElement("ul", {
        className: `barchart-legend barchart-legend--${legendOrientation}`
      }, context.items.map((item, index) => react.createElement("li", {
        key: item,
        ref: element => containerRef.current[index] = element,
        name: `barchart-legend-index-${index}`,
        onMouseEnter: () => showTooltip(containerRef.current[index]),
        onMouseLeave: () => hideTooltip(containerRef.current[index])
      }, react.createElement("span", {
        style: {
          backgroundColor: `var(--barchart-color-${[index]}, ${colors[index] ? colors[index].value : colorArray[index]})`
        }
      }), react.createElement("p", null, chartName.get(context.items[index]).displayValue)))), react.createElement("ul", {
        className: `barchart-chart ${rounded}`
      }, context.items.map((item, index) => react.createElement("li", {
        key: item,
        ref: element => containerRef.current[index] = element,
        name: `barchart-index-${index}`,
        onMouseEnter: () => showTooltip(containerRef.current[index]),
        onMouseLeave: () => hideTooltip(containerRef.current[index]),
        style: {
          flex: chartValue.get(context.items[index]).displayValue,
          backgroundColor: `var(--barchart-color-${[index]}, ${colors[index] ? colors[index].value : colorArray[index]})`
        }
      }, react.createElement("div", {
        className: "barchart-tooltip",
        ref: tooltipRef
      }, react.createElement("p", null, react.createElement("span", null, unitPosition === "before" && unit && unit, chartValue.get(context.items[index]).displayValue, unitPosition === "after" && unit && unit), " ", chartName.get(context.items[index]).displayValue))))), !disableIndicators && react.createElement("div", {
        className: "barchart-meter"
      }, react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      }), react.createElement("div", {
        className: "item"
      })), !disableIndicators && react.createElement("div", {
        className: "barchart-indicators"
      }, react.createElement("span", {
        className: "barchart-indicator"
      }, unitPosition === "before" && unit && unit, "0", unitPosition === "after" && unit && unit), react.createElement("span", {
        className: "barchart-indicator"
      }, unitPosition === "before" && unit && unit, total / 2, unitPosition === "after" && unit && unit), react.createElement("span", {
        className: "barchart-indicator"
      }, unitPosition === "before" && unit && unit, total, unitPosition === "after" && unit && unit)));
    } else {
      return react.createElement("div", {
        className: "barchart-widget"
      });
    }
  }

  return BarChart;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFyQ2hhcnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvQmFyQ2hhcnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgXCIuL3VpL0JhckNoYXJ0LmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXJDaGFydCh7XG4gICAgY29udGV4dCxcbiAgICBjaGFydFZhbHVlLFxuICAgIGNvbG9ycyxcbiAgICBjdXN0b21Tb3J0T3JkZXIsXG4gICAgY2hhcnROYW1lLFxuICAgIGRpc2FibGVJbmRpY2F0b3JzLFxuICAgIGxlZ2VuZE9yaWVudGF0aW9uLFxuICAgIHJvdW5kZWRDb3JuZXJzLFxuICAgIHNvcnRBdHRyaWJ1dGUsXG4gICAgc29ydE9yZGVyLFxuICAgIHVuaXQsXG4gICAgdW5pdFBvc2l0aW9uXG59KSB7XG4gICAgY29uc3QgW2NhblJlbmRlciwgc2V0Q2FuUmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IGNvbG9yQXJyYXkgPSBbXCIjMDAzZjVjXCIsIFwiIzJmNGI3Y1wiLCBcIiM2NjUxOTFcIiwgXCIjYTA1MTk1XCIsIFwiI2Q0NTA4N1wiLCBcIiNmOTVkNmFcIiwgXCIjZmY3YzQzXCIsIFwiI2ZmYTYwMFwiXTtcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHJvdW5kZWQgPSByb3VuZGVkQ29ybmVycyA/IFwiYmFyY2hhcnQtY2hhcnQtLXJvdW5kZWRcIiA6IG51bGw7XG5cbiAgICBjb25zdCB0b29sdGlwUmVmID0gdXNlQ2FsbGJhY2sodG9vbHRpcE5vZGUgPT4ge1xuICAgICAgICBpZiAodG9vbHRpcE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgPj0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRvb2x0aXBOb2RlLmNsYXNzTGlzdC5hZGQoXCJhbGlnbi1yaWdodFwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGxldCBzb3J0SW5zdHJzID0gW107XG5cbiAgICBmdW5jdGlvbiBzaG93VG9vbHRpcChpbmRleCkge1xuICAgICAgICBpbmRleC5jbGFzc0xpc3QuYWRkKFwic2hvdy10b29sdGlwXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVUb29sdGlwKGluZGV4KSB7XG4gICAgICAgIGluZGV4LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LXRvb2x0aXBcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY1RvdGFsKCkge1xuICAgICAgICBjb25zdCB0b3RhbHMgPSBbXTtcbiAgICAgICAgY29udGV4dC5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB0b3RhbHMucHVzaChOdW1iZXIoY2hhcnRWYWx1ZS5nZXQoY29udGV4dC5pdGVtc1tpbmRleF0pLmRpc3BsYXlWYWx1ZSkpKTtcbiAgICAgICAgc2V0VG90YWwodG90YWxzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTb3J0T3JkZXIoKSB7XG4gICAgICAgIGlmICghY3VzdG9tU29ydE9yZGVyICYmIHNvcnRBdHRyaWJ1dGUgPT09IFwiY2hhcnROYW1lXCIgJiYgY2hhcnROYW1lLnNvcnRhYmxlKSB7XG4gICAgICAgICAgICBzb3J0SW5zdHJzID0gW1tjaGFydE5hbWUuaWQsIHNvcnRPcmRlcl1dO1xuICAgICAgICB9IGVsc2UgaWYgKCFjdXN0b21Tb3J0T3JkZXIgJiYgc29ydEF0dHJpYnV0ZSA9PT0gXCJjaGFydFZhbHVlXCIgJiYgY2hhcnRWYWx1ZS5zb3J0YWJsZSkge1xuICAgICAgICAgICAgc29ydEluc3RycyA9IFtbY2hhcnRWYWx1ZS5pZCwgc29ydE9yZGVyXV07XG4gICAgICAgIH0gZWxzZSBpZiAoY3VzdG9tU29ydE9yZGVyICYmIGN1c3RvbVNvcnRPcmRlci5zb3J0YWJsZSkge1xuICAgICAgICAgICAgc29ydEluc3RycyA9IFtbY3VzdG9tU29ydE9yZGVyLmlkLCBzb3J0T3JkZXJdXTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnNldFNvcnRPcmRlcihzb3J0SW5zdHJzKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnN0YXR1cyA9PT0gXCJhdmFpbGFibGVcIiAmJiBjb250ZXh0Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldFNvcnRPcmRlcigpO1xuICAgICAgICAgICAgY2FsY1RvdGFsKCk7XG4gICAgICAgICAgICBzZXRDYW5SZW5kZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbY29udGV4dCwgY29sb3JzXSk7XG5cbiAgICBpZiAoY2FuUmVuZGVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmNoYXJ0LXdpZGdldFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BiYXJjaGFydC1sZWdlbmQgYmFyY2hhcnQtbGVnZW5kLS0ke2xlZ2VuZE9yaWVudGF0aW9ufWB9PlxuICAgICAgICAgICAgICAgICAgICB7Y29udGV4dC5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbGVtZW50ID0+IChjb250YWluZXJSZWYuY3VycmVudFtpbmRleF0gPSBlbGVtZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgYmFyY2hhcnQtbGVnZW5kLWluZGV4LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNob3dUb29sdGlwKGNvbnRhaW5lclJlZi5jdXJyZW50W2luZGV4XSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoaWRlVG9vbHRpcChjb250YWluZXJSZWYuY3VycmVudFtpbmRleF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGB2YXIoLS1iYXJjaGFydC1jb2xvci0ke1tpbmRleF19LCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpbmRleF0gPyBjb2xvcnNbaW5kZXhdLnZhbHVlIDogY29sb3JBcnJheVtpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NoYXJ0TmFtZS5nZXQoY29udGV4dC5pdGVtc1tpbmRleF0pLmRpc3BsYXlWYWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BiYXJjaGFydC1jaGFydCAke3JvdW5kZWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZXh0Lml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsZW1lbnQgPT4gKGNvbnRhaW5lclJlZi5jdXJyZW50W2luZGV4XSA9IGVsZW1lbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BiYXJjaGFydC1pbmRleC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzaG93VG9vbHRpcChjb250YWluZXJSZWYuY3VycmVudFtpbmRleF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGlkZVRvb2x0aXAoY29udGFpbmVyUmVmLmN1cnJlbnRbaW5kZXhdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBjaGFydFZhbHVlLmdldChjb250ZXh0Lml0ZW1zW2luZGV4XSkuZGlzcGxheVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGB2YXIoLS1iYXJjaGFydC1jb2xvci0ke1tpbmRleF19LCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzW2luZGV4XSA/IGNvbG9yc1tpbmRleF0udmFsdWUgOiBjb2xvckFycmF5W2luZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtdG9vbHRpcFwiIHJlZj17dG9vbHRpcFJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaXRQb3NpdGlvbiA9PT0gXCJiZWZvcmVcIiAmJiB1bml0ICYmIHVuaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYXJ0VmFsdWUuZ2V0KGNvbnRleHQuaXRlbXNbaW5kZXhdKS5kaXNwbGF5VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaXRQb3NpdGlvbiA9PT0gXCJhZnRlclwiICYmIHVuaXQgJiYgdW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhcnROYW1lLmdldChjb250ZXh0Lml0ZW1zW2luZGV4XSkuZGlzcGxheVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIHshZGlzYWJsZUluZGljYXRvcnMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmNoYXJ0LW1ldGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgeyFkaXNhYmxlSW5kaWNhdG9ycyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtaW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyY2hhcnQtaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaXRQb3NpdGlvbiA9PT0gXCJiZWZvcmVcIiAmJiB1bml0ICYmIHVuaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiMFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1bml0UG9zaXRpb24gPT09IFwiYWZ0ZXJcIiAmJiB1bml0ICYmIHVuaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJjaGFydC1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dW5pdFBvc2l0aW9uID09PSBcImJlZm9yZVwiICYmIHVuaXQgJiYgdW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWwgLyAyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1bml0UG9zaXRpb24gPT09IFwiYWZ0ZXJcIiAmJiB1bml0ICYmIHVuaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJjaGFydC1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dW5pdFBvc2l0aW9uID09PSBcImJlZm9yZVwiICYmIHVuaXQgJiYgdW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaXRQb3NpdGlvbiA9PT0gXCJhZnRlclwiICYmIHVuaXQgJiYgdW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJhcmNoYXJ0LXdpZGdldFwiPjwvZGl2PjtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsic3R5bGVJbmplY3QiLCJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJCYXJDaGFydCIsImNvbnRleHQiLCJjaGFydFZhbHVlIiwiY29sb3JzIiwiY3VzdG9tU29ydE9yZGVyIiwiY2hhcnROYW1lIiwiZGlzYWJsZUluZGljYXRvcnMiLCJsZWdlbmRPcmllbnRhdGlvbiIsInJvdW5kZWRDb3JuZXJzIiwic29ydEF0dHJpYnV0ZSIsInNvcnRPcmRlciIsInVuaXQiLCJ1bml0UG9zaXRpb24iLCJjYW5SZW5kZXIiLCJzZXRDYW5SZW5kZXIiLCJ1c2VTdGF0ZSIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsImNvbG9yQXJyYXkiLCJ0b3RhbCIsInNldFRvdGFsIiwicm91bmRlZCIsInRvb2x0aXBSZWYiLCJ1c2VDYWxsYmFjayIsInRvb2x0aXBOb2RlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xhc3NMaXN0IiwiYWRkIiwic29ydEluc3RycyIsInNob3dUb29sdGlwIiwiaW5kZXgiLCJoaWRlVG9vbHRpcCIsInJlbW92ZSIsImNhbGNUb3RhbCIsInRvdGFscyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsInB1c2giLCJOdW1iZXIiLCJnZXQiLCJkaXNwbGF5VmFsdWUiLCJyZWR1Y2UiLCJhIiwiYiIsInNldFNvcnRPcmRlciIsInNvcnRhYmxlIiwiaWQiLCJ1c2VFZmZlY3QiLCJzdGF0dXMiLCJsZW5ndGgiLCJlbGVtZW50IiwiY3VycmVudCIsImJhY2tncm91bmRDb2xvciIsInZhbHVlIiwiZmxleCJdLCJtYXBwaW5ncyI6Ijs7RUFBQSxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0I7RUFDN0IsTUFBS0EsR0FBRyxLQUFLLEtBQUssQ0FBbEIsRUFBc0JBLEdBQUcsR0FBRyxFQUFOO0VBQ3RCLE1BQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFuQjs7RUFFQSxNQUFJLENBQUNGLEdBQUQsSUFBUSxPQUFPRyxRQUFQLEtBQW9CLFdBQWhDLEVBQTZDO0VBQUU7RUFBUzs7RUFFeEQsTUFBSUMsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQVQsSUFBaUJELFFBQVEsQ0FBQ0Usb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBNUI7RUFDQSxNQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixPQUF2QixDQUFa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
