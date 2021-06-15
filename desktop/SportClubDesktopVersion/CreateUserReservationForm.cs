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
    public partial class CreateUserReservationForm : Form
    {
        public CreateUserReservationForm()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string reservStart = textBoxDateStart.Text.Trim();
            reservStart = reservStart + "T" + textBoxTimeStart.Text.Trim() + ":00.000Z";

            string reservEnd = textBoxDateEnd.Text.Trim();
            reservEnd = reservEnd + "T" + textBoxTimeEnd.Text.Trim() + ":00.000Z";
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/users/me/reservations/");
                httpWebRequest.Method = "POST";
                httpWebRequest.ContentType = "application/json";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                using (var streamWriter = new

                 StreamWriter(httpWebRequest.GetRequestStream()))
                {
                    string json = new JavaScriptSerializer().Serialize(new
                    {
                        reservedStart = reservStart,
                        reservedEnd = reservEnd
                    });

                    streamWriter.Write(json);
                }
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                    Console.WriteLine(result);
                    this.Close();
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message);
            }
        }
    }
}
