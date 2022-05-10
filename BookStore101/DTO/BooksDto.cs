namespace BookStore101.DTO
{
    public class BooksDto
    {
        public List<DTO.BooksDto> BookList { get; set; }
        public int ItemId { get; set; }
        public string ItemName { get; set; }
        public string Author { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
    }
}
