let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch(API('waifupics', '/sfw/slap'))
  if (!res.ok) throw eror
  let json = await res.json()
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nih kak', watermark, 'Get Again', usedPrefix + command, m)
}
handler.help = ['slap']
handler.tags = ['anime']
handler.command = /^(slap)$/i

module.exports = handler
