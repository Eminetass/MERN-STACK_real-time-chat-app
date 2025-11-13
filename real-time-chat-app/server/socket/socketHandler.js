export default (io) => {
  io.on("connection", (socket) => {
    console.log("🟢 Kullanıcı bağlandı:", socket.id);

    socket.on("join", (username) => {
      socket.username = username;
      io.emit("user:online", username);
    });

    socket.on("send:message", (msg) => {
      io.emit("receive:message", msg);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Kullanıcı ayrıldı:", socket.username);
      io.emit("user:offline", socket.username);
    });
  });
};
