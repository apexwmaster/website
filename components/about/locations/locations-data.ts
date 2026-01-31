export interface OfficeLocation {
  name: string;
  mapEmbed: string; // Google Maps embed URL
  address: string; // Address label to display below map
}

export const officeLocations: OfficeLocation[] = [
  {
    name: 'Fort Wayne Office',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6015.634333194416!2d-85.147417!3d41.072989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e4f605bb1e39%3A0xa34c65bcb3757742!2s1313%20Broadway%2C%20Fort%20Wayne%2C%20IN%2046802!5e0!3m2!1sen!2sus!4v1768453484493!5m2!1sen!2sus',
    address: 'Head Office | 1313 Broadway Fort Wayne, Indiana',
  },
  {
    name: 'Indianapolis Office',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6122.322937734557!2d-86.058856!3d39.893017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4d18bbcff4fb%3A0xefd6daf58cc275b7!2s6330%20E%2075th%20St%2C%20Indianapolis%2C%20IN%2046250!5e0!3m2!1sen!2sus!4v1768453513770!5m2!1sen!2sus',
    address: 'Branch Office | 6330 East 75th Street Indianapolis, Indiana',
  },
];
