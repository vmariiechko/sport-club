using System;
using System.Net;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net.Http;
using Nancy.Json;
using System.IO;
using Newtonsoft.Json.Linq;

namespace SportClubDesktopVersion
{
    public partial class LoginForm : Form
    {
        public string version = "";
        public LoginForm(String ver)
        {
            InitializeComponent();
            version = ver;
        }

        public async Task LoginHttp(string login, string password)
        {
            labelErrorLogin.Visible = false;
            string apiPath = "";
            if (version == "User") { apiPath = "https://sport-club-dev.herokuapp.com/api/users/login/"; }
            else { apiPath = "https://sport-club-dev.herokuapp.com/api/staff/login/"; }
                try
                {
                    var httpWebRequest = (HttpWebRequest)WebRequest.Create(apiPath);
                    httpWebRequest.ContentType = "application/json";
                    httpWebRequest.Method = "POST";
                    using (var streamWriter = new

                    StreamWriter(httpWebRequest.GetRequestStream()))
                    {
                        string json = new JavaScriptSerializer().Serialize(new
                        {
                            email = login,
                            password = password
                        });

                        streamWriter.Write(json);
                    }
                    var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                    using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                    {
                        var result = streamReader.ReadToEnd();
                        Console.WriteLine(result);
                        JObject jsonResponse = JObject.Parse(result);
                        DataUserLogin.AccesToken = jsonResponse.GetValue("access").ToString();

                    if (version == "User")
                    {
                        DataUserLogin.UserMail = login;
                        System.IO.Directory.CreateDirectory("DataUserPref//" + DataUserLogin.UserMail.Trim());
                        System.IO.Directory.CreateDirectory("DataNutrition//" + DataUserLogin.UserMail.Trim());
                        UserVersionForm userForm = new UserVersionForm(login);
                        userForm.Show();
                        this.Hide();
                    }
                    else 
                    {
                        AdminVersionForm adminForm = new AdminVersionForm();
                        adminForm.Show();
                        this.Hide();
                    }

                    }
                }
                catch { labelErrorLogin.Visible = true; }
        }
        private void linkLabelContactUs_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            System.Diagnostics.Process.Start("https://sport-club-dev.herokuapp.com/");
        }

        private void button1_ClickAsync(object sender, EventArgs e)
        {
            string login= textBoxLogin.Text.Trim();
            string password = textBoxPassword.Text.Trim();
            _ = LoginHttp(login, password);
        }
    }
}
