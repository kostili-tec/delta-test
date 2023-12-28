import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import TableCellTitle from '../TableCells/TableCellTitle/TableCellTitle';
import TableCell from '../TableCells/TableCell/TableCell';
import TableCellYesterday from '../TableCells/TableCellYesterday/TableCellYesterday';
import TableCellAnotherDay from '../TableCells/TableCellAnotherDay/TableCellAnotherDay';
import './styles.scss';

const Table = () => {
  return (
    <div className="Table">
      <TableHeader />

      <TableRow>
        <TableCellTitle text={'Выручка, руб'} />
        <TableCell cost={500521} />
        <TableCellYesterday cost={480521} percent={50} />
        <TableCellAnotherDay cost={4805121} status={'good'} />
      </TableRow>
      <TableRow>
        <TableCellTitle text={'Наличные'} />
        <TableCell cost={300000} />
        <TableCellYesterday cost={300000} percent={-6} />
        <TableCellAnotherDay cost={300000} status={'bad'} />
      </TableRow>
      <TableRow>
        <TableCellTitle text={'Наличные'} />
        <TableCell cost={300000} />
        <TableCellYesterday cost={30000} percent={0} />
        <TableCellAnotherDay cost={300000} />
      </TableRow>
    </div>
  );
};

export default Table;
