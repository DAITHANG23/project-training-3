import { rest } from "msw";

export const handlers = [
  rest.post("/users", (req, res, ctx) => {
    const listUsers = req.body;
    sessionStorage.setItem("list-user", listUsers as string);

    return res(ctx.status(200), ctx.json({}));
  }),

  rest.get("/users", (req, res, ctx) => {
    const userList = sessionStorage.getItem("list-user");
    const users = JSON.parse(userList as string);
    return res(
      ctx.status(200),
      ctx.json({
        users,
      })
    );
  }),

  rest.post("/roles", (req, res, ctx) => {
    const listRoles = req.body;
    sessionStorage.setItem("list-role", listRoles as string);

    return res(ctx.status(200), ctx.json({}));
  }),

  rest.get("/roles", (req, res, ctx) => {
    const roleList = sessionStorage.getItem("list-role");
    const roles = JSON.parse(roleList as string);

    return res(
      ctx.status(200),
      ctx.json({
        roles,
      })
    );
  }),

  rest.post("/updaterole", (req, res, ctx) => {
    const listNewRoleUpdate = req.body;

    sessionStorage.setItem("listNewRoleUpdate", listNewRoleUpdate as string);

    return res(ctx.status(200), ctx.json({}));
  }),

  rest.get("/updaterole", (req, res, ctx) => {
    const roleList = sessionStorage.getItem("listNewRoleUpdate");
    const roleItemUpdate = JSON.parse(roleList as string);

    return res(
      ctx.status(200),
      ctx.json({
        roleItemUpdate,
      })
    );
  }),
];
