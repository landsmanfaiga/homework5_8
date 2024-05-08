using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework5_7.Data
{
    public class cheesecakeRepository
    {
        private readonly string _connectionString;
        public cheesecakeRepository(string connectionString)
        {
             _connectionString = connectionString;
        }
        public List<Cheesecake> GetAll()
        {
            using var context = new cheesecakeDataContext(_connectionString);
            return context.Cheesecakes.ToList();
        }

        public Cheesecake GetById(int id)
        {
            using var context = new cheesecakeDataContext(_connectionString);
            return context.Cheesecakes.FirstOrDefault(x => x.Id == id);
        }

        public void AddCheesecake(Cheesecake cheesecake)
        {
            using var context = new cheesecakeDataContext(_connectionString);
            context.Cheesecakes.Add(cheesecake);
            context.SaveChanges();
        }

    }
}
