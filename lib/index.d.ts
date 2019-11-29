import { IReverseGeocode, IGeocode } from "./interface";
export default class ReverseGeocode {
    private options;
    constructor(options?: IReverseGeocode);
    locate(coords: IGeocode): Promise<import("axios").AxiosResponse<any>>;
    private parse;
}
