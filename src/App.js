import React from 'react';
import { connect} from "react-redux"
import './App.css';
const LogoUrl = require('./assets/logo-birdie.svg');

class App extends React.Component{
   // Function to handle submitted data and pass it to dispatch    
   submitForm = (e)=> {
           e.preventDefault();
           this.props.getdata(e.target.name.value);
           return 
          }
       
    render() {
    
        return (
         
            <div className="App">
                <img src={LogoUrl} alt="logo"/>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="name" size="50" placeholder="Enter care_recipient_id"/>
                <button >Submit</button>
                </form>
               
                 <table className="table">
                   <tr>
                    {this.props.result.data}
                   </tr>
                 </table>
                
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
  return{
      result:state
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
      getdata:(e)=>dispatch({type:"GETDATA",payload:e})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
