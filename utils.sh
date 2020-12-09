function clean_screen() {
  printf "\033c"
}

function speak() {
  case "$OSTYPE" in
    # MacOS
    darwin*)  say -v Melina "$1" ;;
    # Linux
    linux*)   echo "$1" | espeak ;;
    # Other
    *)        echo "$1" ;;
  esac
}

function os() {
  case "$OSTYPE" in
    solaris*) echo "SOLARIS" ;;
    darwin*)  echo "OSX" ;;
    linux*)   echo "LINUX" ;;
    bsd*)     echo "BSD" ;;
    msys*)    echo "WINDOWS" ;;
    *)        echo "unknown: $OSTYPE" ;;
  esac
}
