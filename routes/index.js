var express = require('express');
var router = express.Router();
const request = require('request');
require('dotenv').config()

router.get('/shortenUrl', (req, res) => {
  var headers = {
      'Authorization': `Bearer ${process.env.BITLY_TOKEN}`,
      'Content-Type': 'application/json'
  };
  var data = { "long_url": req.query.long_url, "domain": "bit.ly", "group_guid": `${process.env.BITLY_GUID}` };
  var options = {
      url: 'https://api-ssl.bitly.com/v4/shorten',
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
  };

  request(options, (err,response)=>{
    if(!err){
      let data = JSON.parse(response.body);
      res.send({
        short_url:data.link,
        longUrl:data.long_url
      })
    }
  });

});

module.exports = router;
