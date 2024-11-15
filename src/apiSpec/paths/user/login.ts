export const login = {
    "get": {
        "tags": [
            "user"
        ],
        "summary": "Logs user into the system",
        "description": "",
        "operationId": "loginUser",
        "produces": [
            "application/json",
            "application/xml"
        ],
        "parameters": [
            {
                "name": "username",
                "in": "query",
                "description": "The user name for login",
                "required": true,
                "type": "string"
            },
            {
                "name": "password",
                "in": "query",
                "description": "The password for login in clear text",
                "required": true,
                "type": "string"
            }
        ],
        "responses": {
            "200": {
                "description": "successful operation",
                "headers": {
                    "X-Expires-After": {
                        "type": "string",
                        "format": "date-time",
                        "description": "date in UTC when token expires"
                    },
                    "X-Rate-Limit": {
                        "type": "integer",
                        "format": "int32",
                        "description": "calls per hour allowed by the user"
                    }
                },
                "schema": {
                    "type": "string"
                }
            },
            "400": {
                "description": "Invalid username/password supplied"
            }
        }
    }
}