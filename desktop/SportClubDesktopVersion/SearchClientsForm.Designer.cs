
namespace SportClubDesktopVersion
{
    partial class SearchClientsForm
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
            this.groupBoxSearchClient = new System.Windows.Forms.GroupBox();
            this.labelClientName = new System.Windows.Forms.Label();
            this.textBoxClientName = new System.Windows.Forms.TextBox();
            this.groupBoxSearchClient.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBoxSearchClient
            // 
            this.groupBoxSearchClient.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.groupBoxSearchClient.Controls.Add(this.labelClientName);
            this.groupBoxSearchClient.Controls.Add(this.textBoxClientName);
            this.groupBoxSearchClient.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBoxSearchClient.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBoxSearchClient.Location = new System.Drawing.Point(12, 12);
            this.groupBoxSearchClient.Name = "groupBoxSearchClient";
            this.groupBoxSearchClient.Size = new System.Drawing.Size(470, 102);
            this.groupBoxSearchClient.TabIndex = 0;
            this.groupBoxSearchClient.TabStop = false;
            this.groupBoxSearchClient.Text = "Search client";
            // 
            // labelClientName
            // 
            this.labelClientName.Font = new System.Drawing.Font("Georgia", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelClientName.Location = new System.Drawing.Point(6, 47);
            this.labelClientName.Name = "labelClientName";
            this.labelClientName.Size = new System.Drawing.Size(153, 38);
            this.labelClientName.TabIndex = 1;
            this.labelClientName.Text = "Name or ID";
            this.labelClientName.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // textBoxClientName
            // 
            this.textBoxClientName.Location = new System.Drawing.Point(165, 48);
            this.textBoxClientName.Name = "textBoxClientName";
            this.textBoxClientName.Size = new System.Drawing.Size(300, 38);
            this.textBoxClientName.TabIndex = 0;
            this.textBoxClientName.TextChanged += new System.EventHandler(this.textBoxClientName_TextChanged);
            // 
            // SearchClientsForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.ClientSize = new System.Drawing.Size(494, 126);
            this.Controls.Add(this.groupBoxSearchClient);
            this.Name = "SearchClientsForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "SearchClientsForm";
            this.groupBoxSearchClient.ResumeLayout(false);
            this.groupBoxSearchClient.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBoxSearchClient;
        private System.Windows.Forms.Label labelClientName;
        private System.Windows.Forms.TextBox textBoxClientName;
    }
}