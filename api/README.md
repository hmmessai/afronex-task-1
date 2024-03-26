# API Documentation

This api is done to facilitate the fetching of data from the database.

## Environment Variables

Setting up the environment variables will help you work on your environment. This can be done by creating a local `.env` file containing the following environment variables with your specific database and port information.

| Environment Variable | Value it should contain                                     |
| -------------------- | ----------------------------------------------------------- |
| PORT                 | The port to run the api server on. Default is 3005          |
| DB_HOST              | The database host name or IP address. Default is localhost. |
| DB_DATABASE          | The database name.                                          |
| DB_USER              | The database username.                                      |
| DB_PASS              | The database password.                                      |

## Deployment

After you are done with setting up your environment you will need to start the server, by writing `npm run dev` command on your terminal window or if you have nodemon you can just use `nodemon` to start your api server.

## Endpoints

The API has the following endpoints for accessing data.
| Endpoint | Request type | Expected values in json | Return Value |
| -------- | ------------ | ----------------------- | ------------ |
| /post/add| POST |user_id, title, content | data: { post_id: _some value_ }|
| /post/all | GET | | Array of post objects with the following format:- data: [{ id: *some value*, user_id: *some value*, title: *some value*, content: *some value*, name: *some value*} ] |
