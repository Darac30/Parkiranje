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




    }
}
