import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Hallo\Kak\n
*ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ᴀʀᴜʟʟʙᴏᴛᴢ ʏᴀɴɢ ʙɪꜱᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ ꜱᴛɪᴄᴋᴇʀ ᴅᴀɴ ʟᴀɪɴ",ꜱᴀʏᴀ ᴅɪᴄɪᴘᴛᴀᴋᴀɴ\nᴏʟᴇʜ ꜱᴀʜʀᴜʟʟ,ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ꜰɪᴛᴜʀ ᴀʀᴜʟʟʙᴏᴛᴢ\nꜱɪʟᴀʜᴋᴀɴ ᴘᴇɴᴄᴇᴛ ᴛᴏᴍʙᴏʟ ʙᴜᴛᴛᴏɴ ᴅɪʙᴀᴡᴀʜ 👇* `
await conn.send2ButtonDoc(m.chat, `${htki} ᴜ s ᴇ ʀ s ${htka}`, info, 'Owner', '.owner', 'Menu', '.m', fgif, fakeig)
await conn.sendMessage(m.chat, {
          react: {
            text: '🥶',
            key: m.key,
          }})
}
handler.customPrefix = /^(menu)$/i
handler.command = new RegExp


export default handler
