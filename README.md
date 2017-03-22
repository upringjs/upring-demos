# upring-demos

Some demos about [UpRing](https://github.com/mcollina/upring).

## Prerequisites

1. clone this repository, or download its source code
2. run `npm install` in this repository directory

This has been tested on node v6.9.4.

## Key Value Store

[upring-kv](https://github.com/mcollina/upring)

### Requirements

* tmux
* nginx

### To start

Adjust `./demo-kv.sh` to your liking, and run it.

### Example

```bash
curl -X POST -d 'hello upring' localhost:3043
curl -v localhost:3044
# on another shell
curl localhost:3042?live=true # use SSE to send updates
# one more shell
curl -X POST -d 'by Matteo' localhost:3043
# kill one of the peers
# and try again
```

You can also use the nginx instance that has been spawned as
http://localhost:8082, it is configured to load balance across all
the peers.

## Publish Subscribe system (chat)

[upring-pubsub](https://github.com/mcollina/upring-pubsub) and
[multines](https://github.com/mcollina/upring-pubsub).

### Requirements

* tmux
* nginx

### To start

Adjust `./demo-kv.sh` to your liking, and run it.

### Demo Script

Point your browser to http://localhost:8082 for the load balancer,
or to http://localhost:3042, http://localhost:3043,
http://localhost:3044 instances. Wildcards `#` and
`+` works as well.
You can kill any of the peers, and the messages will keep flowing.

Check http://localhost:8042 what is happening with [upring-control](https://github.com/mcollina/upring-control).

## License

MIT
