import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
  addAction: () => dispatch({ type: 'ADD' }),
  addTenAction: () => dispatch({ type: 'ADD10' }),
  removeAction: () => dispatch({ type: 'REMOVE' }),
  removeTenAction: () => dispatch({ type: 'REMOVE10' }),
  resetAction: () => dispatch({ type: 'RESET' }),
});


const CounterComponent = ({ count, addAction, addTenAction, resetAction, removeAction, removeTenAction  }) => (
  <div>
    <p>{count}</p>
    <button onClick={addAction}>+1</button>
    <button onClick={addTenAction}>+10</button>
    <button onClick={removeAction}>-1</button>
    <button onClick={removeTenAction}>-10</button>
	<button onClick={resetAction}>RESET</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);