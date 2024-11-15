import { orderDefinition } from "@/apiSpec/definitions/order";

export const order = {
    "post": {
        "tags": [
            "store"
        ],
        "summary": "Place an order for a pet",
        "description": "",
        "operationId": "placeOrder",
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
                "description": "order placed for purchasing the pet",
                "required": true,
                "schema": orderDefinition
            }
        ],
        "responses": {
            "200": {
                "description": "successful operation",
                "schema": orderDefinition
            },
            "400": {
                "description": "Invalid Order"
            }
        }
    }
}