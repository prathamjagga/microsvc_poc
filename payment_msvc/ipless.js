const app = require("express")();

app.get("/", (req, res) => {
	// console.log("REQUEST OBJECT", req);
	console.log(req.headers.host);
	console.log("REQUEST IP", req.socket.remoteAddress);
	console.log();
	res.json({ success: "true" });
});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});
