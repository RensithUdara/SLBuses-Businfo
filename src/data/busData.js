export const fareRevision = {
  effectiveDate: '2026-03-24',
  sourceName: 'National Transport Commission Sri Lanka',
  sourceUrl: 'https://ntc.gov.lk/Bus_info/bus_fares.php?lang=en',
}

export const officialTransportAuthorities = [
  {
    name: 'National Transport Commission',
    shortName: 'NTC',
    role: 'Inter-provincial private bus regulation, route permits, fare tables, passenger complaints',
    address: 'No. 241, Park Road, Colombo 05, Sri Lanka',
    phone: '+94 11 2587372',
    hotline: '1955',
    fax: '+94 11 2503969 / +94 11 2503725',
    email: 'info@ntc.gov.lk',
    website: 'https://www.ntc.gov.lk',
  },
  {
    name: 'Sri Lanka Transport Board',
    shortName: 'SLTB',
    role: 'State bus operations, depots, route services, SLTB passenger information',
    address: 'Head Office, No. 200, Kirula Road, Colombo 05, Sri Lanka',
    phone: '+94 11 7555555 / 1958',
    fax: '+94 11 2589683',
    email: 'info@sltb.lk',
    website: 'https://sltb.lk',
  },
  {
    name: 'Ministry of Transport, Highways, Ports and Civil Aviation',
    shortName: 'Ministry',
    role: 'National transport policy, ministry services, official public transport administration',
    address: 'Maganeguma Mahamedura, No. 216, 9th Floor, Denzil Kobbekaduwa Mawatha, Koswatte, Battaramulla',
    phone: '+94 11 2879170 / +94 11 2879171',
    fax: '+94 11 2868710 / +94 11 2879185',
    email: 'info@mohsl.gov.lk',
    website: 'https://mohsl.gov.lk',
  },
]

const normalFareValues = `
30 39 50 62 74 85 97 101 109 116 124 130 138 146 151 157 165 171 179 184 192 198 206 212 219 225 233 239 246 254 260 268 274 281 287 295 301 309 314 322 328 336 342 349
355 363 369 376 382 390 396 404 409 417 425 431 439 444 452 458 464 470 477 483 491 497 505 510 518 524 532 538 545 551 557 565 570 578 584 592 598 605 611 619 625 633 638 646
652 660 666 673 679 687 693 701 706 712 720 726 733 739 747 753 761 766 774 780 788 794 801 807 815 821 829 834 842 848 854 862 867 875 881 889 895 902 908 916 922 929 935 943
949 957 962 970 976 984 990 995 1003 1009 1017 1023 1030 1036 1044 1050 1058 1063 1071 1077 1085 1091 1098 1104 1112 1118 1125 1131 1139 1145 1151 1158 1164 1172 1178 1186 1191 1199 1205 1213 1219 1226 1232 1240
1246 1254 1259 1267 1273 1281 1287 1292 1300 1306 1314 1320 1327 1333 1341 1347 1354 1360 1368 1374 1382 1387 1395 1401 1409 1415 1422 1428 1436 1442 1448 1455 1461 1469 1475 1483 1488 1496 1502 1510 1515 1523 1529 1537
1543 1550 1556 1564 1570 1578 1583 1589 1597 1603 1611 1616 1624 1630 1638 1644 1651 1657 1665 1671 1678 1684 1692 1698 1706 1711 1719 1725 1731 1739 1744 1752 1758 1766 1772 1779 1785 1793 1799 1807 1812 1820 1826 1834
1840 1847 1853 1861 1867 1874 1880 1886 1894 1900 1907 1913 1921 1927 1935 1940 1948 1954 1962 1968 1975 1981 1989 1995 2003 2008 2016 2022 2028 2036 2041 2049 2055 2063 2069 2076 2082 2090 2096 2103 2109 2117 2125 2133
2138 2146 2152 2160 2166 2173 2181 2187 2195 2200 2208 2214 2222 2230 2235 2243 2249 2257 2263 2270 2276 2284 2292 2298 2305 2311 2319 2325 2332 2340 2346 2354 2360 2367 2373 2381 2389 2395 2402 2408 2416 2422
`

