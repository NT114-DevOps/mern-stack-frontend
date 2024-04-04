# Motion Assists (Front-end)
Made using [ReactJS](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/)

## About
Motion Assists is an IT helpdesk app with a simple ticketing system. 

The main purpose of this app is to be used in the development of the Ci/CD pipeline of our major DevOps project.

## Features
+ Easy to use UI
+ Ticketing system with CRUD operations

## Instructions
1. Clone the repository
```
git clone https://github.com/NT114-DevOps/mern-stack-frontend.git
```

2. Install independencies with `npm install`

3. Create .env file for environment variables
```
REACT_APP_API=<Your API URL>

(eg: REACT_APP_API=http://localhost:4000/api/v1)
```

4. To run locally, run `npm start`
5. To run the app as a Docker container, run `docker build -t frontend-container .`
