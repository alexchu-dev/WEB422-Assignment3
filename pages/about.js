import Link from "next/link"
import Card from "react-bootstrap/Card"
import MovieDetails from "@/components/MovieDetails"
import PageHeader from "@/components/PageHeader"

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  try {
    const res = await fetch(
      "https://alexchu-web422-a1.cyclic.app/api/movies/573a139bf29313caabcf3d23" //573a139bf29313caabcf3d23
    )
    const data = await res.json()

    return { props: { movie: data } }
  } catch (err) {
    console.log(err)
  }
}

export default function About(props) {
  return (
    <>
      <PageHeader text="About The Developer: Alex Chu" />
      <Card>
        <Card.Body>
          <ul>
            <li>
              👋 Hi there, I am Alex Chu, studying in a Computer Programming
              diploma in Seneca College, Canada.
            </li>
            <li>
              🌱 My first computers which only has big floppy drive and black &
              white screens, I first coded with Basic and Pascal with an i486
              pc!?!?
            </li>
            <li>
              🔧 I loved internet and web building and built my first HTML site
              in 1997.
            </li>
            <li>
              💞️ I can&apos;t live without a computer. Feel free to connect me!
            </li>
          </ul>
          <Link href="/movies/Dark City">Link</Link>
        </Card.Body>
        <MovieDetails movie={props.movie}></MovieDetails>
      </Card>
    </>
  )
}
