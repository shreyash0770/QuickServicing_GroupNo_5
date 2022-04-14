import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }




    // {require('../images/car2.jpg')}

  render() {
    return (
        <div>
          <footer className='footer mt-auto bg-dark' >
              <img src={require('../../images/F.png')} alt="" /><a>  </a>
              <img src={require('../../images/i.png')} alt="" /><a>  </a>
              <img src={require('../../images/t.png')} alt="" /><br></br>
              <span className='text-white'>All Rights Reserved @2022</span>
          
          </footer>
        </div>
    )
  }
}
