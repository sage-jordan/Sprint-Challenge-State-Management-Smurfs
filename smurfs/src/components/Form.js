import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, handleChangeAction, postSmurf } from '../actions/index';

const Form = props => {
    console.log("Form props:", props);
    const [ isEditing, setIsEditing ] = useState(false);

    const toggleIsEditing = e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    };

    const handleChange = e => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        console.log("in handleChange: name:", name, "value:", value)
        props.handleChangeAction(name, value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurf(props.newSmurf);
        props.getSmurfs();
    };

    return (
        <div className="form">
            {!isEditing ? (
          <button onClick={toggleIsEditing}>Add Smurf</button>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" onChange={handleChange} value={props.newSmurf.name} name="name" />
              </label>
              <label>
                Age:
                <input type="number"  onChange={handleChange} value={props.newSmurf.age} name="age" />
              </label>
              <label>
                Height:
                <input type="text" onChange={handleChange} value={props.newSmurf.height} name="height" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )}
        </div>
    )
}

const mapStateToProps = state => {
    return { smurfs: state.smurfs, getSmurfs: getSmurfs, newSmurf: state.newSmurf }
  };
  
export default connect(
    mapStateToProps,
    { getSmurfs, handleChangeAction, postSmurf }
)(Form);
  