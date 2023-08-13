import { rest } from "msw";

export const handlers = [
  rest.get("user", (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            id: 1,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Admin",
            team: "_",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 2,
            name: "Jane Cooper",
            image: "avatar(5).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 3,
            name: "Jane Cooper",
            image: "avatar(4).png",
            numberPhone: "(65)1234 5678",
            status: "Suspended",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 4,
            name: "Jane Cooper",
            image: "avatar(2).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 5,
            name: "Jane Cooper",
            image: "avatar(1).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 6,
            name: "Jane Cooper",
            image: "avatar(5).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 7,
            name: "Jane Cooper",
            image: "avatar(3).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 8,
            name: "Jane Cooper",
            image: "avatar(4).png",
            numberPhone: "(65)1234 5678",
            status: "Suspended",
            role: "Staff",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 9,
            name: "Jane Cooper",
            image: "avatars.png",
            numberPhone: "(65)1234 5678",
            status: "Suspended",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 10,
            name: "Jane Cooper",
            image: "avatar(2).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 11,
            name: "Jane Cooper",
            image: "avatar(2).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 12,
            name: "Jane Cooper",
            image: "avatar(5).png",
            numberPhone: "(65)1234 5678",
            status: "Suspended",
            role: "Staff",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 13,
            name: "Jane Cooper",
            image: "avatar(3).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },

          {
            id: 14,
            name: "Jane Cooper",
            image: "avatar(2).png",
            numberPhone: "(65)1234 5678",
            status: "Suspended",
            role: "Staff",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 15,
            name: "Jane Cooper",
            image: "avatar(1).png",
            numberPhone: "(65)1234 5678",
            status: "Suspended",
            role: "Staff",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 16,
            name: "Jane Cooper",
            image: "avatar(5).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 17,
            name: "Jane Cooper",
            image: "avatar(3).png",
            numberPhone: "(65)1234 5678",
            status: "Suspended",
            role: "Staff",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 18,
            name: "Jane Cooper",
            image: "avatar(2).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Service",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 19,
            name: "Dom Nguyen",
            image: "avatar(4).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
          {
            id: 20,
            name: "Jane Cooper",
            image: "avatar(1).png",
            numberPhone: "(65)1234 5678",
            status: "Active",
            role: "Staff",
            team: "Tech",
            lastActive: {
              date: "21 Jan 23",
              time: "13:30",
            },
          },
        ],
      })
    );
  }),
];
