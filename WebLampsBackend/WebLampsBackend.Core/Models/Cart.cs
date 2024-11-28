using System;

namespace WebLampsBackend.Core.Models
{
    public class Cart
    {
        public Guid Id { get; set; }
        public int Amount { get; set; }
        public string Type { get; set; }
        public Guid LampId { get; set; }
        public Lamp Lamp { get; set; }
        public Guid UserId { get; set; }
    }
}