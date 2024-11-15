export const categoryDefinition = {
    "type": "object",
    "properties": {
        "id": {
            "type": "integer",
            "format": "int64",
            "example": 1
        },
        "name": {
            "type": "string",
            "example": "Dogs"
        }
    },
    "xml": {
        "name": "category"
    }
}