import ReverseGeocode from '../index';
test('Test reverse geocode of the location 0,0', async () => {
  const geocode = new ReverseGeocode();
  console.log(await geocode.locate({ lat: 0, long: 0 }));

  expect(await geocode.locate({ lat: 0, long: 0 })).toStrictEqual({
    latitude: 0,
    longitude: 0,
    localityLanguageRequested: 'en',
    continent: '',
    continentCode: '',
    countryName: '',
    countryCode: '__',
    principalSubdivision: '',
    principalSubdivisionCode: '',
    city: '',
    locality: 'Null Island',
    postcode: '',
    localityInfo: {
      informative: [
        {
          description: 'ocean on Earth',
          name: 'Atlantic Ocean',
          order: 0,
          wikidataId: 'Q97',
        },
        {
          description: 'fictional island at 0°N 0°E',
          name: 'Null Island',
          order: 1,
          wikidataId: 'Q16896007',
        },
      ],
    },
  });
});
