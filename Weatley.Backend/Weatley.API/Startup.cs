using System.Net;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Weatley.API.Core;
using Weatley.DataAccess;
using Weatley.DataAccess.Abstract;
using Weatley.DataAccess.Repositories;
using Weatley.Model.Entities;

namespace Weatley.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().AddJsonOptions(options => {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            services.AddSingleton(Configuration);

            services.AddCors();

            services.AddSignalR();

            services.AddDbContext<WeatleyContext>(options =>
                options.UseSqlServer(Configuration["Data:WeatleyConnection:ConnectionString"],
                b => b.MigrationsAssembly("Weatley.API")));

            services.AddIdentity<User, Role>().AddEntityFrameworkStores<WeatleyContext>();
            services.AddAuthentication((cfg =>
            {
                cfg.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                cfg.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;

                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = Configuration["JwtSecurityToken:Issuer"],
                    ValidAudience = Configuration["JwtSecurityToken:Audience"],
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtSecurityToken:Key"])),
                    ValidateLifetime = true
                };
            });

            services.AddScoped<IAccountingRepository, AccountingRepository>();
            services.AddScoped<IActivityRepository, ActivityRepository>();
            services.AddScoped<IBookedRoomRepository, BookedRoomRepository>();
            services.AddScoped<IBookingRepository, BookingRepository>();
            services.AddScoped<ICustomerRepository, CustomerRepository>();
            services.AddScoped<IHotelRepository, HotelRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IProductOrderedRepository, ProductOrderedRepository>();
            services.AddScoped<IReportRepository, ReportRepository>();
            services.AddScoped<IRoomRepository, RoomRepository>();
            services.AddScoped<IServiceRepository, ServiceRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder =>
               builder.AllowAnyOrigin()
               .AllowCredentials()
               .AllowAnyHeader()
               .AllowAnyMethod());

            app.UseSignalR(routes =>
            {
                routes.MapHub<NotificationsPusher>("/chat");
            });


            app.UseExceptionHandler(
              builder =>
              {
                  builder.Run(
                    async context =>
                    {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            context.Response.AddApplicationError(error.Error.Message);
                            await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
                        }
                    });
              });

            app.UseAuthentication();
            app.UseMvc();
        }
    }
}