import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
    
    constructor(props) {
        super(props);
        console.log(this.props.data.today);
        this.state = {
            series: [
                {
                    name: "ថ្ងៃនេះ",
                    data: this.props.data.today
                },
                {
                    name: "ម្សិលម៉ិញ",
                    data: this.props.data.yesterday
                }
            ],
            options: {
                chart: {
                    type: "area",
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    foreColor: '#808080',
                    // dropShadow: {
                    //     enabled: true,
                    //     color: ['#00ff00', '#000000'],
                    //     top: 18,
                    //     left: 7,
                    //     blur: 10,
                        
                    // },
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 0.7,
                        opacityFrom: 0.7,
                        opacityTo: 0.5,
                        stops: [0, 90, 100]
                      }
                },
                colors: ['#A0A0A0', '#32a852'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'ចំនួនលក់ប្រចាំថ្ងៃ',
                    align: 'left',
                    style: {
                        color:  '#000'
                    },
                },
                grid: {
                    strokeDashArray: 10,
                },
                markers: {
                    size: 1
                },
                xaxis: {
                    categories: ['6:00AM', '9:00AM', '12:00PM', '3:00PM', '6:00PM', '9:00PM']
                },
                yaxis: {
                    tickAmount: 4,
                    min: 0,
                    max: 20
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -40,
                    offsetX: -5
                },
                responsive: [
                    {
                        breakpoint: 2000,
                        options: {
                          chart: {
                              width: "500",
                          },
                        }
                    },
                    {
                        breakpoint: 1900,
                        options: {
                          chart: {
                              width: "475",
                          },
                        }
                    },
                    {
                        breakpoint: 1800,
                        options: {
                          chart: {
                              width: "450",
                          },
                        }
                    },
                    {
                        breakpoint: 1700,
                        options: {
                          chart: {
                              width: "425",
                          },
                        }
                    },
                    {
                        breakpoint: 1600,
                        options: {
                          chart: {
                              width: "390",
                          },
                        }
                    },
                    {
                      breakpoint: 1500,
                      options: {
                        chart: {
                            width: "360",
                        },
                      }
                    },
                    {
                        breakpoint: 1400,
                        options: {
                          chart: {
                              width: "330",
                          },
                        }
                    },
                    {
                        breakpoint: 1300,
                        options: {
                          chart: {
                              width: "300",
                          },
                        }
                    },
                    {
                        breakpoint: 1200,
                        options: {
                          chart: {
                              width: "200",
                          },
                        }
                    },
                  ]
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
                            type="area"
                            width="500"
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default LineChart;