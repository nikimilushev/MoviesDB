using MoviesDB.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoviesDB.Controllers
{
    public class MoviesController : ApiController
    {
        private readonly Repository _repository;

        public MoviesController(Repository repository)
        {
            _repository = repository;
        }
        public Movies Get([FromUri]int start, [FromUri]int limit)
        {
            return _repository.GetMovies(start,limit);
        }
        public Movies Get(int id)
        {
            return _repository.GetMovieById(id);
        }
        public Movie Put(int id, Movie movie)
        {
            return _repository.Update(id, movie);
        }
        public Movie Post(Movie movie)
        {
            return _repository.Insert(movie);
        }
    }
}
