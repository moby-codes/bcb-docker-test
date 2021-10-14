# Engineering Project 3: coding quiz

## description







## initial setup 

clone this repo 
open folder inside your code editor and run the following command 

``` npm install ```` 

Then open the client folder and run the commnad again. 

## running tests 

type into the terminal 

``` cd client ```

followed by the command 

''' npm test ''' 

click 'a' to run all tests and the terminal will run all test suites. 

## Serving up the application 

Open up the client folder in the terminal 

Open the main folder in a second terminal window in 

Once both these are open start the server by typing the following command in both terminal windows 

``` npm start ``` 

This initialise the server and client side of the application. 


## Set up the database config.env file

In root directory, create a new file `config.env` containing the following:

```
ATLAS_URI=mongodb+srv://mern:<password>@finalproject.xik8i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Make sure to change <password> to the DB password.
