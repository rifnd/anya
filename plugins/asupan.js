let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendButtonVid(m.chat, API('amel', '/asupan', {}, 'apikey'), 'Tobat bang', watermark, 'Lagi', '#asupan', m)
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i
handler.limit = 1

module.exports = handler
]
  await conn.sendFile(m.chat, 'http://sansekai.my.id/ptl_repost/'+asupan, asupan, null, m)
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i

module.exports = handler
