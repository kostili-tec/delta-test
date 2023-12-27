import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import TableItemTitle from '../TableItemTitle/TableItemTitle';
import TableItem from '../TableItem/TableItem';
import './styles.scss';

const Table = () => {
  return (
    <div className="Table">
      <TableHeader />

      <TableRow>
        <TableItemTitle text={'Выручка, руб'} />
        <TableItem cost={500521} />
        <TableItem cost={480521} />
        <TableItem cost={4805121} />
      </TableRow>
    </div>
  );
};

export default Table;
