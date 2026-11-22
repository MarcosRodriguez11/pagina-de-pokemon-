Set-Location "C:\Users\Marcos\.kiro\crew\workspace\practica4"
npm install 2>&1 | Out-File tools\setup.log
npm run sass 2>&1 | Out-File -Append tools\setup.log
