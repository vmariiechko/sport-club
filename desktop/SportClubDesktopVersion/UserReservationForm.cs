using Nancy.Json;
using Newtonsoft.Json.Linq;
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
    public partial class UserReservationForm : Form
    {
        public UserReservationForm()
        {
            InitializeComponent();
        }
        public void getReservation()
        {
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/users/me/reservations/");
                httpWebRequest.Method = "GET";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                    string[] reservationList = result.Replace("[", ",").Replace("]", null).Split('}');

                    foreach (string reservation in reservationList)
                    {
                        string c = reservation.Remove(0, 1).Trim();
                        c = c + "}";
                        JObject jsonResponse = JObject.Parse(c);
                        DataGridViewRow row = new DataGridViewRow();
                        row.CreateCells(dataGridViewReservationBase);
                        row.Cells[0].Value = jsonResponse.GetValue("id").ToString();
                        row.Cells[1].Value = jsonResponse.GetValue("trainer").ToString();
                        row.Cells[2].Value = jsonResponse.GetValue("status").ToString();
                        row.Cells[3].Value = jsonResponse.GetValue("reservedStart").ToString();
                        row.Cells[4].Value = jsonResponse.GetValue("reservedEnd").ToString();
                        dataGridViewReservationBase.Rows.Add(row);
                    }
                    Console.WriteLine(result);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message);
            }
        }

        private void UserReservationForm_Load(object sender, EventArgs e)
        {
            getReservation();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            CreateUserReservationForm createUserReservation = new CreateUserReservationForm();
            createUserReservation.ShowDialog();
            dataGridViewReservationBase.Rows.Clear();
            getReservation();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string id = "";
            if (dataGridViewReservationBase.SelectedCells.Count > 0)
            {
                int selectedrowindex = dataGridViewReservationBase.SelectedCells[0].RowIndex;
                DataGridViewRow selectedRow = dataGridViewReservationBase.Rows[selectedrowindex];
                id = Convert.ToString(selectedRow.Cells["ColumnId"].Value);
            }
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/users/me/reservations/" + id + "/");
                httpWebRequest.ContentType = "application/json";
                httpWebRequest.Method = "DELETE";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                using (var streamWriter = new

                    StreamWriter(httpWebRequest.GetRequestStream()))
                {
                    string json = new JavaScriptSerializer().Serialize(new
                    {
                        Id = id
                    });

                    streamWriter.Write(json);
                }
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                    dataGridViewReservationBase.Rows.Clear();
                    getReservation();
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message);
            }
        }
    }
}
