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

  var css_248z = ".barchart-widget {\n    margin-bottom: 24px;\n    position: relative;\n}\n\n.barchart-widget .barchart-legend {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 30px;\n    padding: 0;\n    width: max-content;\n}\n\n.barchart-widget .barchart-legend li {\n    align-items: center;\n    display: flex;\n    list-style: none;\n}\n\n.barchart-widget .barchart-legend li:hover {\n    cursor: pointer;\n}\n\n.barchart-widget .barchart-legend p {\n    margin: 0;\n}\n\n.barchart-widget .barchart-legend span {\n    border-radius: 50px;\n    display: block;\n    height: 16px;\n    margin-right: 14px;\n    width: 16px;\n}\n\n.barchart-widget .barchart-chart {\n    align-self: center;\n    display: flex;\n    grid-template-columns: repeat(100, 1fr);\n    grid-auto-flow: column;\n    margin: 0;\n    padding: 0;\n}\n\n.barchart-widget .barchart-chart li {\n    list-style: none;\n    min-height: 20px;\n    position: relative;\n}\n\n.barchart-widget .barchart-chart li:hover {\n    cursor: pointer;\n}\n\n.barchart-widget .barchart-chart li .barchart-tooltip {\n    background-color: white;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);\n    border-radius: 4px;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.2s ease, transform 0.2s ease;\n    will-change: opacity;\n    width: max-content;\n    z-index: 1;\n}\n\n.barchart-widget .barchart-chart li .barchart-tooltip.align-right {\n    right: 0;\n}\n\n.barchart-widget .barchart-chart li .barchart-tooltip p {\n    margin: 0;\n    padding: 4px 8px;\n}\n\n.barchart-widget .barchart-chart li.show-tooltip .barchart-tooltip {\n    opacity: 1;\n    transform: translateY(-60%);\n}\n\n.barchart-widget .barchart-meter {\n    border-top: solid 1px black;\n    display: flex;\n    justify-content: space-between;\n}\n\n.barchart-widget .barchart-meter .item {\n    background-color: black;\n    height: 9px;\n    width: 1px;\n}\n\n.barchart-widget .barchart-indicators {\n    display: flex;\n}\n\n.barchart-widget .barchart-indicator {\n    flex: 1;\n}\n\n.barchart-widget .barchart-indicator:nth-child(2) {\n    text-align: center;\n}\n\n.barchart-widget .barchart-indicator:last-of-type {\n    text-align: right;\n}\n\n.barchart-widget .barchart-tooltip {\n    position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhckNoYXJ0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixrREFBa0Q7SUFDbEQsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6IkJhckNoYXJ0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJjaGFydC13aWRnZXQge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1sZWdlbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1sZWdlbmQgbGkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1sZWdlbmQgbGk6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtbGVnZW5kIHAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtbGVnZW5kIHNwYW4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICB3aWR0aDogMTZweDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtY2hhcnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwMCwgMWZyKTtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtY2hhcnQgbGk6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtY2hhcnQgbGkgLmJhcmNoYXJ0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtY2hhcnQgbGkgLmJhcmNoYXJ0LXRvb2x0aXAuYWxpZ24tcmlnaHQge1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydCBsaSAuYmFyY2hhcnQtdG9vbHRpcCBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtY2hhcnQgbGkuc2hvdy10b29sdGlwIC5iYXJjaGFydC10b29sdGlwIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjAlKTtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtbWV0ZXIge1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtbWV0ZXIgLml0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogOXB4O1xuICAgIHdpZHRoOiAxcHg7XG59XG5cbi5iYXJjaGFydC13aWRnZXQgLmJhcmNoYXJ0LWluZGljYXRvcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5iYXJjaGFydC13aWRnZXQgLmJhcmNoYXJ0LWluZGljYXRvciB7XG4gICAgZmxleDogMTtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtaW5kaWNhdG9yOm50aC1jaGlsZCgyKSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1pbmRpY2F0b3I6bGFzdC1vZi10eXBlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtdG9vbHRpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIl19 */";
  styleInject(css_248z);

  function BarChart({
    context,
    chartValue,
    colors,
    customSortOrder,
    chartName,
    sortAttribute,
    sortOrder
  }) {
    const [canRender, setCanRender] = react.useState(false);
    const containerRef = react.useRef([]);
    const colorArray = ["#78909C", "#90A4AE", "#B0BEC5", "#CFD8DC", "#ECEFF1", "#607D8B"];
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
        setCanRender(true);
        setSortOrder();
      }
    }, [context, colors]);

    if (canRender) {
      return react.createElement("div", {
        className: "barchart-widget"
      }, react.createElement("ul", {
        className: "barchart-legend"
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
        className: "barchart-chart"
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
      }, react.createElement("p", null, react.createElement("span", null, chartValue.get(context.items[index]).displayValue, "% "), chartName.get(context.items[index]).displayValue))))), react.createElement("div", {
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
      })), react.createElement("div", {
        className: "barchart-indicators"
      }, react.createElement("span", {
        className: "barchart-indicator"
      }, "0%"), react.createElement("span", {
        className: "barchart-indicator"
      }, "50%"), react.createElement("span", {
        className: "barchart-indicator"
      }, "100%")));
    } else {
      return react.createElement("div", {
        className: "barchart-widget"
      });
    }
  }

  return BarChart;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFyQ2hhcnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvQmFyQ2hhcnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgXCIuL3VpL0JhckNoYXJ0LmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXJDaGFydCh7XG4gICAgY29udGV4dCxcbiAgICBjaGFydFZhbHVlLFxuICAgIGNvbG9ycyxcbiAgICBjdXN0b21Tb3J0T3JkZXIsXG4gICAgY2hhcnROYW1lLFxuICAgIHNvcnRBdHRyaWJ1dGUsXG4gICAgc29ydE9yZGVyXG59KSB7XG4gICAgY29uc3QgW2NhblJlbmRlciwgc2V0Q2FuUmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IGNvbG9yQXJyYXkgPSBbXCIjNzg5MDlDXCIsIFwiIzkwQTRBRVwiLCBcIiNCMEJFQzVcIiwgXCIjQ0ZEOERDXCIsIFwiI0VDRUZGMVwiLCBcIiM2MDdEOEJcIl07XG5cbiAgICBjb25zdCB0b29sdGlwUmVmID0gdXNlQ2FsbGJhY2sodG9vbHRpcE5vZGUgPT4ge1xuICAgICAgICBpZiAodG9vbHRpcE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgPj0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRvb2x0aXBOb2RlLmNsYXNzTGlzdC5hZGQoXCJhbGlnbi1yaWdodFwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGxldCBzb3J0SW5zdHJzID0gW107XG5cbiAgICBmdW5jdGlvbiBzaG93VG9vbHRpcChpbmRleCkge1xuICAgICAgICBpbmRleC5jbGFzc0xpc3QuYWRkKFwic2hvdy10b29sdGlwXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVUb29sdGlwKGluZGV4KSB7XG4gICAgICAgIGluZGV4LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LXRvb2x0aXBcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U29ydE9yZGVyKCkge1xuICAgICAgICBpZiAoIWN1c3RvbVNvcnRPcmRlciAmJiBzb3J0QXR0cmlidXRlID09PSBcImNoYXJ0TmFtZVwiICYmIGNoYXJ0TmFtZS5zb3J0YWJsZSkge1xuICAgICAgICAgICAgc29ydEluc3RycyA9IFtbY2hhcnROYW1lLmlkLCBzb3J0T3JkZXJdXTtcbiAgICAgICAgfSBlbHNlIGlmICghY3VzdG9tU29ydE9yZGVyICYmIHNvcnRBdHRyaWJ1dGUgPT09IFwiY2hhcnRWYWx1ZVwiICYmIGNoYXJ0VmFsdWUuc29ydGFibGUpIHtcbiAgICAgICAgICAgIHNvcnRJbnN0cnMgPSBbW2NoYXJ0VmFsdWUuaWQsIHNvcnRPcmRlcl1dO1xuICAgICAgICB9IGVsc2UgaWYgKGN1c3RvbVNvcnRPcmRlciAmJiBjdXN0b21Tb3J0T3JkZXIuc29ydGFibGUpIHtcbiAgICAgICAgICAgIHNvcnRJbnN0cnMgPSBbW2N1c3RvbVNvcnRPcmRlci5pZCwgc29ydE9yZGVyXV07XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zZXRTb3J0T3JkZXIoc29ydEluc3Rycyk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIgJiYgY29udGV4dC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRDYW5SZW5kZXIodHJ1ZSk7XG4gICAgICAgICAgICBzZXRTb3J0T3JkZXIoKTtcbiAgICAgICAgfVxuICAgIH0sIFtjb250ZXh0LCBjb2xvcnNdKTtcblxuICAgIGlmIChjYW5SZW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJhcmNoYXJ0LWxlZ2VuZFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y29udGV4dC5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbGVtZW50ID0+IChjb250YWluZXJSZWYuY3VycmVudFtpbmRleF0gPSBlbGVtZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgYmFyY2hhcnQtbGVnZW5kLWluZGV4LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNob3dUb29sdGlwKGNvbnRhaW5lclJlZi5jdXJyZW50W2luZGV4XSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoaWRlVG9vbHRpcChjb250YWluZXJSZWYuY3VycmVudFtpbmRleF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGB2YXIoLS1iYXJjaGFydC1jb2xvci0ke1tpbmRleF19LCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpbmRleF0gPyBjb2xvcnNbaW5kZXhdLnZhbHVlIDogY29sb3JBcnJheVtpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NoYXJ0TmFtZS5nZXQoY29udGV4dC5pdGVtc1tpbmRleF0pLmRpc3BsYXlWYWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiYXJjaGFydC1jaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y29udGV4dC5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbGVtZW50ID0+IChjb250YWluZXJSZWYuY3VycmVudFtpbmRleF0gPSBlbGVtZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgYmFyY2hhcnQtaW5kZXgtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2hvd1Rvb2x0aXAoY29udGFpbmVyUmVmLmN1cnJlbnRbaW5kZXhdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhpZGVUb29sdGlwKGNvbnRhaW5lclJlZi5jdXJyZW50W2luZGV4XSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogY2hhcnRWYWx1ZS5nZXQoY29udGV4dC5pdGVtc1tpbmRleF0pLmRpc3BsYXlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgdmFyKC0tYmFyY2hhcnQtY29sb3ItJHtbaW5kZXhdfSwgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpbmRleF0gPyBjb2xvcnNbaW5kZXhdLnZhbHVlIDogY29sb3JBcnJheVtpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmNoYXJ0LXRvb2x0aXBcIiByZWY9e3Rvb2x0aXBSZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjaGFydFZhbHVlLmdldChjb250ZXh0Lml0ZW1zW2luZGV4XSkuZGlzcGxheVZhbHVlfSUgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYXJ0TmFtZS5nZXQoY29udGV4dC5pdGVtc1tpbmRleF0pLmRpc3BsYXlWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmNoYXJ0LW1ldGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmNoYXJ0LWluZGljYXRvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyY2hhcnQtaW5kaWNhdG9yXCI+MCU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhcmNoYXJ0LWluZGljYXRvclwiPjUwJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyY2hhcnQtaW5kaWNhdG9yXCI+MTAwJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJhcmNoYXJ0LXdpZGdldFwiPjwvZGl2PjtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsic3R5bGVJbmplY3QiLCJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJCYXJDaGFydCIsImNvbnRleHQiLCJjaGFydFZhbHVlIiwiY29sb3JzIiwiY3VzdG9tU29ydE9yZGVyIiwiY2hhcnROYW1lIiwic29ydEF0dHJpYnV0ZSIsInNvcnRPcmRlciIsImNhblJlbmRlciIsInNldENhblJlbmRlciIsInVzZVN0YXRlIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiY29sb3JBcnJheSIsInRvb2x0aXBSZWYiLCJ1c2VDYWxsYmFjayIsInRvb2x0aXBOb2RlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xhc3NMaXN0IiwiYWRkIiwic29ydEluc3RycyIsInNob3dUb29sdGlwIiwiaW5kZXgiLCJoaWRlVG9vbHRpcCIsInJlbW92ZSIsInNldFNvcnRPcmRlciIsInNvcnRhYmxlIiwiaWQiLCJ1c2VFZmZlY3QiLCJzdGF0dXMiLCJpdGVtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJlbGVtZW50IiwiY3VycmVudCIsImJhY2tncm91bmRDb2xvciIsInZhbHVlIiwiZ2V0IiwiZGlzcGxheVZhbHVlIiwiZmxleCJdLCJtYXBwaW5ncyI6Ijs7RUFBQSxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0I7RUFDN0IsTUFBS0EsR0FBRyxLQUFLLEtBQUssQ0FBbEIsRUFBc0JBLEdBQUcsR0FBRyxFQUFOO0VBQ3RCLE1BQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFuQjs7RUFFQSxNQUFJLENBQUNGLEdBQUQsSUFBUSxPQUFPRyxRQUFQLEtBQW9CLFdBQWhDLEVBQTZDO0VBQUU7RUFBUzs7RUFFeEQsTUFBSUMsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQVQsSUFBaUJELFFBQVEsQ0FBQ0Usb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBNUI7RUFDQSxNQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixPQUF2QixDQUFaO0VB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
