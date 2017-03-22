'use strict'

const yo = require('yo-yo')
const nes = require('nes')
const css = require('sheetify')

css('tachyons')

const state = {
  subscriptions: [],
  messages: []
}

console.log(document.URL)
const client = new nes.Client(document.URL.replace('http', 'ws'))
client.connect(function (err) {
  if (err) {
    alert('errored')
    return
  }
})

const el = page()
document.body.appendChild(el)

function publishForm () {
  return yo`
    <div class="fl pa2 w-100-m w-50-ns">
      <div class="pa2 outline w-100 h-50">
        <div class="fl w-100-m w-50-ns">
          <label class="fl w-30">Topic:</label>
          <input class="fl w-60" type="text" id="pubTopic"/>
        </div>
        <div class="fl w-100-m w-50-ns">
          <label class="fl v-top w-30">Payload:</label>
          <textarea class="fl w-60" id="pubPayload"></textarea>
        </div>
        <a class="f6 dim br3 ph3 pv2 mb2 dib white bg-mid-gray mv2" onclick=${onclick}>Publish</a>
      </div>
    </div>
  `

  function onclick () {
    const topic = '/' + document.getElementById('pubTopic').value
    const payload = document.getElementById('pubPayload').value

    client.request({
      path: '/publish',
      method: 'POST',
      payload: {
        topic,
        payload
      }
    }, function (err, result) {
      if (err) {
        throw err
      }

      console.log('publish successful')
    })
  }
}

function subscriptions () {
  return yo`
    <ul class="list pl0">
      ${state.subscriptions.map((sub) => yo`<li>${sub}</li>`)}
    </ul>
  `
}

function subscribeForm () {
  return yo`
    <div class="fl pa2 w-100-m w-50-ns">
      <div class="fl pa2 outline w-100">
        <div class="fl w-100-m w-50-ns">
          <label >Topic:</label>
          <input id="subTopic" type="text"/>
          <a class="f6 dim br3 ph3 pv2 mb2 dib white bg-mid-gray" onclick=${onclick}>Subscribe</a>
        </div>
        <div class="fl w-100-m w-50-ns">
          <b>Current Subscriptions</b>
          ${subscriptions()}
        </div>
      </div>
    </div>
  `

  function onclick () {
    const el = document.getElementById("subTopic")
    const topic = `/${el.value}`
    if (state.subscriptions.indexOf(topic) >= 0) {
      alert('topic already added')
      return
    }

    client.subscribe(topic, onMessage, function (err) {
      if (err) {
        throw err
      }
      state.subscriptions.push(topic)
      update()
    })

    function onMessage (payload) {
      console.log('received message', topic, payload)
      state.messages.push({ topic, payload })
      update()
    }
  }
}

function list () {
  return yo`
    <div class="fl w-100 pa2">
      <h3>Received Messages</h3>
      <ul class="list pl0">
        ${state.messages.map((msg) => yo`
          <li class="outline pa2 mv2">
            <b>${msg.topic}</b> - ${JSON.stringify(msg.payload)}
          </li>`)}
      </ul>
    </div>
  `
}

function page () {
  return yo`
<div class="pa4 ma3 fl w-100">
  ${publishForm()}
  ${subscribeForm()}
  ${list()}
</div>`
}

function update () {
  yo.update(el, page())
}
