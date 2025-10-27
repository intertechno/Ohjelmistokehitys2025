# Tarkistetaan Defenderin tila
Get-MpComputerStatus | Select AMServiceEnabled, AntivirusEnabled, RealTimeProtectionEnabled, NISProtectionEnabled, QuickScanAge

# Päivitetään haittaohjelmatietokanta ja suoritetaan pikaskannaus
Update-MpSignature
Start-MpScan -ScanType QuickScan

# Näytetään viimeisimmät havaitut uhat
Get-MpThreat

# Lisätään, tarkistetaan ja poistetaan poikkeuspolku Defenderistä
Add-MpPreference -ExclusionPath "C:\Temp"
Get-MpPreference | Select -ExpandProperty ExclusionPath
Remove-MpPreference -ExclusionPath "C:\Temp"
