import useSWR from "swr";
import { useRouter } from "next/router";
import Error from "next/error";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

const Movie = () => {
  const router = useRouter();
  const { title } = router.query;
  const { data, error } = useSWR(
    `https://alexchu-web422-a1.cyclic.app/api/movies?page=1&perPage=10&title=${title}`
  );

  if (!data) {
    return null;
  }

  if (data.length == 0) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {data.map((movie) => (
        <div key={movie._id}>
          <PageHeader text={movie.title} />
          <MovieDetails movie={movie} />
        </div>
      ))}
    </>
  );
};

export default Movie;
