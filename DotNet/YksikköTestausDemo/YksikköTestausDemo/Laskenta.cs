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
            // jos syöte on tyhjä, palautetaan 0
            if (luvut == "")
            {
                return 0;
            }

            string[] osat = luvut.Split(',');
            int summa = 0;
            foreach (string osa in osat)
            {
                int luku = int.Parse(osa);
                if (luku < 0)
                {
                    throw new ArgumentOutOfRangeException($"Negatiiviset luvut eivät ole sallittuja: {luku}.");
                }

                summa += luku;
            }

            return summa;
        }
    }
}
