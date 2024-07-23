const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255682528550" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255682528550";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255682528550";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255682528550";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_15_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg3LFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpZcGtPTENRTDA2QkNUcWRCNXlqM0VNRlkzYVdhNlBoT2RtaFppdzNDeTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjgyNTI4NTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMkRGMTAzMUREQjZBMUZGQTM4NTBFMDZGNkY1NTY1RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MTg5MzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2ODI1Mjg1NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY0Qjc3MDQ5NUVFODY0NDA0QUJGQTk4Mzc4NTdGREVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTcxODk0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3My1CXzM1aVRMLWJNQ1Bqa3FkSndRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE4ZTU1OTg2LThhNjQtNDUwMi04ZmVkLTMxOGU2YjNiZDZmNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICAxMjksXG4gICAgICAyMjAsXG4gICAgICAxNjAsXG4gICAgICAxNyxcbiAgICAgIDE2MyxcbiAgICAgIDMxLFxuICAgICAgMjM1LFxuICAgICAgNzMsXG4gICAgICAzMixcbiAgICAgIDE5MyxcbiAgICAgIDEyNSxcbiAgICAgIDE4MixcbiAgICAgIDY5LFxuICAgICAgMjQ0LFxuICAgICAgMTUsXG4gICAgICA1MyxcbiAgICAgIDEwNSxcbiAgICAgIDc4LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAyMTQsXG4gICAgICAxNjgsXG4gICAgICA4NCxcbiAgICAgIDg3LFxuICAgICAgMjMyLFxuICAgICAgOTYsXG4gICAgICA2NyxcbiAgICAgIDEzMyxcbiAgICAgIDE1OSxcbiAgICAgIDExOSxcbiAgICAgIDY5LFxuICAgICAgNzYsXG4gICAgICAyMzEsXG4gICAgICAxMDUsXG4gICAgICAyMDksXG4gICAgICAyNDUsXG4gICAgICAxNDYsXG4gICAgICAxMzYsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjIxUDdYRTNKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2ODI1Mjg1NTA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk5OTA5NzA1Nzg1NDIxOjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGVtYm9uaVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092Sngra0dFSk94L2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidU1EM1JmQXJ2RWlvaytNWlJhWFpFMHhyWXdnMXlZaGF5dGsrOGI1cWh5dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJcGJDWTNuWTY0dFo4RXAweVIyQ0VsaE1pNlJxc2ZBZEh2T3lwa3ZmaExKN0ZlMWZKdWpGWFNodDJMemxkbFhpRCtPV2dEVTdWc3ZTN0ZWTERDUzVBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4Z0IyWjkvTXlyY2dtSVB5VU4rU0M2aUxscjl1bjVxZTk4V3BHUlNGdHp2SExGbkg0L2lEcEp6Yit1M285c3VmUEV2OUJyNVFMbEx0b1I2bzFNc29pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2ODI1Mjg1NTA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MTg5MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJNE5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUk0Ti5qc29uIjogIntcImtleURhdGFcIjpcImxMajhaelZ5anpjUTFKa0RvdjQvRjZPcGJEeDFFV2lpMXdlKzlFSk5Ya2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgzMTk4NjQxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNzE4OTM5MDk2XCJ9Igp9"  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "LEMI BOT",
  ownername:process.env.OWNER_NAME|| "Lemi_boniFEM",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
