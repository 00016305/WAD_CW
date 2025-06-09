using backend16305.DTOs;
using backend16305.Models;

namespace backend16305.Repositories
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllAsync();
        Task<User?> GetByIdAsync(int id);
        Task<User> CreateAsync(User user);
        Task<User?> UpdateAsync(int id, UpdateUserDto updateDto);
        Task<User?> DeleteAsync(int id);
    }
}
