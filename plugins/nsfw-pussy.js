let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch(API('rey', '/api/nsfw/pussy', 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Ini kak', watermark, 'Get Again', usedPrefix + command, m)
}
handler.help = ['nsfwpussy']
handler.tags = ['nsfw']
handler.limit = 1
handler.nsfw = 1
handler.command = /^(nsfwpussy)$/i

module.exports = handler
