import React, { Component } from 'react';
import LineChart from '../chartAsset/lineChart.jsx';


class Content extends Component {
  

  
  
  render() {
    return (
      <div className="col-md-9">
        <div className="panel panel-default">
          <div className="panel-heading ">
            <h3 className="panel-title">Taux d'activité mensuel</h3>
          </div>
          <div className="panel-body">
            <LineChart />
          </div>
        </div>
      </div>
    )
  }
}
export default Content