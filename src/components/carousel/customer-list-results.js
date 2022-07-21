import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, ListItemIcon, MenuItem, Table, Typography } from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';
import MaterialTable from 'material-table';
import tableIcons from './utils/icons';
import DetailPane from './utils/detailPanel'
const Tables = (props) => {
  const datas  = props.customers;
  console.log(datas);
  const columns = useMemo(
    () => [
    
          {
            title: 'Description',
            field: 'description',
            enableClickToCopy: false,
          },
          {
            title: 'Image Path',
            field: 'imgPath',
            enableClickToCopy: false,
          },
          {
            title: 'Insertion Date',
            field: 'insertionDate',
          },
       
    ],
    [],
  );

  const [data, setData] = useState(datas)

  useEffect(() => {
  
  setData([...datas])
   
  }, [datas])
  
  const handleSaveRow = ({ row }) => {
    data[+row.index] = row.values;
    setData([...data]);
  };
  const onRowClick=({row}) => {

    console.log(row)
  }

  return (
    <MaterialTable
    icons={tableIcons}
    columns={columns}
    options={{
      selection:true
    }}
    data={data}
    editable={{
        isEditable: rowData => rowData.name === 'a', // only name(a) rows would be editable
        isEditHidden: rowData => rowData.name === 'x',
        isDeletable: rowData => rowData.name === 'b', // only name(b) rows would be deletable,
        isDeleteHidden: rowData => rowData.name === 'y',
        onBulkUpdate: changes => 
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    /* setData([...data, newData]); */

                    resolve();
                }, 1000);
            }),
        onRowAddCancelled: rowData => console.log('Row adding cancelled'),
        onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
        onRowAdd: newData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    /* setData([...data, newData]); */

                    resolve();
                }, 1000);
            }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                }, 1000);
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);

                    resolve();
                }, 1000);
            })
    }}
    onSelectionChange={(rows) => alert('You selected ' + rows.length + ' rows')}
    detailPanel={rowData => {
      console.log("http://localhost:3000"+`${rowData.imgPath}`);
      return (<DetailPane rowData={rowData}/>
      )
    }}
/>
  );
};

export default Tables;
