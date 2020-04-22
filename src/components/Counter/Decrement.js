import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { KURANGNILAI } from '../../reducer';

const Decrement = (props) => {
    const kurangNilai = () => {
        props.dispatch({ type: KURANGNILAI })   // dispatch KURANGNILAI
    }

    return (
        <Button 
            variant="outline-warning"
            onClick={kurangNilai}               //kurangNilai
        >-</Button>
    )
}

const mapStateToProps = (state) => {
    return {
        nilai: state.nilai
    }
}

export default connect(mapStateToProps)(Decrement)