import { useEffect, useState } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import { fetchData } from '../../api/api';
import './styles.scss';
import Spinner from '../Spinner/Spinner';

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchData();
      setLoading(false);
      setTableData(data);
    };
    getData();
  }, []);
  return (
    <div className="Table">
      <TableHeader />
      {tableData && tableData.map((data) => <TableRow tableData={data} key={data.indicator} />)}
      {loading && <Spinner />}
    </div>
  );
};

export default Table;
