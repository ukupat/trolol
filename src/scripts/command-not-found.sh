#!/bin/bash

echo "alias $1=\"echo '-$0: $1: command not found';\"" >> ~/.bash_profile;

# TODO Reloading bash profile is NOT working
. ~/.bash_profile;

echo 'NB! Close the tab/window and open a new one! Trololol..'

sleep 2
