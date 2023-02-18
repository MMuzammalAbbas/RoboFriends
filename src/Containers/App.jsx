import React from 'react';
import Cardlist from '../Components/Cardlist';

import Searchbox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll';



class App extends React.Component{
	constructor(){
		super()
		this.state = {
			robots:[] ,
	        searchfield: ''
		}
		
	}
	componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>  response.json())
        .then(users => {this.setState({ robots: users})});
        	}
          
		

	

	onsearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
	

	
	
	}

	render(){
       
        const { robots,searchfield} = this.state;
       const filteredRobots = robots.filter(robots =>{
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
       
       	return !robots.length?
       	<h1>Loading</h1> :
       (
		      <div className='tc'>
		      <h1 className='f2'>ROBOFRIENDS</h1>
		      <Searchbox searchChange={this.onsearchChange}/>
		      <Scroll>
              <Cardlist robots={filteredRobots}/>
              </Scroll>
              </div>
		);
       
        

	}
}


export default App;