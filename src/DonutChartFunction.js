import Chart from "react-apexcharts";
import { useState } from "react";

function DonutChartFunction() {
  const [options, setOptions] = useState({
    labels: ["Label 1", "Label 2", "Label 3"],
    annotations: {
      texts: [
        {
          x: 200,
          y: 145,
          textAnchor: "middle",
          text: "Chart Function text annotation",
          fontSize: 24,
          fontWeight: "bold",
          foreColor: "#000",
        },
      ],
    },
  });
  const [series, setSeries] = useState([30, 40, 30]);

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
}

export default DonutChartFunction;
