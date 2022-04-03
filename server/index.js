const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "information",
});


app.get("/api/get", (req, res)=> {
  const sqlSelect = "SELECT * FROM vulnerabilityreport";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
})

app.post("/api/insert", (req, res) => {
  const ipAddress = req.body.IPAddress;
  const hostName = req.body.Hostname;
  const Port = req.body.Port;
  const portocol = req.body.Protocol;
  const cvss = req.body.CVSS;
  const severity = req.body.Severity;
  const timeStamp = req.body.TimeStamp;

  db.query(
    "INSERT INTO vulnerabilityreport (ipAddress, hostname, port, protocol, cvss, severity, timeStamp) VALUES (?,?,?,?,?,?,?)",
    [ipAddress, hostName, Port, portocol, cvss, severity, timeStamp],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );



  console.log(ipAddress);
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
