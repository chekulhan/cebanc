# Student exercise: hidden device error in System log
# Requires running PowerShell as Administrator

# List of devices to simulate
$devices = @("Camera1","Camera2","Printer1","USBDevice1","Webcam1",
             "ExternalHDD","Microphone1","Monitor1","Keyboard1","Mouse1")

# Randomly pick one device to generate the actual error
$targetDevice = Get-Random -InputObject $devices

foreach ($device in $devices) {
    if ($device -eq $targetDevice) {
        # The real device error
        Write-EventLog -LogName System `
                       -Source "System" `
                       -EntryType Error `
                       -EventId 10010 `
                       -Message "Simulated DEVICE ERROR: $device failed to initialize properly"
    }
    else {
        # Other devices generate Warning or Information
        $types = @("Warning","Information")
        $type = Get-Random -InputObject $types
        $eventId = if ($type -eq "Warning") { 10020 } else { 10030 }

        Write-EventLog -LogName System `
                       -Source "System" `
                       -EntryType $type `
                       -EventId $eventId `
                       -Message "Simulated ${type}: $device status check"
    }

    Start-Sleep -Milliseconds 500 # stagger timestamps
}