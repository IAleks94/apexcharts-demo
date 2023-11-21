import React from "react";
import Chart from "react-apexcharts";

class DonutChartClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Label 1", "Label 2", "Label 3"],
        annotations: {
          texts: [
            {
              x: 200,
              y: 145,
              textAnchor: "middle",
              text: "Chart Class text annotation",
              fontSize: 24,
              fontWeight: "bold",
              foreColor: "#000",
            },
          ],
        },
      },
      series: [30, 40, 30],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default DonutChartClass;
