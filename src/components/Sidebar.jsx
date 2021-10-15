import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setPersonInfo } from '../redux/actions/personsActions';
import '../styles/mainPage.css';

class Sidebar extends Component {
  render() {
    const { personsInfo, dispatchPersonInfo } = this.props;
    return (
      <aside className="sidebar">
        <ul>
          {
            personsInfo.map((person) =>
              <li
              key={ person.id }
              onClick={ () => dispatchPersonInfo(person) }
              >
                { person.name }
              </li>
            )
          }
        </ul>
      </aside>
    )
  }
}

const mapStateToProps = (state) => ({
  personsInfo: state.personsReducer.persons,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchPersonInfo: (personInfo) => dispatch(setPersonInfo(personInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
