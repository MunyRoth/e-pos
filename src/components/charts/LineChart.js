import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "ថ្ងៃនេះ",
                    data: [18, 19, 13, 16, 12, 12]
                },
                {
                    name: "ម្សិលម៉ិញ",
                    data: [12, 11, 14, 18, 17, 13]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#77B6EA', '#545454'],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'ចំនួនលក់ប្រចាំថ្ងៃ',
                    align: 'left'
                },
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                markers: {
                    size: 1
                },
                xaxis: {
                    categories: ['6:00AM', '9:00AM', '12:00PM', '3:00PM', '6:00PM', '9:00PM']
                },
                yaxis: {
                    min: 5,
                    max: 20
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                }
            },
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="500"
                        />
                    </div>
                </div>
                <div>
                    hello {this.props.name}
                </div>
            </div>

        );
    }
}

export default LineChart;