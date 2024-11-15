export const inventory = {
    "get": {
        "tags": [
            "store"
        ],
        "summary": "Returns pet inventories by status",
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "produces": [
            "application/json"
        ],
        "parameters": [],
        "responses": {
            "200": {
                "description": "successful operation",
                "schema": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            }
        },
        "security": [
            {
                "api_key": []
            }
        ]
    }
}