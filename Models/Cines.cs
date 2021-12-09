using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CinesGammaApp.Models
{
    public class Cines
    {
        public int cine_id { get; set; }

        public string RUC { get; set; }

        public string nombre { get; set; }

        public string ciudad { get; set; }

        public string direccion { get; set; }

        public string telefono { get; set; }
    }
}