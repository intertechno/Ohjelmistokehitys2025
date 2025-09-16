Console.WriteLine("Aloitetaan luvut-tiedoston käsittely.");

string[] rivit = File.ReadAllLines("..\\Luvut.txt");
Console.WriteLine("Tiedoston rivit luettu.");

int summa = 0;
foreach (string rivi in rivit)
{
    // Console.WriteLine(rivi);
    int luku = int.Parse(rivi);
    summa += luku;
}

// tulostus
Console.WriteLine($"Lukujen summa on {summa}.");
float keskiarvo = (float)summa / rivit.Length;
Console.WriteLine($"Lukujen keskiarvo on {keskiarvo}.");

Console.WriteLine("Lopetetaan luvut-tiedoston käsittely.");
