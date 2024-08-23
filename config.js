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


global.devs = "255711579632" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255711579632";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255711579632";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_00_08_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNixcbiAgICAgICAgMTE4LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXbTlEVUNqZnkyQ254QnFUM1RpMmdubkFtcHFCYzlSOW9VaENjQzYyYTFZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTcxMTU3OTYzMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2NDREREJDQUJBQTcyOTc0MDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0MzY3NjE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzExNTc5NjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUM0NkRDREMwREE3MEJFRUU4NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjQzNjc2MjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNjFudU1UUllSVk9OS1hzUElBa3YtQVwiLFxuICBcInBob25lSWRcIjogXCI2MTQxMDNhYS00ZDRhLTRlMzYtYmEyZC04NjU5YmQ2OTRlYzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAyMzEsXG4gICAgICAyMzgsXG4gICAgICA0LFxuICAgICAgMTExLFxuICAgICAgMTAwLFxuICAgICAgMjA0LFxuICAgICAgOTQsXG4gICAgICAyMjMsXG4gICAgICAzMyxcbiAgICAgIDI0NixcbiAgICAgIDEyMSxcbiAgICAgIDE3MCxcbiAgICAgIDEwMCxcbiAgICAgIDY2LFxuICAgICAgNzAsXG4gICAgICAxNjQsXG4gICAgICAyMDAsXG4gICAgICAyMDUsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICAxOTUsXG4gICAgICA2NCxcbiAgICAgIDc2LFxuICAgICAgMTgsXG4gICAgICAxMSxcbiAgICAgIDE1NSxcbiAgICAgIDQ0LFxuICAgICAgMTAwLFxuICAgICAgMjI4LFxuICAgICAgNjgsXG4gICAgICAyMDQsXG4gICAgICAyMDYsXG4gICAgICA5NSxcbiAgICAgIDkwLFxuICAgICAgNjYsXG4gICAgICAyMDUsXG4gICAgICAyMDIsXG4gICAgICAxMTIsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGTENGM0NIUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzExNTc5NjMyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKUiAxN1wiLFxuICAgIFwibGlkXCI6IFwiMTcwNzY5NTc3OTg2NTM6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPalY0ZElMRVB5Rm43WUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxPNlhRY0J1TGJGWGZuWmlRK3pSbVZ3MGdMMytFZTVMMFp5Y3lzcWFBMXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ2xHVTZUOFFEK1RpRGhBaWdCRkY3ODdQeGdhQzQ3SEVXamZVZnFJdXE5MStUcjJ4bzF2d0Y4SjhtdWhHd3ZOQlNuT0s5djJaNmVTbGNMRTFEQ0I0amc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiengzdEQxbXh0TVJrTXV4b2xNeEVHejV2VEJRWEs2R1lRNzBpVHdxanMvTjJkcmRzUzZuVlYvVDBGL210SmwrdWI5bTBUWEFUbkRvakNCcHBvRUVXQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzExNTc5NjMyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDM2NzYxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlJaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUloLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaU1tWUo0RFkxS2xzbjhHU0tJbFRFV1hnNVBQb2ZWQ3ltalh3YWtjUGw3VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTI2MzU2NzEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjQzNjc2MTU3MjJcIn0iCn0="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
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
