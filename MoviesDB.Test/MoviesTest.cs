using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using MoviesDB.Model;


namespace MoviesDB.Test
{
    [TestFixture]
    public class MoviesTest
    {
        private Movies _movies;
        private Movie _movie1;
        private Movie _movie2;
        [SetUp]
        public void SetUp()
        {
            _movies = new Movies();
            _movie1 = new Movie
            {
                Title = "movie 1",
                Director = "director 1",
                ReleaseDate = new DateTime(1999, 1, 1),
                Id = 1
            };
            _movie2 = new Movie
            {
                Title = "movie 2",
                Director = "director 2",
                ReleaseDate = new DateTime(1999, 2, 2),
                Id = 2
            };

        }
        [Test]
        public void TestConstructorInitialisesProperty()
        {
            Assert.AreNotEqual(null, _movies.Items);
        }
        [Test]
        public void TestAddItems()
        {
            _movies.AddMovie(_movie1);
            _movies.AddMovie(_movie2);

            Assert.AreEqual(2, _movies.Items.Count);
            Assert.AreEqual(_movie1.Director, _movies.Items[0].Director);
        }

    }
}
