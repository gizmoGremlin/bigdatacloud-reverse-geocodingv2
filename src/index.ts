import axios from "axios";
export * from "./interface";
import { IReverseGeocode, ILocation, IGeocode } from "./interface";

export default class ReverseGeocode {
  constructor(
    private options: IReverseGeocode = {
      api: "https://api.bigdatacloud.net",
      endpoint: "/data/reverse-geocode-client",
      language: "en",
      format: "latitude=${lat}&longitude=${long}&localityLanguage=${lang}"
    }
  ) {}
  public async locate(coords: ILocation): Promise<IGeocode> {
    const queryString = (this.options.format || "").replace(
      /(\${lat})|(\${long})|(\${lang})/g,
      match => {
        switch (match) {
          case "${lat}":
            return String(coords.lat);
          case "${long}":
            return String(coords.long);
          case "${lang}":
            return this.options.language || "en";
        }
        return "";
      }
    );
    const answer = await axios.get(
      `${this.options.api}${this.options.endpoint}?${queryString}`
    );
    return answer.data;
  }
}
