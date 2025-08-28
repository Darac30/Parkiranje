import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import RazinaService from "../../services/RazinaService";
import { useEffect, useState } from "react";



export default function RazinePromjena(){

    const navigate = useNavigate();
    const params = useParams();
    const[razina,setRazina] = useState({})

    async function ucitajRazina(){
        const odgovor = await RazinaService.getBySifra(params.sifra)
        setRazina(odgovor)
    }

    useEffect(()=>{
        ucitajRazina()

    },[])



    async function promjena(sifra,razina){
        const odgovor = await RazinaService.promjeni(sifra,razina);

        navigate(RouteNames.RAZINA_PREGLED);

    }


    function odradiSubmit(e){     // e je event
        e.preventDefault();

        let podaci = new FormData(e.target);  // dohvaćamo sve podatke iz forme

        promjena(


        params.sifra,    

        {
  
          oznakaRazine: podaci.get('oznakaRazine'),
          cijena: parseFloat(podaci.get('cijena'))
        }
        
        
        
    )


    }










    return (
        <>


        Dodavanje razine

        <Form onSubmit={odradiSubmit}>

            <Form.Group controlId="oznakaRazine">
                <Form.Label>Oznaka razine</Form.Label>
                <Form.Control type="text" name="oznakaRazine" required
                defaultValue={razina.oznakaRazine} />
            </Form.Group>

            <Form.Group controlId="cijena">
                <Form.Label>Cijena</Form.Label>
                <Form.Control type="number" step={0.01} name="cijena"
                defaultValue={razina.cijena} />
            </Form.Group>

            <hr style={{marginTop: '50px'}} />

        <Row>
            <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
            <Link to={RouteNames.RAZINA_PREGLED}
            className="btn btn-danger">Odustani</Link>
            </Col>
            <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
            <Button variant="success" type="submit">
                Promjeni razinu
            </Button>
            </Col>

        </Row>


        </Form>




        
        </>
    )
}