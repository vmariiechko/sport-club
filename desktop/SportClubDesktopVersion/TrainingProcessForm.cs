using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Windows.Media;
using System.Media;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SportClubDesktopVersion
{
    public partial class TrainingProcessForm : Form
    {
        int RestTime = 0;
        int WorkTime = 0;
        int Timer = -4;
        string UserPref = "";
        int[] array = new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };
        int i = 0;
        public TrainingProcessForm(string DataPref)
        {
            InitializeComponent();

            UserPref = DataPref;
            Timming();
            ShuffleExcersize();
            pictureBoxWorkoutImage.Image = Image.FromFile("DataExcersizes//" + array[i] + ".jpg");
            i++;
        }

        public void Timming() {

            if (UserPref == "Gain")
            {
                RestTime = 60;
                WorkTime = 30;
            }
            else if (UserPref == "Optimal")
            {
                RestTime = 30;
                WorkTime = 30;
            }
            else
            {
                RestTime = 20;
                WorkTime = 40;
            }
        }

        public void ShuffleExcersize()
        {
            var random = new Random(DateTime.Now.Millisecond);
            array = array.OrderBy(x => random.Next()).ToArray();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            Timer++;
            labelTimerValue.Text = Timer.ToString();
            if (Timer == WorkTime) {
                timer1.Stop();
                Timer = -4;
                System.Media.SoundPlayer snd = new System.Media.SoundPlayer("DataSounds//TimerEnd.wav");
                snd.Play();
                buttonStart.Enabled = true;

                pictureBoxWorkoutImage.Image = Image.FromFile("DataExcersizes//" + array[i] + ".jpg");
                pictureBoxWorkoutImage.Refresh();
                if (i < array.Length - 1) { ++i; }
            }
        }

        public void WorkoutTimer() {
            System.Media.SoundPlayer snd = new System.Media.SoundPlayer("DataSounds//TimerStart.wav");
            snd.Play();
            timer1.Start();
            buttonStart.Enabled = false;
        }

        private void buttonStart_Click(object sender, EventArgs e)
        {
            WorkoutTimer();
        }
    }
}
