import { rest } from "msw";
import { Users, Roles } from "@/hooks/useFetch";

let usersListTotal: Users[] = [];

let users: Users[] = [];

const roles: Roles[] = [];

const roleUpdates: any[] = [];

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

    const userItem = users.find((userItem) => userItem.id === +id);

    if (!userItem) {
      return res(
        ctx.status(404),
        ctx.json({ message: `For the id ${id}, no event could be found.` })
      );
    }

    return res(ctx.json({ userItem }));
  }),

  rest.delete("/users/:id", async (req, res, ctx) => {
    const { id } = req.params;

    const userIndex = users.findIndex((user) => user.id === +id);

    if (userIndex === -1) {
      return res(
        ctx.status(404),

        ctx.json({ message: `For the id ${id}, no user could be found.` })
      );
    }
    if (userIndex >= 0) {
      users.splice(userIndex, 1);
    }

    return res(ctx.json({ users: users, message: "User deleted" }));
  }),

  rest.put("/users/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const user = await req.json();

    if (!user) {
      return res(ctx.status(400), ctx.json({ message: "Event is required" }));
    }

    if (
      !user.name?.trim() ||
      !user.team?.trim() ||
      !user.role?.trim() ||
      !user.image?.trim() ||
      !user.tel?.trim() ||
      !user.status?.trim()
    ) {
      return res(
        ctx.status(400),
        ctx.json({ message: "Invalid data provided." })
      );
    }

    const userIndex = users.findIndex((user) => user.id === +id);

    if (userIndex === -1) {
      return res(ctx.status(404), ctx.json({ message: "Event not found" }));
    }
    const day = new Date();

    const newUser = {
      ...user,
      id: id,
      date: [
        day.getDate(),
        day.toLocaleString("en-US", { month: "short" }),
        day.toLocaleString("en-US", { year: "2-digit" }),
      ].join(" "),
      time: [
        ("0" + day.getHours()).substr(-2),
        ("0" + day.getMinutes()).substr(-2),
      ].join(":"),
    };

    users[userIndex] = newUser;

    return res(ctx.status(200), ctx.json({ user: users[userIndex] }));
  }),

  // Role Page

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

  rest.post("/roles/:role/:id", async (req, res, ctx) => {
    const roleUpdate = await req.json();

    const { id } = req.params;

    const newRoleUpdate = { ...roleUpdate, id: id };

    roleUpdates.push(newRoleUpdate);

    const roleIndex = roles.findIndex((role) => role.id === id);

    if (roleIndex >= 0) {
      roleUpdates[roleIndex] = {
        id,

        ...roleUpdate,
      };
    }

    return res(
      ctx.status(200),
      ctx.json({ roleUpdate: roleUpdates[roleIndex] })
    );
  }),

  rest.get("/roles/:role/:id", (req, res, ctx) => {
    const { id } = req.params;

    const roleItemUpdate = roleUpdates.find((roleItem) => roleItem.id === id);

    return res(
      ctx.status(200),
      ctx.json({
        roleItemUpdate: roleItemUpdate,
      })
    );
  }),
];
