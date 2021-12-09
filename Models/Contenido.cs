using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CinesGammaApp.Models
{
    public class Contenido
    {
        public int id_contenido { get; set; }

        public string titulo { get; set; }

        public string director { get; set; }

        public int duracion { get; set; }

        public int año { get; set; }

        public int calificacion { get; set; }

        public string genero { get; set; }

        public string distribuidora { get; set; }

        public string fecha_estreno { get; set; }

        public string tipo { get; set; }

    }
}