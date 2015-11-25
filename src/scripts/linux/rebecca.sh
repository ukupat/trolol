#!/bin/bash

(sleep $2; xdg-open $1)  > /dev/null 2>&1
echo "Trigger has been set for $2 seconds, trololol.."
