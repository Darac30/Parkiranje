using BACKEND.Data;
using BACKEND.Models;
using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class RazinaController : ControllerBase
    {
        // koristimo dependency injection

        // 1. definiramo privatno svojstvo
        private readonly EdunovaContext _context;

        // 2. u konstruktoru postavljamo vrijednost
        public RazinaController(EdunovaContext context)
        {
            _context = context;

        }

        [HttpGet]

        public IActionResult Get()
        {
            try
            {
                return Ok(_context.Razine);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }



        [HttpPost]
        public IActionResult Post(Razina razina)
        {
            try
            {
                _context.Razine.Add(razina);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, razina);

            }

            catch (Exception e)
            { 
                return BadRequest(e);
            
            }
        }

        [HttpPut("{sifra:int}")]
        public IActionResult Put(int sifra, Razina razina)
        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Šifra mora biti veća od 0" });
            }

            try
            {
                Razina s = _context.Razine.Find(sifra);

                if (s == null)
                {
                    return NotFound();
                }

                // za sada ručno, kasnije automatika
                s.OznakaRazine = razina.OznakaRazine;
                s.Cijena = razina.Cijena;

                _context.Razine.Update(s);
                _context.SaveChanges();
                return Ok(s);
            }

            catch (Exception e) 
            { 
                return BadRequest(e);
            } 
            

        }


        [HttpDelete("{sifra:int}")]
        public IActionResult Delete(int sifra)

        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Šifra mora biti veća od 0" });
            }

            try
            {
                Razina s = _context.Razine.Find(sifra);

                if (s == null)
                {
                    return NotFound();
                }


                _context.Razine.Remove(s);
                _context.SaveChanges();
                return NoContent();
            }

            catch (Exception e)
            {
                return BadRequest(e);
            }

        }





    }
}
