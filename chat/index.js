'use strict'

const Hapi = require('hapi')
const nes = require('nes')
const multines = require('multines')
const inert = require('inert')
const UpringPubSub = require('upring-pubsub')
const hapiPino = require('hapi-pino')
const path = require('path')

const args = require('minimist')(process.argv.slice(2), {
  boolean: ['help', 'verbose'],
  default: {
    port: 0,
    points: 100,
    timeout: 1000,
    verbose: false
  },
  alias: {
    port: 'p',
    points: 'P',
    timeout: 't',
    verbose: 'V'
  }
})

const upringOpts = {
  base: args._,
  logLevel: args.verbose ? 'debug' : 'info',
  hashring: {
    replicaPoints: args.points,
    joinTimeout: args.timeout
  }
}

// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: args.port
})


const plugin = {
  register: multines.register,
  options: {
    mq: new UpringPubSub(upringOpts)
  }
}

server.register([hapiPino, inert, nes, plugin], function (err) {
  if (err) {
    throw err
  }

  server.subscriptionFar('/{id}')
  server.route({
    path: '/echo',
    method: 'POST',
    handler: (req, reply) => {
      server.publishFar('/echo', req.payload)
      reply(req.payload)
    }
  })

  server.route({
    path: '/publish',
    method: 'POST',
    handler: (req, reply) => {
      const body = req.payload
      server.publishFar(body.topic, body.payload)
      reply()
    }
  })

  server.route({
    path: '/',
    method: 'GET',
    handler: {
     file: path.join(__dirname, 'index.html')
    }
  })

  server.route({
    path: '/bundle.js',
    method: 'GET',
    handler: {
     file: path.join(__dirname, 'bundle.js')
    }
  })
})

// Add the route
server.route({
  method: 'GET',
  path:'/hello',
  handler: function (request, reply) {
    return reply('hello world')
  }
})

// Start the server
server.start((err) => {
  if (err) {
    throw err
  }

  // expose the address for UpRing monitoring
  plugin.options.mq.upring.info.url = server.info.uri
})
