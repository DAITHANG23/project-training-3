import { rest } from "msw";
import { Users, Roles } from "@/hooks/useFetch";

const users: Users[] = [];
const roles: Roles[] = [];
const roleUpdates: string[] = [];

export const handlers = [
  rest.post("/users/new", async (req, res, ctx) => {
    const user = await req.json();
    users.push(user);
    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.get("/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users,
      })
    );
  }),

  rest.post("/roles/new", async (req, res, ctx) => {
    const role = await req.json();
    roles.push(role);
    return res(ctx.status(201), ctx.json({ role }));
  }),

  rest.get("/roles", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        roles,
      })
    );
  }),

  rest.post("/updaterole/new", async (req, res, ctx) => {
    const roleUpdate = await req.json();
    roleUpdates.push(roleUpdate);
    return res(ctx.status(200), ctx.json({ roleUpdate }));
  }),

  rest.get("/updaterole", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        roleUpdates,
      })
    );
  }),
];
