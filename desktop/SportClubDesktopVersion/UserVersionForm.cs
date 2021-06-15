using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SportClubDesktopVersion
{
    public partial class UserVersionForm : Form
    {
        public UserVersionForm(String nameOfUser)
        {
            InitializeComponent();
            labelWelcome.Text = "Welcome to SportLife," + nameOfUser;
        }
        public static string ChoosenButton = "";
        public static int sliderNum = 2;
        public static string UserPref = "";
        double norm = 0;

        public void VisibleFormat(string choosenButton) 
        {
                labelWelcome.Visible = false;
                groupBoxCalories.Visible = true;
                labelCaloriesCount.Visible = true;
                buttonClearCount.Visible = true;
                groupBoxDailyGoal.Visible = true;
                labelGoalPersent.Visible = true;
                labelCharPersentage.Visible = true;

                buttonChooseTop.Visible = true;
                buttonChooseMid.Visible = true;
                buttonChooseDown.Visible = true;

                buttonNutriSlider.Visible = true;
                buttonSliderMinus.Visible = true;
                buttonSliderPlus.Visible = true;
        }

        public void NutriVersion()
        {
            ChoosenButton = "Nutrition";

            VisibleFormat(ChoosenButton);

            if (sliderNum == 2)
            {
                buttonNutriSlider.Text = "Receive trainer services";
                buttonNutriSlider.BackgroundImage = Image.FromFile("DataSliderBackground//BackgroundButtonMidN.jpg");
            }
            else if (sliderNum == 1)
            {
                buttonNutriSlider.Text = "Order food at any time";
                buttonNutriSlider.BackgroundImage = Image.FromFile("DataSliderBackground//BackgroundButtonTopN.jpg");
            }
            else if (sliderNum == 3) 
            {
                buttonNutriSlider.Text = "GoodFood for you";
                buttonNutriSlider.BackgroundImage = Image.FromFile("DataSliderBackground//BackgroundButtonDownN.jpg");
            }

            buttonChooseTop.Text = "Breakfast";
            buttonChooseTop.BackgroundImage = Image.FromFile("DataNutriBackground//Breakfast.jpg");

            buttonChooseMid.Text = "Dinner";
            buttonChooseMid.BackgroundImage = Image.FromFile("DataNutriBackground//Dinner.jpg");

            buttonChooseDown.Text = "Supper";
            buttonChooseDown.BackgroundImage = Image.FromFile("DataNutriBackground//Supper.jpg");
        }

        public double DailyGoalPesentage()
        {
            double persentage = 0;
            if (UserPref == "Gain") { norm = 4000; }
            else if (UserPref == "Optimal") { norm = 2500; }
            else if (UserPref == "Loss") { norm = 1800; }
            if (DataCalorieCount.Value != 0)
            {
                persentage = ((Double)DataCalorieCount.Value / norm) * 100;
            }
            else { persentage = 0; }
            return persentage;
        }

        private void buttonNutrit_Click(object sender, EventArgs e)
        {
            NutriVersion();
            buttonNutrit.BackColor = Color.DarkGray;
            buttonExercise.BackColor = SystemColors.WindowFrame;
            buttonMyOffice.BackColor = SystemColors.WindowFrame;
            buttonInfo.BackColor = SystemColors.WindowFrame;
        }

        private void buttonExercise_Click(object sender, EventArgs e)
        {
            TrainingForm trainForm = new TrainingForm();
            trainForm.Show();
        }

        private void buttonTrainPlan_Click(object sender, EventArgs e)
        {
            MyOfficeForm officeForm = new MyOfficeForm();
            officeForm.Owner = this;
            officeForm.Show();
        }

        private void buttonInfo_Click(object sender, EventArgs e)
        {
            UserReservationForm userReservation = new UserReservationForm();
            userReservation.Show();
        }

        private void buttonSliderMinus_Click(object sender, EventArgs e)
        {
            if(sliderNum < 3) { ++sliderNum; }
            NutriVersion();
        }

        private void buttonSliderPlus_Click(object sender, EventArgs e)
        {
            if (sliderNum > 1) { --sliderNum; }
            NutriVersion();
        }

        public void ButtonsEvents()
        {
            if (ChoosenButton == "Nutrition")
            {
                FoodBaseForm foodBase = new FoodBaseForm();
                foodBase.ShowDialog();
                labelCaloriesCount.Text = DataCalorieCount.Value.ToString() + "/" + norm;
                labelGoalPersent.Text = DailyGoalPesentage().ToString();
                double persent = double.Parse(labelGoalPersent.Text);
                if (persent > 59 && persent < 100) { labelGoalPersent.ForeColor = Color.Yellow; labelCharPersentage.ForeColor = Color.Yellow; }
                else if (persent > 99 && persent < 105) { labelGoalPersent.ForeColor = Color.Green; labelCharPersentage.ForeColor = Color.Green; }
                else { labelGoalPersent.ForeColor = Color.Red; labelCharPersentage.ForeColor = Color.Red; }
            }
        }

        private void buttonChooseTop_Click(object sender, EventArgs e)
        {
            ButtonsEvents();
        }

        private void buttonChooseMid_Click(object sender, EventArgs e)
        {
            ButtonsEvents();
        }

        private void buttonChooseDown_Click(object sender, EventArgs e)
        {
            ButtonsEvents();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            DataCalorieCount.Value = 0;
            DateTime thisDay = DateTime.Today;
            string Date = thisDay.ToString("d");
            StreamWriter file = new StreamWriter("DataNutrition//"+DataUserLogin.UserMail+ "//" + Date + ".txt");
            file.Write(DataCalorieCount.Value);
            file.Close();
            labelCaloriesCount.Text = "0" + "/" + norm;
            labelGoalPersent.Text = "0";
            labelGoalPersent.ForeColor = Color.Red;
            labelCharPersentage.ForeColor = Color.Red;
        }

        private void UserVersionForm_Load(object sender, EventArgs e)
        {
            DateTime thisDay = DateTime.Today;
            string Date = thisDay.ToString("d");

            if (!File.Exists("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt"))
            {
                UserPrefForm upf = new UserPrefForm();
                upf.ShowDialog();
                UserPref = DataUserPref.Value;
            }
            else
            {
                DataUserPref.Value = File.ReadAllText("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt");
                UserPref = DataUserPref.Value;
            }

            DailyGoalPesentage();

            if (File.Exists("DataNutrition//" + DataUserLogin.UserMail + "//" + Date + ".txt"))
            {
                DataCalorieCount.Value = Int32.Parse(File.ReadAllText("DataNutrition//" + DataUserLogin.UserMail + "//" + Date + ".txt"));
                labelCaloriesCount.Text = DataCalorieCount.Value.ToString() + "/" + norm;
            }
            else 
            {
                DataCalorieCount.Value = 0;
            }   
            
            labelGoalPersent.Text = DailyGoalPesentage().ToString();
            double persent = double.Parse(labelGoalPersent.Text);
            if (persent > 59 && persent < 100) { labelGoalPersent.ForeColor = Color.Yellow; labelCharPersentage.ForeColor = Color.Yellow; }
            else if (persent > 99 && persent < 105) { labelGoalPersent.ForeColor = Color.Green; labelCharPersentage.ForeColor = Color.Green; }
            else { labelGoalPersent.ForeColor = Color.Red; labelCharPersentage.ForeColor = Color.Red; }
        }

        private void buttonNutriSlider_Click(object sender, EventArgs e)
        {
            if (sliderNum == 3)
            {
                System.Diagnostics.Process.Start("https://goodwine.ua/ru/goodfood");
            }
            else if (sliderNum == 2)
            {
                System.Diagnostics.Process.Start("https://sport-club-dev.herokuapp.com");
            }
            else
                System.Diagnostics.Process.Start("https://www.ubereats.com/");
        }
    }
}
