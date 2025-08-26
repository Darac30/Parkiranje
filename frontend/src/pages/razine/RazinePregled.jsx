import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import RazinaService from "../../services/RazinaService"
import { NumericFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function RazinePregled(){

    const[razine, setRazine] = useState([]);
    const navigate = useNavigate();



    async function dohvatiRazine() {
        const odgovor = await RazinaService.get()
        setRazine(odgovor)

    }
    // hooks (kuka) koja će se izvoditi prilikom dolaska na stranicu Razine
    // ovo glumi konstruktor u OOP
    useEffect(()=>{
        dohvatiRazine();

    },[])

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati?')){
            return;
        }
        brisanje(sifra)
    }

    async function brisanje(sifra){
        const odgovor = await RazinaService.obrisi(sifra);
        dohvatiRazine();
    }



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
                    <th>Akcija</th>
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
                        <td>
                            <Button  onClick={()=>navigate(`/razine/${razina.sifra}`)}>
                                Promjena
                            </Button>

                            <Button variant="danger" onClick={()=>obrisi(razina.sifra)}>
                                Obriši
                            </Button>
                        </td>

                    </tr>
                ))}
            </tbody>

        </Table>
        </>
    )
}