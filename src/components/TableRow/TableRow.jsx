import { useState, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import TableCell from '../TableCells/TableCell/TableCell';
import TableCellTitle from '../TableCells/TableCellTitle/TableCellTitle';
import TableCellYesterday from '../TableCells/TableCellYesterday/TableCellYesterday';
import TableCellAnotherDay from '../TableCells/TableCellAnotherDay/TableCellAnotherDay';

const TableRow = ({ tableData }) => {
  const [showChart, setShowChart] = useState(false);
  const chartRef = useRef(null);

  const data = [
    { name: 'Текущий день', y: tableData.today.cost },
    { name: 'Вчера', y: tableData.yesterday.cost },
    { name: 'Этот день недели', y: tableData.weekDay.cost },
  ];

  const options = {
    title: {
      text: tableData.indicator,
    },
    accessibility: {
      enabled: false,
    },

    legend: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        data: data,
        name: tableData.indicator,
        color: 'green',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}',
          style: {
            color: 'black',
          },
        },
      },
    ],
  };

  const handleClick = () => {
    setShowChart(!showChart);
  };

  const chartCallback = (chart) => {
    if (chart) {
      chartRef.current = chart;
      chart.reflow();
      window.scrollTo({
        top: chart.container.offsetTop - window.innerHeight / 2,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div onClick={handleClick} className="TableRow Pointer">
        <TableCellTitle text={tableData.indicator} />
        <TableCell cost={tableData.today.cost} />
        <TableCellYesterday cost={tableData.yesterday.cost} percent={tableData.yesterday.percent} />
        <TableCellAnotherDay cost={tableData.weekDay.cost} status={tableData.weekDay.status} />
      </div>
      {showChart && (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartRef}
          callback={chartCallback}
        />
      )}
    </>
  );
};

export default TableRow;
