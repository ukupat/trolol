#!/bin/bash

times=$1
wait=$2

function justDoIt() {
    sleep $wait

    for ((n=0;n<$times;n++));
    do
        open -a "Photo Booth";
        sleep $(((RANDOM % 10) + 1));
    done
}

(justDoIt) &

echo "Photo Booth will start appearing in $wait second(s), trololol..."
