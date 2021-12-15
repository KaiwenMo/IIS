Get-Process -Name "CCProxy" | Stop-Process
Get-Process -Name "lantern" | Stop-Process
Set-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings' -name AutoConfigURL -Value ""