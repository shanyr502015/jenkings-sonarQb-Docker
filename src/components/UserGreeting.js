import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
  render() {
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>
    // return(
    //     this.state.isLoggedIn ?(
    //         <div>Welcome Vishwas</div>
    //     ):(
    //         <div>Welcome Guest</div>
    //     )
        
    // )
   
    // 2ND APPROACH
    // let message
    // if (this.state.isLoggedIn){
    //     message = <div>Welcome Vishwas</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return<div>{message}</div>
    
    // 1ST APPROCH
    // if (this.state.isLoggedIn){
    //     return(<div>Welcome Vishwas</div>)
    // }else{
    //     return(<div>Welcome Guest</div>)
    // }
    
    // WITHOUT ANY APPROACH
    // return (
    //    <div>
    //      <div>Hello Vishwas</div>
    //      <div>Hello Guest</div>
    //    </div>
    // )
  }
}
export default UserGreeting