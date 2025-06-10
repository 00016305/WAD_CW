using backend16305.Models;

namespace backend16305.DTOs
{
    public class EventDto
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public DateTime DateTime { get; set; }
        public required string Location { get; set; }
        public int MaxAttendees { get; set; }
        public DateTime CreatedAt { get; set; }
        public int OrganizerId { get; set; }
        //public User? Organizer { get; set; }
    }
}
