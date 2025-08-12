using System.ComponentModel.DataAnnotations;

namespace HavenClub.Models
{
    public class ContactUsModel
    {
        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, ErrorMessage = "Name can't be longer than 100 characters.")]
        public string Name { get; set; } = "";

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Enter a valid email address.")]
        public string Email { get; set; } = "";

        [Required(ErrorMessage = "Phone is required.")]
        [RegularExpression(@"^\d{10}$", ErrorMessage = "Phone number must be exactly 10 digits.")]
        public string Phone { get; set; } = "";

        [Required(ErrorMessage = "Subject is required.")]
        [StringLength(150, ErrorMessage = "Subject can't be longer than 150 characters.")]
        public string Subject { get; set; } = "";

        [Required(ErrorMessage = "Message is required.")]
        [StringLength(1000, ErrorMessage = "Message can't exceed 1000 characters.")]
        public string Message { get; set; } = "";
    }
}
