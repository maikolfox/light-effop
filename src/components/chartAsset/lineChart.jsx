import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends Component {
  constructor(props) {
    super(props);


    this.state = {
      annee: "2010",
      moisDebut: "10/05/2015",
      moisFin: "20/07/2015",
      responseToPost: '',
      dataLabel: [],
      datas: {
        labels: [],//this.state.dataLabel,
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
            data: [0]
          }
        ]
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleSubmit = async e => {
    e.preventDefault();
    while (this.state.datas.datasets[0].data.length>0) {
      this.state.datas.datasets[0].data.pop();
    }
    //this.state.datas.datasets[0].data.splice(0,2-this.state.datas.datasets[0].data.length);
    console.log(this.state.datas.datasets[0].data,this.state.responseToPost.taux);
    const response = await fetch('/service/tauxDactivite',
      {
        method: 'POST',
        headers:
        {

          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {

            annee: "2010",
            moisDebut: "01/2015",
            moisFin: "05/2015"

          }),
      });
    const body = await response.text();
    this.setState({ responseToPost: JSON.parse(body) });
    this.setState(prevState => 
    ({
      datas: {
        ...prevState.datas,
        labels: this.state.responseToPost.mois,
       
      }
    }));
    this.state.datas.datasets[0].data.splice(0,this.state.datas.datasets[0].data.length);
     for (let index = 0; index < this.state.responseToPost.taux.length; index++) {
        console.log(this.state.responseToPost.taux[index]);
        this.state.datas.datasets[0].data.push(this.state.responseToPost.taux[index]);      
    
      }
    // this.state.responseToPost.taux.forEach(function(element,thisArg) {
    //  this.state.datas.datasets[0].data.push(5);
    //})
    // this.state.datas.datasets[0].data.concat(this.state.responseToPost.taux);
     
     
     console.log("last "+this.state.datas.datasets[0].data);
   
  };
  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label className="col-md-1 control-label" htmlFor="selectbasic">Agence<span id="mandatory">*</span></label>
              <div className="col-md-2">
                <select id="selectAgence" name="selectbasic" className="form-control">
                  <option value="1">Siège plateau</option>
                  <option value="2">Nanan Yamousso</option>
                </select>
              </div>
              <label className="col-md-1 control-label" htmlfor="selectbasic">Mois debut<span id="mandatory">*</span></label>
              <div className="col-md-2">
                <select id="selectMoisDeb" name="selectbasic" className="form-control">
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
              <label className="col-md-1 control-label" htmlFor="selectbasic">Mois fin<span id="mandatory">*</span></label>
              <div className="col-md-2">
                <select id="selectMoisFin" name="selectbasic" className="form-control">
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
                  <option value="12" defaultValue>Décembre</option>
                </select>
              </div>
              <label className="col-md-1 control-label" htmlFor="selectbasic">Année<span id="mandatory">*</span></label>
              <div className="col-md-2">
                <select id="selectbasic" name="selectbasic" className="form-control">
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
            <div className="form-group">
              <label className="col-md-1 control-label" htmlFor="button1id"></label>
              <div className="col-md-2">
                <button id="button1id" name="button1id" type="submit" className="btn btn-danger">Valider</button>
              </div>
              <div className="col-md-2">
                <button id="button2id" name="button2id" type="reset" className="btn btn-success">Annuler</button>
              </div>
            </div>
          </fieldset>
        </form>
        <h2>Courbe du Taux d'activité</h2>
        {console.log("props to send to childs " + this.state.datas)}
        <Line ref="chart" data={this.state.datas} redraw={true} />
      </div>
    );
  }

  componentDidMount() {
    this.setState.datas = this.refs.chart.chartInstance.data
    // {console.log(this.state.datas)}

  }

  componentDidUpdate() {

    { console.log("data " + this.state.datas.label) };
    return (<Line data={this.state.datas} />);
    //this.setState.datas  = this.refs.chart.chartInstance.data    
  }

}
export default LineChart;