/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './header/header';
import CoreConcepts from './coreConcepts/CoreConcepts';
import Examples from './Examples/Examples';
import './Examples/examples.css'
import { EXAMPLES } from './data';
export default function App() {

    const [selectedButton, setSelectedButton] = useState('');


    const HandleButton = (value) => {

        setSelectedButton(value)
    }

    return (
        <>
            <Container fluid >

                {/* Header Section includes NavBar And Initial Content */}
                <Container className='mt-5 bg-info-subtle'>
                    <Row>
                        <Col>
                            <h2>Navigation Menu</h2>


                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Header/>
                        </Col>
                    </Row>
                </Container>
                {/* Header ends Here */}
                {/* ************************************************************** */}

                {/* Core Concepts Section  */}
                <Container className='mt-5 '>
                    <Row>
                        <Col>

                            <CoreConcepts/>
                        </Col>
                    </Row>
                </Container>
                {/* Core Concepts Section   end*/}
                {/* ************************************************************** */}
                {/* Examples Section */}
                <Container className='mt-5 bg-info-subtle'>
                    <Row>
                        <h2>Examples</h2>
                        <Col className='examples'>
                            <Examples isSelected={selectedButton==='components'} handleClick={() => { HandleButton('components') }}> Component</Examples>
                            <Examples isSelected={selectedButton==='jsx'} handleClick={() => { HandleButton('jsx') }}> Jsx</Examples>
                            <Examples isSelected={selectedButton==='props'} handleClick={() => { HandleButton('props') }}> Props</Examples>
                            <Examples isSelected={selectedButton==='state'} handleClick={() => { HandleButton('state') }}> Sate</Examples>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-3'>
                            {!selectedButton ? (<h2>please select a button </h2>) : (
                                <>
                                    <h2>{EXAMPLES[selectedButton].title}</h2>
                                    <p>{EXAMPLES[selectedButton].description}</p>

                                    <pre>
                                        <code>
                                            {EXAMPLES[selectedButton].code}
                                        </code>
                                    </pre>
                                </>)}




                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}