export * from "./interface";
import { IReverseGeocode, ILocation, IGeocode } from "./interface";
export default class ReverseGeocode {
    private options;
    constructor(options?: IReverseGeocode);
    locate(coords: ILocation): Promise<IGeocode>;
}
