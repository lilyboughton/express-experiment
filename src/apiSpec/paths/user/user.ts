import { userDefinition } from "@/apiSpec/definitions/user";

export const user = {
    "post": {
        "tags": [
            "user"
        ],
        "summary": "Create user",
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
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
                "description": "Created user object",
                "required": true,
                "schema": userDefinition
            }
        ],
        "responses": {
            "default": {
                "description": "successful operation"
            }
        }
    }
}