import React from 'react';
import { useTable, useExpanded } from 'react-table';
import './assets/table.scss';

const Table = ({ columns: userColumns, data, renderRowSubComponent }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns: userColumns,
      data,
    },
    useExpanded,
  );

  return (
    <table {...getTableProps()} className="table-container">
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>

      <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <React.Fragment {...row.getRowProps()}>
            <tr>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
            {row.isExpanded && (
              <tr>
                <td colSpan={visibleColumns.length} className="table__row-subcomponent">
                  {renderRowSubComponent({ row })}
                </td>
              </tr>
            )}
          </React.Fragment>
        );
      })}
      </tbody>
    </table>
  );
};

export default Table;
