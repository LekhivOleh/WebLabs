using Microsoft.AspNetCore.Mvc;
using WebLampsBackend.API.Contracts.Cart;
using WebLampsBackend.Core.Interface.Services;

namespace WebLampsBackend.API.Controllers;

[ApiController]
[Route("[controller]")]
public class CartController(ICartService cartService) : ControllerBase
{
    [HttpGet("Get")]
    public OkObjectResult GetCarts([FromQuery] Guid userId)
    {
        return Ok(cartService.GetAllCarts(userId));
    }
    
    [HttpPut("Update/{id:Guid}")]
    public NoContentResult UpdateCart(Guid id, [FromBody] CartUpdateDto cartUpdateDto)
    {
        cartService.UpdateCart(id, cartUpdateDto.Amount, cartUpdateDto.Type);
        return NoContent();
    }
    
    [HttpPost("Add")]
    public NoContentResult AddCart([FromBody] CartAddDto cartAddDto)
    {
        cartService.CreateCart(cartAddDto.Amount, cartAddDto.Type, cartAddDto.LampId, cartAddDto.UserId);
        return NoContent();
    }
    
    [HttpDelete("Delete/{id}")]
    public IActionResult DeleteCart(Guid id)
    {
        cartService.DeleteCart(id);
        return NoContent();
    }
    
    [HttpGet("GetById/{id}")]
    public OkObjectResult GetCartById(Guid id)
    {
        return Ok(cartService.GetCartById(id));
    }
}