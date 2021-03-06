import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import GoalsContainer from '../../containers/GoalContainer'
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';
import { Card, CardActions, CardText, CardTitle, Tab, Tabs  } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
        }
    }


    toggle(){
        if(this.state.activeTab === 0){
          return(
            <div >
              <GoalsContainer />
            </div>
          )
        }else if(this.state.activeTab === 1){
          return (
              <div className="project-cards">
                  <Card style={{ margin: 'auto', width: '600px', height: '400px', position: 'center', backgroundImage: "url(https://pragmaticstudio.com/assets/courses/ruby/ruby-large-b84b4e30be190f8804452a81002eff963540d3d30f53ea92222afca2c20a081a.png)"}} >
                      <CardTitle name="Ruby"></CardTitle>
                      <CardText style={{fontSize: '40pt', color: 'black'}}>
                          CLI Project
                      </CardText>
                      <br>
                      </br>
                      <CardActions >
                          <Button style={{color: 'black', fontSize: '30pt'}} href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                  <GoalsContainer />
                </div>
            )
        }else if(this.state.activeTab === 2){
            return (
                <div className="project-cards">
                    <Card style={{margin: 'auto', width: '600px', height: '400px', backgroundImage: "url(https://wpmayor.com/wp-content/uploads/2015/08/sinatra-easy-ruby-web-application-dsl-creating-plugin.jpg)"}}>
                      <CardTitle name="Sinatra"></CardTitle>
                      <CardText style={{fontSize: '40pt', color: 'black'}}>
                          Sinatra Project
                      </CardText>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <CardActions>
                          <Button style={{color: 'black', fontSize: '30pt'}} href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                  <GoalsContainer />
                </div>
            )
        }else if(this.state.activeTab === 3){
            return (
                <div className="project-cards">
                     <Card style={{margin: 'auto', width: '600px', height: '400px', backgroundImage: "url(https://avatars.githubusercontent.com/u/4223)"}}>
                      <CardTitle name="Rails"></CardTitle>
                      <CardText style={{fontSize: '40pt', color: 'black'}}>
                          Rails Project
                      </CardText>
                      <br>
                      </br>
                      <CardActions>
                          <Button style={{color: 'black', fontSize: '30pt'}} href="https://github.com/Rspriggs2020/hey_anime" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                  <GoalsContainer />
                </div>
            )
        }else if(this.state.activeTab === 4){
            return (
                <div className="project-cards">
                  <Card style={{margin: 'auto', width: '600px', height: '400px', backgroundImage: 'url(https://library.kissclipart.com/20181128/tsw/kissclipart-orange-clipart-ecmascript-javascript-ecma-internat-3885764678295034.png)'}}>
                      <CardTitle name="Ruby"></CardTitle>
                      <CardText style={{fontSize: '40pt', color: 'black'}}>
                          JavaScript Project
                      </CardText>
                      <br>
                      </br>
                      <CardActions>
                          <Button style={{color: 'black', fontSize: '30pt'}} href="https://github.com/Rspriggs2020/spacedout_frontend" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                  <GoalsContainer />
                </div>
            )
        }else if(this.state.activeTab === 5){
            return (
                <div className="project-card">
                  <Card style={{margin: 'auto', width: '600px', height: '400px', backgroundImage: "url(https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png)"}}>
                      <CardTitle name="React / Redux"></CardTitle>
                      <CardText style={{fontSize: '40pt', color: 'black'}}>
                          React / Redux Project
                      </CardText>
                      <br>
                      </br>
                      <CardActions>
                          <Button style={{color: 'black', fontSize: '30pt'}} href="https://github.com/Rspriggs2020/my-portfolio-client" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                  <GoalsContainer />
                </div>
            )
        }
    }

    render(){
        return(
            <div className="card-tabs">
                 <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                     <Tab className='tabs'></Tab>
                    <Tab style={{fontSize: '20pt'}}>Ruby</Tab>
                    <Tab style={{fontSize: '20pt'}}>Sinatra</Tab>
                    <Tab style={{fontSize: '20pt'}}>Ruby on Rails</Tab>
                    <Tab style={{fontSize: '20pt'}}>JavaScript</Tab>
                    <Tab style={{fontSize: '20pt'}}>React</Tab>
                </Tabs>

                {this.toggle()}
            </div>
        )
    }
    
}

export default Projects;
