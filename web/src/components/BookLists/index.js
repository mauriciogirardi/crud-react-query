import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { Flex } from "rebass/styled-components";

import { getAllBooks } from "../../services/api";
import { Container } from "../../shared/Container";
import { BookItems } from "./BookItems";

export default function BookLists() {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#ccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        {data.map(({ author, id, title }) => (
          <BookItems key={id} author={author} id={id} title={title} />
        ))}
      </Flex>
    </Container>
  );
}
