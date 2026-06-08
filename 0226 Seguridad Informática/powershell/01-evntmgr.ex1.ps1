# Challenge Twist: One hidden Error among many entries
$users = @("student1","student2","student3","student4","student5",
           "student6","student7","student8","student9","student10",
           "student11","student12")

# Pick ONE random user who will trigger the error
$targetUser = Get-Random -InputObject $users

foreach ($user in $users) {
    if ($user -eq $targetUser) {
        # The single Error event
        Write-EventLog -LogName Application `
                       -Source "Application Error" `
                       -EntryType Error `
                       -EventId 2001 `
                       -Message "Simulated login FAILURE for $user"
    }
    else {
        # Random Warning or Information for the other users
        $types = @("Warning","Information")
        $type = Get-Random -InputObject $types
        $eventId = if ($type -eq "Warning") { 3001 } else { 4001 }

        Write-EventLog -LogName Application `
                       -Source "Application Error" `
                       -EntryType $type `
                       -EventId $eventId `
                       -Message "Simulated ${type}: login activity for $user"
    }

    Start-Sleep -Milliseconds 500 # stagger timestamps a bit
}
