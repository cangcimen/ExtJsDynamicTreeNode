using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace ExtJsDynamicTreeNode.Controllers
{
    public class DefaultController : Controller
    {
        //
        // GET: /Default/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult LoadTreeStore()
        {
            var result = new Random().Next(3, 124);
            var json = new JsonResult
                {
                    root = result % 2 == 0 ? GetMenuAnakAnak() : GetMenuDewasa()
                };
            var data = JsonConvert.SerializeObject(json, Formatting.Indented, new JavaScriptDateTimeConverter());

            return Content(data);
        }

        public class JsonResult
        {
            public JsonResult()
            {
                msg = "No value for message field";
                success = true;
                totalCount = 0;
                result = false;
            }

            public string msg { get; set; }
            public bool success { get; set; }
            public bool result { get; set; }
            public int totalCount { get; set; }
            public IList<treestore> root { get; set; }
        }

        private static IList<treestore> GetMenuDewasa()
        {
            return new List<treestore>
                {
                    new treestore
                        {
                            text = "Film Dewasa",
                            index = 0,
                            cls = "folder",
                            expanded = true,
                            root = new List<treestore>
                                {
                                    new treestore
                                        {
                                            text = "Harapan Seorang Janda",
                                            index = 1,
                                            leaf = true
                                        },
                                    new treestore
                                        {
                                            text = "Susi Terpeleset",
                                            index = 2,
                                            leaf = true
                                        },
                                    new treestore
                                        {
                                            text = "Perawan Di Karungin",
                                            index = 3,
                                            leaf = true
                                        }
                                }
                        }
                };
        }

        private static IList<treestore> GetMenuAnakAnak()
        {
            return new List<treestore>
                {
                    new treestore
                        {
                            text = "Film Anak-Anak",
                            index = 0,
                            cls = "folder",
                            expanded = true,
                            root = new List<treestore>
                                {
                                    new treestore
                                        {
                                            text = "Si Dora",
                                            index = 1,
                                            leaf = true
                                        },
                                    new treestore
                                        {
                                            text = "Spongebob Squarepants",
                                            index = 2,
                                            leaf = true
                                        },
                                    new treestore
                                        {
                                            text = "Shaun The Sheep",
                                            index = 3,
                                            leaf = true
                                        }
                                }
                        }
                };
        }

        public class treestore
        {
            public treestore()
            {
                leaf = false;
                expanded = false;
            }
            public string text { get; set; }
            public int index { get; set; }
            public string cls { get; set; }
            public bool expanded { get; set; }
            public bool leaf { get; set; }
            public IList<treestore> root { get; set; } 
        }

    }
}
