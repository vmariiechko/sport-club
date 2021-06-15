
namespace SportClubDesktopVersion
{
    partial class MyOfficeForm
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
            this.groupBoxUserImage = new System.Windows.Forms.GroupBox();
            this.pictureBoxUserImage = new System.Windows.Forms.PictureBox();
            this.labelUserName = new System.Windows.Forms.Label();
            this.labelUserSurname = new System.Windows.Forms.Label();
            this.groupBoxUserInfo = new System.Windows.Forms.GroupBox();
            this.buttonEditUserProfile = new System.Windows.Forms.Button();
            this.groupBoxAccountInfo = new System.Windows.Forms.GroupBox();
            this.groupBoxSubscript = new System.Windows.Forms.GroupBox();
            this.labelVisitsValue = new System.Windows.Forms.Label();
            this.labelVisitsText = new System.Windows.Forms.Label();
            this.labelExpirationValue = new System.Windows.Forms.Label();
            this.labelExpirationText = new System.Windows.Forms.Label();
            this.labelSubTypeValue = new System.Windows.Forms.Label();
            this.labelSubTypeText = new System.Windows.Forms.Label();
            this.groupBoxNutritionInfo = new System.Windows.Forms.GroupBox();
            this.labelNutritionCaloriesValue = new System.Windows.Forms.Label();
            this.labelNutritionCalories = new System.Windows.Forms.Label();
            this.labelNutritionDate = new System.Windows.Forms.Label();
            this.domainUpDownNutritionDateCalorie = new System.Windows.Forms.DomainUpDown();
            this.groupBoxUserImage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBoxUserImage)).BeginInit();
            this.groupBoxUserInfo.SuspendLayout();
            this.groupBoxAccountInfo.SuspendLayout();
            this.groupBoxSubscript.SuspendLayout();
            this.groupBoxNutritionInfo.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBoxUserImage
            // 
            this.groupBoxUserImage.Controls.Add(this.pictureBoxUserImage);
            this.groupBoxUserImage.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBoxUserImage.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBoxUserImage.Location = new System.Drawing.Point(12, 12);
            this.groupBoxUserImage.Name = "groupBoxUserImage";
            this.groupBoxUserImage.Size = new System.Drawing.Size(192, 212);
            this.groupBoxUserImage.TabIndex = 0;
            this.groupBoxUserImage.TabStop = false;
            this.groupBoxUserImage.Text = "Avatar";
            // 
            // pictureBoxUserImage
            // 
            this.pictureBoxUserImage.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.pictureBoxUserImage.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.pictureBoxUserImage.Location = new System.Drawing.Point(6, 37);
            this.pictureBoxUserImage.Name = "pictureBoxUserImage";
            this.pictureBoxUserImage.Size = new System.Drawing.Size(180, 169);
            this.pictureBoxUserImage.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBoxUserImage.TabIndex = 0;
            this.pictureBoxUserImage.TabStop = false;
            // 
            // labelUserName
            // 
            this.labelUserName.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.labelUserName.Font = new System.Drawing.Font("Segoe Print", 21.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelUserName.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelUserName.Location = new System.Drawing.Point(6, 37);
            this.labelUserName.Name = "labelUserName";
            this.labelUserName.Size = new System.Drawing.Size(262, 53);
            this.labelUserName.TabIndex = 1;
            this.labelUserName.Text = "Test";
            this.labelUserName.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelUserSurname
            // 
            this.labelUserSurname.Font = new System.Drawing.Font("Segoe Print", 21.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelUserSurname.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelUserSurname.Location = new System.Drawing.Point(6, 90);
            this.labelUserSurname.Name = "labelUserSurname";
            this.labelUserSurname.Size = new System.Drawing.Size(262, 46);
            this.labelUserSurname.TabIndex = 2;
            this.labelUserSurname.Text = "Testowicz";
            this.labelUserSurname.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // groupBoxUserInfo
            // 
            this.groupBoxUserInfo.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.groupBoxUserInfo.Controls.Add(this.labelUserSurname);
            this.groupBoxUserInfo.Controls.Add(this.labelUserName);
            this.groupBoxUserInfo.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBoxUserInfo.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBoxUserInfo.Location = new System.Drawing.Point(210, 12);
            this.groupBoxUserInfo.Name = "groupBoxUserInfo";
            this.groupBoxUserInfo.Size = new System.Drawing.Size(274, 152);
            this.groupBoxUserInfo.TabIndex = 3;
            this.groupBoxUserInfo.TabStop = false;
            this.groupBoxUserInfo.Text = "User Info";
            // 
            // buttonEditUserProfile
            // 
            this.buttonEditUserProfile.Anchor = System.Windows.Forms.AnchorStyles.Right;
            this.buttonEditUserProfile.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.buttonEditUserProfile.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonEditUserProfile.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.buttonEditUserProfile.Location = new System.Drawing.Point(210, 170);
            this.buttonEditUserProfile.Name = "buttonEditUserProfile";
            this.buttonEditUserProfile.Size = new System.Drawing.Size(274, 54);
            this.buttonEditUserProfile.TabIndex = 4;
            this.buttonEditUserProfile.Text = "Edit profile";
            this.buttonEditUserProfile.UseVisualStyleBackColor = true;
            this.buttonEditUserProfile.Click += new System.EventHandler(this.buttonEditUserProfile_Click);
            // 
            // groupBoxAccountInfo
            // 
            this.groupBoxAccountInfo.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.groupBoxAccountInfo.Controls.Add(this.groupBoxSubscript);
            this.groupBoxAccountInfo.Controls.Add(this.groupBoxNutritionInfo);
            this.groupBoxAccountInfo.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.groupBoxAccountInfo.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.groupBoxAccountInfo.Location = new System.Drawing.Point(12, 230);
            this.groupBoxAccountInfo.Name = "groupBoxAccountInfo";
            this.groupBoxAccountInfo.Size = new System.Drawing.Size(472, 419);
            this.groupBoxAccountInfo.TabIndex = 5;
            this.groupBoxAccountInfo.TabStop = false;
            this.groupBoxAccountInfo.Text = "Account info";
            // 
            // groupBoxSubscript
            // 
            this.groupBoxSubscript.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.groupBoxSubscript.Controls.Add(this.labelVisitsValue);
            this.groupBoxSubscript.Controls.Add(this.labelVisitsText);
            this.groupBoxSubscript.Controls.Add(this.labelExpirationValue);
            this.groupBoxSubscript.Controls.Add(this.labelExpirationText);
            this.groupBoxSubscript.Controls.Add(this.labelSubTypeValue);
            this.groupBoxSubscript.Controls.Add(this.labelSubTypeText);
            this.groupBoxSubscript.ForeColor = System.Drawing.SystemColors.ControlText;
            this.groupBoxSubscript.Location = new System.Drawing.Point(6, 37);
            this.groupBoxSubscript.Name = "groupBoxSubscript";
            this.groupBoxSubscript.Size = new System.Drawing.Size(460, 188);
            this.groupBoxSubscript.TabIndex = 2;
            this.groupBoxSubscript.TabStop = false;
            this.groupBoxSubscript.Text = "Subscription";
            // 
            // labelVisitsValue
            // 
            this.labelVisitsValue.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.labelVisitsValue.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelVisitsValue.Font = new System.Drawing.Font("Lucida Console", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelVisitsValue.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelVisitsValue.Location = new System.Drawing.Point(279, 135);
            this.labelVisitsValue.Name = "labelVisitsValue";
            this.labelVisitsValue.Size = new System.Drawing.Size(175, 38);
            this.labelVisitsValue.TabIndex = 8;
            this.labelVisitsValue.Text = "Error";
            this.labelVisitsValue.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelVisitsText
            // 
            this.labelVisitsText.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.labelVisitsText.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelVisitsText.Location = new System.Drawing.Point(6, 135);
            this.labelVisitsText.Name = "labelVisitsText";
            this.labelVisitsText.Size = new System.Drawing.Size(210, 38);
            this.labelVisitsText.TabIndex = 7;
            this.labelVisitsText.Text = "Available visits:";
            this.labelVisitsText.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // labelExpirationValue
            // 
            this.labelExpirationValue.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.labelExpirationValue.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelExpirationValue.Font = new System.Drawing.Font("Lucida Console", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelExpirationValue.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelExpirationValue.Location = new System.Drawing.Point(279, 83);
            this.labelExpirationValue.Name = "labelExpirationValue";
            this.labelExpirationValue.Size = new System.Drawing.Size(175, 38);
            this.labelExpirationValue.TabIndex = 6;
            this.labelExpirationValue.Text = "Error";
            this.labelExpirationValue.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelExpirationText
            // 
            this.labelExpirationText.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.labelExpirationText.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelExpirationText.Location = new System.Drawing.Point(6, 83);
            this.labelExpirationText.Name = "labelExpirationText";
            this.labelExpirationText.Size = new System.Drawing.Size(210, 38);
            this.labelExpirationText.TabIndex = 5;
            this.labelExpirationText.Text = "Expiration date:";
            this.labelExpirationText.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // labelSubTypeValue
            // 
            this.labelSubTypeValue.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.labelSubTypeValue.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelSubTypeValue.Font = new System.Drawing.Font("Micra", 24.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelSubTypeValue.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelSubTypeValue.Location = new System.Drawing.Point(192, 34);
            this.labelSubTypeValue.Name = "labelSubTypeValue";
            this.labelSubTypeValue.Size = new System.Drawing.Size(262, 38);
            this.labelSubTypeValue.TabIndex = 4;
            this.labelSubTypeValue.Text = "Error";
            this.labelSubTypeValue.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelSubTypeText
            // 
            this.labelSubTypeText.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelSubTypeText.Location = new System.Drawing.Point(6, 34);
            this.labelSubTypeText.Name = "labelSubTypeText";
            this.labelSubTypeText.Size = new System.Drawing.Size(89, 38);
            this.labelSubTypeText.TabIndex = 2;
            this.labelSubTypeText.Text = "Type:";
            this.labelSubTypeText.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // groupBoxNutritionInfo
            // 
            this.groupBoxNutritionInfo.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.groupBoxNutritionInfo.Controls.Add(this.labelNutritionCaloriesValue);
            this.groupBoxNutritionInfo.Controls.Add(this.labelNutritionCalories);
            this.groupBoxNutritionInfo.Controls.Add(this.labelNutritionDate);
            this.groupBoxNutritionInfo.Controls.Add(this.domainUpDownNutritionDateCalorie);
            this.groupBoxNutritionInfo.ForeColor = System.Drawing.SystemColors.ControlText;
            this.groupBoxNutritionInfo.Location = new System.Drawing.Point(6, 231);
            this.groupBoxNutritionInfo.Name = "groupBoxNutritionInfo";
            this.groupBoxNutritionInfo.Size = new System.Drawing.Size(460, 182);
            this.groupBoxNutritionInfo.TabIndex = 1;
            this.groupBoxNutritionInfo.TabStop = false;
            this.groupBoxNutritionInfo.Text = "Nutrition";
            // 
            // labelNutritionCaloriesValue
            // 
            this.labelNutritionCaloriesValue.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.labelNutritionCaloriesValue.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.labelNutritionCaloriesValue.Font = new System.Drawing.Font("Lucida Console", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelNutritionCaloriesValue.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelNutritionCaloriesValue.Location = new System.Drawing.Point(277, 123);
            this.labelNutritionCaloriesValue.Name = "labelNutritionCaloriesValue";
            this.labelNutritionCaloriesValue.Size = new System.Drawing.Size(175, 41);
            this.labelNutritionCaloriesValue.TabIndex = 3;
            this.labelNutritionCaloriesValue.Text = "Error";
            this.labelNutritionCaloriesValue.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelNutritionCalories
            // 
            this.labelNutritionCalories.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.labelNutritionCalories.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelNutritionCalories.Location = new System.Drawing.Point(6, 121);
            this.labelNutritionCalories.Name = "labelNutritionCalories";
            this.labelNutritionCalories.Size = new System.Drawing.Size(265, 41);
            this.labelNutritionCalories.TabIndex = 2;
            this.labelNutritionCalories.Text = "Calories consumed:";
            this.labelNutritionCalories.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // labelNutritionDate
            // 
            this.labelNutritionDate.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelNutritionDate.Location = new System.Drawing.Point(6, 53);
            this.labelNutritionDate.Name = "labelNutritionDate";
            this.labelNutritionDate.Size = new System.Drawing.Size(174, 41);
            this.labelNutritionDate.TabIndex = 1;
            this.labelNutritionDate.Text = "Choose date:";
            this.labelNutritionDate.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // domainUpDownNutritionDateCalorie
            // 
            this.domainUpDownNutritionDateCalorie.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.domainUpDownNutritionDateCalorie.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.domainUpDownNutritionDateCalorie.Font = new System.Drawing.Font("Georgia", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.domainUpDownNutritionDateCalorie.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.domainUpDownNutritionDateCalorie.Location = new System.Drawing.Point(192, 56);
            this.domainUpDownNutritionDateCalorie.Name = "domainUpDownNutritionDateCalorie";
            this.domainUpDownNutritionDateCalorie.ReadOnly = true;
            this.domainUpDownNutritionDateCalorie.Size = new System.Drawing.Size(262, 38);
            this.domainUpDownNutritionDateCalorie.TabIndex = 0;
            this.domainUpDownNutritionDateCalorie.Text = "00.00.00";
            this.domainUpDownNutritionDateCalorie.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            this.domainUpDownNutritionDateCalorie.SelectedItemChanged += new System.EventHandler(this.domainUpDownNutritionDateCalorie_SelectedItemChanged);
            // 
            // MyOfficeForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.ClientSize = new System.Drawing.Size(496, 661);
            this.Controls.Add(this.groupBoxAccountInfo);
            this.Controls.Add(this.buttonEditUserProfile);
            this.Controls.Add(this.groupBoxUserInfo);
            this.Controls.Add(this.groupBoxUserImage);
            this.Name = "MyOfficeForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "MyOfficeForm";
            this.Load += new System.EventHandler(this.MyOfficeForm_Load);
            this.groupBoxUserImage.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBoxUserImage)).EndInit();
            this.groupBoxUserInfo.ResumeLayout(false);
            this.groupBoxAccountInfo.ResumeLayout(false);
            this.groupBoxSubscript.ResumeLayout(false);
            this.groupBoxNutritionInfo.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBoxUserImage;
        private System.Windows.Forms.PictureBox pictureBoxUserImage;
        private System.Windows.Forms.Label labelUserName;
        private System.Windows.Forms.Label labelUserSurname;
        private System.Windows.Forms.GroupBox groupBoxUserInfo;
        private System.Windows.Forms.Button buttonEditUserProfile;
        private System.Windows.Forms.GroupBox groupBoxAccountInfo;
        private System.Windows.Forms.GroupBox groupBoxNutritionInfo;
        private System.Windows.Forms.Label labelNutritionCaloriesValue;
        private System.Windows.Forms.Label labelNutritionCalories;
        private System.Windows.Forms.Label labelNutritionDate;
        private System.Windows.Forms.DomainUpDown domainUpDownNutritionDateCalorie;
        private System.Windows.Forms.GroupBox groupBoxSubscript;
        private System.Windows.Forms.Label labelSubTypeValue;
        private System.Windows.Forms.Label labelSubTypeText;
        private System.Windows.Forms.Label labelExpirationValue;
        private System.Windows.Forms.Label labelExpirationText;
        private System.Windows.Forms.Label labelVisitsValue;
        private System.Windows.Forms.Label labelVisitsText;
    }
}