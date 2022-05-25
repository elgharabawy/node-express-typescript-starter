import axios from "axios";

const get = async (id: string | number) => {
  //TODO: implement (call an endpoint to get data)

  return {
    message: `Return response for requested param "id: ${id || null}"`,
  };
};

export { get };
