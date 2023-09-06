var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',

  data: {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'PDB Industri Tekstil dan Pakaian Jadi',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [118.98, 116.26, 126.41, 145.8, 132.85, 127.43, 139.33],
      },
    ],
  },

  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: 'rgba(255,99,132,0.2)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});
