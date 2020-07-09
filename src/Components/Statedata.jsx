import React,{Component} from 'react';

import {Card,Accordion,Button} from 'react-bootstrap';

class StateData extends Component{
constructor(){
    super()
    this.state={
        stateData:{}
    }
}

async componentDidMount(){
const response=await fetch("https://api.covid19india.org/state_district_wise.json")
const data= await response.json();

this.setState({stateData:data})

}



    render(){

let keys=Object.keys(this.state.stateData)


        return(
            <div>
<div className="row">
    <div className="col-md-12">

    <Accordion>


{

keys.map((item,ky)=>{
 let districts=this.state.stateData[item].districtData;
 let district_keys=Object.keys(districts);

 let total_active=0;
let total_confirmed=0;
let total_deaths=0;
let total_recover=0;

let district_list=[]

for(let x in districts){
    total_active+=districts[x].active;
    total_confirmed+=districts[x].confirmed;
    total_deaths+=districts[x].deceased;
    total_recover+=districts[x].recovered;
    let ob=districts[x];
    ob["district_name"]=x;
district_list.push(ob)
}

console.log(district_list)




 return(
     <div>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="primary" eventKey={ky}>
 {item}- <span className="btn-dark p-1 mr-2">Total Cases-{total_confirmed}</span> <span className="btn-dark p-1 mr-2">  Active-{total_active} </span>   <span className="btn-dark p-1 mr-2">Recovered-{total_recover}</span> <span className="btn-dark p-1 mr-2">Death-{total_deaths} </span>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={ky}>
 <Card.Body>
      <table className="table table-bordered table-stripped">
<thead>
    <tr>
      <td>District</td> 
      <td>Confirmed</td>
      <td>Active</td>
      <td>Recovered</td>
      <td>Deaths</td>
    </tr> 
</thead>
<tbody>
{
    district_list.map((itm,ky)=>{
    return(
        <tr>
<td>{itm.district_name}</td>
<td>{itm.confirmed}</td>
<td>{itm.active}</td>
<td>{itm.recovered}</td>
<td>{itm.deaths}</td>
        </tr>
    )
}
    )} 
</tbody>

      </table>

       </Card.Body>
    </Accordion.Collapse>
  </Card>
     </div>
 ) 
})


    }




  
</Accordion>



    </div>

</div>

            </div>
        )
    }
}

export default StateData;