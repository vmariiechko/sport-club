
namespace SportClubDesktopVersion
{
    partial class UserPrefForm
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
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.buttonLoss = new System.Windows.Forms.Button();
            this.buttonOptimal = new System.Windows.Forms.Button();
            this.buttonGain = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.buttonGain);
            this.groupBox1.Controls.Add(this.buttonOptimal);
            this.groupBox1.Controls.Add(this.buttonLoss);
            this.groupBox1.Font = new System.Drawing.Font("Georgia", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBox1.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBox1.Location = new System.Drawing.Point(12, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(600, 176);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Hello, is this your first time here? Choose what suits you:";
            // 
            // buttonLoss
            // 
            this.buttonLoss.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonLoss.BackColor = System.Drawing.Color.Brown;
            this.buttonLoss.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonLoss.Location = new System.Drawing.Point(401, 61);
            this.buttonLoss.Name = "buttonLoss";
            this.buttonLoss.Size = new System.Drawing.Size(193, 92);
            this.buttonLoss.TabIndex = 2;
            this.buttonLoss.Text = "I want to lose weight";
            this.buttonLoss.UseVisualStyleBackColor = false;
            this.buttonLoss.Click += new System.EventHandler(this.buttonLoss_Click);
            // 
            // buttonOptimal
            // 
            this.buttonOptimal.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom)));
            this.buttonOptimal.BackColor = System.Drawing.Color.Brown;
            this.buttonOptimal.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonOptimal.Location = new System.Drawing.Point(202, 61);
            this.buttonOptimal.Name = "buttonOptimal";
            this.buttonOptimal.Size = new System.Drawing.Size(196, 92);
            this.buttonOptimal.TabIndex = 3;
            this.buttonOptimal.Text = "I want to keep my current shape";
            this.buttonOptimal.UseVisualStyleBackColor = false;
            this.buttonOptimal.Click += new System.EventHandler(this.buttonOptimal_Click);
            // 
            // buttonGain
            // 
            this.buttonGain.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.buttonGain.BackColor = System.Drawing.Color.Brown;
            this.buttonGain.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonGain.Location = new System.Drawing.Point(6, 61);
            this.buttonGain.Name = "buttonGain";
            this.buttonGain.Size = new System.Drawing.Size(193, 92);
            this.buttonGain.TabIndex = 4;
            this.buttonGain.Text = "I want to gain weight";
            this.buttonGain.UseVisualStyleBackColor = false;
            this.buttonGain.Click += new System.EventHandler(this.buttonGain_Click);
            // 
            // UserPrefForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.ClientSize = new System.Drawing.Size(622, 199);
            this.Controls.Add(this.groupBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "UserPrefForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Welcome to SportLife!";
            this.groupBox1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button buttonGain;
        private System.Windows.Forms.Button buttonOptimal;
        private System.Windows.Forms.Button buttonLoss;
    }
}