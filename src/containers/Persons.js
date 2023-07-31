import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux';

class Persons extends Component {
    
   

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPersonHandler} />
                {this.props.personArr.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePersonHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        personArr: state.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPersonHandler: () => dispatch({type: 'ADD_PERSON', name: 'Ammar Khan'}),
        onDeletePersonHandler: (id) => dispatch({type:'DELETE_PERSON', personId: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);