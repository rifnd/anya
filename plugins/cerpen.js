let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('amel', '/cerpen', {}, 'apikey'))

    let json = res.data
    conn.sendButton(m.chat, json.judul, json.cerita, 'Lagi', `${usedPrefix + command}`, m)
}
handler.help = ['cerpen']
handler.tags = ['internet']
handler.limit = true
handler.command = /^(cerpen)$/i

module.exports = handler
