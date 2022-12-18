import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";

const PoliticalNews = () => {

    const news = [
        {
            id: '1',
            heading: 'Immortality or the dawn of a new era?',
            img: 'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg',
            countryName: 'Global',
            details: "Lizards are a widespread group of squamate reptiles, with over 6, 000 species, ranging across all continents except Antarctica...",
            authorName: 'Muhammad Mehadi',
            date: 'June 28, 2022'
        },
        {
            id: '2',
            heading: 'Immortality or the dawn of a new era?',
            img: 'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg',
            countryName: 'Global',
            details: "Lizards are a widespread group of squamate reptiles, with over 6, 000 species, ranging across all continents except Antarctica...",
            authorName: 'Muhammad Mehadi',
            date: 'Dec 28, 2022'
        },
        {
            id: '3',
            heading: 'Immortality or the dawn of a new era?',
            img: 'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg',
            countryName: 'Global',
            details: "Lizards are a widespread group of squamate reptiles, with over 6, 000 species, ranging across all continents except Antarctica...",
            authorName: 'Muhammad Mehadi',
            date: 'July 28, 2022'
        },
        {
            id: '4',
            heading: 'Immortality or the dawns of a new era?',
            img: 'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg',
            countryName: 'Global',
            details: "Lizards are a widespread group of squamate reptiles, with over 6, 000 species, ranging across all continents except Antarctica...",
            authorName: 'Muhammad Mehadi',
            date: 'March 28, 2022'
        },
        {
            id: '5',
            heading: 'Immortality or the dawn of a new era?',
            img: 'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg',
            countryName: 'Global',
            details: "Lizards are a widespread group of squamate reptiles, with over 6, 000 species, ranging across all continents except Antarctica...",
            authorName: 'Muhammad Mehadi',
            date: 'Feb 28, 2022'
        },
    ]
    const singleNews = news[0]
    console.log(singleNews)
    const fourNews = news.slice(1, 5)



    // const [newses, setNewses] = useState(null);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((data) => setNewses(data));
    // }, []);

    return (
        <div className=" py-10">
            <Typography className="font-bold text-lg mb-10">POLITICAl NEWS</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={4} md={6} sm={6}>
                        <Card sx={{ height: '490px' }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: '250px' }}
                                    component="img"
                                    image={singleNews.img}
                                />
                                <CardContent
                                    sx={{
                                        px: 0, mx: 2
                                    }}>
                                    <Typography
                                        sx={{ fontWeight: 500 }}
                                        gutterBottom
                                        variant="p"
                                        component="div"

                                    >
                                        {singleNews.countryName}
                                    </Typography>
                                    <Typography
                                        sx={{ fontWeight: 700, fontSize: '24px' }}
                                        gutterBottom
                                        variant="h2"
                                        component="div"
                                    >
                                        {singleNews.heading}
                                    </Typography>
                                    <div>
                                        <Typography
                                            sx={{ fontSize: '16px', display: 'inline', fontWeight: 500 }}
                                            gutterBottom
                                            variant="p"
                                            component="p"
                                        >
                                            {singleNews.authorName}
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: '16px', display: 'inline', fontWeight: 500 }}
                                            gutterBottom
                                            variant="p"
                                            component="p"
                                            color='text.secondary'
                                        >
                                            -  {singleNews.date}
                                        </Typography>
                                    </div>
                                    <Typography
                                        sx={{ fontWeight: 500, pt: 2 }}
                                        gutterBottom
                                        variant="p"
                                        component="p"
                                        color='text.secondary'
                                    >
                                        {singleNews.details}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/*  second column */}
                    <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '20px', height: 'full' }} item xs={12} lg={4} md={6} sm={6} >
                        {
                            fourNews.map(news =>
                                <Card sx={{ height: '108px', py: 0 }}>
                                    <CardActionArea sx={{ display: 'flex', height: '108px', p: 0 }}>
                                        <CardMedia
                                            component="img"
                                            image={news.img}
                                            sx={{ p: 0, height: '108px', width: '40%' }}
                                            alt="img"
                                        />
                                        <CardContent sx={{ p: 0, ml: '16px' }}>
                                            <Typography
                                                gutterBottom
                                                variant="h2"
                                                component="h2"
                                                sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '28px' }}
                                            >
                                                {news.heading}
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="p"
                                                component="p"
                                                color='text.secondary'
                                                sx={{ fontWeight: 500, display: 'inline', fontSize: '16px', lineHeight: '24px' }}
                                                className="font-medium text-base inline-block"
                                            >
                                                {singleNews.date}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        }
                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '20px', height: 'full' }} item xs={12} lg={4} md={6} sm={6}  >
                        {
                            fourNews.map(news =>
                                <Card sx={{ height: '108px', py: 0 }}>
                                    <CardActionArea sx={{ display: 'flex', height: '108px', p: 0 }}>
                                        <CardMedia
                                            component="img"
                                            image={news.img}
                                            sx={{ p: 0, height: '108px', width: '40%' }}
                                            alt="img"
                                        />
                                        <CardContent sx={{ p: 0, ml: '16px' }}>
                                            <Typography
                                                gutterBottom
                                                variant="h2"
                                                component="h2"
                                                sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '28px' }}
                                            >
                                                {news.heading}
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="p"
                                                component="p"
                                                color='text.secondary'
                                                sx={{ fontWeight: 500, display: 'inline', fontSize: '16px', lineHeight: '24px' }}
                                                className="font-medium text-base inline-block"
                                            >
                                                {singleNews.date}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        }
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default PoliticalNews;
