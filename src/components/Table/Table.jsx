import { useEffect, useState } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import { fetchData } from '../../api/api';
import './styles.scss';

const Table = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setTableData(data);
    };
    getData();
  });
  return (
    <div className="Table">
      <TableHeader />
      {tableData && tableData.map((data) => <TableRow tableData={data} key={data.indicator} />)}
    </div>
  );
};

export default Table;
