using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YksikköTestausDemo
{
    public class Laskenta
    {
        public int Summa(int a, int b)
        {
            return a + b;
        }

        public int LukujenSumma(string luvut)
        {
            string[] osat = luvut.Split(',');
            int summa = 0;
            foreach (string osa in osat)
            {
                summa += int.Parse(osa);
            }

            return summa;
        }
    }
}
