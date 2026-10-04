const NARUTO = {
  id: "animeav1:naruto",
  title: "Naruto",
  originalTitle: "ナルト",
  type: "tv",
  poster: "https://cdn.animeav1.com/covers/190.jpg",
  backdrop: "https://cdn.animeav1.com/backdrops/190.jpg",
  overview: "Naruto Uzumaki, un ninja hiperactivo de Konohagakure, lucha por ser reconocido y convertirse en Hokage.",
  year: "2002",
  rating: 8.02,
  genres: ["Acción", "Aventura", "Fantasía", "Shounen", "Artes Marciales"]
};

async function getHome() {
  try {
    return {
      rows: [
        {
          id: "solo_naruto",
          title: "Solo Naruto",
          items: [NARUTO]
        }
      ]
    };
  } catch (e) {
    return { rows: [] };
  }
}

async function search(args) {
  try {
    const query = (args.query || args.q || "").toLowerCase();
    if (query.includes("naruto")) {
      return [NARUTO];
    }
    return [];
  } catch (e) {
    return [];
  }
}

async function discover(args) {
  try {
    return [NARUTO];
  } catch (e) {
    return [];
  }
}

async function getMeta(args) {
  try {
    return {
      id: (args && args.id) || NARUTO.id,
      title: NARUTO.title,
      overview: NARUTO.overview,
      poster: NARUTO.poster,
      backdrop: NARUTO.backdrop,
      year: NARUTO.year,
      rating: NARUTO.rating,
      genres: NARUTO.genres,
      cast: ["Junko Takeuchi", "Chie Nakamura", "Kazuhiko Inoue"]
    };
  } catch (e) {
    return null;
  }
}

module.exports = { getHome, search, discover, getMeta };
