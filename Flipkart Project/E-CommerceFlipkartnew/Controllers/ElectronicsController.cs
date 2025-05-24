using E_CommerceFlipkartnew.Models;
using E_CommerceFlipkartnew.Repository;
using Microsoft.AspNetCore.Mvc;

namespace E_CommerceFlipkartnew.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ElectronicsController : ControllerBase
    {
        private readonly IRepositoryElectronics _repository;

        public ElectronicsController(IRepositoryElectronics repository)
        {
            _repository = repository;
        }

        // GET: api/Electronics
        [HttpGet]
        public IActionResult GetElectronics()
        {
            return Ok(_repository.GetAllElectronics());
        }

        // GET: api/Electronics/5
        [HttpGet("{id}")]
        public IActionResult GetElectronic(int id)
        {
            var electronic = _repository.GetElectronicById(id);

            if (electronic == null)
            {
                return NotFound();
            }

            return Ok(electronic);
        }



        // POST: api/Electronics
        [HttpPost]
        public IActionResult PostElectronic(Electronic electronic)
        {
            try
            {
                _repository.AddElectronic(electronic);
                return CreatedAtAction("GetElectronic", new { id = electronic.ElectronicId }, electronic);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, "Internal server error. Please check the server logs for more details.");
            }
        }



        // PUT: api/Electronics/5
        [HttpPut("{id}")]
        public IActionResult PutElectronic(int id, Electronic electronic)
        {
            if (id != electronic.ElectronicId)
            {
                return BadRequest();
            }

            try
            {
                _repository.UpdateElectronic(electronic);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }

            return NoContent();
        }

        // DELETE: api/Electronics/5
        [HttpDelete("{id}")]
        public IActionResult DeleteElectronic(int id)
        {
            try
            {
                _repository.DeleteElectronic(id);
                return Ok();
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
