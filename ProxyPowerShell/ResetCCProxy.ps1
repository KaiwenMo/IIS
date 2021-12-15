$FindProcess = Get-Process -Name "CCProxy" -ErrorAction SilentlyContinue

  if($FindProcess)
  {
    Get-Process -Name "CCProxy" | Stop-Process
    Start-Process -FilePath "D:\CCProxy\CCProxy.exe" -Verb RunAs -WindowStyle Minimized #Start Proxy
    Write-Host "CCProxy is successfully restarted." -ForegroundColor Green
  }
  else
  {
    Write-Host "No action is taken." -ForegroundColor Gray
  }
