import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

export const TotalByCategoryChart = ({ totalByCategoryChartData }) => {
  if (!totalByCategoryChartData) {
    return null;
  }
  console.log(typeof(totalByCategoryChartData))

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
    <div className="expense-chart add-box-shadow add-margin-y">
      {' '}
      <Doughnut
        data={data}
        options={{
          title: {
            text: 'Total expenses by category',
            display: true,
            fontSize: 20,
          },
          maintainAspectRatio: false,
        }}
        legend={{ display: true, position: 'bottom', align: 'center' }}
      />
    </div>
  );
};

TotalByCategoryChart.propTypes = {
  totalByCategoryChartData: PropTypes.object.isRequired
};

export default TotalByCategoryChart;
