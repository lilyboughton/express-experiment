import { categoryDefinition } from "./category";
import { tagDefinition } from "./tag";

export const petDefinition = {
    "type": "object",
    "required": [
        "name",
        "photoUrls"
    ],
    "properties": {
        "id": {
            "type": "integer",
            "format": "int64"
        },
        "category": categoryDefinition,
        "name": {
            "type": "string",
            "example": "doggie"
        },
        "photoUrls": {
            "type": "array",
            "xml": {
                "wrapped": true
            },
            "items": {
                "type": "string",
                "xml": {
                    "name": "photoUrl"
                }
            }
        },
        "tags": {
            "type": "array",
            "xml": {
                "wrapped": true
            },
            "items": {
                "xml": {
                    "name": "tag"
                },
                tagDefinition
            }
        },
        "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
                "available",
                "pending",
                "sold"
            ]
        }
    },
    "xml": {
        "name": "Pet"
    }
}