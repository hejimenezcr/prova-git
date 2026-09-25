@echo off
:: Configurar codificación UTF-8 para que los acentos y símbolos se vean bien
chcp 65001 > nul

echo Executant les comandes...

echo.

echo Versió de Node.js:
call node --version

echo.

echo Versió de NPM:
call npm --version

echo.

echo Versió de Visual Studio Code:
call code --version

echo.

echo Versió de Git:
call git --version

echo.

echo Versió d'Angular CLI:
call ng version

echo.
echo Tot executat correctament!
pause