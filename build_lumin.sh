printf "\033c"

echo "1. building app..."
magic-script build -i
magic-script run

say -v Melina 'build done'
