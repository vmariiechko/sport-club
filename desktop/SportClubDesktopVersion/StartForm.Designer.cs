
namespace SportClubDesktopVersion
{
    partial class StartForm
    {
        /// <summary>
        /// Обязательная переменная конструктора.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Освободить все используемые ресурсы.
        /// </summary>
        /// <param name="disposing">истинно, если управляемый ресурс должен быть удален; иначе ложно.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Код, автоматически созданный конструктором форм Windows

        /// <summary>
        /// Требуемый метод для поддержки конструктора — не изменяйте 
        /// содержимое этого метода с помощью редактора кода.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.labelStartText = new System.Windows.Forms.Label();
            this.labelClock = new System.Windows.Forms.Label();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.label1 = new System.Windows.Forms.Label();
            this.buttonClient = new System.Windows.Forms.Button();
            this.buttonAdmin = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // labelStartText
            // 
            this.labelStartText.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.labelStartText.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.labelStartText.Font = new System.Drawing.Font("Georgia", 65.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelStartText.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.labelStartText.Location = new System.Drawing.Point(61, -24);
            this.labelStartText.Name = "labelStartText";
            this.labelStartText.Size = new System.Drawing.Size(900, 230);
            this.labelStartText.TabIndex = 0;
            this.labelStartText.Text = "Zaczynaj od teraz";
            this.labelStartText.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelClock
            // 
            this.labelClock.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.labelClock.Font = new System.Drawing.Font("Courier New", 69.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelClock.ForeColor = System.Drawing.SystemColors.GradientActiveCaption;
            this.labelClock.Location = new System.Drawing.Point(262, 238);
            this.labelClock.Name = "labelClock";
            this.labelClock.Size = new System.Drawing.Size(500, 100);
            this.labelClock.TabIndex = 1;
            this.labelClock.Text = "00:00:00";
            this.labelClock.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // timer1
            // 
            this.timer1.Interval = 1000;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // label1
            // 
            this.label1.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label1.Font = new System.Drawing.Font("Georgia", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label1.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.label1.Location = new System.Drawing.Point(162, 386);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(700, 90);
            this.label1.TabIndex = 2;
            this.label1.Text = "Prosze wybrac typ uzytkowania:";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // buttonClient
            // 
            this.buttonClient.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.buttonClient.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.buttonClient.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.buttonClient.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonClient.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.buttonClient.Location = new System.Drawing.Point(170, 526);
            this.buttonClient.Name = "buttonClient";
            this.buttonClient.Size = new System.Drawing.Size(256, 72);
            this.buttonClient.TabIndex = 3;
            this.buttonClient.Text = "Jestem klientem klubu";
            this.buttonClient.UseVisualStyleBackColor = false;
            this.buttonClient.Click += new System.EventHandler(this.buttonClient_Click);
            // 
            // buttonAdmin
            // 
            this.buttonAdmin.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.buttonAdmin.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.buttonAdmin.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.buttonAdmin.Font = new System.Drawing.Font("Georgia", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonAdmin.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.buttonAdmin.Location = new System.Drawing.Point(606, 526);
            this.buttonAdmin.Name = "buttonAdmin";
            this.buttonAdmin.Size = new System.Drawing.Size(256, 72);
            this.buttonAdmin.TabIndex = 4;
            this.buttonAdmin.Text = "Jestem administratorem klubu";
            this.buttonAdmin.UseVisualStyleBackColor = false;
            this.buttonAdmin.Click += new System.EventHandler(this.buttonAdmin_Click);
            // 
            // StartForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.ClientSize = new System.Drawing.Size(1008, 661);
            this.Controls.Add(this.buttonAdmin);
            this.Controls.Add(this.buttonClient);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.labelClock);
            this.Controls.Add(this.labelStartText);
            this.Name = "StartForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "SportLife";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label labelStartText;
        private System.Windows.Forms.Label labelClock;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.Label label1;
        public System.Windows.Forms.Button buttonClient;
        public System.Windows.Forms.Button buttonAdmin;
    }
}

