let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch(API('waifupics', '/sfw/bully'))
  if (!res.ok) throw eror
  let json = await res.json()
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nih Kak', wm, 'Get Again', usedPrefix + command, m)
}
handler.help = ['bully']
handler.tags = ['anime']
handler.command = /^(bully)$/i

module.exports = handler
