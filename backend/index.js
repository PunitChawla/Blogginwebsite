const express = require("express")
const cors = require("cors")
const rootRoute = require("./routes/index")
const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/v1" , rootRoute)

if(app.listen(3000))
{
    console.log("Server start ")
}