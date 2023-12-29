using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Produces("application/json")]
[Route("[controller]")]
public class PersonController : ControllerBase
{
  private readonly ApplicationDbContext _context;

  public PersonController(ApplicationDbContext context)
  {
    _context = context;
  }

  // Zwroc wszystkie osoby
  [HttpGet("/GetPeople")]
  public async Task<ActionResult<IEnumerable<Person>>> GetPeople()
  {
    return await _context.People.ToListAsync();
  }

  // Dodawanie
  [HttpPost("/PersonAdd")]
  public IActionResult AddPerson([FromBody] Person person)
  {
    _context.People.Add(person);
    _context.SaveChanges();
    return Ok(person);
  }

  // Usuwanie
  [HttpDelete("/PersonDelete/{id}")]
  public IActionResult DeletePerson(int id)
  {
    var person = _context.People.Find(id);
    if (person == null)
    {
      return NotFound();
    }
    _context.People.Remove(person);
    _context.SaveChanges();
    return Ok(person);
  }

  // Edycja
  [HttpPut("/PersonUpdate/{id}")]
  public IActionResult UpdatePerson(int id, [FromBody] Person personUpdate)
  {
    var person = _context.People.Find(id);
    if (person == null)
    {
      return NotFound();
    }

    person.FirstName = personUpdate.FirstName;
    person.LastName = personUpdate.LastName;
    person.DateOfBirth = personUpdate.DateOfBirth;
    person.Origin = personUpdate.Origin;

    _context.SaveChanges();
    return Ok(person);
  }
}