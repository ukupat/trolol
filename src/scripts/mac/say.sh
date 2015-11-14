#!/bin/bash

message=$1
voice=$2
wait=$3

(sleep $wait; say $message -v $voice) &

echo "NB! Make sure the speakers are not mute. Monolog will start in $wait second(s), trololol..."
