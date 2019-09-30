import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

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
                        
                    </div>
                )
            })}
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