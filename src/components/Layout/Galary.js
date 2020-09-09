import React, { Component } from 'react';
import finance from './finance.png';
import fitness from './fitness.jpg';
import food from './food.jpg';
import politics from './politics.jpg';
import restaurant from './restaurant.jpg';
import travel from './travel.png'
import './style.css';
import { Button,ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//<button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
//<button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>

class Galary extends Component {   


    state = {
        index: 0, 
        picList: [finance, fitness, food, politics, restaurant, travel]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div class="text-center">
            <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} class="center" /> <br/>
            <Button variant="success" onClick={this.onClickPrevious}>Previous</Button>{' '}
            <Button variant="primary" onClick={this.onClickNext}>Next</Button>{' '}
          </div>
        );
      }

}


export default Galary;