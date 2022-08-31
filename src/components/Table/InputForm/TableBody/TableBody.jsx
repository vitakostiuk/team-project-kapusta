import style from './TableBody.module.css';
import { ReactComponent as DeletePic } from '../../../../images/delete.svg';
import EllipsisText from 'react-ellipsis-text';

const TableBody = () => {
  return (
    <div className={style.tableThamb}>
      <table className={style.table}>
        <tr className={style.tableHeader}>
          <th className={style.tableHeaderCell}>Date</th>
          <th className={style.tableHeaderCell}>Description</th>
          <th className={style.tableHeaderCell}>category</th>
          <th className={style.tableHeaderCell}>Sum</th>
        </tr>
        <tr className={style.tableRow}>
          <td className={style.tableCell}>05.09.2019</td>
          <td className={style.tableCell}>
            <EllipsisText
              text={'Metro (Lorem ipsum dolor dolor dolor dolorsit)'}
              length={'29'}
            />
          </td>
          <td className={style.tableCell}>Transport</td>
          <td className={style.tableCellSum}>- 30.00 грн.</td>
          <td className={style.tableCell}>
            <button type="button" className={style.deleteBtn}>
              <DeletePic />
            </button>
          </td>
        </tr>
        <tr className={style.tableRow}>
          <td className={style.tableCell}>05.09.2019</td>
          <td className={style.tableCell}>
            <EllipsisText text={'Bananas'} length={'29'} />
          </td>
          <td className={style.tableCell}>Products</td>
          <td className={style.tableCellSum}>- 50.00 грн.</td>
          <td className={style.tableCell}>
            <button type="button" className={style.deleteBtn}>
              <DeletePic />
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TableBody;