export const normalFareTable = normalFareValues.trim().split(/\s+/).map(Number)

export const serviceTypes = {
  normal: { label: 'Normal', multiplier: 1, minimumFare: 30 },
  'semi-luxury': { label: 'Semi-Luxury', multiplier: 1.365, minimumFare: 44 },
  luxury: { label: 'Luxury / AC', multiplier: 1.82, minimumFare: 60, roundTo: 5 },
  'super-luxury': { label: 'Super Luxury', multiplier: 2.75, minimumFare: 90, roundTo: 10 },
}

const districtStopCatalog = {
  Western: {
    Colombo: [
      'Pettah', 'Colombo', 'Fort', 'Maradana', 'Borella', 'Rajagiriya', 'Battaramulla', 'Malabe',
      'Kaduwela', 'Kollupitiya', 'Bambalapitiya', 'Wellawatte', 'Dehiwala', 'Mount Lavinia',
      'Nugegoda', 'Maharagama', 'Kottawa', 'Homagama', 'Avissawella', 'Hanwella', 'Padukka',
      'Kesbewa', 'Piliyandala', 'Moratuwa',
    ],
    Gampaha: [
      'Gampaha', 'Kadawatha', 'Kiribathgoda', 'Kelaniya', 'Wattala', 'Ja-Ela', 'Ragama', 'Negombo',
      'Katunayake', 'Seeduwa', 'Minuwangoda', 'Divulapitiya', 'Nittambuwa', 'Veyangoda', 'Mirigama',
      'Dompe', 'Biyagama', 'Mahara',
    ],
    Kalutara: [
      'Kalutara', 'Panadura', 'Horana', 'Bandaragama', 'Matugama', 'Aluthgama', 'Beruwala',
      'Wadduwa', 'Payagala', 'Ingiriya', 'Agalawatta', 'Bulathsinhala', 'Dodangoda',
    ],
  },
  Central: {
    Kandy: [
      'Kandy', 'Peradeniya', 'Katugastota', 'Gampola', 'Nawalapitiya', 'Kadugannawa', 'Pilimathalawa',
      'Wattegama', 'Digana', 'Teldeniya', 'Galagedara', 'Akurana', 'Pussellawa',
    ],
    Matale: [
      'Matale', 'Dambulla', 'Galewela', 'Ukuwela', 'Rattota', 'Naula', 'Palapathwela', 'Sigiriya',
      'Habarana', 'Yatawatta', 'Laggala', 'Wilgamuwa',
    ],
    'Nuwara Eliya': [
      'Nuwara Eliya', 'Hatton', 'Talawakelle', 'Nanu Oya', 'Ginigathhena', 'Ramboda', 'Kotagala',
      'Maskeliya', 'Ragala', 'Walapane', 'Hanguranketha', 'Pundaluoya',
    ],
  },
  Southern: {
    Galle: [
      'Galle', 'Hikkaduwa', 'Ambalangoda', 'Elpitiya', 'Baddegama', 'Karapitiya', 'Unawatuna',
      'Ahangama', 'Bentota', 'Balapitiya', 'Udugama', 'Imaduwa',
    ],
    Matara: [
      'Matara', 'Weligama', 'Akuressa', 'Kamburupitiya', 'Dikwella', 'Deniyaya', 'Hakmana',
      'Devinuwara', 'Mirissa', 'Kekanadura', 'Urubokka',
    ],
    Hambantota: [
      'Hambantota', 'Tangalle', 'Tissamaharama', 'Kataragama', 'Beliatta', 'Ambalantota',
      'Weeraketiya', 'Middeniya', 'Suriyawewa', 'Lunugamvehera', 'Walasmulla',
    ],
  },
  Northern: {
    Jaffna: [
      'Jaffna', 'Nallur', 'Chavakachcheri', 'Point Pedro', 'Kopay', 'Karainagar', 'Velanai',
      'Kankesanthurai', 'Manipay', 'Tellippalai', 'Vaddukoddai',
    ],
    Kilinochchi: [
      'Kilinochchi', 'Paranthan', 'Poonakary', 'Pallai', 'Akkarayan', 'Kandavalai', 'Iranamadu',
    ],
    Mannar: [
      'Mannar', 'Murunkan', 'Pesalai', 'Talaimannar', 'Nanattan', 'Madhu', 'Adampan',
    ],
    Vavuniya: [
      'Vavuniya', 'Cheddikulam', 'Nedunkeni', 'Omanthai', 'Poovarasankulam', 'Settikulam',
    ],
    Mullaitivu: [
      'Mullaitivu', 'Puthukudiyiruppu', 'Oddusuddan', 'Mankulam', 'Mallavi', 'Thunukkai',
      'Maritimepattu',
    ],
  },
  Eastern: {
    Batticaloa: [
      'Batticaloa', 'Kattankudy', 'Eravur', 'Valaichchenai', 'Kaluwanchikudy', 'Oddamavadi',
      'Chenkalady', 'Vakarai', 'Arayampathy',
    ],
    Ampara: [
      'Ampara', 'Kalmunai', 'Akkaraipattu', 'Sammanthurai', 'Pottuvil', 'Dehiattakandiya',
      'Maha Oya', 'Uhana', 'Sainthamaruthu', 'Addalachchenai',
    ],
    Trincomalee: [
      'Trincomalee', 'Kinniya', 'Kantale', 'Mutur', 'Nilaveli', 'China Bay', 'Serunuwara',
      'Gomarankadawala', 'Thambalagamuwa',
    ],
  },
  'North Western': {
    Kurunegala: [
      'Kurunegala', 'Kuliyapitiya', 'Narammala', 'Pannala', 'Wariyapola', 'Mawathagama',
      'Polgahawela', 'Alawwa', 'Galgamuwa', 'Nikaweratiya', 'Ibbagamuwa', 'Hettipola',
    ],
    Puttalam: [
      'Puttalam', 'Chilaw', 'Wennappuwa', 'Nattandiya', 'Anamaduwa', 'Marawila', 'Dankotuwa',
      'Mundel', 'Kalpitiya', 'Madampe', 'Mahawewa',
    ],
  },
  'North Central': {
    Anuradhapura: [
      'Anuradhapura', 'Kekirawa', 'Medawachchiya', 'Mihintale', 'Tambuttegama', 'Eppawala',
      'Galenbindunuwewa', 'Nochchiyagama', 'Padaviya', 'Habarana', 'Horowpothana',
    ],
    Polonnaruwa: [
      'Polonnaruwa', 'Kaduruwela', 'Hingurakgoda', 'Medirigiriya', 'Dimbulagala', 'Bakamuna',
      'Minneriya', 'Aralaganwila', 'Lankapura',
    ],
  },
  Uva: {
    Badulla: [
      'Badulla', 'Bandarawela', 'Ella', 'Hali-Ela', 'Welimada', 'Mahiyanganaya', 'Passara',
      'Diyatalawa', 'Haputale', 'Lunugala', 'Meegahakiula',
    ],
    Monaragala: [
      'Monaragala', 'Wellawaya', 'Bibile', 'Buttala', 'Kataragama', 'Siyambalanduwa',
      'Medagama', 'Thanamalwila', 'Badalkumbura', 'Madulla',
    ],
  },
  Sabaragamuwa: {
    Ratnapura: [
      'Ratnapura', 'Balangoda', 'Embilipitiya', 'Pelmadulla', 'Eheliyagoda', 'Kuruwita',
      'Kahawatta', 'Godakawela', 'Rakwana', 'Opanayake', 'Nivithigala',
    ],
    Kegalle: [
      'Kegalle', 'Mawanella', 'Warakapola', 'Rambukkana', 'Ruwanwella', 'Deraniyagala',
      'Yatiyanthota', 'Dehiowita', 'Galigamuwa', 'Aranayaka', 'Kitulgala',
    ],
  },
}

