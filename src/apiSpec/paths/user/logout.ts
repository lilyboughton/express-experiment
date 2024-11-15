export const logout = {
    "get": {
        "tags": [
            "user"
        ],
        "summary": "Logs out current logged in user session",
        "description": "",
        "operationId": "logoutUser",
        "produces": [
            "application/json",
            "application/xml"
        ],
        "parameters": [],
        "responses": {
            "default": {
                "description": "successful operation"
            }
        }
    }
}