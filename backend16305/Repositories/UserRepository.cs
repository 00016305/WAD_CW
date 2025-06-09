using backend16305.DTOs;
using backend16305.Models;
using Microsoft.EntityFrameworkCore;

namespace backend16305.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext context;
        public UserRepository(AppDbContext context)
        {
            this.context = context;
        }
        public async Task<User> CreateAsync(User user)
        {
            await context.AddAsync(user);
            await context.SaveChangesAsync();
            return user;
        }

        public async Task<User?> DeleteAsync(int id)
        {
            var isExist = await context.Users.FindAsync(id);
            if (isExist == null)
            {
                return null;
            }
            context.Users.Remove(isExist);
            await context.SaveChangesAsync();
            return isExist;
        }

        public async Task<List<User>> GetAllAsync()
        {
            return await context.Users.Include(c => c.OrganizedEvents).ToListAsync();
        }

        public async Task<User?> GetByIdAsync(int id)
        {
            return await context.Users.Include(c => c.OrganizedEvents).FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<User?> UpdateAsync(int id, UpdateUserDto updateDto)
        {
            var isExist = await context.Users.FindAsync(id);

            if (isExist == null)
            {
                return null;
            }

            isExist.FirstName = updateDto.FirstName;
            isExist.LastName = updateDto.LastName;
            isExist.Email = updateDto.Email;
            isExist.Phone = updateDto.Phone;

            await context.SaveChangesAsync();
            return isExist;
        }
    }
}
