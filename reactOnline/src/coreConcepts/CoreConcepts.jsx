import { CORE } from '../data';
import {Container, Row, Col} from 'react-bootstrap';

const CoreConcepts = () => {
  return (
    <> 
   <Container >
        <Row> 
            <h2 className=' text-center' > Core Concepts</h2>  
            {CORE.map(core => (  

            <Col lg = {3} md={6} sm = {true} key = {core.title} className='border border-3 border-danger-subtle text-center bg-dark-subtle'>
                <img src = {core.image} alt = {core.title} className='img img-fluid d-block mx-auto'/>
                <h2>{core.title}</h2>
                <p>{core.description}</p>

            
            </Col>

            ))}    
        </Row> 
    </Container>
     </>
        )
}

export default CoreConcepts