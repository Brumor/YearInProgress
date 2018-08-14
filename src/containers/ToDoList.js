import React from 'react';
import { connect } from 'react-redux';
import { addGoal, deleteGoal } from '../actions/addGoal';
import "../stylesheets/ToDoList.css";

let input = 'test';

const ItemList = ({items, addGoal, deleteGoal}) => (
  <div>
    <div className="inputContainer">
      <label>
        Goals:
        <input type="text" name="name" onChange={e => input = e.target.value}/>
      </label>
      <button onClick={addGoal}> Add Item !</button>
    </div>
    <ul>
      { items.map( item => <p key={item.key} className="toDoContainer"> {item.text} <button onClick={() => deleteGoal(item.key)}>delete</button> </p>) }
    </ul>

  </div>
)

const getItems = (state) => state.goals

const mapStateToProps = state => {
  console.log(state);
  return {
    items : getItems(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addGoal : () => dispatch(addGoal(input)),
    deleteGoal : (key) => {dispatch(deleteGoal(key))}
  }
}

const ShowItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default ShowItems
