import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function RazineDodaj(){
    return (
        <>


        Dodavanje razine

        <Form>

            <Form.Group controlId="oznakaRazine">
                <Form.Label>Oznaka razine</Form.Label>
                <Form.Control type="text" name="oznakaRazine" required />
            </Form.Group>

            <Form.Group controlId="cijena">
                <Form.Label>Cijena</Form.Label>
                <Form.Control type="numberxt" name="cijena" step={0.01} />
            </Form.Group>

            <hr style={{marginTop: '50px'}} />

        <Row>
            <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
            <Link to={RouteNames.RAZINA_PREGLED}
            className="btn btn-danger">Odustani</Link>
            </Col>
            <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
            <Button variant="success" type="submit">
                Dodaj razinu
            </Button>
            </Col>

        </Row>


        </Form>




        
        </>
    )
}