function StopScheduleTasks ()
{
	($TaskScheduler = New-Object -ComObject Schedule.Service).Connect("localhost")
	$MyTask = $TaskScheduler.GetFolder('\').GetTask("Reset CCProxy Software")
	$MyTask.Enabled = $false
}

Get-Process -Name "CCProxy" | Stop-Process
Get-Process -Name "lantern" | Stop-Process
Set-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings' -name AutoConfigURL -Value ""

StopScheduleTasks