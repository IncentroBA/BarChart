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
    chartName
  }) {
    const [canRender, setCanRender] = react.useState(false);
    const containerRef = react.useRef([]);
    const colorArray = ["#78909C", "#90A4AE", "#B0BEC5", "#CFD8DC", "#ECEFF1", "#607D8B"];
    const tooltipRef = react.useCallback(tooltipNode => {
      if (tooltipNode.getBoundingClientRect().right >= window.innerWidth) {
        tooltipNode.classList.add("align-right");
      }
    }, []);
    react.useEffect(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFyQ2hhcnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvQmFyQ2hhcnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgXCIuL3VpL0JhckNoYXJ0LmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXJDaGFydCh7IGNvbnRleHQsIGNoYXJ0VmFsdWUsIGNvbG9ycywgY2hhcnROYW1lIH0pIHtcbiAgICBjb25zdCBbY2FuUmVuZGVyLCBzZXRDYW5SZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihbXSk7XG4gICAgY29uc3QgY29sb3JBcnJheSA9IFtcIiM3ODkwOUNcIiwgXCIjOTBBNEFFXCIsIFwiI0IwQkVDNVwiLCBcIiNDRkQ4RENcIiwgXCIjRUNFRkYxXCIsIFwiIzYwN0Q4QlwiXTtcblxuICAgIGNvbnN0IHRvb2x0aXBSZWYgPSB1c2VDYWxsYmFjayh0b29sdGlwTm9kZSA9PiB7XG4gICAgICAgIGlmICh0b29sdGlwTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCA+PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgdG9vbHRpcE5vZGUuY2xhc3NMaXN0LmFkZChcImFsaWduLXJpZ2h0XCIpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIgJiYgY29udGV4dC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRDYW5SZW5kZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbY29udGV4dCwgY29sb3JzXSk7XG5cbiAgICBmdW5jdGlvbiBzaG93VG9vbHRpcChpbmRleCkge1xuICAgICAgICBpbmRleC5jbGFzc0xpc3QuYWRkKFwic2hvdy10b29sdGlwXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVUb29sdGlwKGluZGV4KSB7XG4gICAgICAgIGluZGV4LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LXRvb2x0aXBcIik7XG4gICAgfVxuXG4gICAgaWYgKGNhblJlbmRlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJjaGFydC13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmFyY2hhcnQtbGVnZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZXh0Lml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsZW1lbnQgPT4gKGNvbnRhaW5lclJlZi5jdXJyZW50W2luZGV4XSA9IGVsZW1lbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BiYXJjaGFydC1sZWdlbmQtaW5kZXgtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2hvd1Rvb2x0aXAoY29udGFpbmVyUmVmLmN1cnJlbnRbaW5kZXhdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhpZGVUb29sdGlwKGNvbnRhaW5lclJlZi5jdXJyZW50W2luZGV4XSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYHZhcigtLWJhcmNoYXJ0LWNvbG9yLSR7W2luZGV4XX0sICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzW2luZGV4XSA/IGNvbG9yc1tpbmRleF0udmFsdWUgOiBjb2xvckFycmF5W2luZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2hhcnROYW1lLmdldChjb250ZXh0Lml0ZW1zW2luZGV4XSkuZGlzcGxheVZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJhcmNoYXJ0LWNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZXh0Lml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsZW1lbnQgPT4gKGNvbnRhaW5lclJlZi5jdXJyZW50W2luZGV4XSA9IGVsZW1lbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BiYXJjaGFydC1pbmRleC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzaG93VG9vbHRpcChjb250YWluZXJSZWYuY3VycmVudFtpbmRleF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGlkZVRvb2x0aXAoY29udGFpbmVyUmVmLmN1cnJlbnRbaW5kZXhdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBjaGFydFZhbHVlLmdldChjb250ZXh0Lml0ZW1zW2luZGV4XSkuZGlzcGxheVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGB2YXIoLS1iYXJjaGFydC1jb2xvci0ke1tpbmRleF19LCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzW2luZGV4XSA/IGNvbG9yc1tpbmRleF0udmFsdWUgOiBjb2xvckFycmF5W2luZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtdG9vbHRpcFwiIHJlZj17dG9vbHRpcFJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NoYXJ0VmFsdWUuZ2V0KGNvbnRleHQuaXRlbXNbaW5kZXhdKS5kaXNwbGF5VmFsdWV9JSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhcnROYW1lLmdldChjb250ZXh0Lml0ZW1zW2luZGV4XSkuZGlzcGxheVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtbWV0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtaW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJjaGFydC1pbmRpY2F0b3JcIj4wJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyY2hhcnQtaW5kaWNhdG9yXCI+NTAlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJjaGFydC1pbmRpY2F0b3JcIj4xMDAlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtd2lkZ2V0XCI+PC9kaXY+O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsIkJhckNoYXJ0IiwiY29udGV4dCIsImNoYXJ0VmFsdWUiLCJjb2xvcnMiLCJjaGFydE5hbWUiLCJjYW5SZW5kZXIiLCJzZXRDYW5SZW5kZXIiLCJ1c2VTdGF0ZSIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsImNvbG9yQXJyYXkiLCJ0b29sdGlwUmVmIiwidXNlQ2FsbGJhY2siLCJ0b29sdGlwTm9kZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNsYXNzTGlzdCIsImFkZCIsInVzZUVmZmVjdCIsInN0YXR1cyIsIml0ZW1zIiwibGVuZ3RoIiwic2hvd1Rvb2x0aXAiLCJpbmRleCIsImhpZGVUb29sdGlwIiwicmVtb3ZlIiwibWFwIiwiaXRlbSIsImVsZW1lbnQiLCJjdXJyZW50IiwiYmFja2dyb3VuZENvbG9yIiwidmFsdWUiLCJnZXQiLCJkaXNwbGF5VmFsdWUiLCJmbGV4Il0sIm1hcHBpbmdzIjoiOztFQUFBLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtFQUM3QixNQUFLQSxHQUFHLEtBQUssS0FBSyxDQUFsQixFQUFzQkEsR0FBRyxHQUFHLEVBQU47RUFDdEIsTUFBSUMsUUFBUSxHQUFHRCxHQUFHLENBQUNDLFFBQW5COztFQUVBLE1BQUksQ0FBQ0YsR0FBRCxJQUFRLE9BQU9HLFFBQVAsS0FBb0IsV0FBaEMsRUFBNkM7RUFBRTtFQUFT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
