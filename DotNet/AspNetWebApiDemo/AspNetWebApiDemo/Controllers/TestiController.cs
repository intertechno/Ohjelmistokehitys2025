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
        [Route("kokeilu")]
        public string KolmasTesti()
        {
            return "Kolmas metodi";
        }
    }
}
