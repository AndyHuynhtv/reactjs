import axiosClient from "./axiosClient";

const url = "/posts";

export const postApi = {
  getAll(params) {
    return axiosClient.get(`${url}`, { params });
  },

  getById(id) {
    return axiosClient.get(`${url}/${id}`);
  },

  create(body) {
    return axiosClient.create(`${url}`, body);
  },

  update(payLoad) {
    const { id, ...body } = payLoad;
    return axiosClient.update(`${url}/${id}`, body);
  },

  delete(id) {
    return axiosClient.delete(`${url}/${id}`);
  },
};
