import { Navbar, Form, Button } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">👾Game Center</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <Button variant="outline-primary mr-sm-2">Login</Button>
            <Button variant="outline-primary">Upload</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
