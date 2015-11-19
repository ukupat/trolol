#!/bin/bash

from=$2
to=$1

if [ $# -eq 2 ]  
	then	
		IP=$(nslookup $2 | tail -2 | awk -F ":" '{print $2}' | xargs)
		echo "$IP $1" >> /etc/hosts
		exit 0
		
	else
		echo "Atleast 2 command line arguments have to be supplied."
		echo "e.g. $0 delfi.ee facebook.com"
		exit 1
fi