const artists = [
    {Continent: "Europe", 
    Region: {
        WesternEurope: [
            {id: "1uSDesfigqsIhp7a0pknON", name: "Die Irrlichter", country: "Germany"},
            {id: "2qcMbfpQ7bUpUwN73vIQXn", name: "Malicorne", country: "France"},
            {id: "0tQzBYPjAardhWpGkqVdNW", name: "The Incredible String Band", country: "England"},
            {id: "6AnrSlk5Gp1YMXgaI3mWCL", name: "The Chieftains", country: "Ireland"},
            {id: "0tmwQE8ei6AHKnPrMc9Ib5", name: "Capercaillie", country: "Scotland"}
        ],
        NorthernEurope: [
            {id: "4w13ZzSzpI5O5Jz5mNhf4X", name: "Valravn", country: "Denmark"},
            {id: "0NJ6wlOAsAJ1PN4VRdTPKA", name: "Wardruna", country: "Norway"},
            {id: "0wvrrQ3QUVDLVXmkGPlvkA", name: "Ranarim", country: "Sweden"},
            {id: "5Tc57J5nq1vhgrC6S6eYwr", name: "Suden Aika", country: "Finland"},
            {id: "22wf2A7QrYZU77RPtIRhwG", name: "Krauka", country: "Denmark"}
        ],
        EasternEurope: [
            {id: "3RwH4OIQbgGNiXGF0tJ7jM", name: "Kūlgrinda", country: "Lithuania"},
            {id: "2TQwsunAFHqQuIGG4kegie", name: "Warsaw Village Band", country: "Poland"},
            {id: "4sVOXFzreUKzQWDmUJfSeK", name: "Czeremszyma", country: "Ukraine"},
            {id: "10aOaJc8X3gVtjq0wM7m2T", name: "Oratnitza", country: "Bulgaria"},
            {id: "4My0OjNMETXEAq0KR8p1s0", name: "Himzo Polovina", country: "Bosnia"}
        ],
        NorthMediterranean: [
            {id: "66fSx6FKclyaS6PUYx23ee", name: "Radio Tarifa", country: "Spain"},
            {id: "5EQMO0g2Ley9i4VlOwYQt5", name: "Eugenio Bennato", country: "Italy"},
            {id: "5BHGIdYuoOW01ip5QZLIKP", name: "Brigada Victor Jara", country: "Portugal"},
            {id: "3dBE7TLZSnyjblLS96iUsl", name: "Hainides", country: "Greece"},
            {id: "1GumEyZtJgQP1FV3oEMibm", name: "La Ciapa Rusa", country: "Italy"}
        ]
    }},
    {Continent: "Africa",
    Region: {
        SouthMediterranean: [
            {id: "040hze5aLmq4IDXPDQfUDL", name: "Nass El Ghiwane", country: "Morocco"},
            {id: "364dHqe2BwXqmOhgdBXpw8", name: "Cheikha Rimitti", country: "Algeria"},
            {id: "SM3", name: "", country: ""},
            {id: "SM4", name: "", country: ""},
            {id: "SM5", name: "", country: ""}
        ],
        SubSahara: [
            {id: "SS1", name: "", country: ""},
            {id: "SS2", name: "", country: ""},
            {id: "SS3", name: "", country: ""},
            {id: "SS4", name: "", country: ""},
            {id: "SS5", name: "", country: ""},
        ],
        SouthAfrica: [
            {id: "SA1", name: "", country: ""},
            {id: "SA2", name: "", country: ""},
            {id: "SA3", name: "", country: ""},
            {id: "SA4", name: "", country: ""},
            {id: "SA5", name: "", country: ""},
        ]
    }},
    {Continent: "Asia",
    Region: {
        MiddleEast: [
            {id: "ME1", name: "", country: ""},
            {id: "ME1", name: "", country: ""},
            {id: "ME1", name: "", country: ""},
            {id: "ME1", name: "", country: ""},
            {id: "ME1", name: "", country: ""}
        ],
        CentralAsia: [
            {id: "CA1", name: "", country: ""},
            {id: "CA2", name: "", country: ""},
            {id: "CA3", name: "", country: ""},
            {id: "CA4", name: "", country: ""},
            {id: "CA5", name: "", country: ""}
        ],
        SouthAsia: [
            {id: "SA1", name: "", country: ""},
            {id: "SA2", name: "", country: ""},
            {id: "SA3", name: "", country: ""},
            {id: "SA4", name: "", country: ""},
            {id: "SA5", name: "", country: ""}
        ],
        EastAsia: [
            {id: "EA1", name: "", country: ""},
            {id: "EA2", name: "", country: ""},
            {id: "EA3", name: "", country: ""},
            {id: "EA4", name: "", country: ""},
            {id: "EA5", name: "", country: ""},
        ]
    }},
    {Continent: "NorthAmerica",
    Region: {
        America: [
            {id: "A1", name: "", country: ""},
            {id: "A2", name: "", country: ""},
            {id: "A3", name: "", country: ""},
            {id: "A4", name: "", country: ""},
            {id: "A5", name: "", country: ""}
        ],
        Canada: [
            {id: "C1", name: "", country: ""},
            {id: "C2", name: "", country: ""},
            {id: "C3", name: "", country: ""},
            {id: "C4", name: "", country: ""},
            {id: "C5", name: "", country: ""}
        ],
        Native: [
            {id: "N1", name: "", country: ""},
            {id: "N2", name: "", country: ""},
            {id: "N3", name: "", country: ""},
            {id: "N4", name: "", country: ""},
            {id: "N5", name: "", country: ""}
        ],
        CentralAmerica: [
            {id: "CA1", name: "", country: ""},
            {id: "CA2", name: "", country: ""},
            {id: "CA3", name: "", country: ""},
            {id: "CA4", name: "", country: ""},
            {id: "CA5", name: "", country: ""}
        ]
    }},
    {Continent: "SouthAmerica",
    Region: {
        Brazil: [
            {id: "B1", name: "", country: ""},
            {id: "B2", name: "", country: ""},
            {id: "B3", name: "", country: ""},
            {id: "B4", name: "", country: ""},
            {id: "B5", name: "", country: ""}
        ],
        Spanish: [
            {id: "S1", name: "", country: ""},
            {id: "S2", name: "", country: ""},
            {id: "S3", name: "", country: ""},
            {id: "S4", name: "", country: ""},
            {id: "S5", name: "", country: ""}
        ]
    }},
    {Continent: "Oceania",
    Region:{
        Australia: [
            {id: "As1", name: "", country: ""},
            {id: "As2", name: "", country: ""},
            {id: "As3", name: "", country: ""},
            {id: "As4", name: "", country: ""},
            {id: "As5", name: "", country: ""}
        ],
        Aboriginal: [
            {id: "Ab1", name: "", country: ""},
            {id: "Ab2", name: "", country: ""},
            {id: "Ab3", name: "", country: ""},
            {id: "Ab4", name: "", country: ""},
            {id: "Ab5", name: "", country: ""}
        ]
    }}
]

module.exports = { artists };