using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CinesGammaApp.Models
{
    public class Eventos
    {
        public int id_evento { get; set; }

        public int id_cine { get; set; }

        public int id_sala { get; set; }

        public int id_contenido { get; set; }

        public string fecha { get; set; }

        public string hora_emision { get; set; }

        public string programador { get; set; }
    }
}