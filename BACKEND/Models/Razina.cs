namespace BACKEND.Models
{
    public class Razina : Entitet
    {
        public string OznakaRazine { get; set; } = "";

        public decimal Cijena { get; set; } 

        // [Column("naziv kolone u bazi čije ime želim izmjeniti")] ovim atributom se dakle mapira naziv kolone da bude različiti od naziva svojstva
    }
}
