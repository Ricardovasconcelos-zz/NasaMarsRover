import React,{Component} from 'react'

import './Image.css'

import Particles from 'react-particles-js';

const particleOpt={
      particles: {
        number:{
          value:150,
          density:{
            enable:true,
            value_area:600
          }
        }
      }
}



class Image extends Component{
  render(){
    return(
      <div>
        <Particles params={particleOpt} />
      </div>
    )
  }
}

export default Image