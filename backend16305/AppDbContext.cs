using backend16305.Models;
using Microsoft.EntityFrameworkCore;

namespace backend16305
{
    public class AppDbContext:DbContext 
    {
        public AppDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }
        public DbSet<Event> Events{ get; set; }
        public DbSet<User> Users{ get; set; }
    }
}
