import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Hallo\Kak\n
*ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ᴀʀᴜʟʟʙᴏᴛᴢ ʏᴀɴɢ ʙɪꜱᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ ꜱᴛɪᴄᴋᴇʀ ᴅᴀɴ ʟᴀɪɴ",ꜱᴀʏᴀ ᴅɪᴄɪᴘᴛᴀᴋᴀɴ ᴏʟᴇʜ ꜱᴀʜʀᴜʟʟ,ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ꜰɪᴛᴜʀ ᴀʀᴜʟʟʙᴏᴛᴢ ꜱɪʟᴀʜᴋᴀɴ ᴘᴇɴᴄᴇᴛ ᴛᴏᴍʙᴏʟ ʙᴜᴛᴛᴏɴ ᴅɪʙᴀᴡᴀʜ 👇* `
await conn.send2ButtonDoc(m.chat, `${htki} ᴜ s ᴇ ʀ s ${htka}`, info, 'Owner', '.owner', 'Menu', '.m', fgif, adReply)
await conn.sendMessage(m.chat, {
          react: {
            text: '🥶',
            key: m.key,
          }})
}
handler.help = [''menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu)$/i


export default handler
