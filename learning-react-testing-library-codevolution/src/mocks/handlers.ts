import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      {
        name: "Bruce wyabdwd",
      },
      {
        name: "Bruce1",
      },
      {
        name: "Bruce2",
      },
    ]);
  }),
];
