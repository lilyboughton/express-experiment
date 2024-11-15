import { petDefinition } from "../../definitions/pet";

export const findByStatus = {
    "get": {
        "tags": [
            "pet"
        ],
        "summary": "Finds Pets by status",
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": [
            {
                "name": "status",
                "in": "query",
                "description": "Status values that need to be considered for filter",
                "required": false,
                "explode": true,
                "schema": {
                    "type": "string",
                    "default": "available",
                    "enum": [
                        "available",
                        "pending",
                        "sold"
                    ]
                }
            }
        ],
        "responses": {
            "200": {
                "description": "successful operation",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "array",
                            "items": petDefinition

                        }
                    },
                    "application/xml": {
                        "schema": {
                            "type": "array",
                            "items": petDefinition
                        }
                    }
                }
            },
            "400": {
                "description": "Invalid status value"
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