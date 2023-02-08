## About:

Movieland is a basic web app in React (simplified version of the FILMPIRE application).
There is an option to search for the name of a movie from database.\
For a database was used an extern API - OMDb API (detailed explanation below)
[Guide](https://www.youtube.com/watch?v=b9eMGE7QtTk&ab_channel=JavaScriptMastery)

<img src="/public/1.png" style="height: 350px;">
<img src="/public/2.png" style="height: 100px;">
<img src="/public/3.png" style="height: 350px;">

#### Getting Started with Create React App

This project was bootstrapped with [Create New React App](https://reactjs.org/docs/create-a-new-react-app.html).

## Dependencies:

To install all development dependencies from package.json run:

#### `npm install`

## OMDb API:

IMDb is the authoritative source of all movie information, but they don’t have a public API. So to retrieve movie information we can use at OMDb (Open Movie Database) API - a free web service to obtain movie information.

#### Generate API Key:

<img src="/public/4.png" style="height: 200px;">

- [Go to this link](https://www.omdbapi.com/apikey.aspx).
- Account Type - select FREE option.
- Enter your details and click Submit. After a few seconds you will receive an email with your key.
- Activate the key by click the URL at bottom of email.
- Copy the key and paste it into the App.js file, in line 5, inside the empty quotation marks.

## Run React development server:

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
