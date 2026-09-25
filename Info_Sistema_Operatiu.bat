@echo off
:: Configurar codificación UTF-8 para que los acentos y símbolos se vean bien
chcp 65001 > nul

echo Executant les comandes...

echo.

echo Informació Completa del Sistema Operatiu
systeminfo | findstr /I /C:"OS" /C:"Sistema"

echo.

echo Nom del Sistema Operatiu
systeminfo | findstr /B /C:"Nombre del sistema operativo" /C:"Versión del sistema operativo"

echo.

echo Sistema Operatiu i Versió
powershell -Command "Get-CimInstance Win32_OperatingSystem | Select-Object Caption, Version"

echo.

echo Verificar espai disponible:
powershell -Command "Get-PSDrive C | Select-Object Used, Free"

powershell -Command "Get-PSDrive C | Select-Object @{Name='Used (GB)'; Expression={[math]::Round($_.Used / 1GB, 2)}}, @{Name='Free (GB)'; Expression={[math]::Round($_.Free / 1GB, 2)}}"


echo.
echo Tot executat correctament!
pause