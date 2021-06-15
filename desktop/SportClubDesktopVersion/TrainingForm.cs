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
    public partial class TrainingForm : Form
    {
        public TrainingForm()
        {
            InitializeComponent();
        }

        private void TrainingForm_Load(object sender, EventArgs e)
        {
            labelTrainingTypeValue.Text = DataUserPref.Value;

            if (labelTrainingTypeValue.Text == "Gain")
            {
                labelDayB.Text = "REST";
                buttonStartDayB.Enabled = false;
                buttonStartDayB.BackColor = Color.Red;

                labelDayC.Text = "DAY B";
                labelDayE.Text = "DAY C";

                labelDayD.Text = "REST";
                buttonStartDayD.Enabled = false;
                buttonStartDayD.BackColor = Color.Red;
            }
            else if (labelTrainingTypeValue.Text == "Optimal")
            {
                labelDayC.Text = "REST";
                buttonStartDayC.Enabled = false;
                buttonStartDayC.BackColor = Color.Red;
                labelDayD.Text = "DAY C";
                labelDayE.Text = "DAY D";
            }
            DataUserTrain.TrainingDay = File.ReadAllText("DataUserTraining//TrainingDay.txt");
            labelLastTrainingValue.Text = DataUserTrain.TrainingDay;
        }

        private void buttonBuyTrainer_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://sport-club-dev.herokuapp.com");
        }

        private void buttonStartDayA_Click(object sender, EventArgs e)
        {
            TrainingProcessForm train = new TrainingProcessForm(DataUserPref.Value);
            train.Show();
            StreamWriter file = new StreamWriter("DataUserTraining//TrainingDay.txt");
            file.Write("Day A");
            file.Close();
        }

        private void buttonStartDayB_Click(object sender, EventArgs e)
        {
            TrainingProcessForm train = new TrainingProcessForm(DataUserPref.Value);
            train.Show();
            StreamWriter file = new StreamWriter("DataUserTraining//TrainingDay.txt");
            file.Write("Day B");
            file.Close();
        }

        private void buttonStartDayC_Click(object sender, EventArgs e)
        {
            TrainingProcessForm train = new TrainingProcessForm(DataUserPref.Value);
            train.Show();
            StreamWriter file = new StreamWriter("DataUserTraining//TrainingDay.txt");
            file.Write("Day C");
            file.Close();
        }

        private void buttonStartDayD_Click(object sender, EventArgs e)
        {
            TrainingProcessForm train = new TrainingProcessForm(DataUserPref.Value);
            train.Show();
            StreamWriter file = new StreamWriter("DataUserTraining//TrainingDay.txt");
            file.Write("Day D");
            file.Close();
        }

        private void buttonStartDayE_Click(object sender, EventArgs e)
        {
            TrainingProcessForm train = new TrainingProcessForm(DataUserPref.Value);
            train.Show();
            StreamWriter file = new StreamWriter("DataUserTraining//TrainingDay.txt");
            file.Write("Day E");
            file.Close();
        }
    }
}
