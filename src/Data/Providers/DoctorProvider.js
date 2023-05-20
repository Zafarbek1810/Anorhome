import client from "../../HHTP/client";

export default class DoctorProvider {
  static async getAll(page=0, size=10, sort='asc') {
    return await client.get(`/api/doctors?page=${page}&size=${size}&sort=${sort}`);
  }
  static async getOne(id) {
    return await client.get(`/api/doctors/${id}`);
  }
  static async create(body) {
    return await client.post("/api/doctors", body);
  }
  static async delete(doctorId) {
    return await client.delete(`/api/doctors/${doctorId}`);
  }
  static async currentDoctor() {
    return await client.get(`/api/doctors/current-doctor`);
  }

}
