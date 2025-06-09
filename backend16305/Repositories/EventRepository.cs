using backend16305.DTOs;
using backend16305.Models;
using Microsoft.EntityFrameworkCore;

namespace backend16305.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly AppDbContext context;
        public EventRepository(AppDbContext context)
        {
            this.context = context;
        }
        public async Task<Event> CreateAsync(Event eventModel)
        {
            await context.AddAsync(eventModel);
            await context.SaveChangesAsync();
            return eventModel;
        }

        public async Task<Event?> DeleteAsync(int id)
        {
            var isExist = await context.Events.FindAsync(id);
            if (isExist == null)
            {
                return null;
            }
            context.Events.Remove(isExist);
            await context.SaveChangesAsync();
            return isExist;
        }

        public async Task<List<Event>> GetAllAsync()
        {
            return await context.Events.ToListAsync();
        }

        public async Task<Event?> GetByIdAsync(int id)
        {
            return await context.Events.FindAsync(id);
        }

        public async Task<Event?> UpdateAsync(int id, UpdateEventDto updateDto)
        {
            var isExist = await context.Events.FindAsync(id);
            if (isExist == null)
            {
                return null;
            }
            isExist.Title = updateDto.Title;
            isExist.Description = updateDto.Description;
            isExist.DateTime = updateDto.DateTime;
            isExist.Location = updateDto.Location;
            isExist.MaxAttendees = updateDto.MaxAttendees;

            await context.SaveChangesAsync();
            return isExist;
        }
    }
}
