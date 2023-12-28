import cls from './TableHeader.module.scss';

const TableHeader = () => {
  return (
    <div className="TableRow">
      <div className={cls.HeaderCell}>Показатель</div>
      <div className={`${cls.HeaderCell} ${cls.ItemBlue}`}>Текущий день</div>
      <div className={cls.HeaderCell}>Вчера</div>
      <div className={cls.HeaderCell}>Этот день недели</div>
    </div>
  );
};

export default TableHeader;
