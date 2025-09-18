using AspNetWebApiDemo.Mallit;

namespace AspNetWebApiDemo.Työkalut
{
    public class CsvLukija
    {
        public List<Henkilö> LueHenkilötCsv(string filePath)
        {
            string[] lines = File.ReadAllLines(filePath);

            // Skip header (first line), split by comma, map to Henkilö objects
            List<Henkilö> henkilöt = [.. lines
                .Skip(1) // skip header
                .Where(line => !string.IsNullOrWhiteSpace(line)) // skip empty lines
                .Select(line =>
                {
                    string[] parts = line.Split(',');
                    return new Henkilö
                    {
                        Nimi = parts[0].Trim(),
                        Osoite = parts[1].Trim(),
                        Maa = parts[2].Trim()
                    };
                })];

            return henkilöt;
        }
    }
}
