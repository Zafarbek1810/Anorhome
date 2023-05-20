import client from "../../HHTP/client";

export default class DocumentProvider {
  static async getAll() {
    return await client.get("/api/doc-types");
  }
  static async getOne(id) {
    return await client.get(`/api/doc-types/${id}`);
  }
  static async getAllForAdmin() {
    return await client.get("/api/doc-types/all");
  }
  static async create(body) {
    return await client.post("/api/doc-types", body);
  }
}
