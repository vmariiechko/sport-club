
namespace SportClubDesktopVersion
{
    partial class SearchFoodBaseForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.tbStr = new System.Windows.Forms.TextBox();
            this.labelFoodName = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // tbStr
            // 
            this.tbStr.Location = new System.Drawing.Point(12, 47);
            this.tbStr.Name = "tbStr";
            this.tbStr.Size = new System.Drawing.Size(247, 20);
            this.tbStr.TabIndex = 1;
            this.tbStr.TextChanged += new System.EventHandler(this.tbStr_TextChanged);
            // 
            // labelFoodName
            // 
            this.labelFoodName.Font = new System.Drawing.Font("Georgia", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelFoodName.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelFoodName.Location = new System.Drawing.Point(12, 9);
            this.labelFoodName.Name = "labelFoodName";
            this.labelFoodName.Size = new System.Drawing.Size(155, 23);
            this.labelFoodName.TabIndex = 2;
            this.labelFoodName.Text = "Name of product:";
            // 
            // SearchFoodBaseForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.ClientSize = new System.Drawing.Size(271, 79);
            this.Controls.Add(this.labelFoodName);
            this.Controls.Add(this.tbStr);
            this.Name = "SearchFoodBaseForm";
            this.Text = "SearchFoodBaseForm";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox tbStr;
        private System.Windows.Forms.Label labelFoodName;
    }
}