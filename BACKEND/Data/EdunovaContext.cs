using BACKEND.Models;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Data
{
    public class EdunovaContext : DbContext
    {
        public EdunovaContext(DbContextOptions<EdunovaContext> options) : base(options)
        { 
        // ovdje se mogu fino postaviti opcije, ali ne za sada
        }

        public DbSet<Razina> Razine { get; set; } // zbog ovoga ovdje se Razine se tablica zove u množini
    }
}
