# Chat-Vue3-Mongoose

## Introduction

This is a simple full stack React application which provides a solid starting point for [Mongoose](https://mongoosejs.com/), [ExpressJS](https://expressjs.com/), [Vue.js](https://vuejs.org/) and [NodeJS](https://nodejs.org/en/) based applications. Client side code is written in React and the backend API is written using Express.

Chat is a program in an application that uses an internet connection and communication devices to be able to send messages from one person to another. So far, chat is the most efficient and effective form of communication today.

## Before You Begin

Before you begin i recommend you to read about the basic building blocks that assemble this application:
* Mongoose - Go through [Mongoose Official Website](https://mongoosejs.com/) and proceed to their [Official Manual](https://mongoosejs.com/docs/guide.html), which should help you understand NoSQL and Mongoose better.
* Express - The best way to understand express is through it's [Official Website](https://expressjs.com/), which has a [Getting Started](https://expressjs.com/en/starter/installing.html) guide, as well as an [ExpressJS](https://expressjs.com/en/guide/routing.html) guide for general express topics.
* Vue.js - Vue [Official Website](https://vuejs.org/) is a great starting point.
* Node.js - Start by going through [Node.js Official Website](https://nodejs.org/en/) which should get you going with the Node.js platform.

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
* Mongoose - [Download & Install Mongoose](https://mongoosejs.com/docs/index.html), and make sure it's running on the default port (27017).

## front-end

 - VueJS (ES6)
 - vue-router (*Single Page Application*)
 - Pinia

*source files in `frontend/` folder.*
## back-end

 - NodeJS
 - ExpressJS
 - Mongoose
 - Socket.io

*source files in `backend/` folder*

## Quick Start

open terminal to run server,
*Please make sure your MongoDB (Mongoose) is running*

```bash
# Clone the repository
git clone https://github.com/abaz1d/Chat-Vue3-Mongoose

# Go inside the directory
cd Chat-Vue3-Mongoose

# Install dependencies for server
cd backend && npm install

# Start server
npm start
```

open new terminal to run client

```bash
# Go inside the directory
cd Chat-Vue3-Mongoose

# Install dependencies for client
cd frontend && npm install

# Start client
npm run dev
```

this application should run on port 5173 , you can access it through browser, just go to [http://localhost:5173/](http://localhost:5173/) for Client Web App. and
[http://localhost:3000/](http://localhost:3000/) for RESTful APIs.

### Screenshots Client Web App
Youtube Video Preview : https://youtu.be/kVTX6w5UnVc <br/>
<img src="https://user-images.githubusercontent.com/95122515/194019273-58ff8d7e-2161-4619-8caf-a8b59a4a9aac.png" width="49%"> <img src="https://user-images.githubusercontent.com/95122515/194019368-f1f5fb07-b902-43c2-822d-c8a87ef52741.png" width="49%">


