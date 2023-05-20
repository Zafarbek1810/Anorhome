import client from "../../HHTP/client";

export default class PersonalProvider {
  static async getAllPerson() {
    return await client.get("/api/personnel");
  }
  // static async getOnePerson(id) {
  //   return await client.get(`/api/personnel/${id}`);
  // }
  static async createPerson(body) {
    return await client.post("/api/personnel", body);
  }
  static async uploadImage(personId, formData) {
    return await client.post(`/api/personnel/upload-image/${personId}`, formData, {
      headers: {
        "content-type": "multipart-formdata"
      }
    })
  }
  static async deletePerson(id) {
    return await client.delete(`/api/personnel/${id}`);
  }

  static async deleteImage(path) {
    return await client.delete(`/api/articles/images?path=${path}`);
  }

}
