import {
  Flex,
  Text,
  Button,
  Link as StyledLink,
} from "rebass/styled-components";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../../services/api";
import Loader from "react-loader-spinner";

export const BookItems = ({ author, title, id }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("books");
  };

  return (
    <Flex p={3} width="100%" alignItems="center">
      <Link component={StyledLink} to={`/update-book/${id}`} mr="auto">
        {title}
      </Link>
      <Text>{author}</Text>
      <Button ml="4" onClick={remove}>
        {isLoading ? (
          <Loader type="ThreeDots" color="#fff" height={10} />
        ) : (
          "Remover"
        )}
      </Button>
    </Flex>
  );
};
