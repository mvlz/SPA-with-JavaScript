const express = require("express");
const path = require("path");

const app = express();

app.use("/Client", express.static(path.resolve(__dirname, "Client")));

app.get("*/", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"Client","index.html"));
});
app.listen(process.env.PORT || 5000 , ()=> console.log("server is running ..."));