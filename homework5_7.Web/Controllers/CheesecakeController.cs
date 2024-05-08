using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using homework5_7.Data;
using homework5_7.Web.Models;

namespace homework5_7.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheesecakeController : ControllerBase
    {
        private string _connectionString;

        public CheesecakeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public List<Cheesecake> GetAll()
        {
            var repo = new cheesecakeRepository(_connectionString);
            return repo.GetAll();
        }

        [HttpGet]
        [Route("getone")]
        public Cheesecake GetOne(int id)
        {
            var repo = new cheesecakeRepository(_connectionString);
            return repo.GetById(id);
        }

        [HttpPost]
        [Route("addorder")]
        public void AddOrder(ViewModel vm)
        {
            var repo = new cheesecakeRepository(_connectionString);
            repo.AddCheesecake(vm.Cheesecake);
        }
    }
}
