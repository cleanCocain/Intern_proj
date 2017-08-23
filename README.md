# Intern_proj application

this is a sample application using es6 with JavaScript. for this we need to install babel and webpack.
I have included a tutorial descrie about setting-up the working environment.
https://sdilakshan.wixsite.com/internproj/es6-sample-tutorials

Setting up babel.
​
​
go to the directory of the project folder and open the console. type 
​
            npm init      (to install the package.json file)
​
after this command we will be asking for some inputs here we need to keep pressing enter. at the end of this process we can see a package.json file is created.
​
Installing babel-cli and babel-core
​
            npm install babel-cli babel-core --save-dev
​
There are different ways to install and run Babel. For example, you could also install Babel globally and run it from the command line. Refer to the Babel documentation for more information.
​
Installing ECMAScript 2015 preset
​
            npm install babel-preset-es2015 --save-dev
​
In Babel 6, every transformer is a plugin that can be installed separately. A preset is a group of related plugins. Using a preset, you don’t have to install and update dozens of plugins individually.
​
Installing the http server
​
            npm install http-server --save-dev
​
We are using a local web server because some parts of this tutorial require the application to be loaded using the http protocol and will not work if loaded using the file protocol.
​
after done all above installations we have to configure the package.json file. open the package.json file and under the "Script" tag we can see a attribute call "test", replace it with following two parameters.
​
         "scripts": {
       "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
       "start": "http-server"
    },
​
after edit, we have to create another folder in the root directory. create a folder "build". this is the place where the converted folder will be saved.
​
​
Build and Run.
​
**this process is a conversion between two files. the code we write in ES6 will be converted to browser native reading language like javascript es5 using "babel".

we can compile the written code using 
           
                  npm run babel  
​
after compiling we can see a .js file is created inside the "build" folder we created before.
*** since we are going to use the converted file for our page,we need to change the script location of our file in "index.html" file. change it to,
​
                 <script src="build/main.bundle.js"></script>
​
now lets start the server using
​
                  npm start
​
Open a browser and access http://localhost:8080. we can see our web page running. if you are unable to access the port 8080, u can change the default port in the package.json file under "start" tag:
​
                 "start": "http-server -p 9000"



Lets setup Webpack.
​
go to our project directory and open the terminal. in that run

         npm install babel-loader webpack --save-dev
​
Open package.json in your code editor, and add a webpack script (right after the babelscript). The scripts section should now look like this:
​
         "scripts": {
         "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
         "start": "http-server",        
         "webpack": "webpack"
   },
​
In the es6-tutorial directory, create a new file named webpack.config.js defined as follows:


​var path = require('path');
var webpack = require('webpack');
module.exports = {
​
     entry: {
         main:'./js/main.js',
},
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
              {
                    test: /\.js$/,  
                    loader: 'babel-loader',
                    query: {
                           presets: ['es2015']  
                     }
               }
           ]
      },
      stats: {
           colors: true
      },
      devtool: 'source-map'
};
​


Build Using Webpack
​
On the command line, make sure you are in the es6-tutorial directory and type the following command:

            npm run webpack