export const locationCatalog = Object.entries(districtStopCatalog).flatMap(([province, districts]) =>
  Object.entries(districts).flatMap(([district, stops]) =>
    stops.map((name) => ({ name, district, province }))
  )
)

const routeStops = {
  '138': [
    ['Pettah', 1],
    ['Nugegoda', 7],
    ['Maharagama', 11],
    ['Kottawa', 14],
    ['Homagama', 17],
  ],
  '177': [
    ['Kollupitiya', 1],
    ['Borella', 5],
    ['Rajagiriya', 8],
    ['Battaramulla', 11],
    ['Malabe', 15],
    ['Kaduwela', 18],
  ],
  '100': [
    ['Pettah', 1],
    ['Kollupitiya', 3],
    ['Bambalapitiya', 5],
    ['Dehiwala', 9],
    ['Moratuwa', 16],
    ['Panadura', 21],
  ],
  '1': [
    ['Colombo', 1],
    ['Nittambuwa', 20],
    ['Warakapola', 33],
    ['Kegalle', 45],
    ['Peradeniya', 59],
    ['Kandy', 64],
  ],
  '2': [
    ['Colombo', 1],
    ['Kalutara', 25],
    ['Aluthgama', 39],
    ['Hikkaduwa', 59],
    ['Galle', 72],
    ['Weligama', 84],
    ['Matara', 91],
  ],
  '15': [
    ['Colombo', 1],
    ['Kurunegala', 52],
    ['Dambulla', 82],
    ['Kekirawa', 96],
    ['Anuradhapura', 112],
  ],
  '49': [
    ['Colombo', 1],
    ['Kurunegala', 52],
    ['Dambulla', 82],
    ['Habarana', 101],
    ['Kantale', 129],
    ['Trincomalee', 146],
  ],
  '87': [
    ['Colombo', 1],
    ['Kurunegala', 52],
    ['Dambulla', 82],
    ['Vavuniya', 146],
    ['Kilinochchi', 190],
    ['Jaffna', 218],
  ],
}

