import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export const ExpenseChart = ({ chartData }) => {
  console.log(chartData);
  if (!chartData) {
    return <div></div>;
  }

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'My First dataset',
        data: chartData.data,
        backgroundColor: [
          '#003f5c',
          '#58508d',
          '#bc5090',
          '#ff6361',
          '#ffa600',
          '#488f31',
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
