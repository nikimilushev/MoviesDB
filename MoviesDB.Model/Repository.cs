using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesDB.Model
{
    public interface Repository
    {
        Movies GetMovies(int start, int limit);
        Movies GetAllMovies();
        Movies GetMovieById(int id);
        Movie Update(int id, Movie newValue);
        Movie Insert(Movie movie);
    }
}
