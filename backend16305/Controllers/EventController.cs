using backend16305.DTOs;
using backend16305.Mappers;
using backend16305.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend16305.Controllers
{
    //16305
    [Route("[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private IEventRepository _repo;
        public EventController(IEventRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var events = await _repo.GetAllAsync();

            if (events == null)
            {
                return NotFound();
            }

            var eventDto = events.Select(s => s.ToEventDto());
            return Ok(eventDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var eventModel = await _repo.GetByIdAsync(id);
            if (eventModel == null)
            {
                return NotFound();
            }
            return Ok(eventModel.ToEventDto());
        }

        [HttpPost]
        public async Task<IActionResult> CreateComment([FromBody] CreateEventDto eventDto)
        {
            var model = eventDto.ToCreateEvent();
            await _repo.CreateAsync(model);
            return CreatedAtAction(nameof(GetById), new { id = model.Id }, model.ToEventDto());
        }
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateComment([FromRoute] int id, [FromBody] UpdateEventDto updateEventDto)
        {
            var model = await _repo.UpdateAsync(id, updateEventDto);
            //var stockModel = _context.Stocks.FirstOrDefault(x => x.Id == id);

            if (model == null)
            {
                return NotFound();
            }

            return Ok(model.ToEventDto());
        }
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var model = await _repo.DeleteAsync(id);
            if (model == null)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
