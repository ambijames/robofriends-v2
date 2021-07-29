import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import ParticlesBg from 'particles-bg';
import Scroll from '../Components/Scroll';
import '../Containers/App.css';




class App extends Component {
   constructor() {
      super()
      this.state = {
         robots: [],
         searchfield: ''
      }
   }
    
 componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({ robots: users}));
 }

   onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
   }

   render() {
      const { robots, searchfield } = this.state;
      const filteredRobots = robots.filter(robot =>{
         return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      if (robots.length === 0) {
         return <h1>Loading</h1>
      } else {
         return (
            <div className='App tc'>
               <div className='tc -1'>
                  <h1 className= 'fw9 ttu tracked'>RobotFriends</h1>
               </div>
               <ParticlesBg type="fountain" bg={true} />
               <SearchBox searchChange={this.onSearchChange} />
               <Scroll>
                  <CardList robots={filteredRobots} />
               </Scroll>
            </div>   
          );
        }
      }
   }




export default App;