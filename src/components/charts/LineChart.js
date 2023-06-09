import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            series: [
                {
                    name: "ថ្ងៃនេះ",
                    data: this.props.data?.map(data => data)
                }
            ],
            options: {
                chart: {
                    type: "area",
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    foreColor: '#808080',
                    dropShadow: {
                        enabled: true,
                        color: ['#32a852'],
                        top: 5,
                        left: 5,
                        blur: 2,

                    },
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
                        shadeIntensity: 1,
                        opacityFrom: 0.4,
                        opacityTo: 0.2,
                        stops: [0, 90, 100]
                    }
                },
                colors: ['#32a852'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                title: {
                    text: this.props.title,
                    align: 'left'
                },
                grid: {
                    strokeDashArray: 10
                },
                markers: {
                    size: 1
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
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
                theme: {
                    mode: 'light',
                    palette: 'palette1',
                    monochrome: {
                        enabled: false,
                        color: '#255aee',
                        shadeTo: 'light',
                        shadeIntensity: 0.65
                    },
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