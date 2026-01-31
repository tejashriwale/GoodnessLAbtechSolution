@echo off
echo ========================================
echo  Goodness Labtech Solutions Website
echo  Production Build
echo ========================================
echo.
echo Building production version...
echo.

cd /d "%~dp0"
npm run build

echo.
echo ========================================
echo Build completed!
echo To start production server, run: npm start
echo ========================================
echo.

pause
