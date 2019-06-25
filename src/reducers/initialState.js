import * as searchHelper from "../services/SearchHelper";

const search = {
  startDate: null,
  endDate: null,
  focusedInput: null,
  rooms: searchHelper.generateSelectedOptions(1, 9),
  selectedRoom: {value: 1, label: 1},
  adults: searchHelper.generateSelectedOptions(1, 9),
  selectedAdult: {value: 1, label: 1},
  kids: searchHelper.generateSelectedOptions(0, 9),
  selectedKid: {value: 0, label: 0},
  destination: '',
  min:"0.0",
  max:"2147483647.0",
  connected:null,
  sanal:null,
  yildiz:null,
  sinifi:[],
  turu:[],
  aktif:null,
  q:null,
  page:1,
  rows:10,
  filter: {
    hotelTypes: [
      {id: 1, name: "Hotel", count: 100, selected: false},
      {id: 2, name: "Hostel", count: 100, selected: false},
      {id: 3, name: "Apart Hotel", count: 100, selected: false},
      {id: 4, name: "Guest Hotel", count: 100, selected: false},
      {id: 5, name: "Apartment", count: 100, selected: false},
      {id: 6, name: "Residence", count: 100, selected: false}
    ],
    starCount: 5,
    selectedStar: null,
    mealTypes: [
      {id: 1, name: "BB", count: 100, selected: false},
      {id: 2, name: "HB", count: 100, selected: false},
      {id: 3, name: "HB+", count: 100, selected: false},
      {id: 4, name: "FB", count: 100, selected: false},
      {id: 5, name: "FB+", count: 100, selected: false},
      {id: 6, name: "AI", count: 100, selected: false},
      {id: 7, name: "UAI", count: 100, selected: false}
    ]
  }
};

const facets= {
  turu: {
    name: "turu",
    buckets: [
      {
        key: "1~Otel",
        docCount: 6,
        id: "1",
        name: "Otel"
      },
      {
        key: "2~Motel",
        docCount: 1,
        id: "2",
        name: "Motel"
      }
    ],
    docCountErrorUpperBound: 0,
    otherDocCount: 0
  },
  sinifi: {
    name: "sinifi",
    buckets: [
      {
        key: "1~5 Yıldızlı",
        docCount: 4,
        id: "1",
        name: "5 Yıldızlı"
      },
      {
        key: "2~4 Yıldızlı",
        docCount: 2,
        id: "2",
        name: "4 Yıldızlı"
      },
      {
        key: "14~Sınıfsız (Yok)",
        docCount: 1,
        id: "14",
        name: "Sınıfsız (Yok)"
      }
    ],
    docCountErrorUpperBound: 0,
    otherDocCount: 0
  },
  connected: {
    name: "connected",
    buckets: [
      {
        key: "1",
        docCount: 7,
        id: "1",
        name: "1"
      }
    ],
    docCountErrorUpperBound: 0,
    otherDocCount: 0
  },
  yildiz: {
    name: "yildiz",
    buckets: [
      {
        key: "5",
        docCount: 4,
        id: "5",
        name: "5"
      },
      {
        key: "4",
        docCount: 2,
        id: "4",
        name: "4"
      },
      {
        key: "0",
        docCount: 1,
        id: "0",
        name: "0"
      }
    ],
    docCountErrorUpperBound: 0,
    otherDocCount: 0
  },
  sanal: {
    name: "sanal",
    buckets: [
      {
        key: "0",
        docCount: 6,
        id: "0",
        name: "0"
      },
      {
        key: "1",
        docCount: 1,
        id: "1",
        name: "1"
      }
    ],
    docCountErrorUpperBound: 0,
    otherDocCount: 0
  },
  tanitim: {
    name: "tanitim",
    buckets: [
      {
        key: "0",
        docCount: 2,
        id: "0",
        name: "0"
      },
      {
        key: "1",
        docCount: 1,
        id: "1",
        name: "1"
      }
    ],
    docCountErrorUpperBound: 0,
    otherDocCount: 0
  },
  odaFiyatRange: {
    name: "oda_fiyati",
    buckets: [
      {
        key: "0-25",
        from: 0,
        to: 25,
        docCount: 0
      },
      {
        key: "26-50",
        from: 26,
        to: 50,
        docCount: 0
      },
      {
        key: "51-100",
        from: 51,
        to: 100,
        docCount: 0
      },
      {
        key: "101-500",
        from: 101,
        to: 500,
        docCount: 2
      },
      {
        key: "501-1000",
        from: 501,
        to: 1000,
        docCount: 0
      },
      {
        key: "1000+",
        from: 1001,
        to: 10000,
        docCount: 0
      }
    ]
  },
  odaKapasite: {
    name: "oda_kapasite",
    buckets: [
      {
        key: "0-25",
        from: 0,
        to: 25,
        docCount: 1
      },
      {
        key: "26-50",
        from: 26,
        to: 50,
        docCount: 6
      },
      {
        key: "51-100",
        from: 51,
        to: 100,
        docCount: 0
      },
      {
        key: "101-500",
        from: 101,
        to: 500,
        docCount: 0
      },
      {
        key: "501-1000",
        from: 501,
        to: 1000,
        docCount: 0
      },
      {
        key: "1000+",
        from: 1001,
        to: 10000,
        docCount: 0
      }
    ]
  },
  yatakKapasite: {
    name: "yatak_kapasite",
    buckets: [
      {
        key: "0-25",
        from: 0,
        to: 25,
        docCount: 0
      },
      {
        key: "26-50",
        from: 26,
        to: 50,
        docCount: 0
      },
      {
        key: "51-100",
        from: 51,
        to: 100,
        docCount: 1
      },
      {
        key: "101-500",
        from: 101,
        to: 500,
        docCount: 0
      },
      {
        key: "501-1000",
        from: 501,
        to: 1000,
        docCount: 0
      },
      {
        key: "1000+",
        from: 1001,
        to: 10000,
        docCount: 0
      }
    ]
  },
  priceStats: {
    name: "price_stats",
    count: 10,
    min: 100,
    max: 110,
    avg: 103,
    sum: 1030
  }
};

const pagination= {
  pageIndex: 0,
  pageSize: 10,
  totalCount: 450,
  totalPages: 45,
  hasPreviousPage: false,
  hasNextPage: true,
  pageRangeDisplayed: 5
};

export default {
  search: search,
  featuredBrands: {
    items: [],
    loading: false,
    error: null
  },
  featuredCities: {
    items: [],
    loading: false,
    error: null
  },
  featuredHolidays: {
    items: [],
    loading: false,
    error: null
  },
  holidayTypes: {
    items: [],
    loading: false,
    error: null
  },
  holidays: {
    search: search,
    items: [],
    facets: facets,
    pagination: pagination,
    loading: false,
    error: null
  },
  mainSliderData: {
    items: [],
    loading: false,
    error: null
  }
};
