# 1) BIOS-valmistaja
$bios = Get-CimInstance -ClassName Win32_BIOS -ErrorAction Stop
echo "BIOS-valmistaja: $($bios.Manufacturer)"

# 2) C:-aseman koko ja vapaa tila
$disk = Get-CimInstance -ClassName Win32_LogicalDisk -Filter "DeviceID='C:'" -ErrorAction Stop
$maxKokoGB  = [math]::Round(($disk.Size / 1GB), 2)
$vapaaGB    = [math]::Round(($disk.FreeSpace / 1GB), 2)
echo "C:-aseman koko: $maxKokoGB GB"
echo "C:-aseman vapaa tila: $vapaaGB GB"

# 3) Verkkokortin tyyppi (fyysiset)
$nicList = Get-CimInstance -ClassName Win32_NetworkAdapter -Filter "PhysicalAdapter = True" `
          | Where-Object { $_.NetEnabled -eq $true -and $_.AdapterType -ne $null } `
          | Select-Object Name, AdapterType
Write-Host "Verkkokortit (nimi ja tyyppi):"
$nicList | ForEach-Object {
    Write-Host " - $($_.Name)  |  tyyppi: $($_.AdapterType)"
}
