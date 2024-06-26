const movies = [
  {
    rank: 1,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "9.3",
    id: "top1",
    year: 1994,
    imdbid: "tt0111161",
    imdb_link: "https://www.imdb.com/title/tt0111161",
  },
  {
    rank: 2,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "9.2",
    id: "top2",
    year: 1972,
    imdbid: "tt0068646",
    imdb_link: "https://www.imdb.com/title/tt0068646",
  },
  {
    rank: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Action", "Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    rating: "9.0",
    id: "top3",
    year: 2008,
    imdbid: "tt0468569",
    imdb_link: "https://www.imdb.com/title/tt0468569",
  },
  {
    rank: 4,
    title: "The Godfather Part II",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "9.0",
    id: "top4",
    year: 1974,
    imdbid: "tt0071562",
    imdb_link: "https://www.imdb.com/title/tt0071562",
  },
  {
    rank: 5,
    title: "12 Angry Men",
    description:
      "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "9.0",
    id: "top5",
    year: 1957,
    imdbid: "tt0050083",
    imdb_link: "https://www.imdb.com/title/tt0050083",
  },
  {
    rank: 6,
    title: "Schindler's List",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Biography", "Drama", "History"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "9.0",
    id: "top6",
    year: 1993,
    imdbid: "tt0108052",
    imdb_link: "https://www.imdb.com/title/tt0108052",
  },
  {
    rank: 7,
    title: "The Lord of the Rings: The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Action", "Adventure", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "9.0",
    id: "top7",
    year: 2003,
    imdbid: "tt0167260",
    imdb_link: "https://www.imdb.com/title/tt0167260",
  },
  {
    rank: 8,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.9",
    id: "top8",
    year: 1994,
    imdbid: "tt0110912",
    imdb_link: "https://www.imdb.com/title/tt0110912",
  },
  {
    rank: 9,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@",
    genre: ["Action", "Adventure", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.8",
    id: "top9",
    year: 2001,
    imdbid: "tt0120737",
    imdb_link: "https://www.imdb.com/title/tt0120737",
  },
  {
    rank: 10,
    title: "The Good, the Bad and the Ugly",
    description:
      "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Adventure", "Western"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.8",
    id: "top10",
    year: 1966,
    imdbid: "tt0060196",
    imdb_link: "https://www.imdb.com/title/tt0060196",
  },
  {
    rank: 11,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    genre: ["Drama", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.8",
    id: "top11",
    year: 1994,
    imdbid: "tt0109830",
    imdb_link: "https://www.imdb.com/title/tt0109830",
  },
  {
    rank: 12,
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.8",
    id: "top12",
    year: 1999,
    imdbid: "tt0137523",
    imdb_link: "https://www.imdb.com/title/tt0137523",
  },
  {
    rank: 13,
    title: "The Lord of the Rings: The Two Towers",
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    genre: ["Action", "Adventure", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.8",
    id: "top13",
    year: 2002,
    imdbid: "tt0167261",
    imdb_link: "https://www.imdb.com/title/tt0167261",
  },
  {
    rank: 14,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.7",
    id: "top14",
    year: 2010,
    imdbid: "tt1375666",
    imdb_link: "https://www.imdb.com/title/tt1375666",
  },
  {
    rank: 15,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    description:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    genre: ["Action", "Adventure", "Fantasy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.7",
    id: "top15",
    year: 1980,
    imdbid: "tt0080684",
    imdb_link: "https://www.imdb.com/title/tt0080684",
  },
  {
    rank: 16,
    title: "The Matrix",
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Action", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.7",
    id: "top16",
    year: 1999,
    imdbid: "tt0133093",
    imdb_link: "https://www.imdb.com/title/tt0133093",
  },
  {
    rank: 17,
    title: "Goodfellas",
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    genre: ["Biography", "Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.7",
    id: "top17",
    year: 1990,
    imdbid: "tt0099685",
    imdb_link: "https://www.imdb.com/title/tt0099685",
  },
  {
    rank: 18,
    title: "Spider-Man: Across the Spider-Verse",
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.7",
    id: "top18",
    year: 2023,
    imdbid: "tt9362722",
    imdb_link: "https://www.imdb.com/title/tt9362722",
  },
  {
    rank: 19,
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.7",
    id: "top19",
    year: 2014,
    imdbid: "tt0816692",
    imdb_link: "https://www.imdb.com/title/tt0816692",
  },
  {
    rank: 20,
    title: "One Flew Over the Cuckoo's Nest",
    description:
      "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top20",
    year: 1975,
    imdbid: "tt0073486",
    imdb_link: "https://www.imdb.com/title/tt0073486",
  },
  {
    rank: 21,
    title: "Se7en",
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    genre: ["Crime", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top21",
    year: 1995,
    imdbid: "tt0114369",
    imdb_link: "https://www.imdb.com/title/tt0114369",
  },
  {
    rank: 22,
    title: "It's a Wonderful Life",
    description:
      "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    genre: ["Drama", "Family", "Fantasy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top22",
    year: 1946,
    imdbid: "tt0038650",
    imdb_link: "https://www.imdb.com/title/tt0038650",
  },
  {
    rank: 23,
    title: "Seven Samurai",
    description:
      "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. As the samurai teach the peasants how to defend themselves, the village is attacked by an army of bandits.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
    genre: ["Action", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top23",
    year: 1954,
    imdbid: "tt0047478",
    imdb_link: "https://www.imdb.com/title/tt0047478",
  },
  {
    rank: 24,
    title: "The Silence of the Lambs",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    genre: ["Crime", "Drama", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top24",
    year: 1991,
    imdbid: "tt0102926",
    imdb_link: "https://www.imdb.com/title/tt0102926",
  },
  {
    rank: 25,
    title: "Saving Private Ryan",
    description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    genre: ["Drama", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top25",
    year: 1998,
    imdbid: "tt0120815",
    imdb_link: "https://www.imdb.com/title/tt0120815",
  },
  {
    rank: 26,
    title: "City of God",
    description:
      "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top26",
    year: 2002,
    imdbid: "tt0317248",
    imdb_link: "https://www.imdb.com/title/tt0317248",
  },
  {
    rank: 27,
    title: "Life Is Beautiful",
    description:
      "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    genre: ["Comedy", "Drama", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top27",
    year: 1997,
    imdbid: "tt0118799",
    imdb_link: "https://www.imdb.com/title/tt0118799",
  },
  {
    rank: 28,
    title: "The Green Mile",
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Crime", "Drama", "Fantasy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top28",
    year: 1999,
    imdbid: "tt0120689",
    imdb_link: "https://www.imdb.com/title/tt0120689",
  },
  {
    rank: 29,
    title: "Star Wars: Episode IV - A New Hope",
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX380_CR0,9,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX380_CR0,9,380,562_.jpg",
    genre: ["Action", "Adventure", "Fantasy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top29",
    year: 1977,
    imdbid: "tt0076759",
    imdb_link: "https://www.imdb.com/title/tt0076759",
  },
  {
    rank: 30,
    title: "Terminator 2: Judgment Day",
    description:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@",
    genre: ["Action", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top30",
    year: 1991,
    imdbid: "tt0103064",
    imdb_link: "https://www.imdb.com/title/tt0103064",
  },
  {
    rank: 31,
    title: "Spirited Away",
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Animation", "Adventure", "Family"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top31",
    year: 2001,
    imdbid: "tt0245429",
    imdb_link: "https://www.imdb.com/title/tt0245429",
  },
  {
    rank: 32,
    title: "Oppenheimer",
    description:
      "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Biography", "Drama", "History"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top32",
    year: 2023,
    imdbid: "tt15398776",
    imdb_link: "https://www.imdb.com/title/tt15398776",
  },
  {
    rank: 33,
    title: "Harakiri",
    description:
      "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
    genre: ["Action", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY67_CR2,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top33",
    year: 1962,
    imdbid: "tt0056058",
    imdb_link: "https://www.imdb.com/title/tt0056058",
  },
  {
    rank: 34,
    title: "Back to the Future",
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    genre: ["Adventure", "Comedy", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top34",
    year: 1985,
    imdbid: "tt0088763",
    imdb_link: "https://www.imdb.com/title/tt0088763",
  },
  {
    rank: 35,
    title: "The Pianist",
    description:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    genre: ["Biography", "Drama", "Music"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top35",
    year: 2002,
    imdbid: "tt0253474",
    imdb_link: "https://www.imdb.com/title/tt0253474",
  },
  {
    rank: 36,
    title: "Psycho",
    description:
      "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@",
    genre: ["Horror", "Mystery", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top36",
    year: 1960,
    imdbid: "tt0054215",
    imdb_link: "https://www.imdb.com/title/tt0054215",
  },
  {
    rank: 37,
    title: "Parasite",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Drama", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top37",
    year: 2019,
    imdbid: "tt6751668",
    imdb_link: "https://www.imdb.com/title/tt6751668",
  },
  {
    rank: 38,
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Action", "Adventure", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top38",
    year: 1994,
    imdbid: "tt0172495",
    imdb_link: "https://www.imdb.com/title/tt0172495",
  },
  {
    rank: 39,
    title: "The Lion King",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@",
    genre: ["Animation", "Adventure", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top39",
    year: 1994,
    imdbid: "tt0110357",
    imdb_link: "https://www.imdb.com/title/tt0110357",
  },
  {
    rank: 40,
    title: "Léon: The Professional",
    description:
      "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    genre: ["Action", "Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top40",
    year: 1994,
    imdbid: "tt0110413",
    imdb_link: "https://www.imdb.com/title/tt0110413",
  },
  {
    rank: 41,
    title: "American History X",
    description:
      "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top41",
    year: 2000,
    imdbid: "tt0120586",
    imdb_link: "https://www.imdb.com/title/tt0120586",
  },
  {
    rank: 42,
    title: "The Departed",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
    genre: ["Crime", "Drama", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top42",
    year: 1998,
    imdbid: "tt0407887",
    imdb_link: "https://www.imdb.com/title/tt0407887",
  },
  {
    rank: 43,
    title: "Whiplash",
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Drama", "Music"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top43",
    year: 2014,
    imdbid: "tt2582802",
    imdb_link: "https://www.imdb.com/title/tt2582802",
  },
  {
    rank: 44,
    title: "The Prestige",
    description:
      "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Drama", "Mystery", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top44",
    year: 2006,
    imdbid: "tt0482571",
    imdb_link: "https://www.imdb.com/title/tt0482571",
  },
  {
    rank: 45,
    title: "The Usual Suspects",
    description:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    genre: ["Crime", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top45",
    year: 1995,
    imdbid: "tt0114814",
    imdb_link: "https://www.imdb.com/title/tt0114814",
  },
  {
    rank: 46,
    title: "Grave of the Fireflies",
    description:
      "A young boy and his little sister struggle to survive in Japan during World War II.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Animation"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top46",
    year: 1988,
    imdbid: "tt0095327",
    imdb_link: "https://www.imdb.com/title/tt0095327",
  },
  {
    rank: 47,
    title: "Casablanca",
    description:
      "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    genre: ["Drama", "Romance", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top47",
    year: 1942,
    imdbid: "tt0034583",
    imdb_link: "https://www.imdb.com/title/tt0034583",
  },
  {
    rank: 48,
    title: "The Intouchables",
    description:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Biography", "Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top48",
    year: 2011,
    imdbid: "tt1675434",
    imdb_link: "https://www.imdb.com/title/tt1675434",
  },
  {
    rank: 49,
    title: "Modern Times",
    description:
      "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    genre: ["Comedy", "Drama", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top49",
    year: 1936,
    imdbid: "tt0027977",
    imdb_link: "https://www.imdb.com/title/tt0027977",
  },
  {
    rank: 50,
    title: "Cinema Paradiso",
    description:
      "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Drama", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top50",
    year: 1988,
    imdbid: "tt0095765",
    imdb_link: "https://www.imdb.com/title/tt0095765",
  },
  {
    rank: 51,
    title: "Once Upon a Time in the West",
    description:
      "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    genre: ["Western"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top51",
    year: 1968,
    imdbid: "tt0064116",
    imdb_link: "https://www.imdb.com/title/tt0064116",
  },
  {
    rank: 52,
    title: "Rear Window",
    description:
      "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    genre: ["Mystery", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top52",
    year: 1954,
    imdbid: "tt0047396",
    imdb_link: "https://www.imdb.com/title/tt0047396",
  },
  {
    rank: 53,
    title: "Alien",
    description:
      "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    genre: ["Horror", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top53",
    year: 1979,
    imdbid: "tt0078748",
    imdb_link: "https://www.imdb.com/title/tt0078748",
  },
  {
    rank: 54,
    title: "City Lights",
    description:
      "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Comedy", "Drama", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top54",
    year: 1931,
    imdbid: "tt0021749",
    imdb_link: "https://www.imdb.com/title/tt0021749",
  },
  {
    rank: 55,
    title: "Django Unchained",
    description:
      "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Drama", "Western"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top55",
    year: 2012,
    imdbid: "tt1853728",
    imdb_link: "https://www.imdb.com/title/tt1853728",
  },
  {
    rank: 56,
    title: "Apocalypse Now",
    description:
      "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    genre: ["Drama", "Mystery", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top56",
    year: 1979,
    imdbid: "tt0078788",
    imdb_link: "https://www.imdb.com/title/tt0078788",
  },
  {
    rank: 57,
    title: "Memento",
    description:
      "A man with short-term memory loss attempts to track down his wife's murderer.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    genre: ["Mystery", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top57",
    year: 2000,
    imdbid: "tt0209144",
    imdb_link: "https://www.imdb.com/title/tt0209144",
  },
  {
    rank: 58,
    title: "Indiana Jones and the Raiders of the Lost Ark",
    description:
      "Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    genre: ["Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top58",
    year: 1981,
    imdbid: "tt0082971",
    imdb_link: "https://www.imdb.com/title/tt0082971",
  },
  {
    rank: 59,
    title: "WALL·E",
    description:
      "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Animation", "Adventure", "Family"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top59",
    year: 2008,
    imdbid: "tt0910970",
    imdb_link: "https://www.imdb.com/title/tt0910970",
  },
  {
    rank: 60,
    title: "The Lives of Others",
    description:
      "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    genre: ["Drama", "Mystery", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top60",
    year: 2006,
    imdbid: "tt0405094",
    imdb_link: "https://www.imdb.com/title/tt0405094",
  },
  {
    rank: 61,
    title: "Sunset Blvd.",
    description:
      "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    genre: ["Drama", "Film-Noir"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top61",
    year: 1950,
    imdbid: "tt0043014",
    imdb_link: "https://www.imdb.com/title/tt0043014",
  },
  {
    rank: 62,
    title: "Paths of Glory",
    description:
      "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    genre: ["Drama", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top62",
    year: 1957,
    imdbid: "tt0050825",
    imdb_link: "https://www.imdb.com/title/tt0050825",
  },
  {
    rank: 63,
    title: "Avengers: Infinity War",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top63",
    year: 2018,
    imdbid: "tt4154756",
    imdb_link: "https://www.imdb.com/title/tt4154756",
  },
  {
    rank: 64,
    title: "The Shining",
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,8,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,8,380,562_.jpg",
    genre: ["Drama", "Horror"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top64",
    year: 1980,
    imdbid: "tt0081505",
    imdb_link: "https://www.imdb.com/title/tt0081505",
  },
  {
    rank: 65,
    title: "The Great Dictator",
    description:
      "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    genre: ["Comedy", "Drama", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top65",
    year: 1940,
    imdbid: "tt0032553",
    imdb_link: "https://www.imdb.com/title/tt0032553",
  },
  {
    rank: 66,
    title: "Witness for the Prosecution",
    description:
      "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    genre: ["Crime", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top66",
    year: 1957,
    imdbid: "tt0051201",
    imdb_link: "https://www.imdb.com/title/tt0051201",
  },
  {
    rank: 67,
    title: "Spider-Man: Into the Spider-Verse",
    description:
      "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top67",
    year: 2018,
    imdbid: "tt4633694",
    imdb_link: "https://www.imdb.com/title/tt4633694",
  },
  {
    rank: 68,
    title: "Aliens",
    description:
      "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top68",
    year: 1986,
    imdbid: "tt0090605",
    imdb_link: "https://www.imdb.com/title/tt0090605",
  },
  {
    rank: 69,
    title: "Inglourious Basterds",
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Adventure", "Drama", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top69",
    year: 2009,
    imdbid: "tt0361748",
    imdb_link: "https://www.imdb.com/title/tt0361748",
  },
  {
    rank: 70,
    title: "The Dark Knight Rises",
    description:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Selina Kyle, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Action", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top70",
    year: 2012,
    imdbid: "tt1345836",
    imdb_link: "https://www.imdb.com/title/tt1345836",
  },
  {
    rank: 71,
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    description:
      "An insane American general orders a bombing attack on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    genre: ["Comedy", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top71",
    year: 1964,
    imdbid: "tt0057012",
    imdb_link: "https://www.imdb.com/title/tt0057012",
  },
  {
    rank: 72,
    title: "Oldboy",
    description:
      "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Action", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top72",
    year: 2003,
    imdbid: "tt0364569",
    imdb_link: "https://www.imdb.com/title/tt0364569",
  },
  {
    rank: 73,
    title: "Coco",
    description:
      "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    genre: ["Animation", "Adventure", "Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top73",
    year: 2017,
    imdbid: "tt2380307",
    imdb_link: "https://www.imdb.com/title/tt2380307",
  },
  {
    rank: 74,
    title: "Amadeus",
    description:
      "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    genre: ["Biography", "Drama", "Music"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top74",
    year: 1984,
    imdbid: "tt0086879",
    imdb_link: "https://www.imdb.com/title/tt0086879",
  },
  {
    rank: 75,
    title: "The Boat",
    description:
      "A German U-boat stalks the frigid waters of the North Atlantic as its young crew experience the sheer terror and claustrophobic world of a submariner in World War II.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_QL75_UX380_CR0,7,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_QL75_UX380_CR0,7,380,562_.jpg",
    genre: ["Drama", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top75",
    year: 1981,
    imdbid: "tt0082096",
    imdb_link: "https://www.imdb.com/title/tt0082096",
  },
  {
    rank: 76,
    title: "Avengers: Endgame",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Action", "Adventure", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top76",
    year: 2019,
    imdbid: "tt4154796",
    imdb_link: "https://www.imdb.com/title/tt4154796",
  },
  {
    rank: 77,
    title: "Joker",
    description:
      "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Crime", "Drama", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top77",
    year: 2019,
    imdbid: "tt7286456",
    imdb_link: "https://www.imdb.com/title/tt7286456",
  },
  {
    rank: 78,
    title: "Your Name.",
    description:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    image:
      "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Animation", "Drama", "Fantasy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top78",
    year: 2016,
    imdbid: "tt5311514",
    imdb_link: "https://www.imdb.com/title/tt5311514",
  },
  {
    rank: 79,
    title: "3 Idiots",
    description:
      'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".',
    image:
      "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    genre: ["Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top79",
    year: 2009,
    imdbid: "tt1187043",
    imdb_link: "https://www.imdb.com/title/tt1187043",
  },
  {
    rank: 80,
    title: "High and Low",
    description:
      "An executive of a Yokohama shoe company becomes a victim of extortion when his chauffeur's son is kidnapped by mistake and held for ransom.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    genre: ["Crime", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top80",
    year: 1963,
    imdbid: "tt0057565",
    imdb_link: "https://www.imdb.com/title/tt0057565",
  },
  {
    rank: 81,
    title: "Capernaum",
    description:
      "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "8.4",
    id: "top81",
    year: 2018,
    imdbid: "tt8267604",
    imdb_link: "https://www.imdb.com/title/tt8267604",
  },
  {
    rank: 82,
    title: "Come and See",
    description:
      "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    genre: ["Drama", "Thriller", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX100_CR0,3,100,148_.jpg",
    rating: "8.4",
    id: "top82",
    year: 1985,
    imdbid: "tt0091251",
    imdb_link: "https://www.imdb.com/title/tt0091251",
  },
  {
    rank: 83,
    title: "Toy Story",
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    genre: ["Animation", "Adventure", "Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top83",
    year: 1995,
    imdbid: "tt0114709",
    imdb_link: "https://www.imdb.com/title/tt0114709",
  },
  {
    rank: 84,
    title: "American Beauty",
    description:
      "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top84",
    year: 1999,
    imdbid: "tt0169547",
    imdb_link: "https://www.imdb.com/title/tt0169547",
  },
  {
    rank: 85,
    title: "Braveheart",
    description:
      "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    genre: ["Biography", "Drama", "History"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top85",
    year: 1995,
    imdbid: "tt0112573",
    imdb_link: "https://www.imdb.com/title/tt0112573",
  },
  {
    rank: 86,
    title: "Princess Mononoke",
    description:
      "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top86",
    year: 1997,
    imdbid: "tt0119698",
    imdb_link: "https://www.imdb.com/title/tt0119698",
  },
  {
    rank: 87,
    title: "Good Will Hunting",
    description:
      "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    genre: ["Drama", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top87",
    year: 1997,
    imdbid: "tt0119217",
    imdb_link: "https://www.imdb.com/title/tt0119217",
  },
  {
    rank: 88,
    title: "Once Upon a Time in America",
    description:
      "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top88",
    year: 1984,
    imdbid: "tt0087843",
    imdb_link: "https://www.imdb.com/title/tt0087843",
  },
  {
    rank: 89,
    title: "Singin' in the Rain",
    description:
      "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    genre: ["Comedy", "Musical", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top89",
    year: 1952,
    imdbid: "tt0045152",
    imdb_link: "https://www.imdb.com/title/tt0045152",
  },
  {
    rank: 90,
    title: "Requiem for a Dream",
    description:
      "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top90",
    year: 2000,
    imdbid: "tt0180093",
    imdb_link: "https://www.imdb.com/title/tt0180093",
  },
  {
    rank: 91,
    title: "Toy Story 3",
    description:
      "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    genre: ["Animation", "Adventure", "Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top91",
    year: 2010,
    imdbid: "tt0435761",
    imdb_link: "https://www.imdb.com/title/tt0435761",
  },
  {
    rank: 92,
    title: "Star Wars: Episode VI - Return of the Jedi",
    description:
      "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    genre: ["Action", "Adventure", "Fantasy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top92",
    year: 1983,
    imdbid: "tt0086190",
    imdb_link: "https://www.imdb.com/title/tt0086190",
  },
  {
    rank: 93,
    title: "Eternal Sunshine of the Spotless Mind",
    description:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Drama", "Romance", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top93",
    year: 2004,
    imdbid: "tt0338013",
    imdb_link: "https://www.imdb.com/title/tt0338013",
  },
  {
    rank: 94,
    title: "2001: A Space Odyssey",
    description:
      "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: ["Adventure", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top94",
    year: 1968,
    imdbid: "tt0062622",
    imdb_link: "https://www.imdb.com/title/tt0062622",
  },
  {
    rank: 95,
    title: "The Hunt",
    description:
      "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top95",
    year: 2012,
    imdbid: "tt2106476",
    imdb_link: "https://www.imdb.com/title/tt2106476",
  },
  {
    rank: 96,
    title: "Reservoir Dogs",
    description:
      "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    genre: ["Crime", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top96",
    year: 1992,
    imdbid: "tt0105236",
    imdb_link: "https://www.imdb.com/title/tt0105236",
  },
  {
    rank: 97,
    title: "Ikiru",
    description:
      "A bureaucrat tries to find meaning in his life after he discovers he has terminal cancer.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWM1YmZkNTctZDAwNy00ZTY4LWFjMTktYzU4ZjViMmU1OTJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYWM1YmZkNTctZDAwNy00ZTY4LWFjMTktYzU4ZjViMmU1OTJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYWM1YmZkNTctZDAwNy00ZTY4LWFjMTktYzU4ZjViMmU1OTJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top97",
    year: 1952,
    imdbid: "tt0044741",
    imdb_link: "https://www.imdb.com/title/tt0044741",
  },
  {
    rank: 98,
    title: "Lawrence of Arabia",
    description:
      "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    genre: ["Adventure", "Biography", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top98",
    year: 1962,
    imdbid: "tt0056172",
    imdb_link: "https://www.imdb.com/title/tt0056172",
  },
  {
    rank: 99,
    title: "Citizen Kane",
    description:
      "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top99",
    year: 1941,
    imdbid: "tt0033467",
    imdb_link: "https://www.imdb.com/title/tt0033467",
  },
  {
    rank: 100,
    title: "M",
    description:
      "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: ["Crime", "Mystery", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.3",
    id: "top100",
    year: 1931,
    imdbid: "tt0022100",
    imdb_link: "https://www.imdb.com/title/tt0022100",
  },
].map((m) => {
  return { ...m, rating: +m.rating, year: { start: m.year, end: null } };
});

const series = [
  {
    rank: 1,
    title: "Breaking Bad",
    description:
      "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5",
    genre: ["Crime", "Drama", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.5,
    id: "top1",
    year: "2008-2013",
    imdbid: "tt0903747",
    imdb_link: "https://www.imdb.com/title/tt0903747",
  },
  {
    rank: 2,
    title: "Planet Earth II",
    description:
      "David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGZmYmQ5NGQtNWQ1MC00NWZlLTg0MjYtYjJjMzQ5ODgxYzRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMGZmYmQ5NGQtNWQ1MC00NWZlLTg0MjYtYjJjMzQ5ODgxYzRkXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMGZmYmQ5NGQtNWQ1MC00NWZlLTg0MjYtYjJjMzQ5ODgxYzRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.5,
    id: "top2",
    year: "2016",
    imdbid: "tt5491994",
    imdb_link: "https://www.imdb.com/title/tt5491994",
  },
  {
    rank: 3,
    title: "Planet Earth",
    description:
      "A documentary series on the wildlife found on Earth. Each episode covers a different habitat: deserts, mountains, deep oceans, shallow seas, forests, caves, polar regions, fresh water, plains and jungles. Narrated by David Attenborough.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzMyYjg0MGMtMTlkMy00OGFiLWFiNTYtYmFmZWNmMDFlMzkwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMzMyYjg0MGMtMTlkMy00OGFiLWFiNTYtYmFmZWNmMDFlMzkwXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary", "Family"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMzMyYjg0MGMtMTlkMy00OGFiLWFiNTYtYmFmZWNmMDFlMzkwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.4,
    id: "top3",
    year: "2006",
    imdbid: "tt0795176",
    imdb_link: "https://www.imdb.com/title/tt0795176",
  },
  {
    rank: 4,
    title: "Band of Brothers",
    description:
      "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3",
    genre: ["Drama", "History", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.4,
    id: "top4",
    year: "2001",
    imdbid: "tt0185906",
    imdb_link: "https://www.imdb.com/title/tt0185906",
  },
  {
    rank: 5,
    title: "Chernobyl",
    description:
      "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTdkN2QwMDItMDVhNS00ZjFiLWEzNTctMzY5ODQzYWNkMDllXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTdkN2QwMDItMDVhNS00ZjFiLWEzNTctMzY5ODQzYWNkMDllXkEyXkFqcGdeQXVyMTMzNDExODE5",
    genre: ["Drama", "History", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTdkN2QwMDItMDVhNS00ZjFiLWEzNTctMzY5ODQzYWNkMDllXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.3,
    id: "top5",
    year: "2019",
    imdbid: "tt7366338",
    imdb_link: "https://www.imdb.com/title/tt7366338",
  },
  {
    rank: 6,
    title: "The Wire",
    description:
      "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Crime", "Drama", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.3,
    id: "top6",
    year: "2002-2008",
    imdbid: "tt0306414",
    imdb_link: "https://www.imdb.com/title/tt0306414",
  },
  {
    rank: 7,
    title: "Avatar: The Last Airbender",
    description:
      "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.3,
    id: "top7",
    year: "2005-2008",
    imdbid: "tt0417299",
    imdb_link: "https://www.imdb.com/title/tt0417299",
  },
  {
    rank: 8,
    title: "Blue Planet II",
    description:
      "David Attenborough returns to the world's oceans in this sequel to the acclaimed documentary filming rare and unusual creatures of the deep, as well as documenting the problems our oceans face.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDZiNDllMTAtOTgxZi00NzNiLWFhNzUtOGUwZWZjZGNjZTMyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDZiNDllMTAtOTgxZi00NzNiLWFhNzUtOGUwZWZjZGNjZTMyXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDZiNDllMTAtOTgxZi00NzNiLWFhNzUtOGUwZWZjZGNjZTMyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.3,
    id: "top8",
    year: "2017",
    imdbid: "tt6769208",
    imdb_link: "https://www.imdb.com/title/tt6769208",
  },
  {
    rank: 9,
    title: "The Sopranos",
    description:
      "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmU3MjkzZWQtOTk1Ni00OTNiLWJhMmMtNmEyN2JjZjUzZDUyXkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNmU3MjkzZWQtOTk1Ni00OTNiLWJhMmMtNmEyN2JjZjUzZDUyXkEyXkFqcGdeQXVyNDIyNjA2MTk@",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNmU3MjkzZWQtOTk1Ni00OTNiLWJhMmMtNmEyN2JjZjUzZDUyXkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.2,
    id: "top9",
    year: "1999-2007",
    imdbid: "tt0141842",
    imdb_link: "https://www.imdb.com/title/tt0141842",
  },
  {
    rank: 10,
    title: "Cosmos: A Spacetime Odyssey",
    description:
      "An exploration of our discovery of the laws of nature and coordinates in space and time.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.3,
    id: "top10",
    year: "2014",
    imdbid: "tt2395695",
    imdb_link: "https://www.imdb.com/title/tt2395695",
  },
  {
    rank: 11,
    title: "Cosmos",
    description:
      "Astronomer Carl Sagan leads us on an engaging guided tour of the various elements and cosmological theories of the universe.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2YzYzc0OWUtNmIwZi00MTBlLThjYTgtYmU1ODlhMzdjMzdjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BM2YzYzc0OWUtNmIwZi00MTBlLThjYTgtYmU1ODlhMzdjMzdjXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BM2YzYzc0OWUtNmIwZi00MTBlLThjYTgtYmU1ODlhMzdjMzdjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.3,
    id: "top11",
    year: "1980",
    imdbid: "tt0081846",
    imdb_link: "https://www.imdb.com/title/tt0081846",
  },
  {
    rank: 12,
    title: "Our Planet",
    description:
      "Explores and unravels the mystery of how and why animals migrate, showing some of the most dramatic and compelling stories in the natural world through spectacular and innovative cinematography.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGNjZjNmOGEtNDMyZC00NTRhLWEyYTctMGI4ODdiMjk1ZDM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZGNjZjNmOGEtNDMyZC00NTRhLWEyYTctMGI4ODdiMjk1ZDM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZGNjZjNmOGEtNDMyZC00NTRhLWEyYTctMGI4ODdiMjk1ZDM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.3,
    id: "top12",
    year: "2019-2023",
    imdbid: "tt9253866",
    imdb_link: "https://www.imdb.com/title/tt9253866",
  },
  {
    rank: 13,
    title: "Game of Thrones",
    description:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Action", "Adventure", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.2,
    id: "top13",
    year: "2011-2019",
    imdbid: "tt0944947",
    imdb_link: "https://www.imdb.com/title/tt0944947",
  },
  {
    rank: 14,
    title: "The World at War",
    description:
      "A groundbreaking 26-part documentary series narrated by the actor Laurence Olivier about the deadliest conflict in history, World War II.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTIwOWEyMjctMjQwNS00ODZiLThmMWEtYWQ1OWFiYzQ2OWYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZTIwOWEyMjctMjQwNS00ODZiLThmMWEtYWQ1OWFiYzQ2OWYwXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary", "History", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZTIwOWEyMjctMjQwNS00ODZiLThmMWEtYWQ1OWFiYzQ2OWYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.2,
    id: "top14",
    year: "1973-1974",
    imdbid: "tt0071075",
    imdb_link: "https://www.imdb.com/title/tt0071075",
  },
  {
    rank: 15,
    title: "Rick and Morty",
    description:
      "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@",
    genre: ["Animation", "Adventure", "Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top15",
    year: "2013-",
    imdbid: "tt2861424",
    imdb_link: "https://www.imdb.com/title/tt2861424",
  },
  {
    rank: 16,
    title: "Bluey",
    description:
      "The slice-of-life adventures of an Australian Blue Heeler Cattle Dog puppy as she has fun with her family and friends in everyday situations.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDBiNDI3YjQtNDdkNS00ZDliLTlmMmQtMDE4ZWM1ZGIyNjljXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDBiNDI3YjQtNDdkNS00ZDliLTlmMmQtMDE4ZWM1ZGIyNjljXkEyXkFqcGdeQXVyNTE1NjY5Mg@@",
    genre: ["Animation", "Family"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDBiNDI3YjQtNDdkNS00ZDliLTlmMmQtMDE4ZWM1ZGIyNjljXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.4,
    id: "top16",
    year: "2018-",
    imdbid: "tt7678620",
    imdb_link: "https://www.imdb.com/title/tt7678620",
  },
  {
    rank: 17,
    title: "Fullmetal Alchemist: Brotherhood",
    description:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top17",
    year: "2009-2010",
    imdbid: "tt1355642",
    imdb_link: "https://www.imdb.com/title/tt1355642",
  },
  {
    rank: 18,
    title: "The Last Dance",
    description:
      "Charting the rise of the 1990s Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history.",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@",
    genre: ["Documentary", "Biography", "History"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top18",
    year: "2020",
    imdbid: "tt8420184",
    imdb_link: "https://www.imdb.com/title/tt8420184",
  },
  {
    rank: 19,
    title: "Life",
    description:
      "David Attenborough's legendary BBC crew explains and shows wildlife all over planet earth. From giving an overview of the challenges facing life to hunting the deep sea and various major evolutionary groups of creatures.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjJhMTAxZjYtNWZkYy00Nzg1LTlkYjItZTNhZWRjNzkxMDg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNjJhMTAxZjYtNWZkYy00Nzg1LTlkYjItZTNhZWRjNzkxMDg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjJhMTAxZjYtNWZkYy00Nzg1LTlkYjItZTNhZWRjNzkxMDg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top19",
    year: "2009",
    imdbid: "tt1533395",
    imdb_link: "https://www.imdb.com/title/tt1533395",
  },
  {
    rank: 20,
    title: "The Twilight Zone",
    description:
      "Ordinary people find themselves in extraordinarily astounding situations, which they each try to solve in a remarkable manner.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@",
    genre: ["Drama", "Fantasy", "Horror"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top20",
    year: "1959-1964",
    imdbid: "tt0052520",
    imdb_link: "https://www.imdb.com/title/tt0052520",
  },
  {
    rank: 21,
    title: "Sherlock",
    description:
      "The quirky spin on Conan Doyle's iconic sleuth pitches him as a \"high-functioning sociopath\" in modern-day London. Assisting him in his investigations: Afghanistan War vet John Watson, who's introduced to Holmes by a mutual acquaintance.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@",
    genre: ["Crime", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top21",
    year: "2010-2017",
    imdbid: "tt1475582",
    imdb_link: "https://www.imdb.com/title/tt1475582",
  },
  {
    rank: 22,
    title: "The Vietnam War",
    description:
      "A comprehensive history of the United States' involvement in the bitterly divisive armed conflict in Southeast Asia.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmY2NGMyY2EtMjJiMS00MmFlLTk1MmItZDA1NTQ0ODg0MDA4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZmY2NGMyY2EtMjJiMS00MmFlLTk1MmItZDA1NTQ0ODg0MDA4XkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary", "History", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmY2NGMyY2EtMjJiMS00MmFlLTk1MmItZDA1NTQ0ODg0MDA4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top22",
    year: "2017",
    imdbid: "tt1877514",
    imdb_link: "https://www.imdb.com/title/tt1877514",
  },
  {
    rank: 23,
    title: "Batman: The Animated Series",
    description:
      "The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top23",
    year: "1992-1995",
    imdbid: "tt0103359",
    imdb_link: "https://www.imdb.com/title/tt0103359",
  },
  {
    rank: 24,
    title: "Attack on Titan",
    description:
      "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top24",
    year: "2013-2023",
    imdbid: "tt2560140",
    imdb_link: "https://www.imdb.com/title/tt2560140",
  },
  {
    rank: 25,
    title: "Scam 1992: The Harshad Mehta Story",
    description:
      "The rise and fall of Harshad Mehta, a stockbroker who single-handedly took the stock market to great heights, is depicted.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1",
    genre: ["Biography", "Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.3,
    id: "top25",
    year: "2020",
    imdbid: "tt12392504",
    imdb_link: "https://www.imdb.com/title/tt12392504",
  },
  {
    rank: 26,
    title: "The Office",
    description:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@",
    genre: ["Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top26",
    year: "2005-2013",
    imdbid: "tt0386676",
    imdb_link: "https://www.imdb.com/title/tt0386676",
  },
  {
    rank: 27,
    title: "Arcane",
    description:
      "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League Of Legends champions and the power that will tear them apart.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top27",
    year: "2021-",
    imdbid: "tt11126994",
    imdb_link: "https://www.imdb.com/title/tt11126994",
  },
  {
    rank: 28,
    title: "The Blue Planet",
    description:
      "Mammoth series, five years in the making, taking a look at the rich tapestry of life in the world's oceans.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjI2NzVhM2UtODZlNS00Nzk1LTk4NDQtYTc0YWU4ODNlNGNjXkEyXkFqcGdeQXVyNjcwMzExMzU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjI2NzVhM2UtODZlNS00Nzk1LTk4NDQtYTc0YWU4ODNlNGNjXkEyXkFqcGdeQXVyNjcwMzExMzU@",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjI2NzVhM2UtODZlNS00Nzk1LTk4NDQtYTc0YWU4ODNlNGNjXkEyXkFqcGdeQXVyNjcwMzExMzU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top28",
    year: "2001",
    imdbid: "tt0296310",
    imdb_link: "https://www.imdb.com/title/tt0296310",
  },
  {
    rank: 29,
    title: "Better Call Saul",
    description:
      "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top29",
    year: "2015-2022",
    imdbid: "tt3032476",
    imdb_link: "https://www.imdb.com/title/tt3032476",
  },
  {
    rank: 30,
    title: "Human Planet",
    description:
      "A cinematic experience bringing you the most amazing human stories in the world. Humans and wildlife surviving in the most extreme environments on Earth",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTJmZjcwZDctODRkYi00MTJkLTgwYTYtMmUxYTgxOGU4ODg2XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTJmZjcwZDctODRkYi00MTJkLTgwYTYtMmUxYTgxOGU4ODg2XkEyXkFqcGdeQXVyMTUyNjc3NDQ4",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTJmZjcwZDctODRkYi00MTJkLTgwYTYtMmUxYTgxOGU4ODg2XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top30",
    year: "2011",
    imdbid: "tt1806234",
    imdb_link: "https://www.imdb.com/title/tt1806234",
  },
  {
    rank: 31,
    title: "Firefly",
    description:
      "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top31",
    year: "2002-2003",
    imdbid: "tt0303461",
    imdb_link: "https://www.imdb.com/title/tt0303461",
  },
  {
    rank: 32,
    title: "Frozen Planet",
    description:
      "Focuses on life and the environment in both the Arctic and Antarctic.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjdlMGYwYWQtODVlMi00Y2I0LThiYzgtYTM0YmU5NzdhYTI0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYjdlMGYwYWQtODVlMi00Y2I0LThiYzgtYTM0YmU5NzdhYTI0XkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYjdlMGYwYWQtODVlMi00Y2I0LThiYzgtYTM0YmU5NzdhYTI0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top32",
    year: "2011-2012",
    imdbid: "tt2092588",
    imdb_link: "https://www.imdb.com/title/tt2092588",
  },
  {
    rank: 33,
    title: "Clarkson's Farm",
    description:
      "Follow Jeremy Clarkson as he attempts to run a farm in the countryside.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWI5M2YyYmYtMzBkNy00YWYyLThjZGUtYzEyOTQxZDQyYmVhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYWI5M2YyYmYtMzBkNy00YWYyLThjZGUtYzEyOTQxZDQyYmVhXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary", "Comedy", "Reality-TV"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYWI5M2YyYmYtMzBkNy00YWYyLThjZGUtYzEyOTQxZDQyYmVhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top33",
    year: "2021-",
    imdbid: "tt10541088",
    imdb_link: "https://www.imdb.com/title/tt10541088",
  },
  {
    rank: 34,
    title: "Death Note",
    description:
      "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Animation", "Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top34",
    year: "2006-2007",
    imdbid: "tt0877057",
    imdb_link: "https://www.imdb.com/title/tt0877057",
  },
  {
    rank: 35,
    title: "Only Fools and Horses",
    description:
      "Comedy that follows two brothers from London's rough Peckham estate as they wheel and deal through a number of dodgy deals and search for the big score that'll make them millionaires.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmI1NGIwNzYtOTVlMS00ZGYwLWE0ZTktYzVmMGVlMmRmN2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYmI1NGIwNzYtOTVlMS00ZGYwLWE0ZTktYzVmMGVlMmRmN2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYmI1NGIwNzYtOTVlMS00ZGYwLWE0ZTktYzVmMGVlMmRmN2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top35",
    year: "1981-2003",
    imdbid: "tt0081912",
    imdb_link: "https://www.imdb.com/title/tt0081912",
  },
  {
    rank: 36,
    title: "The Civil War",
    description: "A comprehensive survey of the American Civil War.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjE1ODNkYzctNjM0Ni00MmM3LTkyMjctZGRhYzA3YzhjMTFlXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjE1ODNkYzctNjM0Ni00MmM3LTkyMjctZGRhYzA3YzhjMTFlXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary", "History", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjE1ODNkYzctNjM0Ni00MmM3LTkyMjctZGRhYzA3YzhjMTFlXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top36",
    year: "1990",
    imdbid: "tt0098769",
    imdb_link: "https://www.imdb.com/title/tt0098769",
  },
  {
    rank: 37,
    title: "Hunter x Hunter",
    description:
      "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top37",
    year: "2011-2014",
    imdbid: "tt2098220",
    imdb_link: "https://www.imdb.com/title/tt2098220",
  },
  {
    rank: 38,
    title: "True Detective",
    description:
      "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTQ3ZWRiMjUtMjcwOS00ZTZhLWE5ODYtM2IyOThlNTNjOWJiXkEyXkFqcGdeQXVyNzM3NTUwMDk@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZTQ3ZWRiMjUtMjcwOS00ZTZhLWE5ODYtM2IyOThlNTNjOWJiXkEyXkFqcGdeQXVyNzM3NTUwMDk@",
    genre: ["Crime", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZTQ3ZWRiMjUtMjcwOS00ZTZhLWE5ODYtM2IyOThlNTNjOWJiXkEyXkFqcGdeQXVyNzM3NTUwMDk@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top38",
    year: "2014-",
    imdbid: "tt2356777",
    imdb_link: "https://www.imdb.com/title/tt2356777",
  },
  {
    rank: 39,
    title: "Seinfeld",
    description:
      "The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top39",
    year: "1989-1998",
    imdbid: "tt0098904",
    imdb_link: "https://www.imdb.com/title/tt0098904",
  },
  {
    rank: 40,
    title: "The Decalogue",
    description:
      "Ten television drama films, each one based on one of the Ten Commandments.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDgzZDVmZjYtYmNhNi00YTE0LWJmNDAtODZiNWIwMjJhZDhhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDgzZDVmZjYtYmNhNi00YTE0LWJmNDAtODZiNWIwMjJhZDhhXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDgzZDVmZjYtYmNhNi00YTE0LWJmNDAtODZiNWIwMjJhZDhhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top40",
    year: "1989-1990",
    imdbid: "tt0092337",
    imdb_link: "https://www.imdb.com/title/tt0092337",
  },
  {
    rank: 41,
    title: "The Beatles: Get Back",
    description:
      "Documentary about the music group The Beatles featuring in-studio footage that was shot in early 1969 for the 1970 feature film 'Let It Be.'",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjMxMjE5ZTEtMjgyOC00ODM4LWJjZDAtMjcwZDBlNzZhZTkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNjMxMjE5ZTEtMjgyOC00ODM4LWJjZDAtMjcwZDBlNzZhZTkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@",
    genre: ["Documentary", "Biography", "Music"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjMxMjE5ZTEtMjgyOC00ODM4LWJjZDAtMjcwZDBlNzZhZTkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top41",
    year: "2021",
    imdbid: "tt9735318",
    imdb_link: "https://www.imdb.com/title/tt9735318",
  },
  {
    rank: 42,
    title: "Persona",
    description:
      "A man diagnosed with Alzheimer's decides to punish criminals.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTJkNzJmYzgtZTZmNC00MTQ2LWE2ZGQtM2EyYjliNGViMTY5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTJkNzJmYzgtZTZmNC00MTQ2LWE2ZGQtM2EyYjliNGViMTY5XkEyXkFqcGdeQXVyNDg4MjkzNDk@",
    genre: ["Crime", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTJkNzJmYzgtZTZmNC00MTQ2LWE2ZGQtM2EyYjliNGViMTY5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top42",
    year: "2018",
    imdbid: "tt7920978",
    imdb_link: "https://www.imdb.com/title/tt7920978",
  },
  {
    rank: 43,
    title: "Fargo",
    description:
      "Various chronicles of deception, intrigue, and murder in and around frozen Minnesota. All of these tales mysteriously lead back one way or another to Fargo, North Dakota.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTVmMDRkNTgtODFlNy00MzgxLWEzMDgtZGZhZmUzMzU1NDAxXkEyXkFqcGdeQXVyMTU4MDIyMjk5._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTVmMDRkNTgtODFlNy00MzgxLWEzMDgtZGZhZmUzMzU1NDAxXkEyXkFqcGdeQXVyMTU4MDIyMjk5",
    genre: ["Crime", "Drama", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTVmMDRkNTgtODFlNy00MzgxLWEzMDgtZGZhZmUzMzU1NDAxXkEyXkFqcGdeQXVyMTU4MDIyMjk5._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top43",
    year: "2014-2024",
    imdbid: "tt2802850",
    imdb_link: "https://www.imdb.com/title/tt2802850",
  },
  {
    rank: 44,
    title: "Cowboy Bebop",
    description:
      "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDEzMjlkNDgtZjhkNi00N2RlLWFhZTYtNDE5OTc2NjZkODJlXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZDEzMjlkNDgtZjhkNi00N2RlLWFhZTYtNDE5OTc2NjZkODJlXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZDEzMjlkNDgtZjhkNi00N2RlLWFhZTYtNDE5OTc2NjZkODJlXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top44",
    year: "1998-1999",
    imdbid: "tt0213338",
    imdb_link: "https://www.imdb.com/title/tt0213338",
  },
  {
    rank: 45,
    title: "Gravity Falls",
    description:
      "Twin siblings Dipper and Mabel Pines spend the summer at their great-uncle's tourist trap in the enigmatic Gravity Falls, Oregon.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx",
    genre: ["Animation", "Adventure", "Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top45",
    year: "2012-2016",
    imdbid: "tt1865718",
    imdb_link: "https://www.imdb.com/title/tt1865718",
  },
  {
    rank: 46,
    title: "Nathan for You",
    description:
      "Nathan Fielder uses his business degree and life experiences to help real small businesses turn a profit. But because of his unorthodox approach, Nathan's genuine efforts to do good often draw real people into an experience far beyond what they signed up for.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGY4ZWM1MDUtZmM3MS00ZjAxLTkyYzMtMjgxODI1YzkzNGUwXkEyXkFqcGdeQXVyNzk2NzE5Mjk@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOGY4ZWM1MDUtZmM3MS00ZjAxLTkyYzMtMjgxODI1YzkzNGUwXkEyXkFqcGdeQXVyNzk2NzE5Mjk@",
    genre: ["Documentary", "Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOGY4ZWM1MDUtZmM3MS00ZjAxLTkyYzMtMjgxODI1YzkzNGUwXkEyXkFqcGdeQXVyNzk2NzE5Mjk@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top46",
    year: "2013-2017",
    imdbid: "tt2297757",
    imdb_link: "https://www.imdb.com/title/tt2297757",
  },
  {
    rank: 47,
    title: "Last Week Tonight with John Oliver",
    description:
      "Former Daily Show host and correspondent John Oliver brings his persona to this weekly news satire program.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjRhYTgyZGEtOGU2YS00ZGM1LWIzODctZDhkNDBiYTFhZTYxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNjRhYTgyZGEtOGU2YS00ZGM1LWIzODctZDhkNDBiYTFhZTYxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@",
    genre: ["Comedy", "News", "Talk-Show"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjRhYTgyZGEtOGU2YS00ZGM1LWIzODctZDhkNDBiYTFhZTYxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top47",
    year: "2014-",
    imdbid: "tt3530232",
    imdb_link: "https://www.imdb.com/title/tt3530232",
  },
  {
    rank: 48,
    title: "When They See Us",
    description:
      "Five teens from Harlem become trapped in a nightmare when they're falsely accused of a brutal attack in Central Park. Based on the true story.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmJjM2YzOWEtOTYxYi00YjhkLTliMzgtMTA2MTc0NDQ1MDM4XkEyXkFqcGdeQXVyODY5OTk4MA@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZmJjM2YzOWEtOTYxYi00YjhkLTliMzgtMTA2MTc0NDQ1MDM4XkEyXkFqcGdeQXVyODY5OTk4MA@@",
    genre: ["Biography", "Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmJjM2YzOWEtOTYxYi00YjhkLTliMzgtMTA2MTc0NDQ1MDM4XkEyXkFqcGdeQXVyODY5OTk4MA@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top48",
    year: "2019",
    imdbid: "tt7137906",
    imdb_link: "https://www.imdb.com/title/tt7137906",
  },
  {
    rank: 49,
    title: "Succession",
    description:
      "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODY5YjA3ZDgtM2EwYy00ZGVmLWFhNWItMTMxMWRkMWFiOTlkXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BODY5YjA3ZDgtM2EwYy00ZGVmLWFhNWItMTMxMWRkMWFiOTlkXkEyXkFqcGdeQXVyMTMzNDExODE5",
    genre: ["Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BODY5YjA3ZDgtM2EwYy00ZGVmLWFhNWItMTMxMWRkMWFiOTlkXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top49",
    year: "2018-2023",
    imdbid: "tt7660850",
    imdb_link: "https://www.imdb.com/title/tt7660850",
  },
  {
    rank: 50,
    title: "Apocalypse: The Second World War",
    description:
      "This six-part series traces the Second World War, from the rise of the Nazis to the surrender of the Japanese, with detailed portraits of key figures.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzEyMmM1ZGMtZTgwMS00Y2Y4LTg0MTItMGRiZGE3YTVhYjU3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMzEyMmM1ZGMtZTgwMS00Y2Y4LTg0MTItMGRiZGE3YTVhYjU3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@",
    genre: ["Documentary", "History", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMzEyMmM1ZGMtZTgwMS00Y2Y4LTg0MTItMGRiZGE3YTVhYjU3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top50",
    year: "2009",
    imdbid: "tt1508238",
    imdb_link: "https://www.imdb.com/title/tt1508238",
  },
  {
    rank: 51,
    title: "Friends",
    description:
      "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Comedy", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top51",
    year: "1994-2004",
    imdbid: "tt0108778",
    imdb_link: "https://www.imdb.com/title/tt0108778",
  },
  {
    rank: 52,
    title: "Africa",
    description:
      "Africa, the world's wildest continent. David Attenborough takes us on an awe-inspiring journey through one of the most diverse places in the world. We visit deserts, savannas, and jungles and meet up with some of Africa's amazing wildlife.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDdkZGViNzctZTJkMy00N2ZmLTg4NTUtZWM3YTE3ZTE3NjYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDdkZGViNzctZTJkMy00N2ZmLTg4NTUtZWM3YTE3ZTE3NjYwXkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Documentary"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDdkZGViNzctZTJkMy00N2ZmLTg4NTUtZWM3YTE3ZTE3NjYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top52",
    year: "2013",
    imdbid: "tt2571774",
    imdb_link: "https://www.imdb.com/title/tt2571774",
  },
  {
    rank: 53,
    title: "TVF Pitchers",
    description:
      "A story of trials and tribulations of four young entrepreneurs who quit their day jobs in order to pursue their start up venture.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzA2NGM5MjAtMGJhMC00ZmE3LWFmYmEtZTVjNjA0MzQ4YmI1XkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYzA2NGM5MjAtMGJhMC00ZmE3LWFmYmEtZTVjNjA0MzQ4YmI1XkEyXkFqcGdeQXVyMTIyNzY0NTMx",
    genre: ["Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYzA2NGM5MjAtMGJhMC00ZmE3LWFmYmEtZTVjNjA0MzQ4YmI1XkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top53",
    year: "2015-2022",
    imdbid: "tt4742876",
    imdb_link: "https://www.imdb.com/title/tt4742876",
  },
  {
    rank: 54,
    title: "Taskmaster",
    description:
      "Five comedians are set tasks challenging their creativity and wit. The tasks are supervised by Alex Horne but the Taskmaster, Greg Davies, always has the final word.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTNlYzY0MTItZmI5Ni00ODEwLTkxNDktOTI3MGI1ODRmODJlXkEyXkFqcGdeQXVyMDE4MzA0NQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTNlYzY0MTItZmI5Ni00ODEwLTkxNDktOTI3MGI1ODRmODJlXkEyXkFqcGdeQXVyMDE4MzA0NQ@@",
    genre: ["Comedy", "Game-Show"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTNlYzY0MTItZmI5Ni00ODEwLTkxNDktOTI3MGI1ODRmODJlXkEyXkFqcGdeQXVyMDE4MzA0NQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top54",
    year: "2015-",
    imdbid: "tt4934214",
    imdb_link: "https://www.imdb.com/title/tt4934214",
  },
  {
    rank: 55,
    title: "It's Always Sunny in Philadelphia",
    description:
      "Five friends with big egos and small brains are the proprietors of an Irish pub in Philadelphia.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDc4NjU1MmMtZjIzNy00MWRhLWI4ZjUtYjY4YmFlY2NjMzA0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZDc4NjU1MmMtZjIzNy00MWRhLWI4ZjUtYjY4YmFlY2NjMzA0XkEyXkFqcGdeQXVyMjkwOTAyMDU@",
    genre: ["Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZDc4NjU1MmMtZjIzNy00MWRhLWI4ZjUtYjY4YmFlY2NjMzA0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top55",
    year: "2005-",
    imdbid: "tt0472954",
    imdb_link: "https://www.imdb.com/title/tt0472954",
  },
  {
    rank: 56,
    title: "As If",
    description:
      "Yilmaz and Ilkkan are two friends who are constantly fighting each other. Their greatest feature is always being able to do something that will turn their ordinary lives upside down.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTUzZjU0M2MtZGFmYy00ZWU0LWJjZGUtOGJlMTI4MWI4ZDUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZTUzZjU0M2MtZGFmYy00ZWU0LWJjZGUtOGJlMTI4MWI4ZDUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@",
    genre: ["Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZTUzZjU0M2MtZGFmYy00ZWU0LWJjZGUtOGJlMTI4MWI4ZDUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top56",
    year: "2021-",
    imdbid: "tt13675832",
    imdb_link: "https://www.imdb.com/title/tt13675832",
  },
  {
    rank: 57,
    title: "Monty Python's Flying Circus",
    description:
      "The original surreal sketch comedy showcase for the Monty Python troupe.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGI1N2FiYTYtOWU3Mi00MjBlLWJkMGMtMjZmZTQwMDdiYjY3XkEyXkFqcGdeQXVyMTIwMjIwNjQ2._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZGI1N2FiYTYtOWU3Mi00MjBlLWJkMGMtMjZmZTQwMDdiYjY3XkEyXkFqcGdeQXVyMTIwMjIwNjQ2",
    genre: ["Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZGI1N2FiYTYtOWU3Mi00MjBlLWJkMGMtMjZmZTQwMDdiYjY3XkEyXkFqcGdeQXVyMTIwMjIwNjQ2._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top57",
    year: "1969-1974",
    imdbid: "tt0063929",
    imdb_link: "https://www.imdb.com/title/tt0063929",
  },
  {
    rank: 58,
    title: "The West Wing",
    description:
      "Inside the lives of staffers in the West Wing of the White House.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjk3ZWE3ZDctN2Q1YS00NzNhLWFjNmYtZTkwYWQxZmQ3NzM3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNjk3ZWE3ZDctN2Q1YS00NzNhLWFjNmYtZTkwYWQxZmQ3NzM3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNjk3ZWE3ZDctN2Q1YS00NzNhLWFjNmYtZTkwYWQxZmQ3NzM3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top58",
    year: "1999-2006",
    imdbid: "tt0200276",
    imdb_link: "https://www.imdb.com/title/tt0200276",
  },
  {
    rank: 59,
    title: "Das Boot",
    description:
      "A World War II German U-Boat crew have a terrifying patrol mission in the early days of the war.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTBhZTQzZGEtZmRiOS00MzAwLWI5MzQtYTc1YTRhMzU3NzQ5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTBhZTQzZGEtZmRiOS00MzAwLWI5MzQtYTc1YTRhMzU3NzQ5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@",
    genre: ["Drama", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTBhZTQzZGEtZmRiOS00MzAwLWI5MzQtYTc1YTRhMzU3NzQ5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top59",
    year: "1985",
    imdbid: "tt0081834",
    imdb_link: "https://www.imdb.com/title/tt0081834",
  },
  {
    rank: 60,
    title: "Curb Your Enthusiasm",
    description:
      "The life and times of Larry David and the predicaments he gets himself into with his friends and complete strangers.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzE3ZDA4OWItOGY2ZC00MzVmLTk0Y2QtNzEzMjc5YWI5ZWFiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMzE3ZDA4OWItOGY2ZC00MzVmLTk0Y2QtNzEzMjc5YWI5ZWFiXkEyXkFqcGdeQXVyMTEyMjM2NDc2",
    genre: ["Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMzE3ZDA4OWItOGY2ZC00MzVmLTk0Y2QtNzEzMjc5YWI5ZWFiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top60",
    year: "2000-",
    imdbid: "tt0264235",
    imdb_link: "https://www.imdb.com/title/tt0264235",
  },
  {
    rank: 61,
    title: "One Piece",
    description:
      'Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".',
    image:
      "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top61",
    year: "1999-",
    imdbid: "tt0388629",
    imdb_link: "https://www.imdb.com/title/tt0388629",
  },
  {
    rank: 62,
    title: "Leyla and Mecnun",
    description:
      "It is an unique and heartwarming show follows the extraordinary journey of a couple named Leyla and Mecnun. With Ali Atay portraying Mecnun and Ezgi Asaroglu as Leyla, the series has garnered a massive fan base and critical acclaim.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGZlN2QzYTQtNmZkMy00YjdiLWIwOGUtMzlhZTJlMmIyNmJhXkEyXkFqcGdeQXVyOTQ2MjQ3MTI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZGZlN2QzYTQtNmZkMy00YjdiLWIwOGUtMzlhZTJlMmIyNmJhXkEyXkFqcGdeQXVyOTQ2MjQ3MTI@",
    genre: ["Adventure", "Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZGZlN2QzYTQtNmZkMy00YjdiLWIwOGUtMzlhZTJlMmIyNmJhXkEyXkFqcGdeQXVyOTQ2MjQ3MTI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top62",
    year: "2011-2023",
    imdbid: "tt1831164",
    imdb_link: "https://www.imdb.com/title/tt1831164",
  },
  {
    rank: 63,
    title: "Fawlty Towers",
    description:
      "Hotel owner Basil Fawlty's incompetence, short fuse, and arrogance form a combination that ensures accidents and trouble are never far away.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzJiYjAxNjUtNjFlNC00NWMwLTgxMTAtNjgyYmUzNWE0OWFjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNzJiYjAxNjUtNjFlNC00NWMwLTgxMTAtNjgyYmUzNWE0OWFjXkEyXkFqcGdeQXVyMTA0MTM5NjI2",
    genre: ["Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNzJiYjAxNjUtNjFlNC00NWMwLTgxMTAtNjgyYmUzNWE0OWFjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top63",
    year: "1975-1979",
    imdbid: "tt0072500",
    imdb_link: "https://www.imdb.com/title/tt0072500",
  },
  {
    rank: 64,
    title: "BoJack Horseman",
    description:
      "BoJack Horseman was the star of the hit television show \"Horsin' Around\" in the '80s and '90s, but now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@",
    genre: ["Animation", "Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top64",
    year: "2014-2020",
    imdbid: "tt3398228",
    imdb_link: "https://www.imdb.com/title/tt3398228",
  },
  {
    rank: 65,
    title: "Pride and Prejudice",
    description:
      "While the arrival of wealthy gentlemen sends her marriage-minded mother into a frenzy, willful and opinionated Elizabeth Bennet matches wits with haughty Mr. Darcy.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@",
    genre: ["Drama", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top65",
    year: "1995",
    imdbid: "tt0112130",
    imdb_link: "https://www.imdb.com/title/tt0112130",
  },
  {
    rank: 66,
    title: "Freaks and Geeks",
    description:
      "A high school mathlete starts hanging out with a group of burnouts while her younger brother navigates his freshman year.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWJhOGFiZWMtYTY5Ni00NGU1LWE5OWItNzA5NThkNWUwYzc4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZWJhOGFiZWMtYTY5Ni00NGU1LWE5OWItNzA5NThkNWUwYzc4XkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZWJhOGFiZWMtYTY5Ni00NGU1LWE5OWItNzA5NThkNWUwYzc4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top66",
    year: "1999-2000",
    imdbid: "tt0193676",
    imdb_link: "https://www.imdb.com/title/tt0193676",
  },
  {
    rank: 67,
    title: "Blackadder Goes Forth",
    description:
      "Stuck in the middle of World War I, Captain Edmund Blackadder does his best to escape the banality of the war.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDAzY2RjNjItYWJlZC00NDNiLWIwZTYtNDM3M2YyYTY5ZDVhXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNDAzY2RjNjItYWJlZC00NDNiLWIwZTYtNDM3M2YyYTY5ZDVhXkEyXkFqcGdeQXVyNjc5NjEzNA@@",
    genre: ["Comedy", "War"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDAzY2RjNjItYWJlZC00NDNiLWIwZTYtNDM3M2YyYTY5ZDVhXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top67",
    year: "1989",
    imdbid: "tt0096548",
    imdb_link: "https://www.imdb.com/title/tt0096548",
  },
  {
    rank: 68,
    title: "Twin Peaks",
    description:
      "An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx",
    genre: ["Crime", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top68",
    year: "1990-1991",
    imdbid: "tt0098936",
    imdb_link: "https://www.imdb.com/title/tt0098936",
  },
  {
    rank: 69,
    title: "Dragon Ball Z",
    description:
      "With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top69",
    year: "1989-1996",
    imdbid: "tt0214341",
    imdb_link: "https://www.imdb.com/title/tt0214341",
  },
  {
    rank: 70,
    title: "Narcos",
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@",
    genre: ["Biography", "Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top70",
    year: "2015-2017",
    imdbid: "tt2707408",
    imdb_link: "https://www.imdb.com/title/tt2707408",
  },
  {
    rank: 71,
    title: "Chappelle's Show",
    description:
      "Comedian Dave Chappelle hosts this sketch-comedy show that parodies many of the nuances of race and culture.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWNjYTg5NGMtOWRjNy00ZGNlLTg2MmYtZjQ5NTM0MTQxOGM2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOWNjYTg5NGMtOWRjNy00ZGNlLTg2MmYtZjQ5NTM0MTQxOGM2XkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Comedy", "Music"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOWNjYTg5NGMtOWRjNy00ZGNlLTg2MmYtZjQ5NTM0MTQxOGM2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top71",
    year: "2003-2006",
    imdbid: "tt0353049",
    imdb_link: "https://www.imdb.com/title/tt0353049",
  },
  {
    rank: 72,
    title: "Black Mirror",
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz",
    genre: ["Drama", "Mystery", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top72",
    year: "2011-",
    imdbid: "tt2085059",
    imdb_link: "https://www.imdb.com/title/tt2085059",
  },
  {
    rank: 73,
    title: "The Last of Us",
    description:
      "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@",
    genre: ["Action", "Adventure", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top73",
    year: "2023-",
    imdbid: "tt3581920",
    imdb_link: "https://www.imdb.com/title/tt3581920",
  },
  {
    rank: 74,
    title: "I, Claudius",
    description:
      "The personal and governmental affairs of the Julio-Claudian dynasty at the beginning of the Roman Empire, as recalled by one of its rulers.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWM1MDY1MjYtYTAzZC00MDJiLTk4MjAtOGQzNDI4YWU1MWQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZWM1MDY1MjYtYTAzZC00MDJiLTk4MjAtOGQzNDI4YWU1MWQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Biography", "Drama", "History"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZWM1MDY1MjYtYTAzZC00MDJiLTk4MjAtOGQzNDI4YWU1MWQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top74",
    year: "1976",
    imdbid: "tt0074006",
    imdb_link: "https://www.imdb.com/title/tt0074006",
  },
  {
    rank: 75,
    title: "South Park",
    description:
      "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy",
    genre: ["Animation", "Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top75",
    year: "1997-",
    imdbid: "tt0121955",
    imdb_link: "https://www.imdb.com/title/tt0121955",
  },
  {
    rank: 76,
    title: "Over the Garden Wall",
    description:
      "Two brothers find themselves lost in a mysterious land and try to find their way home.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzhjNzI0NWEtMzEyYy00OGViLThhMjctMWQxNGQ3Y2IzOTY4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYzhjNzI0NWEtMzEyYy00OGViLThhMjctMWQxNGQ3Y2IzOTY4XkEyXkFqcGdeQXVyNjAwNDUxODI@",
    genre: ["Animation", "Short", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYzhjNzI0NWEtMzEyYy00OGViLThhMjctMWQxNGQ3Y2IzOTY4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top76",
    year: "2014",
    imdbid: "tt3718778",
    imdb_link: "https://www.imdb.com/title/tt3718778",
  },
  {
    rank: 77,
    title: "Kota Factory",
    description:
      "Dedicated to Shrimati SL Loney ji, Shri Irodov ji and Maanniya HC Verma ji, 'Kota Factory' is TVF's latest original. India's first 'Black and White' show highlights the problems present day IIT-JEE aspirants face in their day-to-day lives.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGVmMGYwZTEtOGFlYS00ODRhLTg3M2MtMzc1OGNhNzU3N2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOGVmMGYwZTEtOGFlYS00ODRhLTg3M2MtMzc1OGNhNzU3N2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@",
    genre: ["Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOGVmMGYwZTEtOGFlYS00ODRhLTg3M2MtMzc1OGNhNzU3N2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top77",
    year: "2019-2021",
    imdbid: "tt9432978",
    imdb_link: "https://www.imdb.com/title/tt9432978",
  },
  {
    rank: 78,
    title: "Ted Lasso",
    description:
      "American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League soccer team.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@",
    genre: ["Comedy", "Drama", "Sport"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top78",
    year: "2020-2023",
    imdbid: "tt10986410",
    imdb_link: "https://www.imdb.com/title/tt10986410",
  },
  {
    rank: 79,
    title: "Six Feet Under",
    description:
      "A chronicle of the lives of a dysfunctional family who run an independent funeral home in Los Angeles.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FmMjg0Y2YtYmMyYi00MTBjLTllYzMtN2VjYzRhOTVmNWRlXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BN2FmMjg0Y2YtYmMyYi00MTBjLTllYzMtN2VjYzRhOTVmNWRlXkEyXkFqcGdeQXVyNDIzMzcwNjc@",
    genre: ["Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BN2FmMjg0Y2YtYmMyYi00MTBjLTllYzMtN2VjYzRhOTVmNWRlXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top79",
    year: "2001-2005",
    imdbid: "tt0248654",
    imdb_link: "https://www.imdb.com/title/tt0248654",
  },
  {
    rank: 80,
    title: "Peaky Blinders",
    description:
      "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3",
    genre: ["Crime", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top80",
    year: "2013-2022",
    imdbid: "tt2442560",
    imdb_link: "https://www.imdb.com/title/tt2442560",
  },
  {
    rank: 81,
    title: "Rome",
    description:
      "A down-to-earth account of the lives of both illustrious and ordinary Romans set in the last days of the Roman Republic.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTM4MmU1NWYtNzJjYy00YWFhLThjOGEtZmMxOGI1NzE0NGNiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYTM4MmU1NWYtNzJjYy00YWFhLThjOGEtZmMxOGI1NzE0NGNiXkEyXkFqcGdeQXVyNDIzMzcwNjc@",
    genre: ["Action", "Drama", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYTM4MmU1NWYtNzJjYy00YWFhLThjOGEtZmMxOGI1NzE0NGNiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top81",
    year: "2005-2007",
    imdbid: "tt0384766",
    imdb_link: "https://www.imdb.com/title/tt0384766",
  },
  {
    rank: 82,
    title: "Oz",
    description:
      "A series chronicling the daily activities of an unusual prison facility and its criminal inhabitants.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjY3N2M2YjgtZTFjZS00ODA1LWJjMDgtNDgxZDllZWFiMmYyXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYjY3N2M2YjgtZTFjZS00ODA1LWJjMDgtNDgxZDllZWFiMmYyXkEyXkFqcGdeQXVyNDIzMzcwNjc@",
    genre: ["Crime", "Drama", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYjY3N2M2YjgtZTFjZS00ODA1LWJjMDgtNDgxZDllZWFiMmYyXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top82",
    year: "1997-2023",
    imdbid: "tt0118421",
    imdb_link: "https://www.imdb.com/title/tt0118421",
  },
  {
    rank: 83,
    title: "Gullak",
    description:
      "Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2QwZmNhZjctZDZkMi00Mjk2LTg4OWMtNGEzMjk1ZWIwN2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BN2QwZmNhZjctZDZkMi00Mjk2LTg4OWMtNGEzMjk1ZWIwN2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@",
    genre: ["Comedy", "Drama", "Family"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BN2QwZmNhZjctZDZkMi00Mjk2LTg4OWMtNGEzMjk1ZWIwN2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9.1,
    id: "top83",
    year: "2019-",
    imdbid: "tt10530900",
    imdb_link: "https://www.imdb.com/title/tt10530900",
  },
  {
    rank: 84,
    title: "Vinland Saga",
    description:
      "Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father an homage.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQwODI4Y2YtNjFmNC00NTExLWE0NzYtMTUzNjA0YzBhY2YyXkEyXkFqcGdeQXVyMTMxMTYzNDkz._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNzQwODI4Y2YtNjFmNC00NTExLWE0NzYtMTUzNjA0YzBhY2YyXkEyXkFqcGdeQXVyMTMxMTYzNDkz",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNzQwODI4Y2YtNjFmNC00NTExLWE0NzYtMTUzNjA0YzBhY2YyXkEyXkFqcGdeQXVyMTMxMTYzNDkz._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top84",
    year: "2019-2023",
    imdbid: "tt10233448",
    imdb_link: "https://www.imdb.com/title/tt10233448",
  },
  {
    rank: 85,
    title: "Steins;Gate",
    description:
      "After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@",
    genre: ["Animation", "Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.8,
    id: "top85",
    year: "2011-2015",
    imdbid: "tt1910272",
    imdb_link: "https://www.imdb.com/title/tt1910272",
  },
  {
    rank: 86,
    title: "Dark",
    description:
      "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@",
    genre: ["Crime", "Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top86",
    year: "2007-2020",
    imdbid: "tt5753856",
    imdb_link: "https://www.imdb.com/title/tt5753856",
  },
  {
    rank: 87,
    title: "Panchayat",
    description:
      "A comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a Panchayat office in a remote village of Uttar Pradesh.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDkxODJmNDktZDcxMy00MGJkLWI3NzEtNzVkYTdkZWI0ZmVkXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZDkxODJmNDktZDcxMy00MGJkLWI3NzEtNzVkYTdkZWI0ZmVkXkEyXkFqcGdeQXVyNDY4NjAxNTc@",
    genre: ["Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZDkxODJmNDktZDcxMy00MGJkLWI3NzEtNzVkYTdkZWI0ZmVkXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.9,
    id: "top87",
    year: "2020-",
    imdbid: "tt12004706",
    imdb_link: "https://www.imdb.com/title/tt12004706",
  },
  {
    rank: 88,
    title: "The Boys",
    description:
      "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@",
    genre: ["Action", "Comedy", "Crime"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top88",
    year: "2019-",
    imdbid: "tt1190634",
    imdb_link: "https://www.imdb.com/title/tt1190634",
  },
  {
    rank: 89,
    title: "Fleabag",
    description:
      "Series adapted from the award-winning play about a young woman trying to cope with life in London whilst coming to terms with a recent tragedy.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@",
    genre: ["Comedy", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top89",
    year: "2016-2019",
    imdbid: "tt5687612",
    imdb_link: "https://www.imdb.com/title/tt5687612",
  },
  {
    rank: 90,
    title: "Bleach: Thousand-Year Blood War",
    description:
      "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents are disappearing without a trace and nobody knows who's behind it. Meanwhile, a darkness is approaching Ichigo and his friends in Karakura Town.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 9,
    id: "top90",
    year: "2022-",
    imdbid: "tt14986406",
    imdb_link: "https://www.imdb.com/title/tt14986406",
  },
  {
    rank: 91,
    title: "Battlestar Galactica",
    description:
      "When an old enemy, the Cylons, resurface and obliterate the 12 colonies, the crew of the aged Galactica protect a small civilian fleet - the last of humanity - as they journey toward the fabled 13th colony, Earth.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjBjMjk4YWQtZjY1MC00NTI5LWEwZDMtYWMyYjk2MjkzMThhXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjBjMjk4YWQtZjY1MC00NTI5LWEwZDMtYWMyYjk2MjkzMThhXkEyXkFqcGdeQXVyNzA5NjUyNjM@",
    genre: ["Action", "Adventure", "Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjBjMjk4YWQtZjY1MC00NTI5LWEwZDMtYWMyYjk2MjkzMThhXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top91",
    year: "2004-2009",
    imdbid: "tt0407362",
    imdb_link: "https://www.imdb.com/title/tt0407362",
  },
  {
    rank: 92,
    title: "The Simpsons",
    description:
      "The satiric adventures of a working-class family in the misfit city of Springfield.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@",
    genre: ["Animation", "Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top92",
    year: "1989-",
    imdbid: "tt0096697",
    imdb_link: "https://www.imdb.com/title/tt0096697",
  },
  {
    rank: 93,
    title: "Arrested Development",
    description:
      "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@",
    genre: ["Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top93",
    year: "2003-2019",
    imdbid: "tt0367279",
    imdb_link: "https://www.imdb.com/title/tt0367279",
  },
  {
    rank: 94,
    title: "The Shield",
    description:
      "Drama series following the lives and cases of dirty cop Vic Mackey and the corrupt LAPD unit under his command.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTcwNzQwODI5NV5BMl5BanBnXkFtZTcwNzQxMjI5MQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTcwNzQwODI5NV5BMl5BanBnXkFtZTcwNzQxMjI5MQ@@",
    genre: ["Crime", "Drama", "Thriller"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTcwNzQwODI5NV5BMl5BanBnXkFtZTcwNzQxMjI5MQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top94",
    year: "2002-2008",
    imdbid: "tt0286486",
    imdb_link: "https://www.imdb.com/title/tt0286486",
  },
  {
    rank: 95,
    title: "Downton Abbey",
    description:
      "A chronicle of the lives of the British aristocratic Crawley family and their servants in the early twentieth century.",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2U1NmIwYzgtNjFkOS00YWUxLTg0YTMtZmE5NTA3YjRmY2NlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BY2U1NmIwYzgtNjFkOS00YWUxLTg0YTMtZmE5NTA3YjRmY2NlXkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Drama", "Romance"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BY2U1NmIwYzgtNjFkOS00YWUxLTg0YTMtZmE5NTA3YjRmY2NlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top95",
    year: "2010-2015",
    imdbid: "tt1606375",
    imdb_link: "https://www.imdb.com/title/tt1606375",
  },
  {
    rank: 96,
    title: "House",
    description:
      "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@",
    genre: ["Drama", "Mystery"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top96",
    year: "2004-2012",
    imdbid: "tt0412142",
    imdb_link: "https://www.imdb.com/title/tt0412142",
  },
  {
    rank: 97,
    title: "One Punch Man",
    description:
      "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@",
    genre: ["Animation", "Action", "Comedy"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top97",
    year: "2015-2019",
    imdbid: "tt4508902",
    imdb_link: "https://www.imdb.com/title/tt4508902",
  },
  {
    rank: 98,
    title: "Invincible",
    description:
      "An adult animated series based on the Skybound/Image comic about a teenager whose father is the most powerful superhero on the planet.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2Q1NWExNzEtM2M1Ny00ZDJhLWIwN2MtZGI5ZGI4MzBlYTQyXkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BN2Q1NWExNzEtM2M1Ny00ZDJhLWIwN2MtZGI5ZGI4MzBlYTQyXkEyXkFqcGdeQXVyOTYyMTY2NzQ@",
    genre: ["Animation", "Action", "Adventure"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BN2Q1NWExNzEtM2M1Ny00ZDJhLWIwN2MtZGI5ZGI4MzBlYTQyXkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top98",
    year: "2021-",
    imdbid: "tt6741278",
    imdb_link: "https://www.imdb.com/title/tt6741278",
  },
  {
    rank: 99,
    title: "Severance",
    description:
      "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5",
    genre: ["Drama", "Mystery", "Sci-Fi"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top99",
    year: "2022-",
    imdbid: "tt11280740",
    imdb_link: "https://www.imdb.com/title/tt11280740",
  },
  {
    rank: 100,
    title: "Mad Men",
    description:
      "A drama about one of New York's most prestigious ad agencies at the beginning of the 1960s, focusing on one of the firm's most mysterious but extremely talented ad executives, Donald Draper.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTgxNDZlODQtNDcwOC00NWQ5LTljNWMtMDhjY2U5YTUzMTc4XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTgxNDZlODQtNDcwOC00NWQ5LTljNWMtMDhjY2U5YTUzMTc4XkEyXkFqcGdeQXVyMDA4NzMyOA@@",
    genre: ["Drama"],
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTgxNDZlODQtNDcwOC00NWQ5LTljNWMtMDhjY2U5YTUzMTc4XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: 8.7,
    id: "top100",
    year: "2007-2015",
    imdbid: "tt0804503",
    imdb_link: "https://www.imdb.com/title/tt0804503",
  },
].map((s) => {
  const [start, end] = s.year.trim().split("-");

  return { ...s, year: { start: +start, end: end ? +end : null } };
});

export type Movie = (typeof movies)[number];

export type Series = (typeof series)[number];

export type Movies = Movie | Series;

export default {
  get series() {
    return series;
  },
  get movies() {
    return movies;
  },
  get moviesAndSeries() {
    return [
      ...movies.map((m) => ({ ...m, category: "movie" })),
      ...series.map((s) => ({ ...s, category: "series" })),
    ];
  },
  get genres() {
    return [...new Set(this.moviesAndSeries.map((m) => m.genre).flat())];
  },
};
