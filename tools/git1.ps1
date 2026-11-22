$g = "C:\Program Files\Git\bin\git.exe"
Set-Location "C:\Users\Marcos\.kiro\crew\workspace\practica4"
"gh: " + (Get-Command gh -ErrorAction SilentlyContinue).Source | Out-File tools\git.log
& $g status 2>&1 | Out-File -Append tools\git.log
