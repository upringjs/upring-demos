# upring-demos

Some demos about [UpRing](https://github.com/mcollina/upring).

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
