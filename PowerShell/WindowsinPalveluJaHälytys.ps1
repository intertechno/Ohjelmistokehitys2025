$serviceName = "YourServiceName"
$service = Get-Service -Name $serviceName

if ($service.Status -ne 'Running') {
    # Try restart
    Restart-Service -Name $serviceName -Force
    
    # Send alert email
    Send-MailMessage -To "admin@yourdomain.com" -From "server@yourdomain.com" `
        -Subject "ALERT: $serviceName was down" `
        -Body "$serviceName was stopped on $(hostname). Restart attempted." `
        -SmtpServer "smtp.yourdomain.com"
}
