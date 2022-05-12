using Microsoft.AspNetCore.Mvc;

namespace BookStore101.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : ControllerBase
    {
        public static List<DTO.BooksDto> books = new List<DTO.BooksDto>() { };

        public CartController() { }

        // GET: api/<CartController>
        [HttpGet]
        public List<DTO.BooksDto> Get()
        {
            return books;
        }

        [HttpPut]
        public List<DTO.BooksDto> AddBooks()
        {
            List<DTO.BooksDto> books = new List<DTO.BooksDto>();
            books.Add(new DTO.BooksDto());
            return books;
    }

    }
}