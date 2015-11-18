cycles="$1"
rest="$2"
wait="$3"

i="0"

function doit() {

    sleep $wait

    while [ $i -lt $cycles ]
    do
        say "mmm" -v "Fred"
        sleep $rest
        i=$[$i+1]
    done

}

echo "Make sure the speakers work. You will receive reassurance every $rest seconds, a total of $cycles times, trololol..."

doit &
