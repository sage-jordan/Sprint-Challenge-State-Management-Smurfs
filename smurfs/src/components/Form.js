import React, { useState } from 'react';
import { connect } from 'react-redux';

const Form = props => {
    console.log("Form props:", props);
    const [isEditing, setIsEditing ] = useState(false);

    const toggleIsEditing = e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    };

    return (
        <div className="form">
            {!isEditing ? (
          <button onClick={toggleIsEditing}>Add Smurf</button>
        ) : (
          <div>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Age:
                <input type="text" name="name" />
              </label>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )}
        </div>
    )
}

const mapStateToProps = state => {
    return { smurfs: state.smurfs }
  };
  
export default connect(
    mapStateToProps,
    {}
)(Form);
  