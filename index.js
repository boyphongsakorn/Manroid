const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow() {
  // Create browser window
  win = new BrowserWindow({minWidth:1080, minHeight:720, icon:__dirname+'/img/logo.png',autoHideMenuBar: true,frame: false,webPreferences:{webviewTag:true,nodeIntegration: true}})

  // Load index.html
  win.loadURL('file://' + __dirname + '/index.html');

  win.maximize();
}

// Run create window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});