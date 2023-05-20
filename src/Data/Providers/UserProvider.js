import client from "../../HHTP/client";

export default class UserProvider {
  static async getAllUsers(page = 0, size = 10, sort = "asc") {
    return await client.get(`/api/users?page=${page}&size=${size}&sort=${sort}`);
  }
  static async getOneUser(id) {
    return await client.get(`/api/users/${id}`);
  }
  //
  static async createUser(body) {
    return await client.post("/api/users", body);
  }
  static async deleteUser(id) {
    return await client.delete(`/api/users/${id}`);
  }
  //---------------------------------------
  static async getUserSessions() {
    return await client.get("/api/userSessions");
  }
  static async putAdmin(body) {
    return await client.put("/api/users/admin", body);
  }
}
