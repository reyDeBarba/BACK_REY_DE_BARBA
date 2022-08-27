export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rey De Barba - Documentation",
      version: "1.0.0",
      description: "Rest API",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};
