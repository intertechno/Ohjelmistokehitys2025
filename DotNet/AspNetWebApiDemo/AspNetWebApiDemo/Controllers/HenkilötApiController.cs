using AspNetWebApiDemo.Mallit;
using AspNetWebApiDemo.Työkalut;
using Microsoft.AspNetCore.Mvc;

namespace AspNetWebApiDemo.Controllers
{
    [Route("api/v1/henkilöt")]
    [ApiController]
    public class HenkilötApiController : ControllerBase
    {
        [HttpGet]
        public List<Henkilö> LueHenkilötCsvTiedostosta()
        {
            string csv = "Henkilöt.csv";
            CsvLukija csvLukija = new();
            List<Henkilö> henkilöt = csvLukija.LueHenkilötCsv(csv);

            // lajittelu
            henkilöt = [.. henkilöt.OrderBy(h => h.Nimi)];

            return henkilöt;
        }
    }
}
