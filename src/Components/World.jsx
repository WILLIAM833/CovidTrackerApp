import React,{Component} from 'react';


class World extends Component{
constructor(){
    super();
    this.state={
        data:[]
    }
}

async componentDidMount(){
const response=await fetch("https://corona.lmao.ninja/v2/countries")
const datas=await response.json();
this.setState({data:datas})
}



render(){
    return(
       
<div className="row">
    <div className="col-md-12">

<table className="table table-primary table-striped">
    <thead>
        <tr>
<td>Country</td>
<td>Total Cases</td>
<td>Recovered</td>
<td>Death</td>
        </tr>
</thead>

<tbody>
{
    this.state.data.map((itm,ky)=>{
   return(
 
<tr>
    <td>{itm.country}
    <img style={{width:'65px', marginLeft:"50px"}} src={itm.countryInfo.flag}/>
    </td>
    <td>{itm.cases}</td>
   <td>{itm.recovered}</td>
   <td>{itm.deaths}</td>

</tr>
 
   )
    }
   )
}
</tbody>
           
</table> 

    </div>

</div>

    )
}


}

export default World;