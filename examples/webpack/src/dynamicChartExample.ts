
import { Component } from '../../../node_modules/@angular/core';

@Component({
    selector: 'dynamic-chart-example',
    template: `
        <chart [options]="options" [load]="saveInstance"></chart>
        <button (click)="addPoint()">Add Point</button>
    `
})
export class DynamicChartExample {
    constructor() {
        this.options = {
            title: { text : 'chart with dynamic data' },
            series: [{
                data: [2,3,5,8]
            }]
        }
    }
    chart : any;
    options: any;
    saveInstance(chartInstance) {
        this.chart = chartInstance;

        console.log('native chart access', this.chart);

        this.chart.update(
            {
                title: {
                    text: 'updated title'
                }
            }
        );
    }
    addPoint() {
        this.chart.series[0].addPoint(Math.random() * 10);

        for (var series of this.chart.series) {
            console.log(series);
        }
    }
}