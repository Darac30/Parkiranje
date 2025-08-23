import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import RazinaService from "../../services/RazinaService"
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function RazinePregled(){

    const[razine, setRazine] = useState([]);



    async function dohvatiRazine() {
        const odgovor = await RazinaService.get()
        setRazine(odgovor)

    }
    // hooks (kuka) koja će se izvoditi prilikom dolaska na stranicu Razine
    // ovo glumi konstruktor u OOP
    useEffect(()=>{
        dohvatiRazine();

    },[])



    return(
        <>
        
        <Link 
        className="btn btn-success"
        to={RouteNames.RAZINA_NOVI}>Dodavanje nove razine</Link>



        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Oznaka razine</th>
                    <th>Cijena</th>
                </tr>
            </thead>
            <tbody>
                {razine && razine.map((razina,index)=>(
                    <tr key={index}>
                        <td>{razina.oznakaRazine}</td>
                        <td className = "desno">
                            <NumericFormat
                            value={razina.cijena}
                            displayType={'text'}
                            thousandSeparator='.'
                            decimalSeparator=','
                            suffix={' €'}
                            decimalScale={2}
                            fixedDecimalScale

                            />
                        </td>

                    </tr>
                ))}
            </tbody>

        </Table>
        </>
    )
}