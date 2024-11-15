import { userDefinition } from "@/apiSpec/definitions/user";

export const userByUsername = {
    "get": {
        "tags": [
            "user"
        ],
        "summary": "Get user by user name",
        "description": "",
        "operationId": "getUserByName",
        "produces": [
            "application/json",
            "application/xml"
        ],
        "parameters": [
            {
                "name": "username",
                "in": "path",
                "description": "The name that needs to be fetched. Use user1 for testing. ",
                "required": true,
                "type": "string"
            }
        ],
        "responses": {
            "200": {
                "description": "successful operation",
                "schema": userDefinition
            },
            "400": {
                "description": "Invalid username supplied"
            },
            "404": {
                "description": "User not found"
            }
        }
    },
    "put": {
        "tags": [
            "user"
        ],
        "summary": "Updated user",
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "consumes": [
            "application/json"
        ],
        "produces": [
            "application/json",
            "application/xml"
        ],
        "parameters": [
            {
                "name": "username",
                "in": "path",
                "description": "name that need to be updated",
                "required": true,
                "type": "string"
            },
            {
                "in": "body",
                "name": "body",
                "description": "Updated user object",
                "required": true,
                "schema": userDefinition
            }
        ],
        "responses": {
            "400": {
                "description": "Invalid user supplied"
            },
            "404": {
                "description": "User not found"
            }
        }
    },
    "delete": {
        "tags": [
            "user"
        ],
        "summary": "Delete user",
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "produces": [
            "application/json",
            "application/xml"
        ],
        "parameters": [
            {
                "name": "username",
                "in": "path",
                "description": "The name that needs to be deleted",
                "required": true,
                "type": "string"
            }
        ],
        "responses": {
            "400": {
                "description": "Invalid username supplied"
            },
            "404": {
                "description": "User not found"
            }
        }
    }
}