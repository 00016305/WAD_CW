namespace backend16305.DTOs
{
    public class UpdateEventDto
    {
        public required string Title { get; set; }
        public required string Description { get; set; }
        public DateTime DateTime { get; set; }
        public required string Location { get; set; }
        public int MaxAttendees { get; set; }
    }
}
