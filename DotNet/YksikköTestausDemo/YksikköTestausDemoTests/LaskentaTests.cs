using Microsoft.VisualStudio.TestTools.UnitTesting;
using YksikköTestausDemo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YksikköTestausDemo.Tests
{
    [TestClass()]
    public class LaskentaTests
    {
        [TestMethod()]
        public void SummaTest()
        {
            // arrange
            Laskenta laskenta = new();
            int a = 5;
            int b = 10;
            int odotettuTulos = a + b;

            // act
            int tulos = laskenta.Summa(a, b);

            // assert
            Assert.AreEqual(odotettuTulos, tulos);
        }
    }
}
