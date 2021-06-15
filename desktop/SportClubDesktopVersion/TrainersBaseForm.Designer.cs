
namespace SportClubDesktopVersion
{
    partial class TrainersBaseForm
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
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle5 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle6 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle7 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle8 = new System.Windows.Forms.DataGridViewCellStyle();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.dataGridViewTrainersBase = new System.Windows.Forms.DataGridView();
            this.ColumnTrainerId = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnTrainerName = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnTrainerLastName = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnRank = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.label1 = new System.Windows.Forms.Label();
            this.textBoxDateOfStart = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.textBoxTimeOfStart = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.textBoxDateOfEnd = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.textBoxTimeOfEnd = new System.Windows.Forms.TextBox();
            this.buttonAppy = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewTrainersBase)).BeginInit();
            this.groupBox2.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.dataGridViewTrainersBase);
            this.groupBox1.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBox1.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBox1.Location = new System.Drawing.Point(12, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(608, 376);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Trainers";
            // 
            // dataGridViewTrainersBase
            // 
            this.dataGridViewTrainersBase.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridViewTrainersBase.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.ColumnTrainerId,
            this.ColumnTrainerName,
            this.ColumnTrainerLastName,
            this.ColumnRank});
            this.dataGridViewTrainersBase.Location = new System.Drawing.Point(6, 37);
            this.dataGridViewTrainersBase.Name = "dataGridViewTrainersBase";
            this.dataGridViewTrainersBase.Size = new System.Drawing.Size(596, 339);
            this.dataGridViewTrainersBase.TabIndex = 0;
            // 
            // ColumnTrainerId
            // 
            dataGridViewCellStyle5.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle5.ForeColor = System.Drawing.Color.Black;
            this.ColumnTrainerId.DefaultCellStyle = dataGridViewCellStyle5;
            this.ColumnTrainerId.HeaderText = "ID";
            this.ColumnTrainerId.Name = "ColumnTrainerId";
            this.ColumnTrainerId.Width = 50;
            // 
            // ColumnTrainerName
            // 
            dataGridViewCellStyle6.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle6.ForeColor = System.Drawing.Color.Black;
            this.ColumnTrainerName.DefaultCellStyle = dataGridViewCellStyle6;
            this.ColumnTrainerName.HeaderText = "Name";
            this.ColumnTrainerName.Name = "ColumnTrainerName";
            this.ColumnTrainerName.Width = 150;
            // 
            // ColumnTrainerLastName
            // 
            dataGridViewCellStyle7.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle7.ForeColor = System.Drawing.Color.Black;
            this.ColumnTrainerLastName.DefaultCellStyle = dataGridViewCellStyle7;
            this.ColumnTrainerLastName.HeaderText = "Last name";
            this.ColumnTrainerLastName.Name = "ColumnTrainerLastName";
            this.ColumnTrainerLastName.Width = 200;
            // 
            // ColumnRank
            // 
            dataGridViewCellStyle8.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle8.ForeColor = System.Drawing.Color.Black;
            this.ColumnRank.DefaultCellStyle = dataGridViewCellStyle8;
            this.ColumnRank.HeaderText = "Rank";
            this.ColumnRank.Name = "ColumnRank";
            this.ColumnRank.Width = 150;
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.textBoxTimeOfEnd);
            this.groupBox2.Controls.Add(this.label4);
            this.groupBox2.Controls.Add(this.textBoxDateOfEnd);
            this.groupBox2.Controls.Add(this.label3);
            this.groupBox2.Controls.Add(this.textBoxTimeOfStart);
            this.groupBox2.Controls.Add(this.label2);
            this.groupBox2.Controls.Add(this.textBoxDateOfStart);
            this.groupBox2.Controls.Add(this.label1);
            this.groupBox2.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBox2.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBox2.Location = new System.Drawing.Point(12, 394);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(608, 148);
            this.groupBox2.TabIndex = 1;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Date/Time";
            // 
            // label1
            // 
            this.label1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.label1.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label1.Location = new System.Drawing.Point(7, 41);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(124, 30);
            this.label1.TabIndex = 0;
            this.label1.Text = "Date of start";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // textBoxDateOfStart
            // 
            this.textBoxDateOfStart.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.textBoxDateOfStart.Location = new System.Drawing.Point(137, 41);
            this.textBoxDateOfStart.Name = "textBoxDateOfStart";
            this.textBoxDateOfStart.Size = new System.Drawing.Size(192, 30);
            this.textBoxDateOfStart.TabIndex = 1;
            // 
            // label2
            // 
            this.label2.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.label2.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label2.Location = new System.Drawing.Point(335, 41);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(70, 30);
            this.label2.TabIndex = 2;
            this.label2.Text = "Time";
            this.label2.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // textBoxTimeOfStart
            // 
            this.textBoxTimeOfStart.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.textBoxTimeOfStart.Location = new System.Drawing.Point(411, 41);
            this.textBoxTimeOfStart.Name = "textBoxTimeOfStart";
            this.textBoxTimeOfStart.Size = new System.Drawing.Size(187, 30);
            this.textBoxTimeOfStart.TabIndex = 3;
            // 
            // label3
            // 
            this.label3.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.label3.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label3.Location = new System.Drawing.Point(7, 95);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(124, 30);
            this.label3.TabIndex = 4;
            this.label3.Text = "Date of end";
            this.label3.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // textBoxDateOfEnd
            // 
            this.textBoxDateOfEnd.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.textBoxDateOfEnd.Location = new System.Drawing.Point(137, 95);
            this.textBoxDateOfEnd.Name = "textBoxDateOfEnd";
            this.textBoxDateOfEnd.Size = new System.Drawing.Size(192, 30);
            this.textBoxDateOfEnd.TabIndex = 5;
            // 
            // label4
            // 
            this.label4.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.label4.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label4.Location = new System.Drawing.Point(335, 95);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(70, 30);
            this.label4.TabIndex = 6;
            this.label4.Text = "Time";
            this.label4.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // textBoxTimeOfEnd
            // 
            this.textBoxTimeOfEnd.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.textBoxTimeOfEnd.Location = new System.Drawing.Point(411, 95);
            this.textBoxTimeOfEnd.Name = "textBoxTimeOfEnd";
            this.textBoxTimeOfEnd.Size = new System.Drawing.Size(187, 30);
            this.textBoxTimeOfEnd.TabIndex = 7;
            // 
            // buttonAppy
            // 
            this.buttonAppy.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonAppy.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.buttonAppy.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonAppy.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.buttonAppy.Location = new System.Drawing.Point(12, 548);
            this.buttonAppy.Name = "buttonAppy";
            this.buttonAppy.Size = new System.Drawing.Size(608, 38);
            this.buttonAppy.TabIndex = 2;
            this.buttonAppy.Text = "Apply";
            this.buttonAppy.UseVisualStyleBackColor = true;
            this.buttonAppy.Click += new System.EventHandler(this.buttonAppy_Click);
            // 
            // TrainersBaseForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.ClientSize = new System.Drawing.Size(632, 589);
            this.Controls.Add(this.buttonAppy);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Name = "TrainersBaseForm";
            this.Text = "AddReservationForm";
            this.Load += new System.EventHandler(this.AddReservationForm_Load);
            this.groupBox1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewTrainersBase)).EndInit();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.DataGridView dataGridViewTrainersBase;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnTrainerId;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnTrainerName;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnTrainerLastName;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnRank;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.TextBox textBoxTimeOfEnd;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox textBoxDateOfEnd;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox textBoxTimeOfStart;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox textBoxDateOfStart;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button buttonAppy;
    }
}