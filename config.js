Rostone00/FANTASTICS-BOT const fs = require('fs-extra')
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


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner255747086926= process.255747086926.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255747086926";




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
global.255747086926 =  process.env.READ_STATUS_FROM  ||  "255747086926";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_51_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUY1Q1cXZhdndObCtydXdMVFdrZmpEL1hoNzRZTWNWK3ZrU2F1S1NsaHZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1UnFxSXBCZ1FqLVh1ZmVGdnBwNHlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwNjQ4MTIzLTJlYWYtNGM2ZC05YTQxLTUzOWFhNDM2NWI3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAxNDEsXG4gICAgICAxMjksXG4gICAgICAyMjcsXG4gICAgICAyMzIsXG4gICAgICAyMjcsXG4gICAgICAxODQsXG4gICAgICAxODcsXG4gICAgICAxNTMsXG4gICAgICAxNjksXG4gICAgICAxNDgsXG4gICAgICAxMDAsXG4gICAgICAxMTYsXG4gICAgICAxMzEsXG4gICAgICAyMzEsXG4gICAgICAxMjYsXG4gICAgICAyMTMsXG4gICAgICAyMzQsXG4gICAgICAyNyxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAxNDMsXG4gICAgICA2OSxcbiAgICAgIDE2LFxuICAgICAgMTQ5LFxuICAgICAgNzYsXG4gICAgICAxOTIsXG4gICAgICAxOTQsXG4gICAgICA1LFxuICAgICAgNzMsXG4gICAgICAyNixcbiAgICAgIDE5LFxuICAgICAgMTI5LFxuICAgICAgMTY0LFxuICAgICAgMjIxLFxuICAgICAgMTM1LFxuICAgICAgODMsXG4gICAgICAyMTUsXG4gICAgICAxMCxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGRVNBUkhTS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQ3MDg2OTI2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TuPCdk7jwnZO9IPCdk7jwnZOvIPCdk7zwnZO98J2TuPCdk7fwnZOuXCIsXG4gICAgXCJsaWRcIjogXCIxNTU1NTk5MDcwNDU1MDY6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMaXV6aThROXBicXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi82bHhKSnlLcFFxbEhnMnh6cHFmTC9qaWx0YTE5UzNyRG83cU1mb1FhMlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicEY5ZzVkMC9zMzRFNE5uQ1YyTmlycHo2clBha21BcTF5emFJVktRNHE3OWVrUmVVN2s4ZGE1NnNZNDE0MHF1cmx6Q3FzZ3dzWXNjVitEK0NqaVVCQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDIxWE1ZZzlZVHVMRk5vREJwQzlQaHJPVndLWTdMbkJtdzVtSEVsQ2JZZkM5WWhzQzFldmdQZ3N4Tzd3ZkphUXhvVzk1czB2YmpCRmlidUFBcnBVaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQ3MDg2OTI2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0MDQyODJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID  

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
