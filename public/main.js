const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  //load the index.html from a url
  win.loadURL("http://localhost:3000");

  //open the devtools
  win.webContents.openDevTools();
};

//method will be called when electron has finished
//initialization and is ready to create browser windows.
//somea pis can only be used after this event occurs
app.whenReady().then(createWindow);

//quit when all windows are closed, except macos
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
