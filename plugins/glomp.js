let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch(API('waifupics', '/sfw/glomp'))
  if (!res.ok) throw eror
  let json = await res.json()
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nih kak', wm, 'Get Again', usedPrefix + command, m)
}
handler.help = ['glomp']
handler.tags = ['anime']
handler.command = /^(glomp)$/i

module.exports = handler
