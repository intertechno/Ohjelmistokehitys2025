Console.WriteLine("Merkkijonon käsittely alkaa...");

DateTime alku = DateTime.Now;
string s = "";
for (int i = 0; i < 600_000; i++)
{
    s = s + "A";
}
DateTime loppu = DateTime.Now;

// tulokset
TimeSpan kesto = loppu - alku;
Console.WriteLine($"Merkkijonon käsittely on päättynyt. Kesto: {kesto.TotalMilliseconds} ms");