export const routes = [
  {
    number: '138',
    name: 'Pettah - Kottawa - Homagama',
    origin: 'Pettah',
    destination: 'Homagama',
    via: ['Nugegoda', 'Maharagama', 'Kottawa'],
    stageCount: 17,
    distanceKm: 24,
    terminals: { Pettah: 'Bastian Mawatha - Bay B4', Homagama: 'Homagama Main Stand' },
    times: ['05:15', '05:45', '06:15', '06:45', '07:15', '16:30', '17:00', '17:30', '18:00'],
  },
  {
    number: '177',
    name: 'Kollupitiya - Battaramulla - Kaduwela',
    origin: 'Kollupitiya',
    destination: 'Kaduwela',
    via: ['Borella', 'Rajagiriya', 'Battaramulla', 'Malabe'],
    stageCount: 18,
    distanceKm: 25,
    terminals: { Kollupitiya: 'Kollupitiya Stand', Kaduwela: 'Kaduwela Stand - Bay 2' },
    times: ['05:30', '06:00', '06:30', '07:00', '07:30', '16:45', '17:15', '17:45', '18:15'],
  },
  {
    number: '100',
    name: 'Pettah - Galle Road - Panadura',
    origin: 'Pettah',
    destination: 'Panadura',
    via: ['Kollupitiya', 'Bambalapitiya', 'Dehiwala', 'Moratuwa'],
    stageCount: 21,
    distanceKm: 31,
    terminals: { Pettah: 'Bastian Mawatha - Bay A2', Panadura: 'Panadura Main Stand' },
    times: ['04:50', '05:20', '05:50', '06:20', '06:50', '17:00', '17:30', '18:00'],
  },
  {
    number: '1',
    name: 'Colombo - Kandy',
    origin: 'Colombo',
    destination: 'Kandy',
    via: ['Kiribathgoda', 'Nittambuwa', 'Warakapola', 'Kegalle', 'Peradeniya'],
    stageCount: 64,
    distanceKm: 116,
    terminals: { Colombo: 'Pettah Central Bus Stand', Kandy: 'Good Shed Bus Stand' },
    times: ['04:30', '05:15', '06:00', '07:00', '08:00', '14:00', '15:00', '16:00'],
  },
  {
    number: '2',
    name: 'Colombo - Galle - Matara',
    origin: 'Colombo',
    destination: 'Matara',
    via: ['Kalutara', 'Aluthgama', 'Hikkaduwa', 'Galle', 'Weligama'],
    stageCount: 91,
    distanceKm: 160,
    terminals: { Colombo: 'Pettah Central Bus Stand', Matara: 'Matara Main Bus Stand' },
    times: ['04:00', '05:00', '06:00', '07:00', '09:00', '13:00', '15:00', '17:00'],
  },
  {
    number: '15',
    name: 'Colombo - Kurunegala - Anuradhapura',
    origin: 'Colombo',
    destination: 'Anuradhapura',
    via: ['Negombo Road', 'Kurunegala', 'Dambulla', 'Kekirawa'],
    stageCount: 112,
    distanceKm: 205,
    terminals: { Colombo: 'Pettah Central Bus Stand', Anuradhapura: 'Anuradhapura New Bus Stand' },
    times: ['04:15', '05:15', '06:15', '08:15', '10:15', '13:15', '15:15'],
  },
  {
    number: '49',
    name: 'Colombo - Trincomalee',
    origin: 'Colombo',
    destination: 'Trincomalee',
    via: ['Kurunegala', 'Dambulla', 'Habarana', 'Kantale'],
    stageCount: 146,
    distanceKm: 265,
    terminals: { Colombo: 'Pettah Central Bus Stand', Trincomalee: 'Trincomalee Main Stand' },
    times: ['05:00', '06:30', '08:30', '12:30', '15:30', '22:00'],
  },
  {
    number: '87',
    name: 'Colombo - Jaffna',
    origin: 'Colombo',
    destination: 'Jaffna',
    via: ['Kurunegala', 'Dambulla', 'Vavuniya', 'Kilinochchi'],
    stageCount: 218,
    distanceKm: 395,
    terminals: { Colombo: 'Pettah Central Bus Stand', Jaffna: 'Jaffna Central Bus Stand' },
    times: ['05:30', '07:30', '10:30', '20:30', '22:30'],
  },
]

