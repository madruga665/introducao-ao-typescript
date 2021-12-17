export default class FetchData {
  async getData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
}
