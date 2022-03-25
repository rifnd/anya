let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch(API('waifupics', '/sfw/bite'))
  if (!res.ok) throw eror
  let json = await res.json()
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nih kak', watermark, 'Get Again', usedPrefix + command, m)
}
handler.help = ['bite']
handler.tags = ['anime']
handler.command = /^(bite)$/i

module.exports = handler
