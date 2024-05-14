import React from 'react';
import './MaterialTable.scss';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({ storeData, isFarenheit, hourDay, dayname }) {
  const classes = useStyles();
  const hours = storeData.forecast.forecastday[hourDay].hour;
  if (storeData) {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{dayname}</TableCell>
              <TableCell align="right">Icon</TableCell>
              <TableCell align="right">Temp</TableCell>
              <TableCell align="right">Wind</TableCell>
              <TableCell align="right">Precip.</TableCell>
              <TableCell align="right">Cloud</TableCell>
              <TableCell align="right">Humidity</TableCell>
              <TableCell align="right">Pressure</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              isFarenheit
                ? hours.map((hour) => (
                  <TableRow key={hour.time_epoch}>
                    <TableCell component="th" scope="row">
                      {hour.time.split(' ')[1]}
                    </TableCell>
                    <TableCell align="right">
                      <img src={hour.condition.icon} alt="" />
                    </TableCell>
                    <TableCell align="right">{hour.temp_f} &#176;F</TableCell>
                    <TableCell align="right">{hour.wind_mph} mph</TableCell>
                    <TableCell align="right">{hour.precip_in} in</TableCell>
                    <TableCell align="right">{hour.cloud}%</TableCell>
                    <TableCell align="right">{hour.humidity}%</TableCell>
                    <TableCell align="right">{hour.pressure_in} in</TableCell>
                  </TableRow>
                ))
                : hours.map((hour) => (
                  <TableRow key={hour.time_epoch}>
                    <TableCell component="th" scope="row">
                      {hour.time.split(' ')[1]}
                    </TableCell>
                    <TableCell align="right">
                      <img src={hour.condition.icon} alt="" />
                    </TableCell>
                    <TableCell align="right">{hour.temp_c} &#176;C</TableCell>
                    <TableCell align="right">{hour.wind_kph} kmph</TableCell>
                    <TableCell align="right">{hour.precip_mm} mm</TableCell>
                    <TableCell align="right">{hour.cloud}%</TableCell>
                    <TableCell align="right">{hour.humidity}%</TableCell>
                    <TableCell align="right">{hour.pressure_mb} mb</TableCell>
                  </TableRow>
                ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return null;
}