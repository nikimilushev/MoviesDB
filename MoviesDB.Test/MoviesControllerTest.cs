using System;
using NUnit.Framework;
using MoviesDB.Model;
using Moq;
using MoviesDB.Controllers;
using System.Collections.Generic;

namespace MoviesDB.Test
{
    [TestFixture]
    public class MoviesControllerTest
    {
        [Test]
        public void MoviesControllerCallsRepository()
        {
            var mockRepository = new Mock<Repository>();            
            var items = new List<Movie> {
                new Movie{ Id=1, Title="movie 1", Director="director 1", ReleaseDate=new DateTime(2011,1,1) },
                new Movie{ Id=2, Title="movie 2", Director="director 2", ReleaseDate=new DateTime(2012,1,1) },
                new Movie{ Id=3, Title="movie 3", Director="director 3", ReleaseDate=new DateTime(2013,1,1) },
                new Movie{ Id=4, Title="movie 4", Director="director 4", ReleaseDate=new DateTime(2014,1,1) },
            };

            int start = 0, end = items.Count;

            var expected = new Movies {
                Items = items,
                TotalCount = items.Count
            };
                        
            mockRepository.Setup(foo => foo.GetMovies(start, end)).Returns(()=> {return expected;});

            var controller = new MoviesController(mockRepository.Object);

            var actual = controller.Get(start,end);

            mockRepository.Verify(mock => mock.GetMovies(start, end), Times.Once());

            Assert.AreEqual(expected.TotalCount, expected.TotalCount);
        }
    }
}