routes.forEach((route) => {
  route.stops = (routeStops[route.number] || [[route.origin, 1], [route.destination, route.stageCount]]).map(([name, stage]) => ({
    name,
    stage,
    ...(locationCatalog.find((location) => location.name === name) || {}),
  }))
})

export const expresswayRoutes = [
  {
    id: 'southern-colombo-galle',
    expressway: 'southern',
    name: 'Colombo - Galle Expressway',
    origin: 'Colombo',
    destination: 'Galle',
    stageCount: 66,
    serviceType: 'luxury',
    tollNote: 'Southern Expressway service; official route-wise expressway PDF should be used for operator-specific fares.',
  },
  {
    id: 'southern-colombo-matara',
    expressway: 'southern',
    name: 'Colombo - Matara Expressway',
    origin: 'Colombo',
    destination: 'Matara',
    stageCount: 82,
    serviceType: 'luxury',
    tollNote: 'Southern Expressway luxury service estimate from NTC fare stages.',
  },
  {
    id: 'katunayake-colombo-airport',
    expressway: 'colombo-katunayake',
    name: 'Colombo - Katunayake Airport Expressway',
    origin: 'Colombo',
    destination: 'Katunayake',
    stageCount: 21,
    serviceType: 'luxury',
    tollNote: 'Colombo-Katunayake expressway service estimate from NTC fare stages.',
  },
  {
    id: 'outer-circular-kaduwela-kadawatha',
    expressway: 'outer-circular',
    name: 'Kaduwela - Kadawatha Expressway',
    origin: 'Kaduwela',
    destination: 'Kadawatha',
    stageCount: 14,
    serviceType: 'luxury',
    tollNote: 'Outer Circular expressway service estimate from NTC fare stages.',
  },
]

