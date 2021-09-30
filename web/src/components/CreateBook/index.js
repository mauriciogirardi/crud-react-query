import { BookForm } from "../../shared/BookForm";
import { Container } from "../../shared/Container";
import { Box, Heading } from "rebass/styled-components";
import { useMutation } from "react-query";
import { createBook } from "../../services/api";
import { useHistory } from "react-router";

export default function CreateBook() {
  const history = useHistory();

  const { mutateAsync, isLoading } = useMutation(createBook);

  const onFormSubmit = async (data) => {
    if (data.title && data.author) {
      await mutateAsync(data);
      history.push("/");
    } else {
    }
  };

  return (
    <Container>
      <Box sx={{ p: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
        <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
}
