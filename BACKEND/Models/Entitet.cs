using System.ComponentModel.DataAnnotations;

namespace BACKEND.Models
{
    public abstract class Entitet
    {
        [Key]  // mapiranje; kažemo da će ovo svojstvo biti primarni ključ
        public int Sifra { get; set; }
    }
}
