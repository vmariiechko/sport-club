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
    public partial class SearchClientsForm : Form
    {
        public SearchClientsForm()
        {
            InitializeComponent();
        }

        private void textBoxClientName_TextChanged(object sender, EventArgs e)
        {
            AdminVersionForm main = this.Owner as AdminVersionForm;
            if (main != null)
            {
                for (int i = 0; i < main.dataGridViewClientsBase.RowCount; i++)
                {
                    main.dataGridViewClientsBase.Rows[i].Selected = false;
                    for (int j = 0; j < main.dataGridViewClientsBase.ColumnCount; j++)
                        if (main.dataGridViewClientsBase.Rows[i].Cells[j].Value != null)
                            if (main.dataGridViewClientsBase.Rows[i].Cells[j].Value.ToString().Contains(textBoxClientName.Text))
                            {
                                main.dataGridViewClientsBase.Rows[i].Visible = true;
                                main.dataGridViewClientsBase.Rows[i].Selected = true;
                                break;
                            }
                            else
                            {
                                main.dataGridViewClientsBase.Rows[i].Visible = false;
 
                            }
                }
            }
        }
    }
}
