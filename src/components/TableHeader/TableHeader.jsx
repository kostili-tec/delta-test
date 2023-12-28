const TableHeader = () => {
  return (
    <div className="TableRow">
      <div className="HeaderCell">Показатель</div>
      <div className="HeaderCell CellToday">Текущий день</div>
      <div className="HeaderCell">Вчера</div>
      <div className="HeaderCell">Этот день недели</div>
    </div>
  );
};

export default TableHeader;
