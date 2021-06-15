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
    public partial class SearchFoodBaseForm : Form
    {
        public SearchFoodBaseForm()
        {
            InitializeComponent();
        }

        private void tbStr_TextChanged(object sender, EventArgs e)
        {
            FoodBaseForm main = this.Owner as FoodBaseForm;
            CurrencyManager cm = (CurrencyManager)BindingContext[main.dataGridView1.DataSource];
            if (main != null)
            {
                for (int i = 0; i < main.dataGridView1.RowCount; i++)
                {
                    main.dataGridView1.Rows[i].Selected = false;
                    for (int j = 0; j < main.dataGridView1.ColumnCount; j++)
                        if (main.dataGridView1.Rows[i].Cells[j].Value != null)
                            if (main.dataGridView1.Rows[i].Cells[j].Value.ToString().Contains(tbStr.Text))
                            {
                                main.dataGridView1.Rows[i].Visible = true;
                                main.dataGridView1.Rows[i].Selected = true;
                                break;
                            }
                            else
                            {
                                cm.SuspendBinding();
                                main.dataGridView1.Rows[i].Visible = false;
                                cm.ResumeBinding();
                            }
                }
            }
        }
    }
}
