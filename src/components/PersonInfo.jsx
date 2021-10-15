import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/mainPage.css';

class PersonInfo extends Component {
  render() {
    const { personInfo: { id, name, age, ocupation } } = this.props;
    return (
      <section className="personal-info-display" >
        <span>{ `Name: ${ name }, ID: ${ id }` }</span>
        <p> { `${ name } have ${ age } and do ${ ocupation }` } </p>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  personInfo: state.personsReducer.personSelected,
});

export default connect(mapStateToProps)(PersonInfo)
