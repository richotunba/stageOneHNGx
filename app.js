const http = require ('http');

const express = require("express");

const app = express();

 app.use(express.json());

 const headSetter = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')

  next()
}

app.use(headSetter)


app.get('/api', (req, res) =>{

  const slack_name = req.query.slack_name;
  const track = req.query.track;

     let currentDate = new Date()
     let utc_time = currentDate.toISOString().slice(0, -5) + 'Z';
   
     const currentDayNumber = currentDate.getDay();
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    
    const currentDayName = daysOfWeek[currentDayNumber];
    
    const details = {
      "slack_name": `${slack_name}`,
      "current_day": `${currentDayName}`,
      "utc_time": `${utc_time}`,
      "track": `${track}`,
      "github_file_url": "https://github.com/richotunba/stageOneHNGx/blob/main/app.js",
      "github_repo_url": "https://github.com/richotunba/stageOneHNGx",
      "status_code": 200
  }

      res.status(200).json(details);

  
 });
 


const PORT = process.env.PORT || 4000;

app.listen(4000, 'localhost', () =>{  
  console.log("app Listening on port 4000")

});