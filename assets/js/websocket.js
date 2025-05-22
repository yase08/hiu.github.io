const ws = new WebSocket("ws://localhost:8080");

function sendCommand(id) {
    const command = { id };
    ws.send(JSON.stringify(command));
}
