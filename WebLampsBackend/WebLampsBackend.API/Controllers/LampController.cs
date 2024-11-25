using Microsoft.AspNetCore.Mvc;
using WebLampsBackend.API.Contracts.Lamp;
using WebLampsBackend.Core.Interface.Repositories;
using WebLampsBackend.Core.Interface.Services;
using WebLampsBackend.Core.Models;

namespace WebLampsBackend.API.Controllers;

[ApiController]
[Route("[controller]")]
public class LampController(ILampService lampService) : ControllerBase
{
    [HttpGet("Get")]
    public OkObjectResult GetLamps([FromQuery]string search = "", [FromQuery]string sortManufacturer = "", [FromQuery]string filterPower = "", [FromQuery]string filterPrice = "", [FromQuery]string filterIsEconomical = "")
    {
        return Ok(lampService.GetLamps(search, sortManufacturer, filterPower, filterPrice, filterIsEconomical));
    }
    
    [HttpPut("Update/{id:Guid}")]
    public NoContentResult UpdateLamp(Guid id, [FromBody] LampUpdateInputDto lampUpdateInputDto)
    {
        lampService.UpdateLamp(id, lampUpdateInputDto.Manufacturer, lampUpdateInputDto.Power, lampUpdateInputDto.AmountOfLamps, lampUpdateInputDto.Price, lampUpdateInputDto.Color, lampUpdateInputDto.IsEconomical);
        return NoContent();
    }
    
    [HttpPost("Add")]
    public NoContentResult AddLamp([FromBody] LampAddInputDto lampAddInputDto)
    {
        lampService.AddLamp(lampAddInputDto.Manufacturer, lampAddInputDto.Power, lampAddInputDto.AmountOfLamps, lampAddInputDto.Price, lampAddInputDto.Color, lampAddInputDto.IsEconomical);
        return NoContent();
    }

    [HttpDelete("Delete/{id}")]
    public IActionResult DeleteLamp(Guid id)
    {
        lampService.DeleteLamp(id);
        return NoContent();
    }
    
    [HttpGet("GetById/{id}")]
    public OkObjectResult GetLampById(Guid id)
    {
        return Ok(lampService.GetLampById(id));
    }
}