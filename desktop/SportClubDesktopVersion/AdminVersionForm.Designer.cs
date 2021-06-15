
namespace SportClubDesktopVersion
{
    partial class AdminVersionForm
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
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.buttonCreateClient = new System.Windows.Forms.Button();
            this.buttonCheckReservation = new System.Windows.Forms.Button();
            this.buttonMarkVisist = new System.Windows.Forms.Button();
            this.buttonSearch = new System.Windows.Forms.Button();
            this.dataGridViewClientsBase = new System.Windows.Forms.DataGridView();
            this.ColumnID = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnClient = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnType = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnExpiration = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ColumnVisits = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewClientsBase)).BeginInit();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.buttonCreateClient);
            this.groupBox1.Controls.Add(this.buttonCheckReservation);
            this.groupBox1.Controls.Add(this.buttonMarkVisist);
            this.groupBox1.Controls.Add(this.buttonSearch);
            this.groupBox1.Controls.Add(this.dataGridViewClientsBase);
            this.groupBox1.Font = new System.Drawing.Font("Georgia", 24.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBox1.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBox1.Location = new System.Drawing.Point(12, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(984, 637);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "SportLife clients";
            // 
            // buttonCreateClient
            // 
            this.buttonCreateClient.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonCreateClient.Font = new System.Drawing.Font("Georgia", 21F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonCreateClient.Location = new System.Drawing.Point(818, 581);
            this.buttonCreateClient.Name = "buttonCreateClient";
            this.buttonCreateClient.Size = new System.Drawing.Size(160, 50);
            this.buttonCreateClient.TabIndex = 4;
            this.buttonCreateClient.Text = "New client";
            this.buttonCreateClient.UseVisualStyleBackColor = true;
            this.buttonCreateClient.Click += new System.EventHandler(this.buttonCreateClient_Click);
            // 
            // buttonCheckReservation
            // 
            this.buttonCheckReservation.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonCheckReservation.Font = new System.Drawing.Font("Georgia", 21F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonCheckReservation.Location = new System.Drawing.Point(321, 581);
            this.buttonCheckReservation.Name = "buttonCheckReservation";
            this.buttonCheckReservation.Size = new System.Drawing.Size(261, 50);
            this.buttonCheckReservation.TabIndex = 3;
            this.buttonCheckReservation.Text = "Check reservations";
            this.buttonCheckReservation.UseVisualStyleBackColor = true;
            this.buttonCheckReservation.Click += new System.EventHandler(this.buttonCheckReservation_Click);
            // 
            // buttonMarkVisist
            // 
            this.buttonMarkVisist.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonMarkVisist.Font = new System.Drawing.Font("Georgia", 21F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonMarkVisist.Location = new System.Drawing.Point(157, 581);
            this.buttonMarkVisist.Name = "buttonMarkVisist";
            this.buttonMarkVisist.Size = new System.Drawing.Size(158, 50);
            this.buttonMarkVisist.TabIndex = 2;
            this.buttonMarkVisist.Text = "Mark visit";
            this.buttonMarkVisist.UseVisualStyleBackColor = true;
            this.buttonMarkVisist.Click += new System.EventHandler(this.buttonMarkVisist_Click);
            // 
            // buttonSearch
            // 
            this.buttonSearch.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonSearch.Font = new System.Drawing.Font("Georgia", 21F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonSearch.Location = new System.Drawing.Point(6, 581);
            this.buttonSearch.Name = "buttonSearch";
            this.buttonSearch.Size = new System.Drawing.Size(145, 50);
            this.buttonSearch.TabIndex = 1;
            this.buttonSearch.Text = "Search";
            this.buttonSearch.UseVisualStyleBackColor = true;
            this.buttonSearch.Click += new System.EventHandler(this.buttonSearch_Click);
            // 
            // dataGridViewClientsBase
            // 
            dataGridViewCellStyle1.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.Black;
            this.dataGridViewClientsBase.AlternatingRowsDefaultCellStyle = dataGridViewCellStyle1;
            this.dataGridViewClientsBase.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.dataGridViewClientsBase.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridViewClientsBase.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.ColumnID,
            this.ColumnClient,
            this.ColumnType,
            this.ColumnExpiration,
            this.ColumnVisits});
            this.dataGridViewClientsBase.Location = new System.Drawing.Point(6, 44);
            this.dataGridViewClientsBase.Name = "dataGridViewClientsBase";
            this.dataGridViewClientsBase.RowHeadersWidth = 30;
            this.dataGridViewClientsBase.Size = new System.Drawing.Size(972, 531);
            this.dataGridViewClientsBase.TabIndex = 0;
            // 
            // ColumnID
            // 
            dataGridViewCellStyle2.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle2.ForeColor = System.Drawing.Color.Black;
            this.ColumnID.DefaultCellStyle = dataGridViewCellStyle2;
            this.ColumnID.HeaderText = "ID";
            this.ColumnID.Name = "ColumnID";
            // 
            // ColumnClient
            // 
            dataGridViewCellStyle3.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle3.ForeColor = System.Drawing.Color.Black;
            this.ColumnClient.DefaultCellStyle = dataGridViewCellStyle3;
            this.ColumnClient.HeaderText = "Client";
            this.ColumnClient.Name = "ColumnClient";
            this.ColumnClient.Width = 350;
            // 
            // ColumnType
            // 
            dataGridViewCellStyle4.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle4.ForeColor = System.Drawing.Color.Black;
            this.ColumnType.DefaultCellStyle = dataGridViewCellStyle4;
            this.ColumnType.HeaderText = "Type";
            this.ColumnType.Name = "ColumnType";
            this.ColumnType.Width = 150;
            // 
            // ColumnExpiration
            // 
            dataGridViewCellStyle5.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle5.ForeColor = System.Drawing.Color.Black;
            this.ColumnExpiration.DefaultCellStyle = dataGridViewCellStyle5;
            this.ColumnExpiration.HeaderText = "Expiration";
            this.ColumnExpiration.Name = "ColumnExpiration";
            this.ColumnExpiration.Width = 200;
            // 
            // ColumnVisits
            // 
            dataGridViewCellStyle6.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle6.ForeColor = System.Drawing.Color.Black;
            this.ColumnVisits.DefaultCellStyle = dataGridViewCellStyle6;
            this.ColumnVisits.HeaderText = "Visits";
            this.ColumnVisits.Name = "ColumnVisits";
            this.ColumnVisits.Width = 150;
            // 
            // AdminVersionForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.ClientSize = new System.Drawing.Size(1008, 661);
            this.Controls.Add(this.groupBox1);
            this.Name = "AdminVersionForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "AdminVersionForm";
            this.Load += new System.EventHandler(this.AdminVersionForm_Load);
            this.groupBox1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewClientsBase)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        public System.Windows.Forms.DataGridView dataGridViewClientsBase;
        public System.Windows.Forms.DataGridViewTextBoxColumn ColumnID;
        public System.Windows.Forms.DataGridViewTextBoxColumn ColumnClient;
        public System.Windows.Forms.DataGridViewTextBoxColumn ColumnType;
        public System.Windows.Forms.DataGridViewTextBoxColumn ColumnExpiration;
        public System.Windows.Forms.DataGridViewTextBoxColumn ColumnVisits;
        private System.Windows.Forms.Button buttonCreateClient;
        private System.Windows.Forms.Button buttonCheckReservation;
        private System.Windows.Forms.Button buttonMarkVisist;
        private System.Windows.Forms.Button buttonSearch;
    }
}