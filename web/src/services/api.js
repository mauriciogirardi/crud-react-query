import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

export const getAllBooks = async () => {
  const { data, status } = await api.get("/books");

  if (status !== 200) {
    throw new Error("Something went wrong");
  }

  return data;
};

export const getBook = async ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;

  const { data, status } = await api.get(`/books/${id}`);

  if (status !== 200) {
    throw new Error("Something went wrong");
  }

  return data;
};

export const updateBook = async ({ id, ...dataUpdate }) => {
  const { title, author } = dataUpdate;

  const { data, status } = await api.put(`/books/${id}`, {
    title,
    author,
  });

  if (status !== 200) {
    throw new Error("Something went wrong");
  }

  return data;
};

export const createBook = async (dataUpdate) => {
  const { title, author } = dataUpdate;

  const { data, status } = await api.post(`/books`, {
    title,
    author,
  });

  if (status !== 200) {
    throw new Error("Something went wrong");
  }

  return data;
};

export const removeBook = async (id) => {
  const { status } = await api.delete(`/books/${id}`);

  if (status !== 200) {
    throw new Error("Something went wrong");
  }

  return true;
};
