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
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SportClubDesktopVersion
{
    public partial class AdminVersionForm : Form
    {
        public AdminVersionForm()
        {
            InitializeComponent();
        }

        public async Task GetClients()
        {
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/staff/subscriptions/");
                httpWebRequest.Method = "GET";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                    string[] clientsList = result.Replace("[",",").Replace("]",null).Split('}');

                    foreach (string client in clientsList)
                     {
                     string c = client.Remove(0,1).Trim();
                     c = c + "}";
                     JObject jsonResponse = JObject.Parse(c);
                     DataGridViewRow row = new DataGridViewRow();
                     row.CreateCells(dataGridViewClientsBase);
                     row.Cells[0].Value = jsonResponse.GetValue("id").ToString();
                     row.Cells[1].Value = jsonResponse.GetValue("member").ToString();
                     row.Cells[2].Value = jsonResponse.GetValue("card").ToString();
                     row.Cells[3].Value = jsonResponse.GetValue("expires").ToString();
                     row.Cells[4].Value = jsonResponse.GetValue("visits_count").ToString();
                     dataGridViewClientsBase.Rows.Add(row);
                     }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message);
            }
        }

        private void AdminVersionForm_Load(object sender, EventArgs e)
        {
            GetClients();
        }

        private void buttonSearch_Click(object sender, EventArgs e)
        {
            SearchClientsForm searchClient = new SearchClientsForm();
            searchClient.Owner = this;
            searchClient.Show();
        }

        private void buttonMarkVisist_Click(object sender, EventArgs e)
        {
            string id = "";
            int visits = 0;
            if (dataGridViewClientsBase.SelectedCells.Count > 0)
            {
                int selectedrowindex = dataGridViewClientsBase.SelectedCells[0].RowIndex;
                DataGridViewRow selectedRow = dataGridViewClientsBase.Rows[selectedrowindex];
                id = Convert.ToString(selectedRow.Cells["ColumnId"].Value);
                visits = Convert.ToInt32(selectedRow.Cells["ColumnVisits"].Value);
            }
            --visits;
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/staff/subscriptions/"+id+"/");
                httpWebRequest.ContentType = "application/json";
                httpWebRequest.Method = "PUT";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                using (var streamWriter = new

                    StreamWriter(httpWebRequest.GetRequestStream()))
                {
                    string json = new JavaScriptSerializer().Serialize(new
                    {
                        visits_count = visits
                    }) ;

                    streamWriter.Write(json);
                }
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                    dataGridViewClientsBase.Rows.Clear();
                    _= GetClients();
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message);
            }
        }

        private void buttonCheckReservation_Click(object sender, EventArgs e)
        {
            ClientsReservationForm clientsReservation = new ClientsReservationForm();
            clientsReservation.Show();
        }

        private void buttonCreateClient_Click(object sender, EventArgs e)
        {
            CreateNewClientForm createNewClient = new CreateNewClientForm();
            createNewClient.ShowDialog();
        }
    }
}
