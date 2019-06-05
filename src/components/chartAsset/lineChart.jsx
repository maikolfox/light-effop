import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';



class LineChart extends Component {
  constructor(props) {
    super(props);
  }
    state = {
      datas: {
        labels: this.props.dataLabel,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.dataChart
          }
        ]
      }
    }
  
  render() {
    return (
      <div>
        <h2>Courbe du Taux d'activité</h2>
        <Line ref="chart" data={this.state.datas} />
      </div>
    );
  }

  componentDidMount() {
      this.setState.datas  = this.refs.chart.chartInstance.data
      {console.log(this.state.datas)}

  }

  componentDidUpdate() {
    //this.setState.datas  = this.refs.chart.chartInstance.data    
    {console.log(this.state.datas)};
  }

}
export default LineChart;