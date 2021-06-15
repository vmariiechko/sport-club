using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SportClubDesktopVersion
{
    public partial class StartForm : Form
    {
        public StartForm()
        {
            InitializeComponent();
        }

        public string version = "";

        private void Form1_Load(object sender, EventArgs e)
        {
            timer1.Start();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            labelClock.Text = DateTime.Now.ToString("T");
        }

        private void buttonClient_Click(object sender, EventArgs e)
        {
            version = "User";
            LoginForm lgFrm = new LoginForm(version);
            lgFrm.ShowDialog();
            this.WindowState = FormWindowState.Minimized;       
        }

        private void buttonAdmin_Click(object sender, EventArgs e)
        {
            version = "Admin";
            LoginForm lgFrm = new LoginForm(version);
            lgFrm.ShowDialog();
            this.WindowState = FormWindowState.Minimized;
        }
    }
}
