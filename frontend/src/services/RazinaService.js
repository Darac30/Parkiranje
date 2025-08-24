import { HttpService } from "./HttpService"


async function get() {
    return await HttpService.get('/Razina')
    // sve je u redu, dobili smo odgovor
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return odgovor.data
    })
    // nastala je greška, obradi ju (then i catch su funkcije)
    .catch((e)=>{})
}

async function dodaj(razina) {
    return await HttpService.post('/Razina', razina)
    // sve je u redu, dobili smo odgovor
    .then((odgovor)=>{
        return true
    })
    .catch((e)=>{return false})
}

async function obrisi(sifra) {
    return await HttpService.delete('/Razina/' + sifra)
    // sve je u redu, dobili smo odgovor
    .then((odgovor)=>{
        return true
    })
    .catch((e)=>{return false})
}

export default{
    get,
    dodaj,
    obrisi
}