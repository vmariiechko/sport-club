using Nancy.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SportClubDesktopVersion
{
    public partial class TrainersBaseForm : Form
    {
        string reservationId = "";
        
        public TrainersBaseForm(string id)
        {
            InitializeComponent();
            reservationId = id.Trim();
        }

        private void AddReservationForm_Load(object sender, EventArgs e)
        {
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/trainers/");
                httpWebRequest.Method = "GET";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                    string[] trenerList = result.Replace("[", ",").Replace("]", null).Split('}');

                    foreach (string trener in trenerList)
                    {
                        string c = trener.Remove(0, 1).Trim();
                        c = c + "}";
                        JObject jsonResponse = JObject.Parse(c);
                        DataGridViewRow row = new DataGridViewRow();
                        row.CreateCells(dataGridViewTrainersBase);
                        row.Cells[0].Value = jsonResponse.GetValue("id").ToString();
                        row.Cells[1].Value = jsonResponse.GetValue("firstName").ToString();
                        row.Cells[2].Value = jsonResponse.GetValue("lastName").ToString();
                        row.Cells[3].Value = jsonResponse.GetValue("rank").ToString();
                        dataGridViewTrainersBase.Rows.Add(row);
                    }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message);
            }
        }

        private void buttonAppy_Click(object sender, EventArgs e)
        {
            int trainerId = 2;
            if (dataGridViewTrainersBase.SelectedCells.Count > 0)
            {
                
                int selectedrowindex = dataGridViewTrainersBase.SelectedCells[0].RowIndex;
                DataGridViewRow selectedRow = dataGridViewTrainersBase.Rows[selectedrowindex];
                trainerId = Convert.ToInt32(selectedRow.Cells["ColumnTrainerId"].Value);
            }
            int st = 2;

            string reservStart = textBoxDateOfStart.Text.Trim();
            reservStart = reservStart + "T" + textBoxTimeOfStart.Text.Trim()+":00.000Z";

            string reservEnd = textBoxDateOfEnd.Text.Trim();
            reservEnd = reservEnd + "T" + textBoxTimeOfEnd.Text.Trim()+ ":00.000Z";
            Console.WriteLine(reservEnd);
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/staff/reservations/" + reservationId.Trim() + "/");
                httpWebRequest.ContentType = "application/json";
                httpWebRequest.Method = "PUT";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                using (var streamWriter = new

                    StreamWriter(httpWebRequest.GetRequestStream()))
                {
                    string json = new JavaScriptSerializer().Serialize(new
                    {
                        trainer = trainerId,
                        status = 2,
                        reservedStart = reservStart,
                        reservedEnd = reservEnd,
                    });

                    streamWriter.Write(json);
                }
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                    buttonAppy.ForeColor = Color.Green;
                    this.Close();
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message);
                buttonAppy.ForeColor = Color.Red;
            }
        }
    }
}
