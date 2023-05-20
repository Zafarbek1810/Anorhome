import client from "../../HHTP/client";

export default class OrganisationProvider {
  static async getAll() {
    return await client.get("/api/organizations");
  }
  static async getOne(id) {
    return await client.get(`/api/organizations/${id}`);
  }
  static async getAllForAdmin() {
    return await client.get("/api/organizations/all");
  }
  static async create(body) {
    return await client.post("/api/organizations", body);
  }
}
