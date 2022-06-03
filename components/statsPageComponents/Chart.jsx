import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const SummaryChart = () => {
  const options = {
    responsive: true,
    borderJoinStyle: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Summary",
      },
    },
  };
  return (
    <Line
      color="#F9A109"
      datasetIdKey="id"
      options={options}
      data={{
        labels: [
          "Jan",
          "Feb",
          "March",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            borderColor: "#F9A109",
            id: 1,
            label: "",
            borderWidth: 1,
            lineTension: 0.4,
            showLine: true,
            pointRadius: 1,
            data: [100, 29, 209, 397, 2982, 27, 2092, 459, 293, 1903, 102, 780],
          },
        ],
      }}
    />
  );
};

export default SummaryChart;
