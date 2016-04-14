using MoviesDB.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyMovie = MoviesDB.Model.Movie;

namespace MoviesDB.DB
{
    public class SqlRepository : Repository
    {
        private MoviesORMDataContext _db;
        private object _locker = new object();
        public SqlRepository()
        {
            _db = new MoviesORMDataContext();
        }
               
        public Movies GetMovies(int start, int limit)
        {
            lock (_locker)
            {
                Movies ret;
                var query = QueryDB();
                var movies = query.OrderBy(m => m.Id).Skip(start).Take(limit);
                ret = ConstructMovies(movies);

                ret.TotalCount = query.Count();
                return ret;
            }
        }
        public Movies GetAllMovies()
        {
            lock (_locker)
            {
                var movies = QueryDB().OrderBy(m => m.Id);
                return ConstructMovies(movies);
            }
        }

        public Movies GetMovieById(int id)
        {
            lock (_locker)
            {
                var movies = QueryDB().Where(m => m.Id==id);
                return ConstructMovies(movies);
            }
        }

        public MyMovie Update(int id, MyMovie newValue)
        {
            lock (_locker)
            {
                var entity = _db.Movies.Where(m => m.Id == id).FirstOrDefault();
                entity.Director = newValue.Director ?? entity.Director;
                entity.Title = newValue.Title ?? entity.Title;
                entity.ReleaseDate = newValue.ReleaseDate ?? entity.ReleaseDate;

                _db.SubmitChanges();

                return ConstructMovie(entity);
            }
        }

        public MyMovie Insert(MyMovie newValue)
        {
            lock (_locker)
            {
                var entity = new DB.Movie
                {
                    Director = newValue.Director,
                    Title = newValue.Title,
                    ReleaseDate = newValue.ReleaseDate ?? new DateTime()
                };

                _db.Movies.InsertOnSubmit(entity);

                _db.SubmitChanges();

                return ConstructMovie(entity);
            }
        }


        private IQueryable<Movie> QueryDB()
        {
            return from m in _db.Movies select m;
        }

        private Movies ConstructMovies(IQueryable<Movie> movies)
        {
            var ret = new Movies();

            foreach (var movie in movies)
            {
                ret.AddMovie(new MyMovie
                {
                    Id = movie.Id,
                    Title = movie.Title,
                    Director = movie.Director,
                    ReleaseDate = movie.ReleaseDate
                });
            }
            return ret;
        }
        private MyMovie ConstructMovie(DB.Movie movie)
        {
            return new MyMovie
            {
                Id = movie.Id,
                Title = movie.Title,
                Director = movie.Director,
                ReleaseDate = movie.ReleaseDate
            };
        }

    }
}
