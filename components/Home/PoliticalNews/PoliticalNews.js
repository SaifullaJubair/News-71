import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useEffect, useState } from "react";

const PoliticalNews = () => {
  const [singleNews, setSingleNews] = useState(null);
  const [nextFourNews, setNextFourNews] = useState(null);
  const [lastFourNews, setLastFourNews] = useState(null);
  const [newses, setNewses] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/news/Political?length=9")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewses(data);
        setSingleNews(data[0]);
        setNextFourNews(data.slice(1, 5));
        setLastFourNews(data.slice(5, 9));
      });
  }, []);

  return (
    <div className=" py-10">
      <Typography className="font-bold text-3xl mb-10">
        POLITICAL NEWS
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* <a href={`/news/view/${singleNews?._id}`} > */}
          <Grid item xs={12} lg={4} md={6} sm={6}>
            <Card sx={{}}>
              <Link href={`/news/view/${singleNews?._id}`}>
                <CardActionArea>
                  <CardMedia
                    sx={{ height: "246px" }}
                    component="img"
                    image={singleNews?.img}
                  />
                  <CardContent
                    sx={{
                      px: 0,
                      mx: 2,
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: 500 }}
                      gutterBottom
                      variant="p"
                      component="div"
                    >
                      {singleNews?.location}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 700, fontSize: "24px" }}
                      gutterBottom
                      variant="h2"
                      component="div"
                    >
                      {singleNews?.heading?.length > 50
                        ? `${singleNews?.heading.slice(0, 47)}...`
                        : singleNews?.heading}
                    </Typography>
                    <div>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          display: "inline",
                          fontWeight: 500,
                        }}
                        gutterBottom
                        variant="p"
                        component="p"
                      >
                        {singleNews?.authorName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          display: "inline",
                          fontWeight: 500,
                        }}
                        gutterBottom
                        variant="p"
                        component="p"
                        color="text.secondary"
                      >
                        - {singleNews?.createdAt}
                      </Typography>
                    </div>
                    <Typography
                      sx={{ fontWeight: 500, pt: 2 }}
                      gutterBottom
                      variant="p"
                      component="p"
                      color="text.secondary"
                    >
                      {singleNews?.details?.length > 110
                        ? `${singleNews?.details.slice(0, 100)}...`
                        : singleNews?.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
          {/* </a> */}

          {/*  second column */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              height: "full",
            }}
            item
            xs={12}
            lg={4}
            md={6}
            sm={6}
          >
            {nextFourNews?.map((news) => (
              <Card sx={{ height: "108px", py: 0 }}>
                <Link href={`/news/view/${news?._id}`}>
                  <CardActionArea
                    sx={{ display: "flex", height: "108px", p: 0 }}
                  >
                    <CardMedia
                      component="img"
                      image={news?.img}
                      sx={{
                        p: 0,
                        height: "108px",
                        width: "40%",
                      }}
                      alt="img"
                    />
                    <CardContent sx={{ p: 0, ml: "16px" }} xs={{ py: 2 }}>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h2"
                        sx={{
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "28px",
                        }}
                      >
                        {news?.heading?.length > 43
                          ? `${news?.heading.slice(0, 40)}...`
                          : news?.heading}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="p"
                        color="text.secondary"
                        sx={{
                          fontWeight: 500,
                          display: "inline",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                        className="font-medium text-base inline-block"
                      >
                        {singleNews?.createdAt}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            ))}
          </Grid>
          {/* third column */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              height: "full",
            }}
            item
            xs={12}
            lg={4}
            md={6}
            sm={6}
          >
            {lastFourNews?.map((news) => (
              <Card sx={{ height: "108px", py: 0 }}>
                <Link href={`/news/view/${news?._id}`}>
                  <CardActionArea
                    sx={{ display: "flex", height: "108px", p: 0 }}
                  >
                    <CardMedia
                      component="img"
                      image={news?.img}
                      sx={{ p: 0, height: "108px", width: "40%" }}
                      alt="img"
                    />
                    <CardContent sx={{ p: 0, ml: "16px" }}>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h2"
                        sx={{
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "28px",
                        }}
                      >
                        {news?.heading?.length > 43
                          ? `${news?.heading.slice(0, 40)}...`
                          : news?.heading}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="p"
                        color="text.secondary"
                        sx={{
                          fontWeight: 500,
                          display: "inline",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                        className="font-medium text-base inline-block"
                      >
                        {singleNews?.createdAt}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PoliticalNews;
