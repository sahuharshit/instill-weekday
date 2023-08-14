import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ val = 50 }: { val: number }) => {
  const series = [val];

  const options = {
    fill: {
      colors: ['#111111'],
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: '#DFDFDF',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: '28px',
            fontFamily: 'Inter',
            fontWeight: 600,
          },
        },
      },
    },
  };

  return <ReactApexChart options={options} series={series} type="radialBar" width={160} height={160} />;
};

export default DonutChart;
