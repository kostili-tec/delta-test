import cls from './TableHeader.module.scss';

const TableHeader = () => {
  return (
    <div className="TableRow">
      <div>Показатель</div>
      <div className={cls.ItemBlue}>Текущий день</div>
      <div>Вчера</div>
      <div>Этот день недели</div>
    </div>
  );
};

export default TableHeader;
