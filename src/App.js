import React from 'react';

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {Shoes:[]}
    }
    componentDidMount(){
      fetch('http://localhost:8000/api/Shoes')
      .then(res => res.json())
      .then(res => this.setState({Shoes: res}))
    }
    render() {return (
          <div>
            <h1>THE SHOES BABY</h1>
            <ul>{this.state.Shoes.map(s =>{
              return(
                
                <li key='shoe'><span style={{fontSize:'25px'}}>Shoe : {s.name}</span>
                  <ul key='size'>
                    Size : {s.size}
                  </ul>
                  <ul key='man'>
                    Manufacturer : {s.manufacturer}
                  </ul>
                  <ul key='color'>
                    Color : {s.color}
                  </ul>
                  <ul key='Mat'>
                    Material : {s.material}
                  </ul>
                  <ul key='type'>
                    Shoe Type : {s.shoe_type}
                  </ul>
                  <ul key='fasten'>
                    Fasten Type : {s.fasten_type}
                  </ul>
                </li>
            )
            })}</ul>
          </div>
        )
    }
}

/*       "size": 12,
"brand": "Nike",
"name": "Air Force 1",
"manufacturer": "Nike",
"color": "Blue",
"material": "Suede",
"shoe_type": "DOPE",
"fasten_type": "Laces"
*/
export default App;