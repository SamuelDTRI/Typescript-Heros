//Enums  ==> en general se usan para colecccion de datos finitos.

enum Error_types {
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_ACCEPTABLE,
  NOT_IMPLEMENTED,
}

function showErrors(typeOfErrors) {
  if (typeOfErrors === Error_types.NOT_FOUND) {
    console.log("Not found");
  } else if (typeOfErrors === Error_types.INTERNAL_SERVER_ERROR) {
    console.log("Internal server error");
  } else if (typeOfErrors === Error_types.BAD_REQUEST) {
    console.log("Bad request");
  } else if (typeOfErrors === Error_types.UNAUTHORIZED) {
    console.log("Unauthorized");
  } else if (typeOfErrors === Error_types.FORBIDDEN) {
    console.log("Forbidden");
  } else if (typeOfErrors === Error_types.NOT_ACCEPTABLE) {
    console.log("Not acceptable");
  } else if (typeOfErrors === Error_types.NOT_IMPLEMENTED) {
    console.log("Not implemented");
  }

}
showErrors(Error_types.NOT_FOUND);

//----------------------------------------------------------------

