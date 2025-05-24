using E_CommerceFlipkartnew.Models;
using E_CommerceFlipkartnew.Repository;
using Microsoft.AspNetCore.Mvc;

namespace E_CommerceFlipkartnew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartItemRepository _repository;

        public CartController(ICartItemRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetCartItems()
        {
            return Ok(_repository.GetAllCartItems());
        }

        [HttpGet("{id}")]
        public IActionResult GetCartItem(int id)
        {
            var cartItem = _repository.GetCartItemById(id);
            if (cartItem == null)
            {
                return NotFound();
            }
            return Ok(cartItem);
        }

        [HttpPost]
        public IActionResult PostCartItem([FromBody] CartItemDto cartItemDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cartItem = new CartItem
            {
                ElectronicId = cartItemDto.ElectronicId,
                Quantity = cartItemDto.Quantity
            };

            try
            {
                _repository.AddCartItem(cartItem);
                return CreatedAtAction("GetCartItem", new { id = cartItem.CartItemId }, cartItem);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, "Internal server error. Please check the server logs for more details.");
            }
        }

        [HttpPut("{id}")]
        public IActionResult PutCartItem(int id, CartItem cartItem)
        {
            if (id != cartItem.CartItemId)
            {
                return BadRequest();
            }

            try
            {
                _repository.UpdateCartItem(cartItem);
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

        [HttpDelete("{id}")]
        public IActionResult DeleteCartItem(int id)
        {
            try
            {
                _repository.DeleteCartItem(id);
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
