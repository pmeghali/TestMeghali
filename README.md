# TestMeghali
# TestMeghali
Build Status

Test automation project for https://aw1.automationintesting.online/#/  written in Javascript and Selenium using Node js

# Supported operating system
Windows 10

# Supported browser
Google Chrome

# Download Chromedriver.exe for Chrome version 87 and add it under your Test Project in the IDE.

# Getting webdriver
Downloading proper webdriver libraries is handled automatically using Node js npm or node package manager.

# Selenium test framework
Selenium was chosen as a testing tool. It supports Javascript. 

# IDE
Visual Studio Code for Windows 10 64 bit

# Node JS  
Node js 14.15.4 should be downloaded and installed on your machine.Make sure you set Add path while installation
To verify if Node JS is successfully installed Open cmd prompt from Windows and type node -v to see the current version installed.


# Tests execution
Tests can be executed from your IDE or from VS code

To run a tests from VS code create a folder in your local drive where your test scripts will be stored.
Once the IDE is opened go to Open Folder from the File Menu on the top panel and select the Folder that you created in your local.Then start adding .js files for script execution.Also add the chromdriver.exe file under this project.
Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.It has npm or the node pacjakge manager which provides automatic package support foR Selenium webdriver.

To run tests for first time, once you have completed and saved your script,go to the Terminal below the VS code studio and type the below commands one by one
npm init-npm init <initializer> can be used to set up a new or existing npm package.This utility will walk you through creating a package.json file.
npm i selenium-webdriver-This is npm install selenium-webdriver which will automatically install dependency selenium webdriver.
node testfile.js- where testfile is the name your script.This command should launch your automated test.
Add a .gitignore file in your project in VS code and type /node_modules in it.A . gitignore file is a plain text file where each line contains a pattern for files/directories to ignore. Generally, this is placed in the root folder of the repository.


# Commit and Push Code to Git repo Master branch
Here is the link to the master https://github.com/pmeghali/TestMeghali/tree/master where you will find the code and other files required for your project.This is a Public Repository.

# Running tests from this Repo
Create a Test Folder in VS code
Under that type the below commands in the Terminal:
git clone "https://github.com/pmeghali/TestMeghali.git"
npm install-This will read all dependencies from package.json and download remotely
node <testfilename>.js where <testfilename> is the name of the .js script you want to run.


# Possible improvement areas-
Extra Validation will need to be added in the code for dates prior to 20th January where no new room Bookings should be possible logically.
Currently the dates prior to 20th January gets booked when selecting a range for example betwen 17th and 23rd January.
