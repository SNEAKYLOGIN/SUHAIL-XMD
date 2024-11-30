const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348116490332";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348138989068,2349135749865";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_00_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NixcbiAgICAgICAgODcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI5LFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICAzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgNixcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwialk2NmFTbDMwN2RTTXQrMG1aYzAyUi95THcyYUs5VXlKclN5K3I5U3NyYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0hPZWtfakFSalctZ1FuMkZSTFFKd1wiLFxuICBcInBob25lSWRcIjogXCI4ZTEwOTg1ZC03NjQ1LTQxZWEtOGM1MC1mODA5NTRhNGMxMTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMjIzLFxuICAgICAgNzIsXG4gICAgICAxMTIsXG4gICAgICAzMyxcbiAgICAgIDE1OSxcbiAgICAgIDE5MyxcbiAgICAgIDI1MSxcbiAgICAgIDk5LFxuICAgICAgNDcsXG4gICAgICAyNDIsXG4gICAgICAyNTAsXG4gICAgICAxOTQsXG4gICAgICA5NCxcbiAgICAgIDIxOSxcbiAgICAgIDQyLFxuICAgICAgMTQwLFxuICAgICAgNzcsXG4gICAgICAxMzAsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDEzMSxcbiAgICAgIDE0NSxcbiAgICAgIDY3LFxuICAgICAgMTk4LFxuICAgICAgMjAzLFxuICAgICAgNTMsXG4gICAgICAxMjAsXG4gICAgICAzNSxcbiAgICAgIDkyLFxuICAgICAgMjMsXG4gICAgICAyMDAsXG4gICAgICAxMzYsXG4gICAgICAyNTMsXG4gICAgICAxODEsXG4gICAgICA3OSxcbiAgICAgIDY4LFxuICAgICAgMTIzLFxuICAgICAgMjM2LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlIS1MzQUQxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTE2NDkwMzMyOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NTIxOTg0NDQxOTc2Njo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUFBtODBGRVBpc25yb0dHRGdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFNeDU3V003RkpjM3FXWkJvMkhzMml1ME11cDZhNTlCZ2NscVQ3c0dNVDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFpWbng1eUlCcC9mY2lmUURTSW9sZHNEUkFQUTk3ZlNjZzRFRm1pSC8ybU5lRkwvWGwvbUJDMVpoL0FVRlZzSEY0K01WcjYvMGhxUHZuQnIwR3F4QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQVM3Q0JVS2FGYk5WUS9nVkFrdDVqOS9oQ1VON2lvQklpLzVVTWJXaHg1c2VkaklWalhPWStpYjZXS2w4bGJ6QVgvNGFZUFUvelUydW9jUWJzVFpWanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODExNjQ5MDMzMjo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3NDQ4MjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "{R.D} WIZARD✓",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //read_status: process.env.AUTO_READ_STATUS || "TRUE",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
