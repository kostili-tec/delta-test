import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import TableCell from '../TableCells/TableCell/TableCell';
import TableCellTitle from '../TableCells/TableCellTitle/TableCellTitle';
import TableCellYesterday from '../TableCells/TableCellYesterday/TableCellYesterday';
import TableCellAnotherDay from '../TableCells/TableCellAnotherDay/TableCellAnotherDay';
import { useState } from 'react';

const TableRow = ({ tableData }) => {
  const [showChart, setShowChart] = useState(false);
  const handleClick = () => {
    setShowChart(!showChart);
  };

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

    series: [
      {
        data: data,
        color: 'green',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}', // Формат вывода данных
          style: {
            // Стили для текста
            color: 'black',
          },
        },
      },
    ],
  };
  return (
    <>
      <div onClick={handleClick} className="TableRow">
        <TableCellTitle text={tableData.indicator} />
        <TableCell cost={tableData.today.cost} />
        <TableCellYesterday cost={tableData.yesterday.cost} percent={tableData.yesterday.percent} />
        <TableCellAnotherDay cost={tableData.weekDay.cost} status={tableData.weekDay.status} />
      </div>
      {showChart && <HighchartsReact highcharts={Highcharts} options={options} />}
    </>
  );
};

export default TableRow;
