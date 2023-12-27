import numberFormat from '../../utils/numberFormat';
import cls from './TableItem.module.scss';

const TableItem = ({ cost }) => {
  return <div className={cls.TableItem}>{numberFormat(cost)}</div>;
};

export default TableItem;
