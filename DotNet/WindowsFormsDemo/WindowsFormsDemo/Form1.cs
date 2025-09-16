namespace WindowsFormsDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int luku1 = int.Parse(textBox1.Text);
            int luku2 = int.Parse(textBox2.Text);

            int summa = luku1 + luku2;
            MessageBox.Show($"Summa on: {summa}.");
        }
    }
}
