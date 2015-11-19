program="$1"
times=$2
wait=$3
range=$4

function justDoIt() {

    for ((n=0;n<$times;n++));
    do
        # sleep for a random duration, between $range and $wait minutes
        sleep_time=$(((RANDOM % (range * 60)) + ($wait * 60) + 1));
        # echo "sleeping for $sleep_time"
        sleep $sleep_time 
        # find and shut off anything that matches $program
        pkill -9 "$program"
    done
}

justDoIt &

echo "F***ing $program keeps crashing every $wait to $(($wait+$range)) minutes! trolologlodyte..."