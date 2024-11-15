import { petDefinition } from "@/apiSpec/definitions/pet";

export const pet = {
    "put": {
        "tags": [
            "pet"
        ],
        "summary": "Update an existing pet",
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": {
            "description": "Update an existent pet in the store",
            "content": {
                "application/json": {
                    "schema": petDefinition
                },
                "application/xml": {
                    "schema": petDefinition
                },
                "application/x-www-form-urlencoded": {
                    "schema": petDefinition
                }
            },
            "required": true
        },
        "responses": {
            "200": {
                "description": "Successful operation",
                "content": {
                    "application/json": {
                        "schema": petDefinition
                    },
                    "application/xml": {
                        "schema": petDefinition
                    }
                }
            },
            "400": {
                "description": "Invalid ID supplied"
            },
            "404": {
                "description": "Pet not found"
            },
            "422": {
                "description": "Validation exception"
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
    },
    "post": {
        "tags": [
            "pet"
        ],
        "summary": "Add a new pet to the store",
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": {
            "description": "Create a new pet in the store",
            "content": {
                "application/json": {
                    "schema": petDefinition
                },
                "application/xml": {
                    "schema": petDefinition
                },
                "application/x-www-form-urlencoded": {
                    "schema": petDefinition
                }
            },
            "required": true
        },
        "responses": {
            "200": {
                "description": "Successful operation",
                "content": {
                    "application/json": {
                        "schema": petDefinition
                    },
                    "application/xml": {
                        "schema": petDefinition
                    }
                }
            },
            "400": {
                "description": "Invalid input"
            },
            "422": {
                "description": "Validation exception"
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