export function normalise(value) {
  return String(value || '').trim().toLowerCase()
}

export function calculateFare(stage, serviceType = 'normal') {
  const stageNumber = Number(stage)
  if (!Number.isInteger(stageNumber) || stageNumber < 1 || stageNumber > normalFareTable.length) {
    return null
  }

  const baseFare = normalFareTable[stageNumber - 1]
  const service = serviceTypes[serviceType] || serviceTypes.normal
  const rawFare = Math.max(baseFare * service.multiplier, service.minimumFare)
  const roundTo = service.roundTo || 1
  const fare = serviceType === 'normal' ? baseFare : Math.ceil(rawFare / roundTo) * roundTo

  return {
    fare,
    baseFare,
    stage: stageNumber,
    serviceLabel: service.label,
    isOfficialNormal: serviceType === 'normal',
  }
}

export function searchRoutes(origin, destination) {
  const from = normalise(origin)
  const to = normalise(destination)

  return routes.filter((route) => {
    const searchable = [route.origin, route.destination, ...route.via, ...route.stops.map((stop) => stop.name)].map(normalise)
    const fromMatch = searchable.some((place) => place.includes(from) || from.includes(place))
    const toMatch = searchable.some((place) => place.includes(to) || to.includes(place))
    return fromMatch && toMatch && from && to
  })
}

export function findRouteByNumber(routeNumber) {
  const query = normalise(routeNumber)
  return routes.find((route) => normalise(route.number) === query || normalise(route.name).includes(query))
}

export function formatCurrency(amount) {
  return `LKR ${Number(amount).toLocaleString('en-LK')}`
}

export function getProvinces() {
  return [...new Set(locationCatalog.map((location) => location.province))].sort()
}

export function getDistricts(province) {
  return [...new Set(
    locationCatalog
      .filter((location) => !province || location.province === province)
      .map((location) => location.district)
  )].sort()
}

export function getStops(province, district) {
  return locationCatalog
    .filter((location) => (!province || location.province === province) && (!district || location.district === district))
    .map((location) => location.name)
    .sort()
}

export function calculateFareBetweenStops(fromStop, toStop, serviceType = 'normal') {
  const from = normalise(fromStop)
  const to = normalise(toStop)
  const matches = routes
    .map((route) => {
      const start = route.stops.find((stop) => normalise(stop.name) === from)
      const end = route.stops.find((stop) => normalise(stop.name) === to)
      if (!start || !end || start.name === end.name) return null

      const stage = Math.max(1, Math.abs(end.stage - start.stage))
      const fare = calculateFare(stage, serviceType)
      return {
        route,
        start,
        end,
        stage,
        fare,
        direction: start.stage < end.stage ? `${route.origin} to ${route.destination}` : `${route.destination} to ${route.origin}`,
        confidence: 'Exact stop match',
      }
    })
    .filter(Boolean)

  return matches.sort((a, b) => a.stage - b.stage)
}

export function suggestRoutes(fromStop, toStop) {
  const from = normalise(fromStop)
  const to = normalise(toStop)

  return routes
    .map((route) => {
      const names = route.stops.map((stop) => normalise(stop.name))
      const fromScore = names.some((name) => name.includes(from) || from.includes(name)) ? 2 : 0
      const toScore = names.some((name) => name.includes(to) || to.includes(name)) ? 2 : 0
      const viaText = [route.origin, route.destination, ...route.via].map(normalise).join(' ')
      const textScore = (viaText.includes(from) ? 1 : 0) + (viaText.includes(to) ? 1 : 0)
      return { route, score: fromScore + toScore + textScore }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}
