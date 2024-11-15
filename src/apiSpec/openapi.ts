import { apiResponseDefinition } from "./definitions/apiResponse";
import { categoryDefinition } from "./definitions/category";
import { customerDefinition } from "./definitions/customer";
import { orderDefinition } from "./definitions/order";
import { petDefinition } from "./definitions/pet";
import { tagDefinition } from "./definitions/tag";
import { userDefinition } from "./definitions/user";
import { findByStatus } from "./paths/pet/findByStatus";
import { findByTags } from "./paths/pet/findByTags";
import { pet } from "./paths/pet/pet";
import { petById } from "./paths/pet/petById";
import { uploadImageById } from "./paths/pet/uploadImageById";
import { inventory } from "./paths/store/inventory";
import { order } from "./paths/store/order";
import { orderById } from "./paths/store/orderById";
import { createWithArray } from "./paths/user/createWithArray";
import { createWithList } from "./paths/user/createWithList";
import { login } from "./paths/user/login";
import { logout } from "./paths/user/logout";
import { user } from "./paths/user/user";
import { userByUsername } from "./paths/user/userByUsername";

export const apiJson = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.7",
    "title": "Swagger Petstore",
  },
  "schemes": [
    "https",
    "http"
  ],
  "paths": {
    "/pet": pet,
    "/pet/findByStatus": findByStatus,
    "/pet/findByTags": findByTags,
    "/pet/{petId}": petById,
    "/pet/{petId}/uploadImage": uploadImageById,
    "/store/inventory": inventory,
    "/store/order": order,
    "/store/order/{orderId}": orderById,
    "/user": user,
    "/user/{username}": userByUsername,
    "/user/createWithArray": createWithArray,
    "/user/createWithList": createWithList,
    "/user/login": login,
    "/user/logout": logout,
  },
  "securityDefinitions": {
    "api_key": {
      "type": "apiKey",
      "name": "api_key",
      "in": "header"
    },
    "petstore_auth": {
      "type": "oauth2",
      "authorizationUrl": "https://petstore.swagger.io/oauth/authorize",
      "flow": "implicit",
      "scopes": {
        "read:pets": "read your pets",
        "write:pets": "modify pets in your account"
      }
    }
  },
  "definitions": {
    "ApiResponse": apiResponseDefinition,
    "Category": categoryDefinition,
    "Customer": customerDefinition,
    "Order": orderDefinition,
    "Pet": petDefinition,
    "Tag": tagDefinition,
    "User": userDefinition,
  }
}