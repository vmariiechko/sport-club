using Nancy.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SportClubDesktopVersion
{
    public partial class CreateNewClientForm : Form
    {
        public CreateNewClientForm()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/users/register/");
                httpWebRequest.ContentType = "application/json";
                httpWebRequest.Method = "POST";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                using (var streamWriter = new

                    StreamWriter(httpWebRequest.GetRequestStream()))
                {
                    string json = new JavaScriptSerializer().Serialize(new
                    {
                        email = textBoxEmail.Text,
                        firstName = textBoxName.Text,
                        lastName = textBoxLastName.Text,
                        phone = textBoxPhone.Text,
                        password = textBoxPassword.Text,
                        password2 = textBoxPassword2.Text
                    }) ;

                    streamWriter.Write(json);
                }
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                }
                this.Close();
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message);
                button1.Text = "Try Again";
                button1.ForeColor = Color.Red;
            }
        }
    }
}
