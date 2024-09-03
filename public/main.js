/**
 * This is your main process file :3
 * Here you can use node.js to control your application
 * You can use ipcMain to listen to messages from the renderer process, and ipcRenderer to send messages to the renderer process
 * For more info: https://www.electronjs.org/docs/latest/tutorial/process-model#the-main-process
 */

const { app, BrowserWindow } = require('electron');
const path = require("path")
if (!app.isPackaged) var { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 450,
    minHeight: 430,
    width: 800,
    height: 600,
    webPreferences: {
      devTools: !app.isPackaged,
      preload: path.join(__dirname, "preload.js"),
    }
  });

  win.loadURL(app.isPackaged ? `file://${path.join(__dirname, "../build/index.html")}` : "http://localhost:3000");
  if (!app.isPackaged) installExtension(REACT_DEVELOPER_TOOLS).then((name) => console.log(`Added Extension:  ${name}`)).catch((err) => console.log('An error occurred: ', err));
}

app.on('ready', createWindow);