import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalByCategoryChartData } from '../../redux/selectors/expenseSelectors';
import { Doughnut } from 'react-chartjs-2';

export const TotalByCategoryChart = () => {
  const totalByCategoryChartData = useSelector(selectTotalByCategoryChartData);
  if (!totalByCategoryChartData) {
    return null;
  }

  const chartLabels = Object.keys(totalByCategoryChartData);
  const costByCategory = Object.values(totalByCategoryChartData);

  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: costByCategory,
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
    <div className=" category-chart add-box-shadow">
      <Doughnut
        data={data}
        height={300}
        options={{
          title: {
            text: 'Total expenses by category',
            display: true,
            fontSize: 20,
          },
          maintainAspectRatio: false,
          responsive: true,
        }}
        legend={{ display: true, position: 'bottom', align: 'center' }}
      />
    </div>
  );
};

export default TotalByCategoryChart;
