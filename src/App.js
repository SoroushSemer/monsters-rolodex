import React, {Component} from 'react'
import './App.css';

import {CardList} from './components/card-list/card-list.compenent.jsx'
import {SearchBar} from './components/search-bar/search-bar.component.jsx'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    }

    // this.handleChange =this.handleChange.bind(this);  //only necessary if not using arrow functions

  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users =>this.setState({monsters: users}))
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  render(){
    const {monsters, searchField} = this.state; 

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className="App">
        <h1>Monster's Rolodex</h1>
        <SearchBar 
        placeholder='search monsters' 
            handleChange = {this.handleChange}
        
        />
        

        <CardList monsters = {filteredMonsters}/>

        
    </div>
    );
  }
}

export default App;
