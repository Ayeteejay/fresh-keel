import {Container, Col, Row} from 'react-bootstrap';
import Flag from '../images/white-flag.svg';

const Footer = () => {
    const fullYear = new Date();
    const year = fullYear.getFullYear();

    return (
        <footer>
            <Container className='py-5 px-0'>
                <Row>
                    <Col>
                        <p><span className='serif'>Digital is our domain.</span><br></br><span className='copyright'><a href="https://vsslagency.com/" rel="noreferrer noopener" target="_blank">VSSL Agency</a> &copy; {year}</span></p>                                        
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <img src={Flag} className="flag" alt="VSSL Agency"></img>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};
export default Footer