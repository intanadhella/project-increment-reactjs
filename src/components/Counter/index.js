import React from 'react';
import { connect } from 'react-redux';
import { FormControl, Button } from 'react-bootstrap';
import { RESETNILAI } from '../../reducer';

const Count = (props) => {
    const { nilai } = props;
    return (
        <FormControl 
            aria-describedby="basic-addon1" 
            value={ nilai }                     //nilai
            readOnly
            className="text-center"
        />
    )
}

const Reset = (props) => {
    const resetNilai = () => {
        props.dispatch({ type: RESETNILAI })    //dispatch RESETNILAI
    }
    return (
        <Button 
            variant="info"
            onClick={resetNilai}                //resetNilai
        >Reset</Button>
    )
}

const mapStateToProps = (state) => {
    return {
        nilai: state.nilai
    }
}

export default { 
    Count: connect(mapStateToProps)(Count), 
    Reset: connect(mapStateToProps)(Reset)
}