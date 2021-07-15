const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
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
