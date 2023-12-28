import numberFormat from '../../../utils/numberFormat';

const TableCellYesterday = ({ cost, percent }) => {
  let classesDiv = 'Cell';
  let classesSpan = '';

  if (percent > 0) {
    classesDiv = 'Cell CellGood CellWithPercent';
    classesSpan = 'CellGoodPercent';
  } else if (percent < 0) {
    classesDiv = 'Cell CellBad CellWithPercent';
    classesSpan = 'CellBadPercent';
  } else {
    classesDiv = 'Cell CellWithPercent';
    classesSpan = 'CellGoodPercent';
  }

  return (
    <div className={classesDiv}>
      <div className="CellCostContainer">
        <span>{numberFormat(cost)}</span>
      </div>
      <div className="CellPercentContainer">
        <span className={classesSpan}>{percent}%</span>
      </div>
    </div>
  );
};

export default TableCellYesterday;
