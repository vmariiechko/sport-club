
namespace SportClubDesktopVersion
{
    partial class TrainingForm
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
            this.groupBoxTrainingType = new System.Windows.Forms.GroupBox();
            this.labelTrainingTypeValue = new System.Windows.Forms.Label();
            this.groupBoxWorkautsList = new System.Windows.Forms.GroupBox();
            this.buttonStartDayE = new System.Windows.Forms.Button();
            this.buttonStartDayD = new System.Windows.Forms.Button();
            this.buttonStartDayC = new System.Windows.Forms.Button();
            this.buttonStartDayB = new System.Windows.Forms.Button();
            this.buttonStartDayA = new System.Windows.Forms.Button();
            this.labelDayE = new System.Windows.Forms.Label();
            this.labelDayD = new System.Windows.Forms.Label();
            this.labelDayC = new System.Windows.Forms.Label();
            this.labelDayB = new System.Windows.Forms.Label();
            this.labelDayA = new System.Windows.Forms.Label();
            this.groupBoxLastTraining = new System.Windows.Forms.GroupBox();
            this.labelLastTrainingValue = new System.Windows.Forms.Label();
            this.buttonBuyTrainer = new System.Windows.Forms.Button();
            this.groupBoxTrainingType.SuspendLayout();
            this.groupBoxWorkautsList.SuspendLayout();
            this.groupBoxLastTraining.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBoxTrainingType
            // 
            this.groupBoxTrainingType.Controls.Add(this.labelTrainingTypeValue);
            this.groupBoxTrainingType.Font = new System.Drawing.Font("Georgia", 24.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBoxTrainingType.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBoxTrainingType.Location = new System.Drawing.Point(13, 13);
            this.groupBoxTrainingType.Name = "groupBoxTrainingType";
            this.groupBoxTrainingType.Size = new System.Drawing.Size(400, 131);
            this.groupBoxTrainingType.TabIndex = 0;
            this.groupBoxTrainingType.TabStop = false;
            this.groupBoxTrainingType.Text = "The type of your training";
            // 
            // labelTrainingTypeValue
            // 
            this.labelTrainingTypeValue.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.labelTrainingTypeValue.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelTrainingTypeValue.Font = new System.Drawing.Font("Georgia", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelTrainingTypeValue.Location = new System.Drawing.Point(113, 59);
            this.labelTrainingTypeValue.Name = "labelTrainingTypeValue";
            this.labelTrainingTypeValue.Size = new System.Drawing.Size(172, 48);
            this.labelTrainingTypeValue.TabIndex = 0;
            this.labelTrainingTypeValue.Text = "Optimal";
            this.labelTrainingTypeValue.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // groupBoxWorkautsList
            // 
            this.groupBoxWorkautsList.Controls.Add(this.buttonStartDayE);
            this.groupBoxWorkautsList.Controls.Add(this.buttonStartDayD);
            this.groupBoxWorkautsList.Controls.Add(this.buttonStartDayC);
            this.groupBoxWorkautsList.Controls.Add(this.buttonStartDayB);
            this.groupBoxWorkautsList.Controls.Add(this.buttonStartDayA);
            this.groupBoxWorkautsList.Controls.Add(this.labelDayE);
            this.groupBoxWorkautsList.Controls.Add(this.labelDayD);
            this.groupBoxWorkautsList.Controls.Add(this.labelDayC);
            this.groupBoxWorkautsList.Controls.Add(this.labelDayB);
            this.groupBoxWorkautsList.Controls.Add(this.labelDayA);
            this.groupBoxWorkautsList.Font = new System.Drawing.Font("Georgia", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBoxWorkautsList.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBoxWorkautsList.Location = new System.Drawing.Point(12, 150);
            this.groupBoxWorkautsList.Name = "groupBoxWorkautsList";
            this.groupBoxWorkautsList.Size = new System.Drawing.Size(984, 499);
            this.groupBoxWorkautsList.TabIndex = 1;
            this.groupBoxWorkautsList.TabStop = false;
            this.groupBoxWorkautsList.Text = "List of workouts selected especially for you";
            // 
            // buttonStartDayE
            // 
            this.buttonStartDayE.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonStartDayE.BackColor = System.Drawing.Color.Green;
            this.buttonStartDayE.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonStartDayE.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonStartDayE.Location = new System.Drawing.Point(809, 443);
            this.buttonStartDayE.Name = "buttonStartDayE";
            this.buttonStartDayE.Size = new System.Drawing.Size(158, 38);
            this.buttonStartDayE.TabIndex = 10;
            this.buttonStartDayE.Text = "Start";
            this.buttonStartDayE.UseVisualStyleBackColor = false;
            this.buttonStartDayE.Click += new System.EventHandler(this.buttonStartDayE_Click);
            // 
            // buttonStartDayD
            // 
            this.buttonStartDayD.Anchor = System.Windows.Forms.AnchorStyles.Bottom;
            this.buttonStartDayD.BackColor = System.Drawing.Color.Green;
            this.buttonStartDayD.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonStartDayD.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonStartDayD.Location = new System.Drawing.Point(612, 443);
            this.buttonStartDayD.Name = "buttonStartDayD";
            this.buttonStartDayD.Size = new System.Drawing.Size(158, 38);
            this.buttonStartDayD.TabIndex = 9;
            this.buttonStartDayD.Text = "Start";
            this.buttonStartDayD.UseVisualStyleBackColor = false;
            this.buttonStartDayD.Click += new System.EventHandler(this.buttonStartDayD_Click);
            // 
            // buttonStartDayC
            // 
            this.buttonStartDayC.Anchor = System.Windows.Forms.AnchorStyles.Bottom;
            this.buttonStartDayC.BackColor = System.Drawing.Color.Green;
            this.buttonStartDayC.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonStartDayC.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonStartDayC.Location = new System.Drawing.Point(413, 443);
            this.buttonStartDayC.Name = "buttonStartDayC";
            this.buttonStartDayC.Size = new System.Drawing.Size(158, 38);
            this.buttonStartDayC.TabIndex = 8;
            this.buttonStartDayC.Text = "Start";
            this.buttonStartDayC.UseVisualStyleBackColor = false;
            this.buttonStartDayC.Click += new System.EventHandler(this.buttonStartDayC_Click);
            // 
            // buttonStartDayB
            // 
            this.buttonStartDayB.Anchor = System.Windows.Forms.AnchorStyles.Bottom;
            this.buttonStartDayB.BackColor = System.Drawing.Color.Green;
            this.buttonStartDayB.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonStartDayB.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonStartDayB.Location = new System.Drawing.Point(215, 443);
            this.buttonStartDayB.Name = "buttonStartDayB";
            this.buttonStartDayB.Size = new System.Drawing.Size(158, 38);
            this.buttonStartDayB.TabIndex = 7;
            this.buttonStartDayB.Text = "Start";
            this.buttonStartDayB.UseVisualStyleBackColor = false;
            this.buttonStartDayB.Click += new System.EventHandler(this.buttonStartDayB_Click);
            // 
            // buttonStartDayA
            // 
            this.buttonStartDayA.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.buttonStartDayA.BackColor = System.Drawing.Color.Green;
            this.buttonStartDayA.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonStartDayA.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonStartDayA.Location = new System.Drawing.Point(19, 443);
            this.buttonStartDayA.Name = "buttonStartDayA";
            this.buttonStartDayA.Size = new System.Drawing.Size(158, 38);
            this.buttonStartDayA.TabIndex = 6;
            this.buttonStartDayA.Text = "Start";
            this.buttonStartDayA.UseVisualStyleBackColor = false;
            this.buttonStartDayA.Click += new System.EventHandler(this.buttonStartDayA_Click);
            // 
            // labelDayE
            // 
            this.labelDayE.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.labelDayE.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelDayE.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.labelDayE.Font = new System.Drawing.Font("Georgia", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelDayE.Location = new System.Drawing.Point(789, 49);
            this.labelDayE.Name = "labelDayE";
            this.labelDayE.Size = new System.Drawing.Size(190, 381);
            this.labelDayE.TabIndex = 5;
            this.labelDayE.Text = "DAY E";
            this.labelDayE.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelDayD
            // 
            this.labelDayD.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.labelDayD.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelDayD.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.labelDayD.Font = new System.Drawing.Font("Georgia", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelDayD.Location = new System.Drawing.Point(593, 49);
            this.labelDayD.Name = "labelDayD";
            this.labelDayD.Size = new System.Drawing.Size(190, 381);
            this.labelDayD.TabIndex = 4;
            this.labelDayD.Text = "DAY D";
            this.labelDayD.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelDayC
            // 
            this.labelDayC.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.labelDayC.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelDayC.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.labelDayC.Font = new System.Drawing.Font("Georgia", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelDayC.Location = new System.Drawing.Point(397, 49);
            this.labelDayC.Name = "labelDayC";
            this.labelDayC.Size = new System.Drawing.Size(190, 381);
            this.labelDayC.TabIndex = 3;
            this.labelDayC.Text = "DAY C";
            this.labelDayC.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelDayB
            // 
            this.labelDayB.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.labelDayB.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelDayB.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.labelDayB.Font = new System.Drawing.Font("Georgia", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelDayB.Location = new System.Drawing.Point(201, 49);
            this.labelDayB.Name = "labelDayB";
            this.labelDayB.Size = new System.Drawing.Size(190, 381);
            this.labelDayB.TabIndex = 2;
            this.labelDayB.Text = "DAY B";
            this.labelDayB.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelDayA
            // 
            this.labelDayA.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.labelDayA.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelDayA.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.labelDayA.Font = new System.Drawing.Font("Georgia", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelDayA.Location = new System.Drawing.Point(6, 49);
            this.labelDayA.Name = "labelDayA";
            this.labelDayA.Size = new System.Drawing.Size(190, 381);
            this.labelDayA.TabIndex = 1;
            this.labelDayA.Text = "DAY A";
            this.labelDayA.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // groupBoxLastTraining
            // 
            this.groupBoxLastTraining.Controls.Add(this.labelLastTrainingValue);
            this.groupBoxLastTraining.Font = new System.Drawing.Font("Georgia", 24.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBoxLastTraining.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBoxLastTraining.Location = new System.Drawing.Point(772, 13);
            this.groupBoxLastTraining.Name = "groupBoxLastTraining";
            this.groupBoxLastTraining.Size = new System.Drawing.Size(224, 131);
            this.groupBoxLastTraining.TabIndex = 2;
            this.groupBoxLastTraining.TabStop = false;
            this.groupBoxLastTraining.Text = "Last training";
            // 
            // labelLastTrainingValue
            // 
            this.labelLastTrainingValue.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.labelLastTrainingValue.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelLastTrainingValue.Font = new System.Drawing.Font("Georgia", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelLastTrainingValue.Location = new System.Drawing.Point(25, 59);
            this.labelLastTrainingValue.Name = "labelLastTrainingValue";
            this.labelLastTrainingValue.Size = new System.Drawing.Size(172, 48);
            this.labelLastTrainingValue.TabIndex = 0;
            this.labelLastTrainingValue.Text = "DAY C";
            this.labelLastTrainingValue.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // buttonBuyTrainer
            // 
            this.buttonBuyTrainer.Anchor = System.Windows.Forms.AnchorStyles.Bottom;
            this.buttonBuyTrainer.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonBuyTrainer.Font = new System.Drawing.Font("Georgia", 24.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonBuyTrainer.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.buttonBuyTrainer.Location = new System.Drawing.Point(419, 32);
            this.buttonBuyTrainer.Name = "buttonBuyTrainer";
            this.buttonBuyTrainer.Size = new System.Drawing.Size(347, 112);
            this.buttonBuyTrainer.TabIndex = 8;
            this.buttonBuyTrainer.Text = "Order coach services";
            this.buttonBuyTrainer.UseVisualStyleBackColor = true;
            this.buttonBuyTrainer.Click += new System.EventHandler(this.buttonBuyTrainer_Click);
            // 
            // TrainingForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.ClientSize = new System.Drawing.Size(1008, 661);
            this.Controls.Add(this.buttonBuyTrainer);
            this.Controls.Add(this.groupBoxLastTraining);
            this.Controls.Add(this.groupBoxWorkautsList);
            this.Controls.Add(this.groupBoxTrainingType);
            this.Name = "TrainingForm";
            this.Text = "TrainingForm";
            this.Load += new System.EventHandler(this.TrainingForm_Load);
            this.groupBoxTrainingType.ResumeLayout(false);
            this.groupBoxWorkautsList.ResumeLayout(false);
            this.groupBoxLastTraining.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBoxTrainingType;
        private System.Windows.Forms.Label labelTrainingTypeValue;
        private System.Windows.Forms.GroupBox groupBoxWorkautsList;
        private System.Windows.Forms.Button buttonStartDayE;
        private System.Windows.Forms.Button buttonStartDayD;
        private System.Windows.Forms.Button buttonStartDayC;
        private System.Windows.Forms.Button buttonStartDayB;
        private System.Windows.Forms.Button buttonStartDayA;
        private System.Windows.Forms.Label labelDayE;
        private System.Windows.Forms.Label labelDayD;
        private System.Windows.Forms.Label labelDayC;
        private System.Windows.Forms.Label labelDayB;
        private System.Windows.Forms.Label labelDayA;
        private System.Windows.Forms.GroupBox groupBoxLastTraining;
        private System.Windows.Forms.Label labelLastTrainingValue;
        private System.Windows.Forms.Button buttonBuyTrainer;
    }
}