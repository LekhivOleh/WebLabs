using Microsoft.EntityFrameworkCore;
using WeblabsBackend.Core.Interface.Repositories;
using WeblabsBackend.Core.Interface.Services;
using WeblabsBackend.Logic.Services;
using WeblabsBackend.Persistence;
using WeblabsBackend.Persistence.Repositories;

namespace WeblabsBackend;

public static class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
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
        builder.Services.AddDbContext<WeblabsBackendDbContext>(options =>
        {
            options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"), new MySqlServerVersion(new Version(8, 0, 25)));
        });
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