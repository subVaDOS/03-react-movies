import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieResponse {
  results: Movie[];
}

const baseUrl = import.meta.env.VITE_BASE_URL;
const myKey = import.meta.env.VITE_API_KEY;

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<MovieResponse>(baseUrl, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
    params: { query },
  });

  return response.data.results;
}
