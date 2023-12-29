namespace API.Data;

public static class DbExtensions
{
    public static void SeedData(this IServiceCollection serviceColletion)
    {
        var serviceProvider = serviceColletion.BuildServiceProvider();
        var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();
        dbContext.AddRange(
            new Person(){
                Id = 1,
                FirstName = "Jan",
                LastName = "Kowalski",
                DateOfBirth = new DateTime(1991, 10, 12),
                Origin = "Poland",
            },
             new Person(){
                Id = 2,
                FirstName = "Anna",
                LastName = "Nowak",
                DateOfBirth = new DateTime(2001, 11, 23),
                Origin = "Poland",
            }
        );
        dbContext.SaveChanges();
    }

    public static void SeedData(this IHost app)
    {
        using var scope = app.Services.CreateScope();
        scope.ServiceProvider.GetService<ApplicationDbContext>()?.SeedData();
    }

    private static void SeedData(this ApplicationDbContext dbContext)
    {
        dbContext.Database.EnsureCreated();
        var hasData = dbContext.People.Any();

        if(!hasData)
        {
            dbContext.AddRange(
            new Person(){
                Id = 1,
                FirstName = "Jan",
                LastName = "Kowalski",
                DateOfBirth = new DateTime(1991, 10, 12),
                Origin = "Poland",
            },
             new Person(){
                Id = 2,
                FirstName = "Anna",
                LastName = "Nowak",
                DateOfBirth = new DateTime(2001, 11, 23),
                Origin = "Poland",
            });
            dbContext.SaveChanges();
        }
    }
}