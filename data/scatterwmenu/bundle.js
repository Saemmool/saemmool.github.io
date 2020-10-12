(function (React$1, ReactDOM, d3) {
  'use strict';

  var React$1__default = 'default' in React$1 ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;
  ReactDropdown = ReactDropdown && Object.prototype.hasOwnProperty.call(ReactDropdown, 'default') ? ReactDropdown['default'] : ReactDropdown;

  const csvUrl =
    'https://gist.githubusercontent.com/Saemmool/18368979d10aa142c9baee8bade19a57/raw/9975a2db5a63b1a62ad2585ee63ccedfa878230b/gistfile1.txt';

  const useData = () => {
    const [data, setData] = React$1.useState(null);

    React$1.useEffect(() => {
      const row = d => {
        d.outflows = +d.outflows;
        d.inflows = +d.inflows;
        return d;
      };
      d3.csv(csvUrl, row).then(setData);
    }, []);
    
    return data;
  };

  const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset = 3 }) =>
    xScale.ticks().map(tickValue => (
      React.createElement( 'g', {
        className: "tick", key: tickValue, transform: `translate(${xScale(tickValue)},0)` },
        React.createElement( 'line', { y2: innerHeight }),
        React.createElement( 'text', { style: { textAnchor: 'middle' }, dy: ".71em", y: innerHeight + tickOffset },
          tickFormat(tickValue)
        )
      )
    ));

  const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
    yScale.ticks().map(tickValue => (
      React.createElement( 'g', { className: "tick", transform: `translate(0,${yScale(tickValue)})` },
        React.createElement( 'line', { x2: innerWidth }),
        React.createElement( 'text', {
          key: tickValue, style: { textAnchor: 'end' }, x: -tickOffset, dy: ".32em" },
          tickValue
        )
      )
    ));

  const Marks = ({
    data,
    xScale,
    yScale,
    xValue,
    yValue,
    tooltipFormat,
    circleRadius
  }) =>
    data.map(d => (
      React.createElement( 'circle', {
        className: "mark", cx: xScale(xValue(d)), cy: yScale(yValue(d)), r: circleRadius },
        React.createElement( 'title', null, tooltipFormat(xValue(d)) )
      )
    ));

  const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => (
    React$1__default.createElement( 'select', { id: id, onChange: event => onSelectedValueChange(event.target.value) },
      options.map(({ value, label }) => (
        React$1__default.createElement( 'option', { value: value, selected: value === selectedValue },
          label
        )
      ))
    )
  );

  const width = 960;
  const menuHeight = 80;
  const height = 500 - menuHeight;
  const margin = { top: 20, right: 20, bottom: 65, left: 90 };
  const xAxisLabelOffset = 50;
  const yAxisLabelOffset = 45;

  const attributes = [
    { value: 'outflows', label: 'Outflows' },
    { value: 'inflows', label: 'Inflows' },
    { value: 'country', label: 'Countries' }
  ];

  const getLabel = value => {
    for(let i = 0; i < attributes.length; i++){
      if(attributes[i].value === value){
        return attributes[i].label;
      }
    }
  };

  const App = () => {
    const data = useData();

    const initialXAttribute = 'outflows';
    const [xAttribute, setXAttribute] = React$1.useState(initialXAttribute);
    const xValue = d => d[xAttribute];
    const xAxisLabel = getLabel(xAttribute);

    const initialYAttribute = 'inflows';
    const [yAttribute, setYAttribute] = React$1.useState(initialYAttribute);
    const yValue = d => d[yAttribute];
    const yAxisLabel = getLabel(yAttribute);

    if (!data) {
      return React$1__default.createElement( 'pre', null, "Loading..." );
    }

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;
    const siFormat = d3.format('.2s');
    const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, xValue))
      .range([0, innerWidth])
      .nice();

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, yValue))
      .range([0, innerHeight]);

    return (
      React$1__default.createElement( React$1__default.Fragment, null,
        React$1__default.createElement( 'div', { className: "menus-container" },
          React$1__default.createElement( 'span', { className: "dropdown-label" }, "X"),
          React$1__default.createElement( ReactDropdown, {
            options: attributes, value: xAttribute, onChange: ({ value }) => setXAttribute(value) }),
          React$1__default.createElement( 'span', { className: "dropdown-label" }, "Y"),
          React$1__default.createElement( ReactDropdown, {
            options: attributes, value: yAttribute, onChange: ({ value }) => setYAttribute(value) })
        ),
        React$1__default.createElement( 'svg', { width: width, height: height },
          React$1__default.createElement( 'g', { transform: `translate(${margin.left},${margin.top})` },
            React$1__default.createElement( AxisBottom, {
              xScale: xScale, innerHeight: innerHeight, tickFormat: xAxisTickFormat, tickOffset: 5 }),
            React$1__default.createElement( 'text', {
              className: "axis-label", textAnchor: "middle", transform: `translate(${-yAxisLabelOffset},${innerHeight /
              2}) rotate(-90)` },
              yAxisLabel
            ),
            React$1__default.createElement( AxisLeft, { yScale: yScale, innerWidth: innerWidth, tickOffset: 5 }),
            React$1__default.createElement( 'text', {
              className: "axis-label", x: innerWidth / 2, y: innerHeight + xAxisLabelOffset, textAnchor: "middle" },
              xAxisLabel
            ),
            React$1__default.createElement( Marks, {
              data: data, xScale: xScale, yScale: yScale, xValue: xValue, yValue: yValue, tooltipFormat: xAxisTickFormat, circleRadius: 7 })
          )
        )
      )
    );
  };
    
  const rootElement = document.getElementById('root');
  ReactDOM.render(React$1__default.createElement( App, null ), rootElement);

}(React, ReactDOM, d3, ReactDropdown));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInVzZURhdGEuanMiLCJBeGlzQm90dG9tLmpzIiwiQXhpc0xlZnQuanMiLCJNYXJrcy5qcyIsIkRyb3Bkb3duLmpzIiwiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3YgfSBmcm9tICdkMyc7XG5cbmNvbnN0IGNzdlVybCA9XG4gICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2N1cnJhbi9hMDhhMTA4MGI4ODM0NGIwYzhhNy9yYXcvNjM5Mzg4YzJjYmMyMTIwYTE0ZGNmNDY2ZTg1NzMwZWI4YmU0OThiYi9pcmlzLmNzdic7XG5cbmV4cG9ydCBjb25zdCB1c2VEYXRhID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGQgPT4ge1xuICAgICAgZC5zZXBhbF9sZW5ndGggPSArZC5zZXBhbF9sZW5ndGg7XG4gICAgICBkLnNlcGFsX3dpZHRoID0gK2Quc2VwYWxfd2lkdGg7XG4gICAgICBkLnBldGFsX2xlbmd0aCA9ICtkLnBldGFsX2xlbmd0aDtcbiAgICAgIGQucGV0YWxfd2lkdGggPSArZC5wZXRhbF93aWR0aDtcbiAgICAgIHJldHVybiBkO1xuICAgIH07XG4gICAgY3N2KGNzdlVybCwgcm93KS50aGVuKHNldERhdGEpO1xuICB9LCBbXSk7XG4gIFxuICByZXR1cm4gZGF0YTtcbn07IiwiZXhwb3J0IGNvbnN0IEF4aXNCb3R0b20gPSAoeyB4U2NhbGUsIGlubmVySGVpZ2h0LCB0aWNrRm9ybWF0LCB0aWNrT2Zmc2V0ID0gMyB9KSA9PlxuICB4U2NhbGUudGlja3MoKS5tYXAodGlja1ZhbHVlID0+IChcbiAgICA8Z1xuICAgICAgY2xhc3NOYW1lPVwidGlja1wiXG4gICAgICBrZXk9e3RpY2tWYWx1ZX1cbiAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3hTY2FsZSh0aWNrVmFsdWUpfSwwKWB9XG4gICAgPlxuICAgICAgPGxpbmUgeTI9e2lubmVySGVpZ2h0fSAvPlxuICAgICAgPHRleHQgc3R5bGU9e3sgdGV4dEFuY2hvcjogJ21pZGRsZScgfX0gZHk9XCIuNzFlbVwiIHk9e2lubmVySGVpZ2h0ICsgdGlja09mZnNldH0+XG4gICAgICAgIHt0aWNrRm9ybWF0KHRpY2tWYWx1ZSl9XG4gICAgICA8L3RleHQ+XG4gICAgPC9nPlxuICApKTtcbiIsImV4cG9ydCBjb25zdCBBeGlzTGVmdCA9ICh7IHlTY2FsZSwgaW5uZXJXaWR0aCwgdGlja09mZnNldCA9IDMgfSkgPT5cbiAgeVNjYWxlLnRpY2tzKCkubWFwKHRpY2tWYWx1ZSA9PiAoXG4gICAgPGcgY2xhc3NOYW1lPVwidGlja1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCR7eVNjYWxlKHRpY2tWYWx1ZSl9KWB9PlxuICAgICAgPGxpbmUgeDI9e2lubmVyV2lkdGh9IC8+XG4gICAgICA8dGV4dFxuICAgICAgICBrZXk9e3RpY2tWYWx1ZX1cbiAgICAgICAgc3R5bGU9e3sgdGV4dEFuY2hvcjogJ2VuZCcgfX1cbiAgICAgICAgeD17LXRpY2tPZmZzZXR9XG4gICAgICAgIGR5PVwiLjMyZW1cIlxuICAgICAgPlxuICAgICAgICB7dGlja1ZhbHVlfVxuICAgICAgPC90ZXh0PlxuICAgIDwvZz5cbiAgKSk7XG4iLCJleHBvcnQgY29uc3QgTWFya3MgPSAoe1xuICBkYXRhLFxuICB4U2NhbGUsXG4gIHlTY2FsZSxcbiAgeFZhbHVlLFxuICB5VmFsdWUsXG4gIHRvb2x0aXBGb3JtYXQsXG4gIGNpcmNsZVJhZGl1c1xufSkgPT5cbiAgZGF0YS5tYXAoZCA9PiAoXG4gICAgPGNpcmNsZVxuICAgICAgY2xhc3NOYW1lPVwibWFya1wiXG4gICAgICBjeD17eFNjYWxlKHhWYWx1ZShkKSl9XG4gICAgICBjeT17eVNjYWxlKHlWYWx1ZShkKSl9XG4gICAgICByPXtjaXJjbGVSYWRpdXN9XG4gICAgPlxuICAgICAgPHRpdGxlPnt0b29sdGlwRm9ybWF0KHhWYWx1ZShkKSl9PC90aXRsZT5cbiAgICA8L2NpcmNsZT5cbiAgKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRHJvcGRvd24gPSAoeyBvcHRpb25zLCBpZCwgc2VsZWN0ZWRWYWx1ZSwgb25TZWxlY3RlZFZhbHVlQ2hhbmdlIH0pID0+IChcbiAgPHNlbGVjdCBpZD17aWR9IG9uQ2hhbmdlPXtldmVudCA9PiBvblNlbGVjdGVkVmFsdWVDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0+XG4gICAge29wdGlvbnMubWFwKCh7IHZhbHVlLCBsYWJlbCB9KSA9PiAoXG4gICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0gc2VsZWN0ZWQ9e3ZhbHVlID09PSBzZWxlY3RlZFZhbHVlfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9vcHRpb24+XG4gICAgKSl9XG4gIDwvc2VsZWN0PlxuKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNzdiwgc2NhbGVMaW5lYXIsIG1heCwgZm9ybWF0LCBleHRlbnQgfSBmcm9tICdkMyc7XG5pbXBvcnQgeyB1c2VEYXRhIH0gZnJvbSAnLi91c2VEYXRhJztcbmltcG9ydCB7IEF4aXNCb3R0b20gfSBmcm9tICcuL0F4aXNCb3R0b20nO1xuaW1wb3J0IHsgQXhpc0xlZnQgfSBmcm9tICcuL0F4aXNMZWZ0JztcbmltcG9ydCB7IE1hcmtzIH0gZnJvbSAnLi9NYXJrcyc7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJy4vRHJvcGRvd24nO1xuXG5jb25zdCB3aWR0aCA9IDk2MDtcbmNvbnN0IG1lbnVIZWlnaHQgPSA3NTtcbmNvbnN0IGhlaWdodCA9IDUwMCAtIG1lbnVIZWlnaHQ7XG5jb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAzMCwgYm90dG9tOiA2NSwgbGVmdDogOTAgfTtcbmNvbnN0IHhBeGlzTGFiZWxPZmZzZXQgPSA1MDtcbmNvbnN0IHlBeGlzTGFiZWxPZmZzZXQgPSA0NTtcblxuY29uc3QgYXR0cmlidXRlcyA9IFtcbiAgeyB2YWx1ZTogJ3NlcGFsX2xlbmd0aCcsIGxhYmVsOiAnU2VwYWwgTGVuZ3RoJyB9LFxuICB7IHZhbHVlOiAnc2VwYWxfd2lkdGgnLCBsYWJlbDogJ1NlcGFsIFdpZHRoJyB9LFxuICB7IHZhbHVlOiAncGV0YWxfbGVuZ3RoJywgbGFiZWw6ICdQZXRhbCBMZW5ndGgnIH0sXG4gIHsgdmFsdWU6ICdwZXRhbF93aWR0aCcsIGxhYmVsOiAnUGV0YWwgV2lkdGgnIH0sXG4gIHsgdmFsdWU6ICdzcGVjaWVzJywgbGFiZWw6ICdTcGVjaWVzJyB9XG5dO1xuXG5jb25zdCBnZXRMYWJlbCA9IHZhbHVlID0+IHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspe1xuICAgIGlmKGF0dHJpYnV0ZXNbaV0udmFsdWUgPT09IHZhbHVlKXtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzW2ldLmxhYmVsO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlRGF0YSgpO1xuXG4gIGNvbnN0IGluaXRpYWxYQXR0cmlidXRlID0gJ3BldGFsX2xlbmd0aCc7XG4gIGNvbnN0IFt4QXR0cmlidXRlLCBzZXRYQXR0cmlidXRlXSA9IHVzZVN0YXRlKGluaXRpYWxYQXR0cmlidXRlKTtcbiAgY29uc3QgeFZhbHVlID0gZCA9PiBkW3hBdHRyaWJ1dGVdO1xuICBjb25zdCB4QXhpc0xhYmVsID0gZ2V0TGFiZWwoeEF0dHJpYnV0ZSk7XG5cbiAgY29uc3QgaW5pdGlhbFlBdHRyaWJ1dGUgPSAnc2VwYWxfd2lkdGgnO1xuICBjb25zdCBbeUF0dHJpYnV0ZSwgc2V0WUF0dHJpYnV0ZV0gPSB1c2VTdGF0ZShpbml0aWFsWUF0dHJpYnV0ZSk7XG4gIGNvbnN0IHlWYWx1ZSA9IGQgPT4gZFt5QXR0cmlidXRlXTtcbiAgY29uc3QgeUF4aXNMYWJlbCA9IGdldExhYmVsKHlBdHRyaWJ1dGUpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8cHJlPkxvYWRpbmcuLi48L3ByZT47XG4gIH1cblxuICBjb25zdCBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICBjb25zdCBpbm5lcldpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3Qgc2lGb3JtYXQgPSBmb3JtYXQoJy4ycycpO1xuICBjb25zdCB4QXhpc1RpY2tGb3JtYXQgPSB0aWNrVmFsdWUgPT4gc2lGb3JtYXQodGlja1ZhbHVlKS5yZXBsYWNlKCdHJywgJ0InKTtcblxuICBjb25zdCB4U2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgLmRvbWFpbihleHRlbnQoZGF0YSwgeFZhbHVlKSlcbiAgICAucmFuZ2UoWzAsIGlubmVyV2lkdGhdKVxuICAgIC5uaWNlKCk7XG5cbiAgY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oZXh0ZW50KGRhdGEsIHlWYWx1ZSkpXG4gICAgLnJhbmdlKFswLCBpbm5lckhlaWdodF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsYWJlbCBmb3I9XCJ4LXNlbGVjdFwiPlg6PC9sYWJlbD5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBvcHRpb25zPXthdHRyaWJ1dGVzfVxuICAgICAgICBpZD1cIngtc2VsZWN0XCJcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZT17eEF0dHJpYnV0ZX1cbiAgICAgICAgb25TZWxlY3RlZFZhbHVlQ2hhbmdlPXtzZXRYQXR0cmlidXRlfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJ5LXNlbGVjdFwiPlk6PC9sYWJlbD5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBvcHRpb25zPXthdHRyaWJ1dGVzfVxuICAgICAgICBpZD1cInktc2VsZWN0XCJcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZT17eUF0dHJpYnV0ZX1cbiAgICAgICAgb25TZWxlY3RlZFZhbHVlQ2hhbmdlPXtzZXRZQXR0cmlidXRlfVxuICAgICAgLz5cbiAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWB9PlxuICAgICAgICAgIDxBeGlzQm90dG9tXG4gICAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICAgIGlubmVySGVpZ2h0PXtpbm5lckhlaWdodH1cbiAgICAgICAgICAgIHRpY2tGb3JtYXQ9e3hBeGlzVGlja0Zvcm1hdH1cbiAgICAgICAgICAgIHRpY2tPZmZzZXQ9ezV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXhpcy1sYWJlbFwiXG4gICAgICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgkey15QXhpc0xhYmVsT2Zmc2V0fSwke2lubmVySGVpZ2h0IC9cbiAgICAgICAgICAgICAgMn0pIHJvdGF0ZSgtOTApYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eUF4aXNMYWJlbH1cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgPEF4aXNMZWZ0IHlTY2FsZT17eVNjYWxlfSBpbm5lcldpZHRoPXtpbm5lcldpZHRofSB0aWNrT2Zmc2V0PXs1fSAvPlxuICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJheGlzLWxhYmVsXCJcbiAgICAgICAgICAgIHg9e2lubmVyV2lkdGggLyAyfVxuICAgICAgICAgICAgeT17aW5uZXJIZWlnaHQgKyB4QXhpc0xhYmVsT2Zmc2V0fVxuICAgICAgICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3hBeGlzTGFiZWx9XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgIDxNYXJrc1xuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgICB4VmFsdWU9e3hWYWx1ZX1cbiAgICAgICAgICAgIHlWYWx1ZT17eVZhbHVlfVxuICAgICAgICAgICAgdG9vbHRpcEZvcm1hdD17eEF4aXNUaWNrRm9ybWF0fVxuICAgICAgICAgICAgY2lyY2xlUmFkaXVzPXs3fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvPlxuICApO1xufTtcbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCByb290RWxlbWVudCk7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjc3YiLCJSZWFjdCIsImZvcm1hdCIsInNjYWxlTGluZWFyIiwiZXh0ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7RUFHQSxNQUFNLE1BQU07SUFDVixzSEFBc0gsQ0FBQzs7QUFFekgsRUFBTyxNQUFNLE9BQU8sR0FBRyxNQUFNO0lBQzNCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUdBLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBRXZDQyxpQkFBUyxDQUFDLE1BQU07TUFDZCxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUk7UUFDZixDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNqQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUMvQixDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNqQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUMvQixPQUFPLENBQUMsQ0FBQztPQUNWLENBQUM7TUFDRkMsTUFBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFFUCxPQUFPLElBQUksQ0FBQztHQUNiOztFQ3JCTSxNQUFNLFVBQVUsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRTtJQUM1RSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVM7TUFDMUI7UUFDRSxXQUFVLE1BQU0sRUFDaEIsS0FBSyxTQUFVLEVBQ2YsV0FBVyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRTlDLCtCQUFNLElBQUksV0FBVyxFQUFDO1FBQ3RCLCtCQUFNLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBRyxPQUFPLEVBQUMsR0FBRyxXQUFXLEdBQUcsVUFBVTtVQUMxRSxVQUFVLENBQUMsU0FBUyxDQUFDO1NBQ2pCO09BQ0w7S0FDTCxDQUFDLENBQUM7O0VDWkUsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRTtJQUM3RCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVM7TUFDMUIsNEJBQUcsV0FBVSxNQUFNLEVBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLCtCQUFNLElBQUksVUFBVSxFQUFDO1FBQ3JCO1VBQ0UsS0FBSyxTQUFTLEVBQ2QsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFDNUIsR0FBRyxDQUFDLFVBQVUsRUFDZCxJQUFHLE9BQU87VUFFVCxTQUFTO1NBQ0w7T0FDTDtLQUNMLENBQUMsQ0FBQzs7RUNiRSxNQUFNLEtBQUssR0FBRyxDQUFDO0lBQ3BCLElBQUk7SUFDSixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sYUFBYTtJQUNiLFlBQVk7R0FDYjtJQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNSO1FBQ0UsV0FBVSxNQUFNLEVBQ2hCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNyQixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckIsR0FBRyxZQUFZO1FBRWYsb0NBQVEsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUFRO09BQ2xDO0tBQ1YsQ0FBQyxDQUFDOztFQ2hCRSxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUscUJBQXFCLEVBQUU7SUFDNUVDLDRDQUFRLElBQUksRUFBRyxFQUFDLFVBQVUsS0FBSyxJQUFJLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO01BQzFFLE9BQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7UUFDNUJBLDRDQUFRLE9BQU8sS0FBTSxFQUFDLFVBQVUsS0FBSyxLQUFLLGFBQWE7VUFDcEQsS0FBSztTQUNDO09BQ1YsQ0FBQztLQUNLO0dBQ1Y7O0VDREQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ2xCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztFQUN0QixNQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDO0VBQ2hDLE1BQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBQzVELE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0VBQzVCLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOztFQUU1QixNQUFNLFVBQVUsR0FBRztJQUNqQixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtJQUNoRCxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtJQUM5QyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtJQUNoRCxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtJQUM5QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtHQUN2QyxDQUFDOztFQUVGLE1BQU0sUUFBUSxHQUFHLEtBQUssSUFBSTtJQUN4QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztNQUN4QyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztPQUM1QjtLQUNGO0dBQ0YsQ0FBQzs7RUFFRixNQUFNLEdBQUcsR0FBRyxNQUFNO0lBQ2hCLE1BQU0sSUFBSSxHQUFHLE9BQU8sRUFBRSxDQUFDOztJQUV2QixNQUFNLGlCQUFpQixHQUFHLGNBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHSCxnQkFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDaEUsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7O0lBRXhDLE1BQU0saUJBQWlCLEdBQUcsYUFBYSxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUdBLGdCQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNoRSxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7SUFFeEMsSUFBSSxDQUFDLElBQUksRUFBRTtNQUNULE9BQU9HLDZDQUFLLFlBQVUsRUFBTSxDQUFDO0tBQzlCOztJQUVELE1BQU0sV0FBVyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDeEQsTUFBTSxVQUFVLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0RCxNQUFNLFFBQVEsR0FBR0MsU0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLE1BQU0sZUFBZSxHQUFHLFNBQVMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFFM0UsTUFBTSxNQUFNLEdBQUdDLGNBQVcsRUFBRTtPQUN6QixNQUFNLENBQUNDLFNBQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7T0FDNUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO09BQ3RCLElBQUksRUFBRSxDQUFDOztJQUVWLE1BQU0sTUFBTSxHQUFHRCxjQUFXLEVBQUU7T0FDekIsTUFBTSxDQUFDQyxTQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQzVCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDOztJQUUzQjtNQUNFSDtRQUNFQSwyQ0FBTyxLQUFJLFVBQVUsSUFBQyxJQUFFO1FBQ3hCQSxnQ0FBQztVQUNDLFNBQVMsVUFBVyxFQUNwQixJQUFHLFVBQVUsRUFDYixlQUFlLFVBQVUsRUFDekIsdUJBQXVCLGFBQWEsRUFBQztRQUV2Q0EsMkNBQU8sS0FBSSxVQUFVLElBQUMsSUFBRTtRQUN4QkEsZ0NBQUM7VUFDQyxTQUFTLFVBQVcsRUFDcEIsSUFBRyxVQUFVLEVBQ2IsZUFBZSxVQUFVLEVBQ3pCLHVCQUF1QixhQUFhLEVBQUM7UUFFdkNBLHlDQUFLLE9BQU8sS0FBSyxFQUFFLFFBQVEsTUFBTTtVQUMvQkEsdUNBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyREEsZ0NBQUM7Y0FDQyxRQUFRLE1BQU8sRUFDZixhQUFhLFdBQVcsRUFDeEIsWUFBWSxlQUFlLEVBQzNCLFlBQVksQ0FBQyxFQUFDO1lBRWhCQTtjQUNFLFdBQVUsWUFBWSxFQUN0QixZQUFXLFFBQVEsRUFDbkIsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxXQUFXO2NBQ3RELENBQUMsQ0FBQyxhQUFhLENBQUM7Y0FFakIsVUFBVTs7WUFFYkEsZ0NBQUMsWUFBUyxRQUFRLE1BQU0sRUFBRSxZQUFZLFVBQVUsRUFBRSxZQUFZLENBQUMsRUFBQztZQUNoRUE7Y0FDRSxXQUFVLFlBQVksRUFDdEIsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUNqQixHQUFHLFdBQVcsR0FBRyxnQkFBaUIsRUFDbEMsWUFBVyxRQUFRO2NBRWxCLFVBQVU7O1lBRWJBLGdDQUFDO2NBQ0MsTUFBTSxJQUFJLEVBQ1YsUUFBUSxNQUFNLEVBQ2QsUUFBUSxNQUFNLEVBQ2QsUUFBUSxNQUFNLEVBQ2QsUUFBUSxNQUFPLEVBQ2YsZUFBZSxlQUFnQixFQUMvQixjQUFjLENBQUMsRUFBQyxDQUNoQjtXQUNBO1NBQ0E7T0FDTDtNQUNIO0dBQ0gsQ0FBQztFQUNGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQ0EsZ0NBQUMsU0FBRyxFQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7Ozs7In0=