const artists = [
    {Continent: "Europe", 
    Region: {
        "Western-Europe": [
            {id: "1uSDesfigqsIhp7a0pknON", name: "Die Irrlichter", country: "Germany"},
            {id: "2qcMbfpQ7bUpUwN73vIQXn", name: "Malicorne", country: "France"},
            {id: "0tQzBYPjAardhWpGkqVdNW", name: "The Incredible String Band", country: "England"},
            {id: "6AnrSlk5Gp1YMXgaI3mWCL", name: "The Chieftains", country: "Ireland"},
            {id: "0tmwQE8ei6AHKnPrMc9Ib5", name: "Capercaillie", country: "Scotland"}
        ],
        "Northern-Europe": [
            {id: "4w13ZzSzpI5O5Jz5mNhf4X", name: "Valravn", country: "Denmark"},
            {id: "0NJ6wlOAsAJ1PN4VRdTPKA", name: "Wardruna", country: "Norway"},
            {id: "0wvrrQ3QUVDLVXmkGPlvkA", name: "Ranarim", country: "Sweden"},
            {id: "5Tc57J5nq1vhgrC6S6eYwr", name: "Suden Aika", country: "Finland"},
            {id: "22wf2A7QrYZU77RPtIRhwG", name: "Krauka", country: "Denmark"}
        ],
        "Eastern-Europe": [
            {id: "3RwH4OIQbgGNiXGF0tJ7jM", name: "Kūlgrinda", country: "Lithuania"},
            {id: "2TQwsunAFHqQuIGG4kegie", name: "Warsaw Village Band", country: "Poland"},
            {id: "4sVOXFzreUKzQWDmUJfSeK", name: "Czeremszyma", country: "Ukraine"},
            {id: "10aOaJc8X3gVtjq0wM7m2T", name: "Oratnitza", country: "Bulgaria"},
            {id: "6ejnOjBbGBvaPJ0jLMMLxC", name: "Sasha Zelkin", country: "Russia"}
        ],
        "North-Mediterranean": [
            {id: "66fSx6FKclyaS6PUYx23ee", name: "Radio Tarifa", country: "Spain"},
            {id: "5EQMO0g2Ley9i4VlOwYQt5", name: "Eugenio Bennato", country: "Italy"},
            {id: "5BHGIdYuoOW01ip5QZLIKP", name: "Brigada Victor Jara", country: "Portugal"},
            {id: "3dBE7TLZSnyjblLS96iUsl", name: "Hainides", country: "Greece"},
            {id: "1GumEyZtJgQP1FV3oEMibm", name: "La Ciapa Rusa", country: "Italy"}
        ]
    }},
    {Continent: "Africa",
    Region: {
        "South-Mediterranean": [
            {id: "040hze5aLmq4IDXPDQfUDL", name: "Nass El Ghiwane", country: "Morocco"},
            {id: "364dHqe2BwXqmOhgdBXpw8", name: "Cheikha Rimitti", country: "Algeria"},
            {id: "2UnyqlAyvne5m5dAo1czho", name: "Le Malouf Tunisien", country: "Tunisia"},
            {id: "6IW026WCYU8L1WF79dfwss", name: "Abdel Halim Hafez", country: "Egypt"},
            {id: "2pTa7xMuT8CclPm0Ch0a5T", name: "Beihdja Rahal", country: "Algeria"}
        ],
        "Sub-Sahara": [
            {id: "7HAuGBgyiW6xu9tARZUObr", name: "Mansour Seck", country: "Senegal"},
            {id: "7Eg9NJC0jFmuEtqT1N5Bdv", name: "Tshala Muana", country: "Congo"},
            {id: "1qR8WMddpM1skrmubxWZPG", name: "Dr Errol Leighton", country: "Cameroon"},
            {id: "5Tv7EcBYZgPCHZrcX4GNBQ", name: "Marehemu George Mukabi", country: "Kenya"},
            {id: "3jYxnZFilXW7XRmOXmAxl6", name: "Batile Alake", country: "Nigeria"},
        ],
        "South-Africa": [
            {id: "40tfyTu8KqksEYGJxdy8LE", name: "Madosini", country: "South Africa"},
            {id: "0Qgj26PRNrdHbyo9G4qqtt", name: "Mama Sana", country: "Madagascar"},
            {id: "45Cg3iDOHajpXfOBRBaing", name: "Dilon Djindji", country: "Mozambique"},
            {id: "0qxChe6734C177B6soWcLV", name: "Ngola Ritmos", country: "Angola"},
            {id: "4IAUBfOkBlmdQecfQQpTa6", name: "Otto & The Mutapa Calling", country: "Zimbabwe"},
        ]
    }},
    {Continent: "Asia",
    Region: {
        "Middle-East": [
            {id: "3meYUCHyh5OayViOog5daw", name: "Shahram Nazeri", country: "Iran"},
            {id: "5Oo6D3FLRpWjgBn0mqfiA3", name: "Yeni Türkü", country: "Turkey"},
            {id: "3pBRcbWKXI0PmYQ42GxPCk", name: "The Jewish Starlight Orchestra", country: "Israel"},
            {id: "13xKnb7dAum7ShcsxQA5v2", name: "Rabeh Saqer", country: "Saudi Arabia"},
            {id: "11dMqVZY4PHgVL80tejvHK", name: "Omar Souleyman", country: "Syria"}
        ],
        "Central-Asia": [
            {id: "7kpSnkUPTvvxD5T0FA7p9L", name: "Saian Aqmolda", country: "Kazakhstan"},
            {id: "1pBdsCOwhRPmp7Gl6KBl0b", name: "Ashkhabad", country: "Turkmenistan"},
            {id: "6jirzBA1RpLDIZWdWIOeak", name: "Turgun Alimatov", country: "Uzbekistan"},
            {id: "1bK0K2tuAcvMScEWIHt54t", name: "Huun-Huur-Tu", country: "Mongolia"},
            {id: "0IRZ7bxSVw7TwjbjdF8ENH", name: "Davlatmand Kholov", country: "Tajikistan"}
        ],
        "South-Asia": [
            {id: "69KndYMHGq62ku50ZOw7ea", name: "The Bauls of Bengal", country: "India"},
            {id: "0sbtGmW8r5bxfXzla8a7eI", name: "Sabri Brothers", country: "Pakistan"},
            {id: "52JvzTeaC2J0EsAPdGPMjV", name: "Mahori Kruang Sai Thai Ensemble", country: "Thailand"},
            {id: "0NgYfcC8HoiGmnAvqOWaA2", name: "Inle Myint Maung", country: "Burma"},
            {id: "1Za7D3KNMIW0znKJmxCxZR", name: "The Orchestra Of The Khmer Classical Dance Troupe", country: "Cambodia"}
        ],
        "East-Asia": [
            {id: "4geOmyhAwfgfsV203vEZw3", name: "Tianjin Buddhist Music Ensemble", country: "China"},
            {id: "6Jw2eO1cVpBVAO5PlLVM1l", name: "The Japanese Music Tradition Ensemble", country: "Japan"},
            {id: "0AMxJwZiqAt7cEUf8HSPqi", name: "Chung Woong Korean Traditional Music Ensemble", country: "Korea"},
            {id: "1ysE2zYeNZXYDqN2Mz0dxx", name: "Hanoi Session Singers", country: "Vietnam"},
            {id: "7BiG7brYIL1Uhc0DWdumsR", name: "Juan Silos Jr.", country: "Philipines"},
        ]
    }},
    {Continent: "NorthAmerica",
    Region: {
        America: [
            {id: "3Ovf2lytXSXWFM2cwsJACC", name: "Lead Belly", country: "USA"},
            {id: "19eLuQmk9aCobbVDHc6eek", name: "Louis Armstrong", country: "USA"},
            {id: "0Xi59sEw38vRvwleSAVqoo", name: "Marty Robbins", country: "USA"},
            {id: "3qm84nBOXUEQ2vnTfUTTFC", name: "Guns N'Roses", country: "USA"},
            {id: "711MCceyCBcFnzjGY4Q7Un", name: "AC/DC", country: "USA"}
        ],
        Canada: [
            {id: "2QkNXWhQoTVUMyS9OIDP0H", name: "Ian & Sylvia", country: "Canada"},
            {id: "1HmJx5koXZX9DSd8AsqnSj", name: "Brent Santin, Gary Mallon", country: "Canada"},
            {id: "0jO5e5ieXOPwlp7d4rk2S1", name: "Alan Mills", country: ""},
            {id: "0epgUpzNmwJL55ifDM6iL3", name: "Denise Bérard", country: ""},
            {id: "54BZLczVMsW9sPSIcUst1a", name: "Les Cowboys Fringants", country: "Canada"}
        ],
        Native: [
            {id: "7eJQYDW3x4XsSpyvypSON3", name: "Doc Tate Nevaquaya", country: "USA"},
            {id: "3jBG7MU9W14tKXf9StvEUc", name: "Gambell village Eskimo singers", country: "Canada"},
            {id: "2D38buglrcCl9TMZ45tkh1", name: "R. Carlos Nakai", country: "USA"},
            {id: "4BwYc3IW3uR0WjyDCLqXPR", name: "Burning Sky", country: "USA"},
            {id: "4ue38pvKRgDhRr7G1cL0uH", name: "Mohicans", country: "USA"}
        ],
        "Central-America": [
            {id: "014WIDx7H4BRCHB1faiisK", name: "Los Tucanes De Tijuana", country: "Mexico"},
            {id: "5zZpD0w7JdJ56hd9rjGyiu", name: "Malpais", country: "Costa Rica"},
            {id: "6O0XowlxmVbngm20L0Fm8Q", name: "Coupé Cloué", country: "Haiti"},
            {id: "6BH2lormtpjy3X9DyrGHVj", name: "Bob Marley", country: "Jamaica"},
            {id: "60rvB6FcgAca5rMqSWDfSf", name: "Internacionales Conejos", country: "Guatemala"}
        ]
    }},
    {Continent: "South-America",
    Region: {
        "Portugese-Latino": [
            {id: "2Kbh9OrNxoWkGWSgAGmYwr", name: "Rolando Boldrin & Renato Teixeira", country: "Brazil"},
            {id: "1HDCm1wr9wLKkuKUR641ay", name: "Claudionor Germano", country: "Brazil"},
            {id: "5mIZYxg9VOEiMpW4bgfeEZ", name: "Dércio Marques", country: "Brazil"},
            {id: "2PLF4pjm6A5eztTVbt9ou4", name: "Tião Carreiro e Pardinho", country: "Brazil"},
            {id: "2ZofT7n9AlTKf7KDCoHGgD", name: "Luiz Gonzaga", country: "Brazil"}
        ],
        "Spanish-Latino": [
            {id: "5KyE03kjGuutFNGwN2K48c", name: "Anibal Velasquez Y Su Conjunto", country: "Colombia"},
            {id: "4o28hZJdDFqDpg6WcGAJ51", name: "Amanda Portales", country: "Peru"},
            {id: "0t8lKcdJV0dEicuocOteOw", name: "Los Chalchaleros", country: "Argentina"},
            {id: "3rR2DhQuqHHII4kaSS0bDD", name: "Los de Ramon", country: "Chile"},
            {id: "6HqPNOo6OV9rPbEY7MP9T8", name: "Julio Jaramillo", country: "Ecuador"}
        ]
    }},
    {Continent: "Oceania",
    Region:{
        Australia: [
            {id: "3hOHiuCgAmPPORmHhZoZ7n", name: "The Bushwackers", country: "Australia"},
            {id: "3dT8t2LyMU2BmXYNn5nvn6", name: "The Hawking Brothers", country: "Australia"},
            {id: "5QiI5rLs45WN4kVftheHCT", name: "The Outlanders", country: "Australia"},
            {id: "0pykHxfKxCENTt1b2DQs9J", name: "Warren Fahey", country: "Australia"},
            {id: "51QyqZ6i7RfbuUi3qWvHRh", name: "Phil Garland", country: "New Zealand"}
        ],
        Aboriginal: [
            {id: "73L9CX1GkcWmTYcVRQLYlj", name: "Gary Thomas", country: "Australia"},
            {id: "2TY6GhefY00ht42fFuvtd6", name: "Australian Aborigines", country: "Australia"},
            {id: "5E3ZUFsgLPqKP6blWewn8V", name: "Hirini Melbourne", country: "New Zealand"},
            {id: "0d7jHHWmtrZFIC2X1oTy24", name: "David Fanshawe", country: "Papua New Guinea"},
            {id: "6F8GJx8oGbkie1DhcjRbh1", name: "Le Groupe Angklung", country: "Indonesia"}
        ]
    }}
]

module.exports = { artists };