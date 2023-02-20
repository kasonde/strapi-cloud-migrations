const {} = require("@strapi/utils").errors;

module.exports = {
  beforeCreate(event) {
    const ctx = strapi.requestContext.get();
    console.log(ctx.request.body);

    // throw error here
    ctx.response.body = { ok: true };
    // throw new PaginationError("Thanks Derrick!", { foo: "bar" });
  },
};
