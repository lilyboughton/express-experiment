import { orderDefinition } from "@/apiSpec/definitions/order";

export const orderById = {
    "get": {
        "tags": [
            "store"
        ],
        "summary": "Find purchase order by ID",
        "description": "For valid response try integer IDs with value \u003E= 1 and \u003C= 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "produces": [
            "application/json",
            "application/xml"
        ],
        "parameters": [
            {
                "name": "orderId",
                "in": "path",
                "description": "ID of pet that needs to be fetched",
                "required": true,
                "type": "integer",
                "maximum": 10,
                "minimum": 1,
                "format": "int64"
            }
        ],
        "responses": {
            "200": {
                "description": "successful operation",
                "schema": orderDefinition
            },
            "400": {
                "description": "Invalid ID supplied"
            },
            "404": {
                "description": "Order not found"
            }
        }
    },
    "delete": {
        "tags": [
            "store"
        ],
        "summary": "Delete purchase order by ID",
        "description": "For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors",
        "operationId": "deleteOrder",
        "produces": [
            "application/json",
            "application/xml"
        ],
        "parameters": [
            {
                "name": "orderId",
                "in": "path",
                "description": "ID of the order that needs to be deleted",
                "required": true,
                "type": "integer",
                "minimum": 1,
                "format": "int64"
            }
        ],
        "responses": {
            "400": {
                "description": "Invalid ID supplied"
            },
            "404": {
                "description": "Order not found"
            }
        }
    }
}