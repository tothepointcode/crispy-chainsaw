// This is the main starting point for the electron application

const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // web preferences key added to load preload script
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { preload: path.join(__dirname, "preload.js") },
    preload: path.join(__dirname, "preload.js"),
  });

  win.loadFile("index.html");

  // testing with a url instead
  // win.loadURL("https://github.com");

  // printing out content
  // const contents = win.webContents;
  // console.log(contents);
}

// checking if app is ready before starting
app.whenReady().then(() => {
  createWindow();

  // for mac os activation after closing
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// for windows and linux
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
