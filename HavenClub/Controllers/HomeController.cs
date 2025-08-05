using System.Diagnostics;
using System.Net.Mail;
using System.Net;
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
        [HttpPost]
        public async Task<IActionResult> ContactUs(ContactUsModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            try
            {
                var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    Credentials = new NetworkCredential("chandangkp2002@gmail.com", "ggso lfey maro nyoh"),
                    EnableSsl = true,
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress("chandan.in63@gmail.com"),
                    Subject = model.Subject,
                    Body = $"<h3>New Contact Request</h3><p><strong>Name:</strong> {model.Name}</p><p><strong>Email:</strong> {model.Email}</p><p><strong>Phone:</strong> {model.Phone}</p><p><strong>Message:</strong> {model.Message}</p>",
                    IsBodyHtml = true,
                };

                mailMessage.To.Add("Info@havenclubandresorts.in");

                await smtpClient.SendMailAsync(mailMessage);

                TempData["SuccessMessage"] = "Your message has been sent successfully!";
                return RedirectToAction("ContactUs");
            }
            catch
            {
                TempData["ErrorMessage"] = "There was an error sending your message. Please try again later.";
                return View(model);
            }
        }
    }
}
