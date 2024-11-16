using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeblabsBackend.Contracts.Lamp;
using WeblabsBackend.Core.Interface.Services;
using WeblabsBackend.Core.Models;

namespace WeblabsBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class LampController : ControllerBase
{
    private readonly ILampService _lampService;

    public LampController(ILampService lampService)
    {
        _lampService = lampService;
    }

    [HttpGet("Get")]
    public OkObjectResult GetLamps([FromQuery]string search = "", [FromQuery]string sort = "")
    {
        return Ok(_lampService.GetLamps(search, sort));
    }
    
    [HttpPut("Update/{id:Guid}")]
    public NoContentResult UpdateLamp(Guid id, [FromBody] LampUpdateInputDto lampUpdateInputDto)
    {
        _lampService.UpdateLamp(id, lampUpdateInputDto.Manufacturers, lampUpdateInputDto.Power, lampUpdateInputDto.AmountOfLamps);
        return NoContent();
    }
    
    [HttpPost("Add")]
    public NoContentResult AddLamp([FromBody] LampAddInputDto lampAddInputDto)
    {
        _lampService.AddLamp(lampAddInputDto.Manufacturers, lampAddInputDto.Power, lampAddInputDto.AmountOfLamps);
        return NoContent();
    }

    [HttpDelete("Delete/{id}")]
    public IActionResult DeleteLamp(Guid id)
    {
        _lampService.DeleteLamp(id);
        return NoContent();
    }
    
    [HttpGet("Count")]
    public OkObjectResult CountLampsPower([FromQuery]string search = "")
    {
        return Ok(_lampService.CountLampsPower(search));
    }
}