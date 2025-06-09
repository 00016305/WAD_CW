using backend16305.DTOs;
using backend16305.Models;

namespace backend16305.Mappers
{
    public static class UserMapper
    {
        public static UserDto ToUserDto(this User model)
        {
            return new UserDto
            {
                Id = model.Id,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Phone = model.Phone,
                CreatedAt = model.CreatedAt,
                OrganizedEvents = model.OrganizedEvents.Select(c => c.ToEventDto()).ToList()
            };
        }
        public static User ToCreateUser(this CreateUserDto UserDto)
        {
            return new User
            {
                FirstName = UserDto.FirstName,
                LastName = UserDto.LastName,
                Email = UserDto.Email,
                Phone = UserDto.Phone
            };
        }
    }
}
