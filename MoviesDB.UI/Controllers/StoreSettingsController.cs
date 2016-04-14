using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoviesDB.UI.Controllers
{
    public class StoreSettingsController : ApiController
    {
        private const int DEFAULT_PAGE_SIZE = 3;
        public int Get()
        {
            int pageSize = 0;
            if (Int32.TryParse(ConfigurationManager.AppSettings["PageSize"].ToString(), out pageSize))
            {
                return pageSize;
            }
            else
            {
                return DEFAULT_PAGE_SIZE;
            }
        }
    }
}
