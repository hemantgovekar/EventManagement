using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserEntity;
using System.Web.Http.Cors;

namespace WebApiWithEntity.Controllers
{
    //[Authorize]
   
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<User> Get()
        {
            using (TestEntities te = new TestEntities())
            {
                return te.Users.ToList();
            };

        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]User user)
        {
            using (TestEntities te = new TestEntities())
            {
                te.Users.Add(user);
                te.SaveChanges();
            }
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
