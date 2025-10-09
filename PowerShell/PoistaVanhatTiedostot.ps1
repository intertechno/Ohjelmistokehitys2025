# PowerShell Script: Delete files older than 60 days
# --------------------------------------------------
# This script deletes all files in the specified folder
# that are older than 60 days. Subfolders can optionally
# be included.

# === CONFIGURATION ===
$FolderPath = "C:\Path\To\Your\Folder"   # <-- Change this to your folder path
$DaysOld    = 60                         # Files older than this number of days will be deleted
$IncludeSubfolders = $true               # Set to $false if you don't want to include subfolders

# === SCRIPT ===
# Calculate the cutoff date
$CutoffDate = (Get-Date).AddDays(-$DaysOld)

Write-Host "Deleting files older than $DaysOld days from: $FolderPath"
Write-Host "Cutoff date: $CutoffDate"
Write-Host "Including subfolders: $IncludeSubfolders"
Write-Host ""

# Get and delete old files
Get-ChildItem -Path $FolderPath -File -Recurse:$IncludeSubfolders | Where-Object {
    $_.LastWriteTime -lt $CutoffDate
} | ForEach-Object {
    try {
        Remove-Item $_.FullName -Force -ErrorAction Stop
        Write-Host "Deleted: $($_.FullName)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to delete: $($_.FullName). Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Cleanup complete."
