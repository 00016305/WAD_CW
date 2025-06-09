using Microsoft.Extensions.Logging;

namespace backend16305.Models
{
    public class User
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
        public DateTime CreatedAt { get; set; }

        // Navigation property - One User can organize Many Events
        public List<Event> OrganizedEvents { get; set; } = new List<Event>();
    }
}
