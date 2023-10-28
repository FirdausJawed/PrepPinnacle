import React from 'react';
import MPaper from './MPaper';
import { Box, Stack, Typography, colors } from '@mui/material';
import { Bar } from 'react-chartjs-2';

const chartData = {
      labels: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
            {
                  label: "Attended",
                  data: [20, 13, 21, 22, 25, 10, 10, 19, 21, 14, 17, 24],
                  stack: "stack 0",
                  backgroundColor: colors.green[600],
                  barPercentage: 0.6,
                  categoryPercentage: 0.7
            },
            {
                  label: "Missed",
                  data: [3, 1, 8, 4, 1, 5, 3, 1, 2, 4, 1, 3],
                  stack: "stack 1",
                  backgroundColor: colors.red[300],
                  barPercentage: 0.6,
                  categoryPercentage: 0.7
            }
      ]
};

const charOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
            x: {
                  grid: { display: false },
                  stacked: true
            },
            y: { stacked: true }
      },
      plugins: {
            legend: { display: false },
            title: { display: false }
      },
      elements: {
            bar: {
                  borderRadius: 10
            }
      }
};
const productivity = () => {
      return (
            <MPaper title="Lectures">
                  <Stack spacing={4}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                              <Stack direction="row" spacing={3} alignItems="center">
                                    {chartData.datasets.map((data, index) => (
                                          <Stack key={index} direction="row" alignItems="center">
                                                <Box sx={{
                                                      width: "15px",
                                                      height: "15px",
                                                      borderRadius: "4px",
                                                      bgcolor: data.backgroundColor,
                                                      mr: 1
                                                }} />
                                                <Typography variant="subtitle2">
                                                      {data.label}
                                                </Typography>
                                          </Stack>
                                    ))}
                              </Stack>
                        </Stack>
                        <Box>
                              <Bar options={charOptions} data={chartData} height="300px" />
                        </Box>
                  </Stack>
            </MPaper>
      );
};

export default productivity;;