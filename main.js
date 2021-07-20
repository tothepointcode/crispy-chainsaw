// This is the main starting point for the electron application

const { app, BrowserWindow } = require("electron");
const path = require("path");

// for env status: dev or production
const isDev = require("electron-is-dev");

// If dev, hot reload
if (isDev) {
  try {
    require("electron-reloader")(module, {
      debug: true,
      watchRenderer: true,
    });
  } catch (_) {
    console.log("Error of the century.");
  }
}

function createWindow() {
  // web preferences key added to load preload script
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#000",
  });

  win.loadFile("index.html");

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
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
