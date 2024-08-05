import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import axios from 'axios';
import './itemaccept.css';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'name', label: 'CUSTOMER NAME', minWidth: 170 },
  { id: 'text', label: 'TEXT', minWidth: 100 },
  { id: 'font_style', label: 'FONT STYLE', minWidth: 170, align: 'right' },
  { id: 'font_color', label: 'FONT COLOUR', minWidth: 170, align: 'right' },
  { id: 'size', label: 'SIZE', minWidth: 170, align: 'right' },
  { id: 'phone_no', label: 'PHONE', minWidth: 100 },
  { id: 'address', label: 'ADDRESS', minWidth: 100 },
  // { id: 'action', label: 'ACTION', minWidth: 100, align: 'right' }
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/customer_details');
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.post('http://localhost:3001/accept_order', { id });
      console.log('Response from backend:', response.data);
      // Optionally, update the UI or refresh the data
    } catch (error) {
      console.error('Error accepting order:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.post('http://localhost:3001/reject_order', { id });
      console.log('Response from backend:', response.data);
      // Optionally, update the UI or refresh the data
    } catch (error) {
      console.error('Error rejecting order:', error);
    }
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '1px', marginRight: '5px' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead style={{ backgroundColor: 'black' }}>
            <TableRow sx={{ marginTop: '25px', background: 'dark' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                    );
                  })}
                  <TableCell align="right">
                    {row.action !== 'accepted' && row.action !== 'rejected' && (
                      <>
                        <Button variant="contained" color="primary" onClick={() => handleAccept(row.id)}>Accept</Button>
                        <Button variant="contained" color="secondary" onClick={() => handleReject(row.id)} style={{ marginLeft: 8 }}>Reject</Button>
                      </>
                    )}
                    {row.action === 'accepted' && <span style={{color:'green'}}>Accepted</span>}
                    {row.action === 'rejected' && <span style={{color:'red'}}>Rejected</span>}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
