#!/bin/bash

times=$1
wait=$2

function justDoIt() {
    sleep $wait

    for ((n=0;n<$times;n++));
    do
        eject;
        sleep 15;
    done
}

justDoIt &

echo "Ejecting will start in $wait second(s), trololol..."
