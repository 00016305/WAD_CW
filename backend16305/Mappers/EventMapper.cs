using backend16305.DTOs;
using backend16305.Models;

namespace backend16305.Mappers
{
    public static class EventMapper
    {
        public static EventDto ToEventDto(this Event model)
        {
            return new EventDto
            {
                Id = model.Id,
                Title = model.Title,
                Description = model.Description,
                DateTime = model.DateTime,
                Location = model.Location,
                MaxAttendees = model.MaxAttendees,
                CreatedAt = model.CreatedAt,
                OrganizerId = model.OrganizerId
            };
        }
        public static Event ToCreateEvent(this CreateEventDto EventDto)
        {
            return new Event
            {
                Title = EventDto.Title,
                Description = EventDto.Description,
                DateTime = EventDto.DateTime,
                Location = EventDto.Location,
                MaxAttendees = EventDto.MaxAttendees,
                OrganizerId = EventDto.OrganizerId
            };
        }
    }
}
