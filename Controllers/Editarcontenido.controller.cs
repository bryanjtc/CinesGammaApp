using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using CinesGammaApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CinesGammaApp.Controllers
{
    [ApiController]
    [Route("peliculas/editarcontenido/[controller]")]
    public class EditarcontenidoController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        public EditarcontenidoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPut]
        public JsonResult Put(Contenido cartelera)
        {
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand("ContenidoUpdate", myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@id_contenido", cartelera.id_contenido);
                    myCommand.Parameters.AddWithValue("@titulo", cartelera.titulo);
                    myCommand.Parameters.AddWithValue("@director", cartelera.director);
                    myCommand.Parameters.AddWithValue("@duracion", cartelera.duracion);
                    myCommand.Parameters.AddWithValue("@año", cartelera.año);
                    myCommand.Parameters.AddWithValue("@calificacion", cartelera.calificacion);
                    myCommand.Parameters.AddWithValue("@genero", cartelera.genero);
                    myCommand.Parameters.AddWithValue("@distribuidora", cartelera.distribuidora);
                    myCommand.Parameters.AddWithValue("@fecha_estreno", cartelera.fecha_estreno);
                    myCommand.Parameters.AddWithValue("@tipo", cartelera.tipo);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }
    }
}
