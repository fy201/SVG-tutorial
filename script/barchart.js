export default class BarChart{
    width; height;
    svg;chart; bars;
    data;
    constructor(container,width,height){
        this.width=width;
        this.height=height;
        this.svg= d3.select(container).append('svg')
        classed('barchart', true)
        .attr('width', width)
        .attr('height',height);
        this.svg.append('g');
        this.bars=this.chart.selectAll('rect.bar');

    }

    #updateBars(){
        this.bars=this.bars
        .data(this.data,d=>d[0])
        .join('rect')
        .classed('bar', true)
        .attr('x',(d,i)=>i*40+5)
        .attr('y',(d=>this.height-d[1]*10))
        .attr('width',40)
        .attr('height', d=>d[1]*10);


    }
    render(dataset){
    this.data=dataset;
    this.#updateBars;
    return this;
}
}