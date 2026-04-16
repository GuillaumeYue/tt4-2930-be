const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {
        socket.emit("socket:ready", {
            message: "Websocket conncetion established."
        })
    });

    return io;
}

const emitTaskCreated = (task) => {
    if(!io) return;
    io.emit("task:created", { data: { task } });
}

const emitTaskUpdated = (task) => {
    if(!io) return;
    io.emit("task:updated", { data: { task } });
}

const emitTaskDeleted = (taskId) => {
    if(!io) return;
    io.emit("task:deleted", { data: { taskId } });
}

module.exports = { initializeSocket, emitTaskCreated, emitTaskUpdated, emitTaskDeleted };
