import client from "../../HHTP/client";


class AuthProvider {
  static async login (body) {
    return await client.post("/api/auth/login", body);
  }
}

export default AuthProvider;
