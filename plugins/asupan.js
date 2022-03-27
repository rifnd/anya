let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, API('mel', '/asupan', {}, 'apikey'), 'asupan.mp4', 'Tobat bang', m)
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.limit = 1
handler.command = /^(asupan)$/i

module.exports = handler
