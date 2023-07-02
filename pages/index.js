/*********************************************************************************
 *  WEB422 – Assignment 3
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Alex Chu    Student ID: 153954219   Date: 9 Jun 2023
 *  Demo: https://alexchu-web422-a3.vercel.app
 ********************************************************************************/
import useSWR from "swr"
import { useState, useEffect } from "react"
import { Pagination, Accordion } from "react-bootstrap"
import MovieDetails from "@/components/MovieDetails"
import PageHeader from "@/components/PageHeader"

export default function Home() {
  const [page, setPage] = useState(1)
  const [pageData, setPageData] = useState([])
  const { data, error } = useSWR(
    `https://alexchu-web422-a1.vercel.app/api/movies?page=${page}&perPage=10`
  )

  useEffect(() => {
    if (data) {
      setPageData(data)
    }
  }, [data])

  const previous = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const next = () => {
    setPage(page + 1)
  }

  return (
    <>
      <PageHeader text="Film Collection : Sorted by Date"></PageHeader>
      <Accordion>
        {pageData.map((movie) => (
          <Accordion.Item eventKey={movie._id} key={movie._id}>
            <Accordion.Header>
              <strong>{movie.title}</strong>
              <pre> </pre>({movie.year} {movie.directors.join(", ")})
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={movie}></MovieDetails>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <br />
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  )
}
