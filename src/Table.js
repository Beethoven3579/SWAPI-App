import React from 'react'
import axios from 'axios'

class Table extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          character: '',
          homeworld: '',
          species: '',
        }
      }
     
      componentDidMount() {
        axios.get('https://swapi.dev/api/people/1')
        .then(response => {
          console.log(response)
           this.setState({character: response.data})
        })
        .catch(error => {
          console.log(error);
        });
      axios.get('https://swapi.dev/api/planets/1')
        .then(response => {
          console.log(response)
           this.setState({homeworld: response.data})
        })
        .catch(error => {
          console.log(error);
        });
      
      axios.get('https://swapi.dev/api/species/1')
        .then(response => {
          console.log(response)
           this.setState({species: response.data})
        })
        .catch(error => {
          console.log(error);
        });
      }
       render() {
         const { character } = this.state;
         const { homeworld } = this.state;
         const { species } = this.state;
         return (
           <div><p>Test</p>
               <table className="table">
                    <thead className="table table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Birth Year</th>
                            <th>Mass</th>
                            <th>Hieght</th>
                            <th>Home World</th>
                            <th>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th>{character.name} </th>
                        <th>{character.birth_year}</th>
                        <th>{character.mass} </th>
                        <th>{character.height}</th>
                        <th>{homeworld.name}</th>
                        <th>{species.classification}</th>
                    </tbody>
             </table>
           </div>
         )
      }  
}

export default Table