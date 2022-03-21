import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import "./styles.scss";
import { useState } from "react";

function fillData(
  fecha: string,
  team1: string,
  logo1: string,
  logo2: string,
  team2: string,
  result: string,
  unox: string,
  x: string,
  dosx: string
) {
  return { fecha, team1, logo1, logo2, team2, result, unox, x, dosx };
}

const rows = [
  fillData(
    "04:00pm 28agosto",
    "Manchester United",
    "manchester-united",
    "manchester-city",
    "Manchester City",
    "2-1",
    "1.11",
    "1.25",
    "2.01"
  ),
  fillData(
    "04:00pm 28agosto",
    "Real Madrid",
    "real-madrid",
    "barcelona",
    "Barcelona",
    "2-3",
    "3.00",
    "1.25",
    "1.07"
  ),
  fillData(
    "04:00pm 28agosto",
    "Chelsea",
    "chelsea",
    "leicester",
    "Leicester City",
    "1-0",
    "2.11",
    "1.25",
    "1.01"
  ),
];

export default function TableBet() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer className="table-bet" component={Paper}>
      <Table className="w-100" size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horario</TableCell>
            <TableCell align="center">{/* Equipo1 */}</TableCell>
            <TableCell align="center">{/* logo1 */}</TableCell>
            <TableCell align="center">{/* logo2 */}</TableCell>
            <TableCell align="center">{/* Equipo2 */}</TableCell>
            <TableCell align="center">Resultado</TableCell>
            <TableCell align="center">1x</TableCell>
            <TableCell align="center">x</TableCell>
            <TableCell align="center">2x</TableCell>
            <TableCell align="center">Bet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
            <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.fecha}
              </TableCell>
              <TableCell align="center">{row.team1}</TableCell>
              <TableCell align="center">
                <img src={require(`assets/clubs/${row.logo1}.png`)} width="40px" alt="..." />
              </TableCell>
              <TableCell align="center">
                <img src={require(`assets/clubs/${row.logo2}.png`)} width="40px" alt="..." />
              </TableCell>
              <TableCell align="center">{row.team2}</TableCell>
              <TableCell align="center">
                <strong className="fs-5">{row.result}</strong>
              </TableCell>
              <TableCell align="center">{row.unox}</TableCell>
              <TableCell align="center">{row.x}</TableCell>
              <TableCell align="center">{row.dosx}</TableCell>
              <TableCell align="center">
                <i className="fas fa-chart-line"></i>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
