#! /bin/bash

# Linux
# export MYIP=`ip addr show wlan0 | grep -Po 'inet \K[\d.]+'`
# Mac
#export MYIP=`ipconfig getifaddr en0`
export MYIP=localhost

tmux new-session -s upring -n baseswim -d
tmux send-keys -t upring "export MYIP=$MYIP" C-m
tmux send-keys -t upring "export PATH=`pwd`/node_modules/.bin:$PATH" C-m
tmux send-keys -t upring 'baseswim --host $MYIP --port 7979 -V | pino' C-m
tmux new-window -n upring-3042
tmux send-keys -t upring "export MYIP=$MYIP" C-m
tmux send-keys -t upring "export PATH=`pwd`/node_modules/.bin:$PATH" C-m
tmux send-keys -t upring 'sleep 1' C-m
tmux send-keys -t upring "node chat -P 10 -p 3042 $MYIP:7979 -V | pino" C-m
tmux new-window -n upring-3043
tmux send-keys -t upring "export MYIP=$MYIP" C-m
tmux send-keys -t upring "export PATH=`pwd`/node_modules/.bin:$PATH" C-m
tmux send-keys -t upring 'sleep 1' C-m
tmux send-keys -t upring "node chat -P 10 -p 3043 $MYIP:7979 -V | pino" C-m
tmux new-window -n upring-3044
tmux send-keys -t upring "export MYIP=$MYIP" C-m
tmux send-keys -t upring "export PATH=`pwd`/node_modules/.bin:$PATH" C-m
tmux send-keys -t upring 'sleep 1' C-m
tmux send-keys -t upring "node chat -P 10 -p 3044 $MYIP:7979 -V | pino" C-m
tmux new-window -n upring-control
tmux send-keys -t upring "export MYIP=$MYIP" C-m
tmux send-keys -t upring "export PATH=`pwd`/node_modules/.bin:$PATH" C-m
tmux send-keys -t upring 'sleep 1' C-m
tmux send-keys -t upring "upring-control -P 10 -p 8042 $MYIP:7979 -v | pino" C-m
tmux new-window -n nginx
tmux send-keys -t upring 'nginx -c `pwd`/nginx.conf' C-m
tmux new-window -n curl
tmux attach -t upring
