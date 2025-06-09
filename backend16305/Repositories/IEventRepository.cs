using backend16305.DTOs;
using backend16305.Models;

namespace backend16305.Repositories
{
    public interface IEventRepository
    {
        Task<List<Event>> GetAllAsync();
        Task<Event?> GetByIdAsync(int id);
        Task<Event> CreateAsync(Event eventModel);
        Task<Event?> UpdateAsync(int id, UpdateEventDto updateDto);
        Task<Event?> DeleteAsync(int id);
    }
}
