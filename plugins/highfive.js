let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch(API('waifupics', '/sfw/highfive'))
  if (!res.ok) throw eror
  let json = await res.json()
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nih Kak', wm, 'Get Again', usedPrefix + command, m)
}
handler.help = ['highfive']
handler.tags = ['anime']
handler.command = /^(highfive)$/i

module.exports = handler
