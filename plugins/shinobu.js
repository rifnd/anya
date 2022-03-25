let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/shinobu')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nieh Banh', wm, 'Get Again', '/shinobu', m)
}
handler.help = ['shinobu']
handler.tags = ['anime']
handler.command = /^(shinobu)$/i

module.exports = handler
