using E_CommerceFlipkartnew.Models;

namespace E_CommerceFlipkartnew.Repository
{
    public interface IRepositoryElectronics
    {

        IEnumerable<Electronic> GetAllElectronics();
        Electronic GetElectronicById(int id);
        void AddElectronic(Electronic electronic);
        void UpdateElectronic(Electronic electronic);
        void DeleteElectronic(int id);
    }
}
