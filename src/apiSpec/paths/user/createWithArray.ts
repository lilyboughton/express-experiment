import { userDefinition } from "@/apiSpec/definitions/user";

export const createWithArray = {
    "post": {
        "tags": [
            "user"
        ],
        "summary": "Creates list of users with given input array",
        "description": "",
        "operationId": "createUsersWithArrayInput",
        "consumes": [
            "application/json"
        ],
        "produces": [
            "application/json",
            "application/xml"
        ],
        "parameters": [
            {
                "in": "body",
                "name": "body",
                "description": "List of user object",
                "required": true,
                "schema": {
                    "type": "array",
                    "items": userDefinition
                }
            }
        ],
        "responses": {
            "default": {
                "description": "successful operation"
            }
        }
    }
}