"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class ReverseGeocode {
    constructor(options = {
        api: "https://api.bigdatacloud.net",
        endpoint: "/data/reverse-geocode-client",
        language: "en",
        format: "latitude=${lat}&longitude=${long}&localityLanguage=${lang}"
    }) {
        this.options = options;
    }
    locate(coords) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = (this.options.format || "").replace(/(\${lat})|(\${long})|(\${lang})/g, match => {
                switch (match) {
                    case "${lat}":
                        return String(coords.lat);
                    case "${long}":
                        return String(coords.long);
                    case "${lang}":
                        return this.options.language || "en";
                }
                return "";
            });
            return yield axios_1.default.get(`${this.options.api}${this.options.endpoint}?${queryString}`);
        });
    }
    parse(response) {
        /*
    
    {
        "latitude": 37.42159,
        "longitude": -122.0837,
        "localityLanguageRequested": "ru",
        "countryName": "США",
        "countryCode": "US",
        "principalSubdivision": "Калифорния",
        "locality": "Маунтин-Вью",
        "postcode": "94043",
        "localityInfo": {
            "administrative": [
                {
                    "order": 0,
                    "adminLevel": 2,
                    "name": "США",
                    "description": "федеративное государство в Северной Америке",
                    "isoName": "United States of America (the)",
                    "isoCode": "US",
                    "wikidataId": "Q30"
                },
                {
                    "order": 1,
                    "adminLevel": 4,
                    "name": "Калифорния",
                    "description": "штат в США",
                    "isoName": "California",
                    "isoCode": "US-CA",
                    "wikidataId": "Q99"
                },
                {
                    "order": 2,
                    "adminLevel": 6,
                    "name": "Санта-Клара",
                    "description": "округ в штате Калифорния, США",
                    "wikidataId": "Q110739"
                },
                {
                    "order": 3,
                    "adminLevel": 8,
                    "name": "Маунтин-Вью",
                    "description": "city in Santa Clara County, California, United States",
                    "wikidataId": "Q486860"
                }
            ],
            "informative": [
                {
                    "order": 4,
                    "name": "94043",
                    "description": "почтовый индекс"
                },
                {
                    "order": 5,
                    "name": "Googleplex",
                    "description": "building complex in California, United States",
                    "wikidataId": "Q694178"
                }
            ]
        }
    }
          */
    }
}
exports.default = ReverseGeocode;
