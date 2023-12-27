import cls from './TableItemTitle.module.scss';

const TableItemTitle = ({ text }) => {
  return <div className={cls.TableItemTitle}>{text}</div>;
};

export default TableItemTitle;
