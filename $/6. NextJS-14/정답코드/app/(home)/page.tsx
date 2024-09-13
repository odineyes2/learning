import Navigation from "../../components/navigation";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async function () {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(API_URL);
  return await fetch(API_URL).then((res) => res.json());
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Hello!!</h1>
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
