import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import { Card } from 'semantic-ui-react';

const SmurfList = props => {
    console.log("SmurfList props:", props);

    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    };

    return (
        <div className="smurf-list">
            {props.smurfs.map((smurf) => {
                return (
                    <div>
                        <Card 
                        header={smurf.name}
                        meta={'Age: ' + smurf.age}
                        description={'Height: ' + smurf.height}
                        extra={'ID: ' + smurf.id}
                        />
                    </div>
                )
            })}
            <button onClick={fetchSmurfs}>Fetch Smurfs</button>
        </div>
    )
};

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfList);