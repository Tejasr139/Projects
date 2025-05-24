using E_CommerceFlipkartnew.Models;
using Microsoft.EntityFrameworkCore;

namespace E_CommerceFlipkartnew.Repository
{
    public class ElectronicsRepository : IRepositoryElectronics
    {


        private readonly ApplicationDbContext _context;

        public ElectronicsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Electronic> GetAllElectronics()
        {
            return _context.Electronics.ToList();
        }

        public Electronic GetElectronicById(int id)
        {
            return _context.Electronics.FirstOrDefault(e => e.ElectronicId == id);
        }

        public void AddElectronic(Electronic electronic)
        {
            _context.Electronics.Add(electronic);
            _context.SaveChanges();
        }

        public void UpdateElectronic(Electronic electronic)
        {
            _context.Entry(electronic).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void DeleteElectronic(int id)
        {
            var electronic = GetElectronicById(id);
            if (electronic != null)
            {
                _context.Electronics.Remove(electronic);
                _context.SaveChanges();
            }
        }

        // Additional methods using LINQ queries
        public IEnumerable<Electronic> GetElectronicsByName(string name)
        {
            return _context.Electronics.Where(e => e.Name.Contains(name));
        }

        public IEnumerable<Electronic> GetElectronicsByPriceRange(decimal minPrice, decimal maxPrice)
        {
            return _context.Electronics.Where(e => e.Price >= minPrice && e.Price <= maxPrice);
        }

        public Electronic GetElectronicByDescription(string description)
        {
            return _context.Electronics.FirstOrDefault(e => e.Description.Contains(description));
        }
    }
}
