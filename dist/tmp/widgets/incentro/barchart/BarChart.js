
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
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

  var css_248z = ".barchart-widget {\n    margin-bottom: 24px;\n}\n\n.barchart-widget .barchart-legend {\n    margin-bottom: 30px;\n    padding: 0;\n}\n\n.barchart-widget .barchart-legend li {\n    align-items: center;\n    display: flex;\n    list-style: none;\n}\n\n.barchart-widget .barchart-legend p {\n    margin: 0;\n}\n\n.barchart-widget .barchart-legend span {\n    border-radius: 50px;\n    display: block;\n    height: 16px;\n    margin-right: 14px;\n    width: 16px;\n}\n\n.barchart-widget .barchart-chart {\n    align-self: center;\n    display: flex;\n    grid-template-columns: repeat(100, 1fr);\n    grid-auto-flow: column;\n    margin: 0;\n    padding: 0;\n}\n\n.barchart-widget .barchart-chart li {\n    list-style: none;\n}\n\n.barchart-widget .barchart-chart li span {\n    padding: 4px 8px;\n}\n\n.barchart-widget .barchart-meter {\n    border-top: solid 1px black;\n    display: flex;\n    justify-content: space-between;\n}\n\n.barchart-widget .barchart-meter .item {\n    background-color: black;\n    height: 9px;\n    width: 1px;\n}\n\n.barchart-widget .barchart-indicators {\n    display: flex;\n}\n\n.barchart-widget .barchart-indicator {\n    flex: 1;\n}\n\n.barchart-widget .barchart-indicator:nth-child(2) {\n    text-align: center;\n}\n\n.barchart-widget .barchart-indicator:last-of-type {\n    text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhckNoYXJ0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6IkJhckNoYXJ0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJjaGFydC13aWRnZXQge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5iYXJjaGFydC13aWRnZXQgLmJhcmNoYXJ0LWxlZ2VuZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1sZWdlbmQgbGkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1sZWdlbmQgcCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1sZWdlbmQgc3BhbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgIHdpZHRoOiAxNnB4O1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAwLCAxZnIpO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5iYXJjaGFydC13aWRnZXQgLmJhcmNoYXJ0LWNoYXJ0IGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1jaGFydCBsaSBzcGFuIHtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1tZXRlciB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1tZXRlciAuaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiA5cHg7XG4gICAgd2lkdGg6IDFweDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtaW5kaWNhdG9ycyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmJhcmNoYXJ0LXdpZGdldCAuYmFyY2hhcnQtaW5kaWNhdG9yIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uYmFyY2hhcnQtd2lkZ2V0IC5iYXJjaGFydC1pbmRpY2F0b3I6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYXJjaGFydC13aWRnZXQgLmJhcmNoYXJ0LWluZGljYXRvcjpsYXN0LW9mLXR5cGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */";
  styleInject(css_248z);

  function BarChart({
    context,
    chartValue,
    colors,
    chartName
  }) {
    const [canRender, setCanRender] = react.useState(false);
    const containerRef = react.useRef([]);
    react.useEffect(() => {
      if (context && context.status === "available" && context.items.length > 0) {
        setCanRender(true);
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
        name: `barchart-legend-index-${index}`
      }, react.createElement("span", {
        style: {
          backgroundColor: colors[index] && colors[index].value
        }
      }), react.createElement("p", null, chartName.get(context.items[index]).displayValue)))), react.createElement("ul", {
        className: "barchart-chart"
      }, context.items.map((item, index) => react.createElement("li", {
        key: item,
        ref: element => containerRef.current[index] = element,
        name: `barchart-index-${index}`,
        style: {
          flex: chartValue.get(context.items[index]).displayValue,
          backgroundColor: colors[index] && colors[index].value
        }
      }, chartValue.get(context.items[index]).displayValue >= 5 && react.createElement("span", null, chartValue.get(context.items[index]).displayValue, "%")))), react.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFyQ2hhcnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvQmFyQ2hhcnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgXCIuL3VpL0JhckNoYXJ0LmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhckNoYXJ0KHsgY29udGV4dCwgY2hhcnRWYWx1ZSwgY29sb3JzLCBjaGFydE5hbWUgfSkge1xuICAgIGNvbnN0IFtjYW5SZW5kZXIsIHNldENhblJlbmRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuc3RhdHVzID09PSBcImF2YWlsYWJsZVwiICYmIGNvbnRleHQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0Q2FuUmVuZGVyKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW2NvbnRleHQsIGNvbG9yc10pO1xuXG4gICAgaWYgKGNhblJlbmRlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJjaGFydC13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmFyY2hhcnQtbGVnZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZXh0Lml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsZW1lbnQgPT4gKGNvbnRhaW5lclJlZi5jdXJyZW50W2luZGV4XSA9IGVsZW1lbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BiYXJjaGFydC1sZWdlbmQtaW5kZXgtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3JzW2luZGV4XSAmJiBjb2xvcnNbaW5kZXhdLnZhbHVlIH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2hhcnROYW1lLmdldChjb250ZXh0Lml0ZW1zW2luZGV4XSkuZGlzcGxheVZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJhcmNoYXJ0LWNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZXh0Lml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsZW1lbnQgPT4gKGNvbnRhaW5lclJlZi5jdXJyZW50W2luZGV4XSA9IGVsZW1lbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BiYXJjaGFydC1pbmRleC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogY2hhcnRWYWx1ZS5nZXQoY29udGV4dC5pdGVtc1tpbmRleF0pLmRpc3BsYXlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaW5kZXhdICYmIGNvbG9yc1tpbmRleF0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFydFZhbHVlLmdldChjb250ZXh0Lml0ZW1zW2luZGV4XSkuZGlzcGxheVZhbHVlID49IDUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2hhcnRWYWx1ZS5nZXQoY29udGV4dC5pdGVtc1tpbmRleF0pLmRpc3BsYXlWYWx1ZX0lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtbWV0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtaW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJjaGFydC1pbmRpY2F0b3JcIj4wJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyY2hhcnQtaW5kaWNhdG9yXCI+NTAlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJjaGFydC1pbmRpY2F0b3JcIj4xMDAlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmFyY2hhcnQtd2lkZ2V0XCI+PC9kaXY+O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsIkJhckNoYXJ0IiwiY29udGV4dCIsImNoYXJ0VmFsdWUiLCJjb2xvcnMiLCJjaGFydE5hbWUiLCJjYW5SZW5kZXIiLCJzZXRDYW5SZW5kZXIiLCJ1c2VTdGF0ZSIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0YXR1cyIsIml0ZW1zIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZWxlbWVudCIsImN1cnJlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImdldCIsImRpc3BsYXlWYWx1ZSIsImZsZXgiXSwibWFwcGluZ3MiOiI7Ozs7RUFBQSxTQUFTQSxXQUFULENB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
