let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/kiss')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nieh Banh', wm, 'Get Again', '/kiss', m)
}
handler.help = ['kiss']
handler.tags = ['anime']
handler.command = /^(kiss)$/i
//ftwrr
module.exports = handler
