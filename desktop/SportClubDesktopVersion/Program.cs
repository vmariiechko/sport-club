using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SportClubDesktopVersion
{
    static class Program
    {
        /// <summary>
        /// Главная точка входа для приложения.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new StartForm());
        }
    }
    static class DataCalorieCount
    {
        public static int Value { get; set; }
    }

    static class DataUserPref
    {
        public static string Value { get; set; }
    }

    static class DataUserLogin
    {
        public static string AccesToken { get; set; }
        public static string UserMail { get; set; }
    }

    static class DataUserTrain
    {
        public static string TrainingDay { get; set; }
    }
}
