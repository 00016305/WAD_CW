namespace backend16305.Models
{
    public class Event
    {
        //00016305
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public DateTime DateTime { get; set; }
        public required string Location { get; set; }
        public int MaxAttendees { get; set; }
        public int OrganizerId { get; set; } // Foreign Key
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        // Navigation property - Each Event belongs to One User (Organizer)
        public User? Organizer { get; set; }
    }
}
