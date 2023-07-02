import Container from "react-bootstrap/Container";
import MainNav from "@/components/MainNav";

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <br />
      <Container>{props.children}</Container>
      <br />
    </>
  );
}
