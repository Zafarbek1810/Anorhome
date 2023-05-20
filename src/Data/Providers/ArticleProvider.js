import client from "../../HHTP/client";

const ARTICLE = {
  title: "string",
  content: "html",
  isFeatured: true
}

class ArticleProvider {
  static async getAllArticles (page = 0, size = 11, sort = "asc") {
    return await client.get(`/api/articles?page=${page}&size=${size}&sort=${sort}`);
  }
  static async getOneArticle (id) {
    return await client.get(`/api/articles/${id}`);
  }
  static async getMyArticles (size, page) {
    return await client.get(`/api/articles/my-articles?page=${page}&size=${size}`);
  }
  //----------------------------------------------
  static async createArticle (body) {
    return await client.post("/api/articles", body);
  }
  static async takeArticle () {
    return await client.get("/api/articles");
  }
  static async publishArticle (id) {
    return await client.put(`/api/articles/publish/${id}`);
  }
  static async deactivateArticle (id) {
    return await client.put(`/api/articles/deactive/${id}`);
  }
  static async deleteArticle (articleId) {
    return await client.delete(`/api/articles/${articleId}`);
  }
  //----------------------------------------------
  static async createOneImage (articleId, formData) {
    return await client.post(`/api/articles/images/${articleId}`, formData, {
      headers: {
        "content-type": "multipart-formdata"
      }
    });
  }
  static async getOneImage (path) {
    return await client.get(`/api/articles/images?path=${path}`);
  }
  static async deleteImage (path) {
    return await client.delete(`/api/articles/images?path=${path}`);
  }
  static async downloadImage (path) {
    return await client.put(`/api/articles/images/download?path=${path}`);
  }
  static async getAllArticlesForAdmin (size, page) {
    return await client.get(`/api/articles/all-articles?page=${page}&size=${size}`);
  }
  static async uploadThumb (articleId, formData){
    return await client.post(`/api/articles/images/upload-thumb/${articleId}`, formData, {
      headers: {
        "content-type":"multipart-formdata"
      }
    })
  }
}

export default ArticleProvider;
