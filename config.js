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


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255747086926";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255747086926";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_52_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICA5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNixcbiAgICAgICAgNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY0LFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKdlZkZGU2SEhETVV5T0ZxQXRNRnhXZyt6WjlMdWlDUTNwdEFjem5zejFJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYdXZJV2cxWFJBLV8zcDlRcFI4cmZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQwZmVjMzE0LTMxZmUtNGU2Mi05ZmY1LWZkODhjZjI3YjRhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAyNDEsXG4gICAgICA4MCxcbiAgICAgIDI1MCxcbiAgICAgIDE5NixcbiAgICAgIDQxLFxuICAgICAgODAsXG4gICAgICA5OSxcbiAgICAgIDE4MCxcbiAgICAgIDEwOCxcbiAgICAgIDE4MSxcbiAgICAgIDg0LFxuICAgICAgMjUzLFxuICAgICAgNDksXG4gICAgICAxMTksXG4gICAgICAyMzYsXG4gICAgICAyNTIsXG4gICAgICA5OCxcbiAgICAgIDI0NSxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDE1MSxcbiAgICAgIDE4LFxuICAgICAgNjksXG4gICAgICAyMixcbiAgICAgIDE2NyxcbiAgICAgIDU2LFxuICAgICAgNTgsXG4gICAgICAyMzUsXG4gICAgICA3NSxcbiAgICAgIDExNixcbiAgICAgIDEyMSxcbiAgICAgIDE0OSxcbiAgICAgIDIxNCxcbiAgICAgIDIyNSxcbiAgICAgIDE4OSxcbiAgICAgIDEwOSxcbiAgICAgIDQ5LFxuICAgICAgMjIsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0w2VjFBQThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0NzA4NjkyNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk7jwnZO48J2TvSDwnZO48J2TryDwnZO88J2TvfCdk7jwnZO38J2TrlwiLFxuICAgIFwibGlkXCI6IFwiMTU1NTU5OTA3MDQ1NTA2OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG11emk4UWlNdjN0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvNmx4Skp5S3BRcWxIZzJ4enBxZkwvamlsdGExOVMzckRvN3FNZm9RYTJZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlo2ZmM3UXBFdXlBUmZ3ZE5VaHErQlM5alJXWFNqMWJHdW1uSUJ1SkdCdGV2NEVrRHU2d0VlVEZmNjJLWkplN2NidUdYdXk4ZmxZL29sMHZac2xzT0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlV5NHVjcHZGNnZmakJtbG90Y0hSRXVsQk9hOUdOZDgzNnZzWTN0TlNIeWZ2VXM4YzRnaE0walJSaHI1OGlLZWk3cnA0NFlwM0tKVFRuOUpNSEppNWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc0NzA4NjkyNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjIzOTQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRXJvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFcm8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzZmx3Rjh6OVJnMU1rR0VNd3BQdkhxWEROaU8xTVprb2JtZm1XTks0L2hnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5ODUwMDQwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTYyMzE2MDQzNVwifSIKfQ=="  // PUT your SESSION_ID  

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
