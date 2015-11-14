#!/bin/bash


IP= nslookup $1 | tail -2 | awk -F ":" '{print $2}' | xargs
echo "$IP" >> asd.txt 
