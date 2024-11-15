import { apiResponseDefinition } from "@/apiSpec/definitions/apiResponse";

export const uploadImageById = {
    "post": {
        "tags": [
            "pet"
        ],
        "summary": "uploads an image",
        "description": "",
        "operationId": "uploadFile",
        "parameters": [
            {
                "name": "petId",
                "in": "path",
                "description": "ID of pet to update",
                "required": true,
                "schema": {
                    "type": "integer",
                    "format": "int64"
                }
            },
            {
                "name": "additionalMetadata",
                "in": "query",
                "description": "Additional Metadata",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }
        ],
        "requestBody": {
            "content": {
                "application/octet-stream": {
                    "schema": {
                        "type": "string",
                        "format": "binary"
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "successful operation",
                "content": {
                    "application/json": {
                        "schema": apiResponseDefinition
                    }
                }
            }
        },
        "security": [
            {
                "petstore_auth": [
                    "write:pets",
                    "read:pets"
                ]
            }
        ]
    }
}