cycles="$1"
rest="$2"
wait="$3"
voice="$4"

i="0"

function doit() {

    sleep $wait

    while [ $i -lt $cycles ]
    do
        say "mmm" -v $voice
        sleep $rest
        i=$[$i+1]
    done

}

echo "Make sure the speakers work. $voice will reassure you every $rest seconds, a total of $cycles times, trololol..."

doit &
