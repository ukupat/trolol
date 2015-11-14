#!/bin/bash

times=$1
wait=$2

function justDoIt() {
    sleep $wait

    for ((n=0;n<$times;n++));
    do
        sleep 15;
        osascript -e 'tell application "Spotify" to previous track';
    done
}

justDoIt &

echo "Previous Spotify track troll is activated in $wait second(s), trololol..."
