import React, { useState } from 'react';

const Form = () => {
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

export default Form;