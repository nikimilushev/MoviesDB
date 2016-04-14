using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesDB.Model
{
    public class Movies
    {
        public List<Movie> Items { get; set; }
        public int TotalCount { get; set; }
        public Movies()
        {
            Items = new List<Movie>();
        }
        public void AddMovie(Movie movie)
        {
            Items.Add(movie);
        }

    }
}
