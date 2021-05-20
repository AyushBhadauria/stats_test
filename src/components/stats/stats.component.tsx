import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

interface Props {}
interface State {
  series: ApexAxisChartSeries;
  options: ApexOptions;
}

export class StatsComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "stats",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "User Stats",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
      },
    };
  }

  componentWillMount() {}

  componentDidUpdate(prevProps: Props) {}

  handleRequestData() {}

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width={500}
        height={320}
      />
    );
  }
}
