#!/bin/bash

length=$1
wait=$2

function justDoIt() {
    sleep $wait

    for ((n=0;n<$length;n++));
    do
        sleep 3;
        random=$(((RANDOM % 10) + 1));
        osascript -e "set Volume $random";
    done
}

(justDoIt) &

echo "Random volume level loop is going to be activated in $wait second(s), trololol..."
