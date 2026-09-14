# Puerto que queremos comprobar
$port = 5500

Write-Host "Comprobando el puerto $port..."
Write-Host ""

$connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue

if ($connection) {

    Write-Host "Puerto encontrado:"
    $connection | Format-Table LocalAddress, LocalPort, State, OwningProcess

    $pid = $connection[0].OwningProcess

    Write-Host ""
    Write-Host "Proceso:"
    Get-Process -Id $pid

} else {

    Write-Host "No hay ningún proceso escuchando en el puerto $port."
}

