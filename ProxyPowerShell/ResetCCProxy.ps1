function StopScheduleTasks ()
{
	($TaskScheduler = New-Object -ComObject Schedule.Service).Connect("localhost")
	$MyTask = $TaskScheduler.GetFolder('\').GetTask("Reset CCProxy Software")
	$MyTask.Enabled = $false
}

$FindProcess = Get-Process -Name "CCProxy" -ErrorAction SilentlyContinue

  if($FindProcess)
  {
    Get-Process -Name "CCProxy" | Stop-Process
    Start-Process -FilePath "D:\CCProxy\CCProxy.exe" -Verb RunAs -WindowStyle Minimized #Start Proxy
  }
  else
  {
    StopScheduleTasks
  }
