import numberFormat from '../../../utils/numberFormat';

const TableCell = ({ cost }) => {
  return <div className={`Cell CellToday`}>{numberFormat(cost)}</div>;
};

export default TableCell;
