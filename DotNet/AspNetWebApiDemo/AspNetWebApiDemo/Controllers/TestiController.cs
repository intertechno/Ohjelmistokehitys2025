using Microsoft.AspNetCore.Mvc;

namespace AspNetWebApiDemo.Controllers
{
    [ApiController]
    [Route("api/testi")]
    public class TestiController : ControllerBase
    {
        public string EkaTesti()
        {
            return "Moi maailma!";
        }
    }
}
