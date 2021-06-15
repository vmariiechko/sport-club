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
    public partial class MyOfficeForm : Form
    {
        public MyOfficeForm()
        {
            InitializeComponent();
        }
        public async Task GetUserInfo()
        {
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/users/me/");
                httpWebRequest.Method = "GET";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();  
                    JObject jsonResponse = JObject.Parse(result);
                    labelUserName.Text = jsonResponse.GetValue("firstName").ToString();
                    labelUserSurname.Text = jsonResponse.GetValue("lastName").ToString();
                    pictureBoxUserImage.ImageLocation = jsonResponse.GetValue("avatar").ToString();
                }
            }
            catch (Exception ex) 
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message) ;
            }
        }

        public void CardExpiration()
        {
            DateTime thisDay = DateTime.Today;
            var parsedDate = DateTime.Parse(labelExpirationValue.Text);
            string Date = thisDay.ToString("d");
            var totalDates = (parsedDate - thisDay).TotalDays;
            if (totalDates >= 0)
            {
                labelExpirationValue.ForeColor = Color.Green;
            }
            else 
            {
                labelExpirationValue.ForeColor = Color.Red;
            }
            Console.WriteLine(totalDates);
        }

        public async Task GetSubscriptionInfo()
        {
            try
            {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sport-club-dev.herokuapp.com/api/users/me/subscription/");
                httpWebRequest.Method = "GET";
                httpWebRequest.Headers["Authorization"] = "Bearer " + DataUserLogin.AccesToken.Trim();
                Console.Write(httpWebRequest.Headers);
                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                Console.WriteLine(httpResponse.StatusCode);
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                    Console.WriteLine(result);
                    JObject jsonResponse = JObject.Parse(result);
                    labelExpirationValue.Text = jsonResponse.GetValue("expires").ToString().Substring(0,10);
                    labelSubTypeValue.Text = jsonResponse.GetValue("card").ToString();
                    labelVisitsValue.Text = jsonResponse.GetValue("visits_count").ToString();
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Exception Occurred: ", ex.Message);
                labelSubTypeValue.Text = "------";
                labelExpirationValue.Text = "------";
                labelVisitsValue.Text = "0";
            }
            CardExpiration();
        }

        private void MyOfficeForm_Load(object sender, EventArgs e)
        {
            UserVersionForm main = this.Owner as UserVersionForm;
            var dir = new DirectoryInfo(@"DataNutrition//" + DataUserLogin.UserMail );
            foreach (FileInfo file in dir.GetFiles())
            {
                domainUpDownNutritionDateCalorie.Items.Add(file.Name.Remove(file.Name.Length-4,4));
            }
            
            try
            {
                domainUpDownNutritionDateCalorie.SelectedItem = domainUpDownNutritionDateCalorie.Items[0];
                labelNutritionCaloriesValue.Text = File.ReadAllText("DataNutrition//" + DataUserLogin.UserMail + "//" + domainUpDownNutritionDateCalorie.SelectedItem + ".txt");
            }
            catch
            {
                labelNutritionCaloriesValue.Text = "0";
                domainUpDownNutritionDateCalorie.SelectedItem = null;
            }
            _ = GetUserInfo();
            _ = GetSubscriptionInfo();
        }

        private void domainUpDownNutritionDateCalorie_SelectedItemChanged(object sender, EventArgs e)
        {
           labelNutritionCaloriesValue.Text = File.ReadAllText("DataNutrition//" + DataUserLogin.UserMail + "//" + domainUpDownNutritionDateCalorie.SelectedItem + ".txt");
        }

        private void buttonEditUserProfile_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://sport-club-dev.herokuapp.com/profile");
        }
    }
}
