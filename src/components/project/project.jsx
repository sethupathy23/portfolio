import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Link } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "LIBRARY MANAGEMENT",
    <Button
      onClick={() =>
        window.open("https://github.com/sethupathy23/React-library-task.git")
      }
    >
      source code
    </Button>,
    <Button
      onClick={() => window.open("https://peaceful-jelly-e4b239.netlify.app/")}
    >
      url
    </Button>
  ),
  createData(
    "ADMIN DASHBOARD STUDENT & TEACHER",
    <Button
      onClick={() =>
        window.open(
          " https://github.com/sethupathy23/React-student-and-teacher-task.git"
        )
      }
    >
      source code
    </Button>,
    <Button
      onClick={() =>
        window.open("https://symphonious-yeot-2c0256.netlify.app/")
      }
    >
      url
    </Button>
  ),
  createData(
    "SOCIAL NETWORK WEBSITE USING REACT.JS",
    <Button
      onClick={() =>
        window.open("https://github.com/sethupathy23/Materialui.git")
      }
    >
      source code
    </Button>,
    <Button
      onClick={() =>
        window.open("https://wondrous-kringle-d55230.netlify.app/")
      }
    >
      url
    </Button>
  ),
  createData(
    "MOVIES APP",
    <Button
      onClick={() =>
        window.open("https://github.com/sethupathy23/react-demo1.git")
      }
    >
      source code
    </Button>,
    <Button
      onClick={() =>
        window.open(" https://inspiring-twilight-44ff33.netlify.app/")
      }
    >
      url
    </Button>
  ),
  createData(
    "HALL BOOKING USING NODE.JS",
    <Button
      onClick={() =>
        window.open("https://github.com/sethupathy23/Hall-Booking-Task.git")
      }
    >
      source code
    </Button>,
    <Button
      onClick={() => window.open("https://hall-booking-task1.onrender.com")}
    >
      url
    </Button>
  ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 701, marginTop: 4 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Projects</StyledTableCell>
            <StyledTableCell align="right">Source Code URL</StyledTableCell>
            <StyledTableCell align="right">Deployed URL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
