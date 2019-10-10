printf "\033c"

echo "1. removing .out..."
rm -fr .out
echo "2. removing bin..."
rm -fr bin
echo "3. building app..."
magic-script build
magic-script install
magic-script run

say -v Melina done
