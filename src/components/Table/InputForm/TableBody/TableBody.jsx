import style from './TableBody.module.css';
import { ReactComponent as DeletePic } from '../../../../images/delete.svg';
import EllipsisText from 'react-ellipsis-text';

const TableBody = ({ dataTable }) => {
  return (
    <div className={style.tableThamb}>
      <table className={style.table}>
        <tr className={style.tableHeader}>
          <th className={style.tableHeaderCell}>Date</th>
          <th className={style.tableHeaderCell}>Description</th>
          <th className={style.tableHeaderCell}>category</th>
          <th className={style.tableHeaderCell}>Sum</th>
        </tr>
        {dataTable.map(({ date, description, category, sum }, index) => (
          <tr key={index} className={style.tableRow}>
            <td className={style.tableCell}>{date}</td>
            <td className={style.tableCell}>
              <EllipsisText text={`${description}`} length={'29'} />
            </td>
            <td className={style.tableCell}>{category}</td>
            <td className={style.tableCellSum}>{sum}</td>
            <td className={style.tableCell}>
              <button type="button" className={style.deleteBtn}>
                <DeletePic />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableBody;
