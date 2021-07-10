Server sent event implementation

## RUN
1. npm install
2. npm start

## To Run Server Sent Events
1. Open url http://localhost:3000
2. Open url on another page http://localhost:3000/dbEntry dummy url for db Change
3. You will see a Notification on page opened in step 1

## To Use Bitly API
1. Create .env file in root folder
2. Add value BITLY_TOKEN and BITLY_GUID from bitly developer tools.
3. From Postman hit url http://localhost:3000/url/shortenUrl?long_url={{URL_TO_SHORTEN}}
4. In response you will get shorten url in field short_url.