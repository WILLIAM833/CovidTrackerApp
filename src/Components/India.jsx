import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata'
import StateData from './Statedata';


class India extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
   
   async componentDidMount(){
       const response=await fetch("https://corona.lmao.ninja/v2/countries/india")
    const datas=await response.json();
    console.log(datas)
    this.setState({data:datas})
   }
   
    render(){


        return(
            <div className="row">
                <div className="col-md-12" >
<img src="https://www.countryflags.io/in/shiny/64.png"/>
<h3>INDIA</h3>
                </div>
           

<div className="col-md-12">

<div className="row" >

<div className="col-md-3 col-sm-6">
<Card className="badge badge-primary" style={{ width: '18rem' }}>   
<Card.Body className="text-center">
<Card.Title>

TOTAL CASES
</Card.Title>
<h3>{this.state.data.cases}</h3>

</Card.Body>
</Card>
</div>


<div className="col-md-3 col-sm-6">
<Card className="badge badge-warning" style={{ width: '18rem' }}>   
<Card.Body className="text-center">
<Card.Title style={{color:"white"}} >ACTIVE CASES</Card.Title>
<h3 style={{color:"white"}}>{this.state.data.active}</h3>
<h6   style={{color:"white"}}>Critical:{this.state.data.critical}</h6>
</Card.Body>
</Card>
</div>


<div className="col-md-3 col-sm-6">
<Card className="badge badge-success" style={{ width: '18rem' }}>   
<Card.Body className="text-center">
<Card.Title>RECOVERED</Card.Title>
<h3>{this.state.data.recovered}</h3>

</Card.Body>
</Card>
</div>

<div className="col-md-3 col-sm-6">
<Card className="badge badge-danger" style={{ width: '18rem' }}>   
<Card.Body className="text-center">
<Card.Title>TOTAL DEATHS</Card.Title>
<h3>{this.state.data.deaths}</h3>

</Card.Body>
</Card>
</div>


</div>
</div>

<div className="col-md-12">
<StateData/>
</div>

</div>
        )
    }
}

export default India;