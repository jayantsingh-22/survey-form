/* eslint-disable import/no-anonymous-default-export */
import { mockData } from "./mockData";

export default (req, res) => {
  const {
    query: { topic },
    method,
  } = req;

  if (method === "GET") {
    if (mockData[topic]) {
      res.status(200).json(mockData[topic]);
    } else {
      res.status(404).json({ message: "Topic not found" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
