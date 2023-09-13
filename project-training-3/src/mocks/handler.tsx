import { rest } from "msw";
import { Users, Roles } from "@/hooks/useFetch";

let usersListTotal: Users[] = [];
let users: Users[] = [];
const roles: Roles[] = [];
const roleUpdates: string[] = [];

export const handlers = [
  rest.get("/users", (req, res, ctx) => {
    const search = req.url.searchParams.get("search");
    const page = Number(req.url.searchParams.get("page"));
    const rowPerPage = Number(req.url.searchParams.get("rowPerPage"));

    let pageItem = 0;

    if (page || rowPerPage) {
      pageItem = page + 1;
      const firstPageIndex = (pageItem - 1) * rowPerPage;
      const lastPageIndex = firstPageIndex + rowPerPage;
      const usersPerPage = users.slice(firstPageIndex, lastPageIndex);
      console.log("usersPerPage", usersPerPage);
      users = usersPerPage;
    }

    let usersList: Users[] = [];

    if (search) {
      usersList = users.filter((user) => {
        const searchableText = `${user.name} ${user.role} ${user.team}  `;
        return searchableText.toLowerCase().includes(search.toLowerCase());
      });
      users = usersList;
    }
    if (search === null && users.length < usersListTotal.length) {
      users = usersListTotal;
    }

    return res(
      ctx.status(200),
      ctx.json({
        users,
      })
    );
  }),

  rest.post("/users/new", async (req, res, ctx) => {
    const user = await req.json();

    users.push(user);
    usersListTotal.push(user);
    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.get("/users/:id", async (req, res, ctx) => {
    const { id } = req.params;

    const user = users.find((userItem) => userItem.id === +id);

    if (!user) {
      return res(
        ctx.status(404),
        ctx.json({ message: `For the id ${id}, no event could be found.` })
      );
    }

    setTimeout(() => {
      res(ctx.json({ user }));
    }, 1000);
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

  rest.post("/roles/:id", async (req, res, ctx) => {
    const roleUpdate = await req.json();
    console.log(roleUpdate);
    roleUpdates.push(roleUpdate);
    return res(ctx.status(200), ctx.json({ roleUpdate }));
  }),

  rest.get("/roles/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        roleUpdates,
      })
    );
  }),
];
