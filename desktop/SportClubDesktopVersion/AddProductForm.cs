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
    public partial class AddProductForm : Form
    {
        public AddProductForm()
        {
            InitializeComponent();
        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            FoodBaseForm main = this.Owner as FoodBaseForm;

            if (main != null)
            {
                DataRow nRow = main.productsDataSet.Tables[0].NewRow();
                int rc = main.dataGridView1.RowCount + 1;
                nRow[0] = rc;
                nRow[1] = textBoxNameFood.Text;
                nRow[2] = textBoxCalories.Text;
                main.productsDataSet.Tables[0].Rows.Add(nRow);
                main.productTabelTableAdapter.Update(main.productsDataSet.ProductTabel);
                main.productsDataSet.Tables[0].AcceptChanges();
                main.dataGridView1.Refresh();
                textBoxNameFood.Text = "";
                textBoxCalories.Text = "";
            }
        }
    }
}
