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
    public partial class FoodBaseForm : Form
    {
        public FoodBaseForm()
        {
            InitializeComponent();
        }
        int calorieCount = 0;

        private void FoodBaseForm_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "productsDataSet.ProductTabel". При необходимости она может быть перемещена или удалена.
            this.productTabelTableAdapter.Fill(this.productsDataSet.ProductTabel);
        }

        private void dataGridView1_UserDeletingRow(object sender, DataGridViewRowCancelEventArgs e)
        {
            DialogResult dr = MessageBox.Show("Delete row?", "Deleting", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
            if (dr == DialogResult.Cancel)
            {
                e.Cancel = true;
            }
        }

        private void buttonSearch_Click(object sender, EventArgs e)
        {
            SearchFoodBaseForm sf = new SearchFoodBaseForm();
            sf.Owner = this;
            sf.Show();
        }

        private void buttonAddProduct_Click(object sender, EventArgs e)
        {
            AddProductForm addPr = new AddProductForm();
            addPr.Owner = this;
            addPr.Show();
        }

        private void buttonSave_Click(object sender, EventArgs e)
        {
            productTabelTableAdapter.Update(productsDataSet);
        }

        string Ccount = "";
        private void buttonDone_Click(object sender, EventArgs e)
        {
            for (int i = 0; i < dataGridView1.RowCount; i++)
            {
                if (dataGridView1[2, i].Selected)
                {
                    Ccount = dataGridView1[2, i].Value.ToString();
                    calorieCount += Int32.Parse(Ccount);
                }
            }
            labelCaloriesCount.Text = calorieCount.ToString();
        }

        private void buttonClear_Click(object sender, EventArgs e)
        {
            calorieCount = 0;
            labelCaloriesCount.Text = calorieCount.ToString();
        }

        private void buttonDone_Click_1(object sender, EventArgs e)
        {
            DataCalorieCount.Value += calorieCount;
            DateTime thisDay = DateTime.Today;
            string Date = thisDay.ToString("d");
            StreamWriter file = new StreamWriter("DataNutrition//" + DataUserLogin.UserMail + "//" + Date + ".txt");
            file.Write(DataCalorieCount.Value);
            file.Close();
            this.Close();
        }
    }
}
