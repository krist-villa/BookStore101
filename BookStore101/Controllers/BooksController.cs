using Microsoft.AspNetCore.Mvc;

namespace BookStore101.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {
        public static List<DTO.BooksDto> books = new List<DTO.BooksDto>()
            {
                new DTO.BooksDto{ ItemId = 101, ItemName = "splashing through deep puddles", Author = "Sarah Salarvand", Description = "poetry"},
                new DTO.BooksDto{ ItemId = 102, ItemName = "maybe i'm bad", Author = "Amie James", Description = "poetry", Price = 10.99},
                new DTO.BooksDto{  ItemId = 103, ItemName = "uncaged wallflower", Author = "Jennae Cecelia", Description = "poetry", Price = 5.49},
                new DTO.BooksDto{  ItemId = 104, ItemName = "anatomy", Author = "Katrina Vigil", Description = "poetry", Price = 12.99},
                new DTO.BooksDto{  ItemId = 105, ItemName = "little fires everywhere", Author = "Celeste Ng", Description = "novel", Price = 6.99},
                new DTO.BooksDto{ ItemId = 106, ItemName = "things we never got over", Author = "Lucy Score", Description = "novel", Price = 3.99},
            };

        public BooksController() { }

        // GET: api/<BooksController>
        [HttpGet]
        public List<DTO.BooksDto> Get()
        {
            return books;
        }

    }
}