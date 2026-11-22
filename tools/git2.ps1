$g = "C:\Program Files\Git\bin\git.exe"
Set-Location "C:\Users\Marcos\.kiro\crew\workspace\practica4"
Add-Content .gitignore "tools/*.log"
& $g init -b main 2>&1 | Out-File tools\git.log
& $g config user.name "MarcosRodriguez11"
& $g config user.email "MarcosRodriguez11@users.noreply.github.com"
& $g add .gitignore package.json package-lock.json *.html css scss img tools 2>&1 | Out-File -Append tools\git.log
& $g commit -m "Practica 4: Bootstrap y SASS" 2>&1 | Out-File -Append tools\git.log
& $g status --short 2>&1 | Out-File -Append tools\git.log
