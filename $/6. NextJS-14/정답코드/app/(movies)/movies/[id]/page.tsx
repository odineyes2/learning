import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MoviesDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading MovieVideo</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
