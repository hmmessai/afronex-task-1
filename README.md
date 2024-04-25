# Afronex-task-1

This project is done on the basis of the given task for the internship at Afronex tech hub. It is a simple nodejs web app that uses expressjs and reactjs to display blog posts in the order of their publishing date.

## Backend/api

The backend of this project is located inside the folder called api since its basically and api. And as mentioned before, the backend uses expressjs to serve the api which we will be using on the frontend. The documentation is inside the api directories readme file [README.md](./api/README.md)

## Frontend

The frontend is done using reactjs. It only has one page which is the home page. The home page displays the blog posts in the order of their publishing date, most recent first and the oldest last.

### !!Important Note

When you run the frontend, you will need to run the backend first. After that you will have to change the BaseUrl in the file [api.jsx](./frontend/src/endPoint/api.jsx) to the endpoint of your backend server.

#### Feel Free to try it yourself!
