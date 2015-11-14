#!/bin/bash

from=$1
to=$2

IP=$(nslookup $2 | tail -2 | awk -F ":" '{print $2}' | xargs)

echo "$IP $1" >> /etc/hosts
