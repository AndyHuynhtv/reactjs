import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../../api/postApi";
import { MediaCard } from "../../../components/Common/PostCard";

export function HomePage() {
  const [params, setParams] = useState({
    _page: 1,
    _limit: 6,
  });

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 6,
    _totalRows: 0,
  });

  const [postList, setPostList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    (() => {
      postApi
        .getAll(params)
        .then((res) => {
          if (res) {
            setPostList(res.data);
            if (res.pagination) {
              const pagination = {
                ...res.pagination,
                _totalPage: Math.ceil(
                  res.pagination._totalRows / res.pagination._limit
                ),
              };
              setPagination(pagination);
            }
          }
        })

        .catch((error) => {
          console.log("error: ", error);
        });
    })();
  }, [params]);
  console.log("PostList: ", postList);
  return (
    <Box>
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
          {Array.isArray(postList) &&
            postList.length > 0 &&
            postList.map((item, index) => (
              //Box can chinh width responsive
              <Box
                sx={{
                  width: { xs: "100%", sm: 1 / 2, md: 1 / 3 },
                }}
                key={index}
              >
                {/* Box cang chinh padding */}
                <Box
                  sx={{ p: 1.5 }}
                  onClick={() => navigate(`/home/${item.id}`)}
                >
                  <MediaCard
                    title={item.title}
                    author={item.author}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    createdAt={item.createdAt}
                  />
                </Box>
              </Box>
            ))}
        </Stack>
      </Container>
    </Box>
  );
}
