import client from "../../HHTP/client";

export default class FormProvider {
  static async getAll(size, page) {
    return await client.get(`/api/forms?page=${page}&size=${size}`);
  }
  static async create(body) {
    return await client.post("/api/forms", body);
  }
  static async getOne(id) {
    return await client.get(`/api/forms/${id}`);
  }
  static async deleteOne(id) {
    return await client.delete(`/api/forms/${id}`);
  }
  static async myForms() {
    return await client.get("/api/forms/my-forms");
  }
  static async byCode() {
    return await client.get("/api/forms/by-code");
  }
}
