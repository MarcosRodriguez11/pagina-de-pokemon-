Set-Location "C:\Users\Marcos\.kiro\crew\workspace\practica4"
node tools\fotos.js 2>&1 | Out-File tools\setup.log
npm run sass 2>&1 | Out-File -Append tools\setup.log
Get-ChildItem img | Out-File -Append tools\setup.log
Select-String -Path *.html -Pattern 'placehold' | Out-File -Append tools\setup.log
