#!/bin/sh

function program_is_installed {
  # set to 1 initially
  local return_=1
  # set to 0 if not found
  type $1 >/dev/null 2>&1 || { local return_=0; }
  # return value
  echo "$return_"
}

if [ ! $(program_is_installed brew) ]
  then
    echo "-- install homebrew...";
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

if [ ! $(program_is_installed node) ]
  then
    echo "-- install node...";
    brew install node;
fi

if [ ! $(program_is_installed sketchtool) ]
  then
    echo "-- install sketchtool...";
    curl -L https://raw.githubusercontent.com/cognitom/gulp-sketch/master/install-sketchtool.sh | sudo sh
fi

brew install librsvg

export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig

if [ ! $(program_is_installed nvm) ]
  then
    echo "-- install nvm...";
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

echo "-- install node"
nvm install && nvm use

echo "-- install dependencies...";
npm install
