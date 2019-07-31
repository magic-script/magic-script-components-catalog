printf "\033c"
rm -rf ./node_modules
echo "node_modules folder removed"
rm -rf yarn.lock
echo "yarn.lock file removed"

yarn
say -v Melina done
