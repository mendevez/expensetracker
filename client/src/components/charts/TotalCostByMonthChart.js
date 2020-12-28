import React from 'react';
import { selectTotalByMonthChartData } from '../../redux/selectors/expenseSelectors';
import {useSelector} from 'react-redux';
import { Bar } from 'react-chartjs-2';

const TotalCostByMonthChart = () => {
  const totalCostByMonthChartData = useSelector(selectTotalByMonthChartData);
  if (!totalCostByMonthChartData) {
    return <div>No data for total cost by month </div>
  }
  const chartLabels = Object.keys(totalCostByMonthChartData);
  const expensesByMonth = Object.values(totalCostByMonthChartData);

  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: expensesByMonth,
        backgroundColor: [
          '#003f5c',
          '#58508d',
          '#bc5090',
          '#ff6361',
          '#251e3e',
          '#488f31',
          '#6e0f0f',
          '#2ab7ca',
          '#b3cde0',
        ],
      },
    ],
  };
  return (
    <div className="add-box-shadow">
      <Bar
        data={data}
        height={300}
        options={{
          title: {
            text: 'Total expenses by month',
            display: true,
            fontSize: 20,
          },
          maintainAspectRatio: false,
          responsive: true,
        }}
        legend={{ display: false }}
      />
    </div>
  );
};

export default TotalCostByMonthChart;
