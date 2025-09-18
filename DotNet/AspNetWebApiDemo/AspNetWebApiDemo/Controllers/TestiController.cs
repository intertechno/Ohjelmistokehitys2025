using AspNetWebApiDemo.Mallit;
using Microsoft.AspNetCore.Mvc;

namespace AspNetWebApiDemo.Controllers
{
    [ApiController]
    [Route("api/testi")]
    public class TestiController : ControllerBase
    {
        [HttpPost]
        [Route("")]
        public string EkaTesti()
        {
            return "Moi maailma!";
        }

        [HttpPatch]
        [Route("")]
        public string TokaTesti()
        {
            return "Patch-metodia kutsuttu!";
        }

        [HttpPatch]
        [Route("kokeilu/{asiakasNro}")]
        public string KolmasTesti(int asiakasNro)
        {
            return "Kolmas metodi:" + asiakasNro;
        }

        [HttpGet]
        public List<int> NeljäsTesti()
        {
            return [1, 2, 3];
        }

        [HttpGet]
        [Route("asiakkaat")]
        public List<Asiakas> AsiakasTesti()
        {
            // lista kuvitteellisesta asiakkaista
            List<Asiakas> asiakkaat =
            [
                new Asiakas() { AsiakasId = 1, AsiakkaanNimi = "M. Möttönen", AsiakkaanSähköpostiosoite = "matti@kotinetti.fi" },
                new Asiakas() { AsiakasId = 2, AsiakkaanNimi = "L. Laskettelija", AsiakkaanSähköpostiosoite = "liisa@kotinetti.fi" },
            ];

            return asiakkaat;
        }
    }
}
