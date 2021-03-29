const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
    const win = new BrowserWindow({
        width: 550,
        height: 350,
        // resizable: false,
    });
    win.loadFile("index.html");

}
