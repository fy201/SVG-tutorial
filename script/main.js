'use strict';
import BarChart from ;
let cities = [
    {city: 'Edinburgh', pop: 506000, area: 119, alt: 47},
    {city: 'Dubai', pop: 3604000, area: 1610, alt: 5},
    {city: 'Putrajaya', pop: 109000, area: 49, alt: 38},
    {city: 'Qingdao', pop: 10071000, area: 11228, alt: 25},
    {city: 'Lagos', pop: 8048000, area: 1171, alt: 41},
    {city: 'Ottawa', pop: 1017000, area: 2790, alt: 70}
   ]
   
let barContainer = d3.select('div#bar1');
let barSvg = barContainer.append('svg')
            .attr('width', 800)
            .attr('height', 500)
            .classed('barchart', true);
let barGroup = barSvg.append('g');
let bars = barGroup.selectAll('rect')
            .data(cities, d=>d.city)
            .join('rect')
            .attr('x', (d,i)=>i*45)
            .attr('y', d=>500-d.alt*10)
            .attr('height', d=>d.alt*10)
            .attr('width', 40)
            .style('fill', d=>d.pop<1000000?'#ba4a53':null)
            .style('stroke', d=>d.pop<1000000?'#381619':null);

