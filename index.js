const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow() {
  // Create browser window
  win = new BrowserWindow({width:800, height:600, icon:__dirname+'/logo.png'})

  // Load index.html
  win.loadURL('file://' + __dirname + '/index.html');

  win.maximize();

  win.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });

  win.on('closed', () => {
    win = null;
  });
}

// Run create window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if(process.platform !== 'win32'){
    app.quit();
  }
});