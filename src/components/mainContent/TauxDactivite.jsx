import React, { Component } from 'react';
import LineChart from '../chartAsset/lineChart.jsx'

const datas = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
      data: [65, 70, 71, 71, 74, 75, 98]
    }
  ]
};
class Content extends Component {
  render() {
    return (
      <div className="col-md-9">
        <div className="panel panel-default">
          <div className="panel-heading ">
            <h3 className="panel-title">Taux d'activité mensuel</h3>
          </div>
          <div className="panel-body">
          <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <label className="col-md-1 control-label" for="selectbasic">Agence<span id="mandatory">*</span></label>
                  <div class="col-md-2">
                    <select id="selectAgence" name="selectbasic" class="form-control">
                      <option value="1">Siège plateau</option>
                      <option value="2">Nanan Yamousso</option>
                    </select>
                  </div>
                  <label className="col-md-1 control-label" for="selectbasic">Mois debut<span id="mandatory">*</span></label>
                  <div className="col-md-2">
                    <select id="selectMoisDeb" name="selectbasic" class="form-control">
                      <option value="1">Janvier</option>
                      <option value="2">Fevrier</option>
                      <option value="3">Mars</option>
                      <option value="4">Avril</option>
                      <option value="5">Mai</option>
                      <option value="6">Juin</option>
                      <option value="7">Juillet</option>
                      <option value="8">Août</option>
                      <option value="9">Septembre</option>
                      <option value="10">Octobre</option>
                      <option value="11">Novembre</option>
                      <option value="12">Décembre</option>
                    </select>
                  </div>
                  <label className="col-md-1 control-label" for="selectbasic">Mois fin<span id="mandatory">*</span></label>
                  <div className="col-md-2">
                    <select id="selectMoisFin" name="selectbasic" class="form-control">
                      <option value="1">Janvier</option>
                      <option value="2">Février</option>
                      <option value="3">Mars</option>
                      <option value="4">Avril</option>
                      <option value="5">Mai</option>
                      <option value="6">Juin</option>
                      <option value="7">Juillet</option>
                      <option value="8">Août</option>
                      <option value="9">Septembre</option>
                      <option value="10">Octobre</option>
                      <option value="11">Novembre</option>
                      <option value="12" selected>Décembre</option>
                    </select>
                  </div>
                  <label className="col-md-1 control-label" for="selectbasic">Année<span id="mandatory">*</span></label>
                  <div className="col-md-2">
                    <select id="selectbasic" name="selectbasic" class="form-control">
                      <option value="1">2014</option>
                      <option value="2">2015</option>
                      <option value="2">2016</option>
                      <option value="2">2017</option>
                      <option value="2">2018</option>
                      <option value="2">2019</option>
                      <option value="2">2020</option>
                      <option value="2">2021</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label className="col-md-1 control-label" for="button1id"></label>
                  <div className="col-md-2">
                    <button id="button1id" name="button1id" type="submit"  class="btn btn-danger">Valider</button>
                  </div>
                  <div className="col-md-2">
                    <button id="button2id" name="button2id" type="reset" class="btn btn-success">Annuler</button>
                  </div>
                </div> 
              </fieldset>
            </form>
            <LineChart dataChart={[65, 10, 71, 71, 75, 75]} dataLabel={['January', 'February', 'March', 'April', 'May', 'June']} />
          </div>
        </div>
      </div>
    )
  }
}
export default Content