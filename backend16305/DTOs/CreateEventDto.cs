namespace backend16305.DTOs
{
    public class CreateEventDto
    {
        public required string Title { get; set; }
        public required string Description { get; set; }
        public DateTime DateTime { get; set; }
        public required string Location { get; set; }
        public int MaxAttendees { get; set; }
        public int OrganizerId { get; set; }
    }
}
