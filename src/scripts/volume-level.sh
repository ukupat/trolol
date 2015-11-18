#!/bin/bash

bin=$1
length=$2
wait=$3

function justDoIt() {
    sleep $wait

    for ((n=0;n<$length;n++));
    do
        sleep 3;
        random=$(((RANDOM % 10) + 1));

        if [ $random == 10 ]; then
           $bin 1
        else
           $bin "0.$random"
        fi
    done
}

justDoIt &

echo "Random volume level loop is going to be activated in $wait second(s), trololol..."
