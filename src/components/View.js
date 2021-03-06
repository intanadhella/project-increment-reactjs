import React from 'react';
import { Row, Col, InputGroup } from 'react-bootstrap'; //bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';
import Increment from './Counter/Increment';
import Decrement from './Counter/Decrement'; 

export default () => {
    return (
        <div className="App">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <Decrement />       {/*component Decrement*/}
                        </InputGroup.Prepend>
                        <Counter.Count />       {/*component Counter -> Count*/}
                        <InputGroup.Append>
                            <Increment />       {/*component Increment*/}
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Counter.Reset />           {/*component Counter -> Reset*/}
                </Col>
            </Row>
        </div>
    )
}