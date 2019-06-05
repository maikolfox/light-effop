import React, {Component} from 'react';


class SideBar extends Component {
    
  
  
  render(){
        return (
            <div class="col-md-3">
            <div class="list-group">
              <a href="/" class="list-group-item active main-color-bg">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard
              </a>
              <a href="/" class="list-group-item">Dapibus ac facilisis in</a>
              <a href="/" class="list-group-item">Morbi leo risus</a>
              <a href="/" class="list-group-item">Porta ac consectetur ac</a>
              <a href="/" class="list-group-item">Vestibulum at eros</a>
            </div>
          </div>
        )
    }
}
export default SideBar ;