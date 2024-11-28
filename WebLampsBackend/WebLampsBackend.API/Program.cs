using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebLampsBackend.Core.Interface.Infrastructure;
using WebLampsBackend.Core.Interface.Repositories;
using WebLampsBackend.Core.Interface.Services;
using WebLampsBackend.Core.Models;
using WebLampsBackend.Infrastructure;
using WebLampsBackend.Logic.Services;
using WebLampsBackend.Persistence;
using WebLampsBackend.Persistence.Repositories;

namespace WebLampsBackend.API;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        var configuration = builder.Configuration;

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowAll",
                policyBuilder =>
                {
                    policyBuilder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
        });

        builder.Services.AddScoped<ILampService, LampService>();
        builder.Services.AddScoped<ILampRepository, LampRepository>();
        builder.Services.AddDbContext<WeblampsBackendDbContext>(options =>
        {
            options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"), new MySqlServerVersion(new Version(8, 0, 25)));
        });
        builder.Services.AddScoped<ICartService, CartService>();
        builder.Services.AddScoped<ICartRepository, CartRepository>();
        builder.Services.AddScoped<IUserService, UserService>();
        builder.Services.AddScoped<IUserRepository, UserRepository>();
        
        builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();
        builder.Services.AddScoped<IJwtProvider, JwtProvider>();
        
        var app = builder.Build();

        app.UseSwagger();
        app.UseSwaggerUI();
        app.UseCors("AllowAll");
        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }
}