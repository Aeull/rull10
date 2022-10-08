import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `𝐇𝐚𝐥𝐥𝐨\ 𝐊𝐚𝐤 *${conn.getName(m.sender)}*\n
*𝐒𝐚𝐲𝐚 𝐀𝐝𝐚𝐥𝐚𝐡 𝐀𝐫𝐮𝐥𝐥𝐁𝐨𝐭𝐳 𝐘𝐚𝐧𝐠 𝐁𝐢𝐬𝐚 𝐌𝐞𝐦𝐛𝐚𝐧𝐭𝐮 𝐀𝐧𝐝𝐚 𝐔𝐧𝐭𝐮𝐤 𝐌𝐞𝐦𝐛𝐮𝐚𝐭 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐃𝐚𝐧 𝐋𝐚𝐢𝐧",𝐒𝐚𝐲𝐚 𝐃𝐢𝐜𝐢𝐩𝐭𝐚𝐤𝐚𝐧 𝐎𝐥𝐞𝐡 𝐒𝐚𝐡𝐫𝐮𝐥𝐥,𝐔𝐧𝐭𝐮𝐤 𝐌𝐞𝐥𝐢𝐡𝐚𝐭 𝐅𝐢𝐭𝐮𝐫 𝐀𝐫𝐮𝐥𝐥𝐁𝐨𝐭𝐳 𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐏𝐞𝐧𝐜𝐞𝐭 𝐓𝐨𝐦𝐛𝐨𝐥 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢𝐛𝐚𝐰𝐚𝐡👇* `
await conn.send3ButtonDoc(m.chat, info, '⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕', 'LιʂƚMҽɳυ', '.m', 'Oɯɳҽɾ', '.owner', 'Dσɳαʂι', '.donasi', fgif, fakeig)
await conn.sendMessage(m.chat, {
          react: {
            text: '🥶',
            key: m.key,
          }})
}
handler.customPrefix = /^(menu|.menu)$/i
handler.command = new RegExp


export default handler
