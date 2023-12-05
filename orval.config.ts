export default {
  "orval-filter-example": {
    input: {
      target: "./petStore.yaml",
      filters: {
        tags: ["pet"],
      },
    },
    output: {
      mode: "single",
      target: "./src/api.ts",
      schemas: "./src/models",
      mock: false,
    },
  },
};
