import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postApi } from "../../../api/postApi";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Box, Typography, Container } from "@mui/material";
export function HomeDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await postApi.getById(id);
          setData(res);
        } catch (error) {
          console.log("Error: ", error);
        }
      })();
    }
  }, [id]);
  return (
    <Container position="absolute">
      <Stack position="relative" margin="auto" padding="20px">
        <Box direction="row" justifyContent="center" alignItems="center">
          <Box component="img" width="100%" src={data.imageUrl}></Box>
          <Typography variant="h5">Tiêu đề: {data.title}</Typography>
          <Typography variant="h5">Tác giả: {data.author}</Typography>
          <Typography variant="h5">Mô tả: {data.description}</Typography>
        </Box>
      </Stack>
    </Container>
  );
}
