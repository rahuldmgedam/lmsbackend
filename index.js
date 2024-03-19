const express  = require("express");
const { connection } = require("./config/db");

const {ProjectRouter} = require("./routes/project.route")
const cors = require('cors');

const { ProductRouter } = require("./routes/product.router");

const app = express();
app.use(express.json());
app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:5173', // Replace with your frontend URL
//     methods: ['GET', 'POST'] // Specify the HTTP methods allowed
//   }));
// app.use(bodyParser);
app.use("/project", ProjectRouter)
app.use("/product", ProductRouter)


const  port = 4500 
app.listen(port, async()=> {
    try {
       await connection
       console.log("data base is connected") 
       console.log(`server is running at ${port}`)
    } catch (error) {
       console.log(error) 
    }
})
