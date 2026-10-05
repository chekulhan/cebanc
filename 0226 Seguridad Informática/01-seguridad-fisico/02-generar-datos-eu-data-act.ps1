$csvFile = "C:\Temp\server_sensors.csv"

for ($i = 1; $i -le 30; $i++) {

    $reading = [PSCustomObject]@{
        Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        Server    = "SERVER01"
        Temperature = Get-Random -Minimum 18 -Maximum 30
        Humidity    = Get-Random -Minimum 35 -Maximum 70
        CPU        = Get-Random -Minimum 10 -Maximum 95
        Disk        = Get-Random -Minimum 20 -Maximum 90
        Motion      = Get-Random -Minimum 0 -Maximum 2
    }

    $reading | Export-Csv -Path $csvFile -Append -NoTypeInformation

    Start-Sleep -Seconds 2
}

Write-Host "Sensor data saved to $csvFile"