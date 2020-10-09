import {
  select,
  csv,
  scaleLinear,
  scaleTime,
  extent,
  max,
  axisLeft,
  axisBottom,
  line,
  curveBasis,
  format,
} from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
  const title = 'Foreign Residents in Korea';
  
  const xValue = d => d.year;
  const xAxisLabel = 'Year';
  
  const yValue = d => d.population;
  const circleRadius = 6;
  const yAxisLabel = 'Population';
  
  const margin = { top: 80, right: 40, bottom: 88, left: 150 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
    
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();
  
  const yScale = scaleLinear()
    .domain([0, d3.max(data, yValue)])
    .range([innerHeight, 0])
    .nice();
  
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const lineGenerator = line()
    .x(d => xScale(xValue(d)))
    .y(d => yScale(yValue(d)))
    .curve(curveBasis);
  
  g.append('path')
      .attr('class', 'line-path')
      .attr('d', lineGenerator(data));
  
  const xAxis = axisBottom(xScale)
    .tickSize(-innerHeight)
    .tickPadding(15);
    
  const yAxisTickFormat = number => 
  format('.s')(number);
  
  const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(10)
    .tickFormat(yAxisTickFormat);
  
  const yAxisG = g.append('g').call(yAxis);
  yAxisG.selectAll('.domain').remove();
  
  yAxisG.append('text')
      .attr('class', 'axis-label')
      .attr('y', -60)
      .attr('x', -innerHeight / 2)
      .attr('fill', 'black')
      .attr('transform', `rotate(-90)`)
      .attr('text-anchor', 'middle')
      .text(yAxisLabel);
  
  const xAxisG = g.append('g').call(xAxis)
    .attr('transform', `translate(0,${innerHeight})`);
  
  xAxisG.select('.domain').remove();
  
  xAxisG.append('text')
      .attr('class', 'axis-label')
      .attr('y', 80)
      .attr('x', innerWidth / 2)
      .attr('fill', 'black')
      .text(xAxisLabel);
  
   g.append('text')
      .attr('class', 'title')
      .attr('x', width / 2)
      .attr('y', -20)
      .text(title);
};

csv('https://gist.githubusercontent.com/Saemmool/74a550f7de4852b6a4026e69afd07ae3/raw/e3f324445e23548890ebaf4893f0a110cab38c60/Foreign%2520Residents%2520in%2520South%2520Korea')
  .then(data => {
    data.forEach(d => {
      d.population = +d.population;
      d.year = new Date(d.year);
    });
    render(data);
  });