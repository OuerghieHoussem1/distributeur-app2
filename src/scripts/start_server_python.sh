#!/bin/bash

cd /
cd home/pi/distributeur-app2/src/scripts
python -u command.py -o 9000 &> /home/pi/distributeur-app2/log/command.log 2>&1
