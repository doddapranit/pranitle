## Setting up the application
The client (React app) and the server (Node server) must be run on different ports, or through separate terminal windows when running it locally.

To get the repository onto your machine, you'll want to clone it with the following bash command:
```
git clone https://github.gatech.edu/pdodda6/wordle.git
```

Next, you'll want to install any dependencies in both the client and server applications. To do so, you'll want to run the following:
```
cd client/wordle && npm install && cd ../..
cd server && npm install && cd ..
```

## Running the application

To run the client application, run the following bash commands:
```
cd Client/wordle
npm start
```

To run the server application, run the following bash commands:
```
cd Server
npm run dev
```

To quit these servers, click Control-C

You can test to see if the server (API) is running properly by checking the output of the following command (in another window):
```
curl localhost:3001/
