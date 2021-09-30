import { Box, Button } from "rebass/styled-components";
import { Label, Input } from "@rebass/forms";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";

export const BookForm = ({
  defaultValues,
  onFormSubmit,
  isLoading,
  disabled = false,
}) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" type="text" {...register("title")} />
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="author">Author</Label>
        <Input id="author" name="author" type="text" {...register("author")} />
      </Box>

      <Button disabled={disabled}>
        {isLoading ? (
          <Loader type="ThreeDots" color="#fff" height={10} />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};
