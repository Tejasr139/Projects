using E_CommerceFlipkartnew.Models;
using E_CommerceFlipkartnew.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();




//// Configure CORS
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowSpecificOrigin",
//        builder => builder.WithOrigins("http://localhost:5175")
//                          .AllowAnyHeader()
//                          .AllowAnyMethod());
//});







builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.
        GetConnectionString("FlipkartDbConnection"));
});



builder.Services.AddScoped<IRepositoryElectronics, ElectronicsRepository >();
//builder.Services.AddScoped<ICartRepository, CartRepository>();
//builder.Services.AddScoped<ICart2Repository, Cart2Repository>();
builder.Services.AddScoped<ICartItemRepository, CartItemRepository>();






var app = builder.Build();





// CORS Configuration
app.UseCors(options =>
{
    options.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});











// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



// Use the CORS policy
app.UseCors("AllowSpecificOrigin");



app.UseAuthorization();

app.MapControllers();

app.Run();
