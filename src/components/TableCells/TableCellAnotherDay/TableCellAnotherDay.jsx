import numberFormat from '../../../utils/numberFormat';

const TableCellAnotherDay = ({ cost, status }) => {
  let classesDiv = 'Cell';

  if (status === 'bad') {
    classesDiv = 'Cell CellBad';
  } else if (status === 'good') {
    classesDiv = 'Cell CellGood';
  }
  return <div className={classesDiv}>{numberFormat(cost)}</div>;
};

export default TableCellAnotherDay;
