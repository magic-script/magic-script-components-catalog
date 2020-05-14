printf "\033c"

echo "1. Terminating app..."
mldb terminate -f org.magicscript.catalog

echo "\n2. Building app..."
magic-script build -i
magic-script run

say -v Melina 'lumin build done'
