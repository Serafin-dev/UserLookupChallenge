# Users API

This API allows to obtain information about users through an endpoint.

## Endpoints

### Get user by ID

- Path: `/users`
- HTTP Method: `GET`
- Query parameters:
  - `id`: (required) ID of the user you want to get.
- Successful response:
  - HTTP status code: `200`
  - Content: JSON object with user information
- Errors:
  - HTTP status code: `400`
    - If the `id` parameter is missing in the query string.
    - If the value of `id` is not a valid integer
  - HTTP status code: `404`
    - If a user with the provided `id` is not found

#### Usage example

To get information about the user with ID 1, make a GET request to the following URL:
http://url/users?id=1

The response will be a JSON object containing the information of the user with ID 1:

```json
{
    "id": 1,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
}
```
If the provided ID does not exist, the response will be a JSON object with an error message and HTTP 404 status code:
```json
{
  "error": "User with id 1 not found"
}
```
## Tests

The test file './test/index.test.js' contains tests to verify the behavior of the API in different cases:

1. Check that the `/users` endpoint is declared.
2. Check that a 400 status code is returned when the 'id' parameter is not specified.
3. Check that the response type is JSON.
4. Check that sending `/users?id=1` retrieves user 1.
5. Check that a 400 status code is returned when the 'id' parameter is not a valid integer.
6. Check that a 404 status code is returned for an 'id' out of range.
7. Check that sending `/users?id=2` retrieves user 2.
