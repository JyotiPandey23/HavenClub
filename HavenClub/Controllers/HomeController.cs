using System.Diagnostics;
using HavenClub.Models;
using Microsoft.AspNetCore.Mvc;

namespace HavenClub.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult TermsAndCondition()
        {
            return View();
        }
        public IActionResult privacyAndPolicy()
        {
            return View();
        }
        public IActionResult PayAndPolicy()
        {
            return View();
        }
        public IActionResult DomesticDestination()
        {
            return View();
        }
        public IActionResult InternationalDestination()
        {
            return View();
        }
        public IActionResult blog()
        {
            return View();
        }
        public IActionResult Membership()
        {
            return View();
        }

             public IActionResult Member_ship()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult ContactUs()
        {
            return View();
        }
        public IActionResult AboutUs()
        {
            return View();
        }
        public IActionResult AboutUs2()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult MemberLogin()
        {
            return View();
        }
    }
}
