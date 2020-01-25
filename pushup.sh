#!/usr/bin/env bash

gatsby build
rsync -avz -L --progress -h ./public/ freya:/home/freyabison/100days.bike/ 
