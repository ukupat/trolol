#!/bin/bash

echo "alias $1=\"echo '-bash: $1: command not found';\"" >> ~/.bash_profile;

# TODO Reloading bash profile is NOT working
. ~/.bash_profile;

echo 'Close the tab/window and open a new one! Muhaha'
