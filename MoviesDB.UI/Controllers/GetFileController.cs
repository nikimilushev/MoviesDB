using MoviesDB.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace MoviesDB.UI.Controllers
{
    public class GetFileController : ApiController
    {
        private readonly Repository _repository;

        public GetFileController(Repository repository)
        {
            _repository = repository;
        }
        public Movies Get()
        {
            var movies = _repository.GetAllMovies();
            var size = JsonConvert.SerializeObject(movies).Length;

            HttpContext.Current.Response.AppendHeader("Content-Type", "text/json");
            HttpContext.Current.Response.AppendHeader("Content-Length", size.ToString());
            HttpContext.Current.Response.AppendHeader("Content-Disposition", "attachment; filename=\"movies.json\"");

            return movies;
        }
    }
}
