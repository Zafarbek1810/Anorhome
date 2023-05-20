import client from "../../HHTP/client";

export default class RegionProvider {
  static async getAll() {
    return await client.get("/api/regions");
  }
  static async create(body) {
    return await client.post("/api/regions", body);
  }
  static async deleteDocType(docTypeId) {
    return await client.delete(`/api/doc-types/${docTypeId}`);
  }
  static async deleteOrganisation(organisationId) {
    return await client.delete(`/api/organizations/${organisationId}`);
  }
}
