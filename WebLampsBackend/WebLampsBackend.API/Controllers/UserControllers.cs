using Microsoft.AspNetCore.Mvc;
using WebLampsBackend.API.Contracts.User;
using WebLampsBackend.Core.Interface.Repositories;
using WebLampsBackend.Core.Interface.Services;
using WebLampsBackend.Core.Models;
using WebLampsBackend.Logic.Services;

namespace WebLampsBackend.API.Controllers;

[ApiController]
[Route("User")]
public class UserControllers : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IUserRepository _userRepository;

    public UserControllers(IUserService userService, IUserRepository userRepository)
    {
        _userService = userService;
        _userRepository = userRepository;
    }

    [HttpPost("Register")]
    public void Register([FromBody]UserRegisterDto userRegisterDto)
    {
        _userService.Register(userRegisterDto.username, userRegisterDto.email, userRegisterDto.password);
    }

    [HttpPost("Login")]
    public string Login([FromBody]UserLoginDto userLoginDto)
    {
        var token = _userService.Login(userLoginDto.Email, userLoginDto.Password);
        return token??string.Empty;
    }
    
    [HttpPost("CheckUser")]
    public bool CheckUser([FromQuery] string token)
    {
        return _userService.CheckUser(token); 
    }
    
    [HttpGet("GetUserByUsername")]
    public IActionResult GetUserByUsername([FromQuery] string username)
    {
        var user = _userRepository.GetUserByUsername(username);
        if (user == null)
        {
            return NotFound("User not found");
        }
        return Ok(user);
    }

}