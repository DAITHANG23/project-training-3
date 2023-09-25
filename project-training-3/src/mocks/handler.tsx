import { rest } from "msw";
import { Users, Roles } from "@/hooks/useFetch";

let users: Users[] = [
  {
    id: 1,
    tel: "+65 1234 57 20",
    image: "avatars.png",
    name: "Nguyễn Đại Thắng",
    role: "Staff",
    team: "Developer",
    status: "Active",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: 2,
    tel: "+65 7723 303 40 ",
    image: "avatar(2).png",
    name: "Dom Nguyễn",
    role: "Staff",
    team: "Developer",
    status: "Active",
    date: "20 Sep 23",
    time: "22:50",
  },
  {
    id: 3,
    tel: "+65 1234 57 ",
    image: "avatar(1).png",
    name: "Nguyễn Văn Thắng",
    role: "Admin",
    team: "Manager",
    status: "Active",
    date: "20 Sep 22",
    time: "22:45",
  },
  {
    id: 4,
    tel: "+65 1234 57 20",
    image: "avatars.png",
    name: "Nguyễn Đại Thắng",
    role: "Staff",
    team: "Tech",
    status: "Active",
    date: "20 Sep 23",
    time: "22:30",
  },
  {
    id: 5,
    tel: "+65 1234 213",
    image: "avatar(5).png",
    name: "Teresa",
    role: "Staff",
    team: "Developer",
    status: "Active",
    date: "20 Sep 23",
    time: "22:48",
  },
  {
    id: 6,
    tel: "+65 1234 57 ",
    image: "avatars.png",
    name: "Nguyễn Đại Nam",
    role: "Staff",
    team: "Developer",
    status: "Active",
    date: "20 Sep 21",
    time: "22:45",
  },
  {
    id: 7,
    tel: "+65 1234 57 20",
    image: "avatar(3).png",
    name: "Nguyễn Đại Thắng",
    role: "Staff",
    team: "Developer",
    status: "Active",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: 8,
    tel: "+65 1234 57 20",
    image: "avatar(1).png",
    name: "Nguyễn Đại ",
    role: "Staff",
    team: "Tech",
    status: "Active",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: 9,
    tel: "+65 1234 57 20",
    image: "avatar(3).png",
    name: "Nguyễn asda",
    role: "Staff",
    team: "Developer",
    status: "Active",
    date: "20 Sep 23",
    time: "22:38",
  },
  {
    id: 10,
    tel: "+65 1234 57 20",
    image: "avatar(1).png",
    name: "Anna Nguyễn",
    role: "Staff",
    team: "Developer",
    status: "Suspended",
    date: "20 Sep 23",
    time: "22:05",
  },
  {
    id: 11,
    tel: "+65 1234 5743 ",
    image: "avatar(2).png",
    name: "Nguyễn Đại Thắng",
    role: "Staff",
    team: "Developer",
    status: "Active",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: 12,
    tel: "+65 1234 57 20",
    image: "avatars.png",
    name: "Nguyễn Đại Thắng",
    role: "Staff",
    team: "Developer",
    status: "Suspended",
    date: "20 Sep 23",
    time: "22:08",
  },
];

const roles: Roles[] = [];

const roleUpdates: any[] = [];

export const handlers = [
  rest.get("/users", (req, res, ctx) => {
    let usersList: Users[] = [];

    const search = req.url.searchParams.get("search");

    const page = Number(req.url.searchParams.get("page"));

    const rowPerPage = Number(req.url.searchParams.get("rowPerPage"));

    let pageItem = 0;

    if (page || rowPerPage) {
      pageItem = page + 1;

      const firstPageIndex = (pageItem - 1) * rowPerPage;

      const lastPageIndex = firstPageIndex + rowPerPage;

      const usersPerPage = users.slice(firstPageIndex, lastPageIndex);

      usersList = usersPerPage;
    }

    if (search === null) {
      usersList = users;
    }

    if (search) {
      const filteredUsersList = users.filter((user) => {
        const searchableText = `${user.name} ${user.role} ${user.team}`;
        return searchableText.toLowerCase().includes(search.toLowerCase());
      });

      usersList = filteredUsersList;
    }

    return res(
      ctx.status(200),
      ctx.json({
        usersList,
      })
    );
  }),

  rest.post("/users/new", async (req, res, ctx) => {
    const user = await req.json();

    users.push(user);

    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.get("/users/:id", async (req, res, ctx) => {
    const { id } = req.params;

    const userItem = users.find((userItem) => userItem.id === +id);

    if (!userItem) {
      return res(
        ctx.status(404),
        ctx.json({ message: `For the id ${id}, no user could be found.` })
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
