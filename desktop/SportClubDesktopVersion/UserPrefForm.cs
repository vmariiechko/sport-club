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
    public partial class UserPrefForm : Form
    {
        public UserPrefForm()
        {
            InitializeComponent();
        }

        private void buttonGain_Click(object sender, EventArgs e)
        {
            if (File.Exists("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt"))
            {
                DataUserPref.Value =File.ReadAllText("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt");
            }
            else
            {
                StreamWriter file = new StreamWriter("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt");
                file.Write("Gain");
                file.Close();
                DataUserPref.Value = "Gain";
            }
            this.Close();
        }

        private void buttonOptimal_Click(object sender, EventArgs e)
        {
            if (File.Exists("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt"))
            {
                DataUserPref.Value = File.ReadAllText("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt");
            }
            else
            {
                StreamWriter file = new StreamWriter("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt");
                file.Write("Optimal");
                file.Close();
                DataUserPref.Value = "Gain";
            }
            this.Close();
        }

        private void buttonLoss_Click(object sender, EventArgs e)
        {
            if (File.Exists("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt"))
            {
                DataUserPref.Value = File.ReadAllText("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt");
            }
            else
            {
                StreamWriter file = new StreamWriter("DataUserPref//" + DataUserLogin.UserMail + "//" + "UserPref.txt");
                file.Write("Loss");
                file.Close();
                DataUserPref.Value = "Loss";
            }
            this.Close();
        }
    }
}
