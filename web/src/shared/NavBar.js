import { Flex, Box, Link as StyledLink, Image } from "rebass/styled-components";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import logo from "./logo.svg";

export const NavBar = () => {
  return (
    <Flex bg="black" color="white" justifyContent="center">
      <Container>
        <Flex p={3} width="100%" alignItems="center">
          <Image size={40} src={logo} />
          <Link component={StyledLink} variant="nav" to="/" fontSize="20px">
            CRUD
          </Link>

          <Box mx="auto" />

          <Link component={StyledLink} variant="nav" to="/create-book">
            + Add new book
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
};
