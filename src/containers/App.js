import React from 'react';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import './App.css';


class App extends React.Component{ 
	
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> this.setState({robots: users}))};

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
	}

	render(){
		
		const{robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if(!robots.length){
			return <h1 className= 'tc'>Loading</h1>
		}

		return (
		<div className = 'tc'>
			<SearchBox searchChange ={this.onSearchChange}/>
			<h1 className = 'f2'>RoboFriends</h1>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
			
		);
	}
}
export default App;