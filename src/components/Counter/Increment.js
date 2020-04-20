import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { TAMBAHNILAI } from '../../reducer';

const Increment = (props) => {
    const tambahNilai = () => {
        props.dispatch({ type: TAMBAHNILAI })   //dispatch TAMBAHNILAI
    }
    return (
        <Button 
            variant="outline-info"
            onClick={tambahNilai}               //tambahNilai
        >+</Button>
    )
}

const mapStateToProps = (state) => {
    return {
        nilai: state.nilai
    }
}

export default connect(mapStateToProps)(Increment)