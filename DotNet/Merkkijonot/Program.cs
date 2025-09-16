using System.Text;

Console.WriteLine("Merkkijonon käsittely alkaa...");

DateTime alku = DateTime.Now;
StringBuilder rakentaja = new();
for (int i = 0; i < 600_000; i++)
{
    rakentaja.Append('A');
}
string merkkijono = rakentaja.ToString();
Console.WriteLine($"Merkkijonon pituus: {merkkijono.Length}");
DateTime loppu = DateTime.Now;

// tulokset
TimeSpan kesto = loppu - alku;
Console.WriteLine($"Merkkijonon käsittely on päättynyt. Kesto: {kesto.TotalMilliseconds} ms");
