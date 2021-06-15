
namespace SportClubDesktopVersion
{
    partial class ClientsReservationForm
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
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle2 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle3 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle4 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle5 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle6 = new System.Windows.Forms.DataGridViewCellStyle();
            this.dataGridViewReservationBase = new System.Windows.Forms.DataGridView();
            this.ColumnID = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnMember = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnTrainer = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnStatus = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnStart = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnEnd = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.groupBoxReservations = new System.Windows.Forms.GroupBox();
            this.buttonModify = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewReservationBase)).BeginInit();
            this.groupBoxReservations.SuspendLayout();
            this.SuspendLayout();
            // 
            // dataGridViewReservationBase
            // 
            this.dataGridViewReservationBase.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.dataGridViewReservationBase.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridViewReservationBase.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.ColumnID,
            this.ColumnMember,
            this.ColumnTrainer,
            this.ColumnStatus,
            this.ColumnStart,
            this.ColumnEnd});
            this.dataGridViewReservationBase.Location = new System.Drawing.Point(6, 37);
            this.dataGridViewReservationBase.Name = "dataGridViewReservationBase";
            this.dataGridViewReservationBase.Size = new System.Drawing.Size(895, 354);
            this.dataGridViewReservationBase.TabIndex = 0;
            // 
            // ColumnID
            // 
            dataGridViewCellStyle1.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.Black;
            this.ColumnID.DefaultCellStyle = dataGridViewCellStyle1;
            this.ColumnID.HeaderText = "ID";
            this.ColumnID.Name = "ColumnID";
            this.ColumnID.Width = 50;
            // 
            // ColumnMember
            // 
            dataGridViewCellStyle2.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle2.ForeColor = System.Drawing.Color.Black;
            this.ColumnMember.DefaultCellStyle = dataGridViewCellStyle2;
            this.ColumnMember.HeaderText = "Client";
            this.ColumnMember.Name = "ColumnMember";
            this.ColumnMember.Width = 250;
            // 
            // ColumnTrainer
            // 
            dataGridViewCellStyle3.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle3.ForeColor = System.Drawing.Color.Black;
            this.ColumnTrainer.DefaultCellStyle = dataGridViewCellStyle3;
            this.ColumnTrainer.HeaderText = "Trainer";
            this.ColumnTrainer.Name = "ColumnTrainer";
            this.ColumnTrainer.Width = 150;
            // 
            // ColumnStatus
            // 
            dataGridViewCellStyle4.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle4.ForeColor = System.Drawing.Color.Black;
            this.ColumnStatus.DefaultCellStyle = dataGridViewCellStyle4;
            this.ColumnStatus.HeaderText = "Status";
            this.ColumnStatus.Name = "ColumnStatus";
            // 
            // ColumnStart
            // 
            dataGridViewCellStyle5.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle5.ForeColor = System.Drawing.Color.Black;
            this.ColumnStart.DefaultCellStyle = dataGridViewCellStyle5;
            this.ColumnStart.HeaderText = "Reserved ";
            this.ColumnStart.Name = "ColumnStart";
            this.ColumnStart.Width = 150;
            // 
            // ColumnEnd
            // 
            dataGridViewCellStyle6.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle6.ForeColor = System.Drawing.Color.Black;
            this.ColumnEnd.DefaultCellStyle = dataGridViewCellStyle6;
            this.ColumnEnd.HeaderText = "Expired";
            this.ColumnEnd.Name = "ColumnEnd";
            this.ColumnEnd.Width = 150;
            // 
            // groupBoxReservations
            // 
            this.groupBoxReservations.Controls.Add(this.dataGridViewReservationBase);
            this.groupBoxReservations.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBoxReservations.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBoxReservations.Location = new System.Drawing.Point(13, 12);
            this.groupBoxReservations.Name = "groupBoxReservations";
            this.groupBoxReservations.Size = new System.Drawing.Size(905, 398);
            this.groupBoxReservations.TabIndex = 1;
            this.groupBoxReservations.TabStop = false;
            this.groupBoxReservations.Text = "Reservations";
            // 
            // buttonModify
            // 
            this.buttonModify.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.buttonModify.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonModify.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.buttonModify.Location = new System.Drawing.Point(13, 416);
            this.buttonModify.Name = "buttonModify";
            this.buttonModify.Size = new System.Drawing.Size(905, 33);
            this.buttonModify.TabIndex = 1;
            this.buttonModify.Text = "Modify";
            this.buttonModify.UseVisualStyleBackColor = true;
            this.buttonModify.Click += new System.EventHandler(this.buttonModify_Click);
            // 
            // ClientsReservationForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.ClientSize = new System.Drawing.Size(930, 461);
            this.Controls.Add(this.buttonModify);
            this.Controls.Add(this.groupBoxReservations);
            this.Name = "ClientsReservationForm";
            this.Text = "ClientsReservationForm";
            this.Load += new System.EventHandler(this.ClientsReservationForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewReservationBase)).EndInit();
            this.groupBoxReservations.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridViewReservationBase;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnID;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnMember;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnTrainer;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnStatus;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnStart;
        private System.Windows.Forms.DataGridViewTextBoxColumn ColumnEnd;
        private System.Windows.Forms.GroupBox groupBoxReservations;
        private System.Windows.Forms.Button buttonModify;
    }
}