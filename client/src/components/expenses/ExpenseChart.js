import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export const ExpenseChart = ({ chartData }) => {
  if (!chartData) {
    return <div></div>;
  }

  const chartLabels = Object.keys(chartData);
  const costByCategory = Object.values(chartData); 

  const data = {
    labels:  chartLabels,
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
            text: 'Expenses by category',
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

export default ExpenseChart;
