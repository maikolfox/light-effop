import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const datasProps = {
  labels: [],
  datasets: [
    {
      data: []
    }
  ]
};
const chartDataUiParam ={

  label: '',
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
}

class LineChart extends Component {
  
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      agence:'',
      annee: '',
      moisDebut: "",
      moisFin: '',
      responseToPost: '',
      dataToSend: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
   // this.handleOnChange = this.handleOnChange.bind(this);

  };

  
  handleSubmit = async e => 
  {
    e.preventDefault();
    const response = await fetch('/service/tauxDactivite',
      {
        method: 'POST',
        headers:
        {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            annee: this.state.annee,
            moisDebut: this.state.moisDebut,
            moisFin: this.state.moisFin
          }),
      });
    const body = await response.text();
    this.setState({ responseToPost: JSON.parse(body) });
    var dataPropsUpdate = 
    {
      ...datasProps,
      labels: this.state.responseToPost.mois,
      datasets: [{
        ...chartDataUiParam,
        data: this.state.responseToPost.taux
      }]
    };
    this.setState({ dataToSend: dataPropsUpdate });
    console.log(dataPropsUpdate);
    console.log("to send : " + this.state.dataToSend);

  };
  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label className="col-md-1 control-label" htmlFor="selectbasic">Agence<span id="mandatory">*</span></label>
              <div className="col-md-2">
                <select 
                id="selectAgence" 
                name="selectbasic" 
                className="form-control"  
                value={this.state.agence}
                onChange={e => this.setState({ agence: e.target.value }) }              
                >
                  <option value="siege plateau">Siège plateau</option>
                  <option value="Nanan Yamousso">Nanan Yamousso</option>
                </select>
              </div>
              <label className="col-md-1 control-label" htmlFor="selectbasic">Mois debut<span id="mandatory">*</span></label>
              <div className="col-md-2">
                <select 
                id="selectMoisDeb" 
                name="selectbasic" 
                className="form-control"
                value={this.state.moisDebut}
                onChange={e => this.setState({ moisDebut: e.target.value }) }
                >
                  <option value="00" defaultValue >Choisir le mois de debut</option>
                  <option value="01/1900">Janvier</option>
                  <option value="02/1900">Février</option>
                  <option value="03/1900">Mars</option>
                  <option value="04/1900">Avril</option>
                  <option value="05/1900">Mai</option>
                  <option value="06/1900">Juin</option>
                  <option value="07/1900">Juillet</option>
                  <option value="08/1900">Août</option>
                  <option value="09/1900">Septembre</option>
                  <option value="10/1900">Octobre</option>
                  <option value="11/1900">Novembre</option>
                  <option value="12/1900">Décembre</option>
                </select>
              </div>
              <label className="col-md-1 control-label" htmlFor="selectbasic">Mois fin<span id="mandatory">*</span></label>
              <div className="col-md-2">
                <select 
                id="selectMoisFin" 
                name="selectbasic" 
                className="form-control"
                value={this.state.moisFin}
                onChange={e => this.setState({ moisFin: e.target.value }) }              
                >
                  <option value="00" defaultValue >Choisir le mois de fin</option>
                  <option value="01/1900">Janvier</option>
                  <option value="02/1900">Février</option>
                  <option value="03/1900">Mars</option>
                  <option value="04/1900">Avril</option>
                  <option value="05/1900">Mai</option>
                  <option value="06/1900">Juin</option>
                  <option value="07/1900">Juillet</option>
                  <option value="08/1900">Août</option>
                  <option value="09/1900">Septembre</option>
                  <option value="10/1900">Octobre</option>
                  <option value="11/1900">Novembre</option>
                  <option value="12/1900">Décembre</option>
                </select>
              </div>
              <label className="col-md-1 control-label" htmlFor="selectbasic">Année<span id="mandatory">*</span></label>
              <div className="col-md-2">
                <select 
                id="selectbasic" 
                name="selectbasic" 
                className="form-control"
                value={this.state.annee}
                onChange={e => this.setState({ annee: e.target.value }) }
                >
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-1 control-label" htmlFor="lineChartValider"></label>
              <div className="col-md-2">
                <button id="lineChartValider" name="lineChartValider" type="submit" className="btn btn-danger">Valider</button>
              </div>
              <div className="col-md-2">
                <button id="lineChartAnnuler" name="lineChartAnnuler" type="reset" className="btn btn-success">Annuler</button>
              </div>
            </div>
          </fieldset>
        </form>
        <h2>Courbe du Taux d'activité</h2>
        <Line ref="chart" data={this.state.dataToSend}  />
      </div>
    );
  }

  componentDidMount() {
    this.setState.datas = this.refs.chart.chartInstance.data
    // {console.log(this.state.datas)}

  }

  componentDidUpdate() {
    //    return (<Line data={this.state.dataToSend} />);
    //this.setState.datas  = this.refs.chart.chartInstance.data    
  }

}
export default LineChart;