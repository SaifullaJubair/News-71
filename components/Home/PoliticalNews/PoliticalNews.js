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
                        <Card className="  h-[490px]">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={singleNews.img}
                                    className="rounded-none h-[250px]"
                                />
                                <CardContent
                                    className="px-0 mx-4"
                                >
                                    <Typography
                                        gutterBottom
                                        variant="p"
                                        component="div"
                                        className="font-semibold"
                                    >
                                        {singleNews.countryName}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h2"
                                        component="div"
                                        className="font-bold text-2xl"
                                    >
                                        {singleNews.heading}
                                    </Typography>
                                    <div>
                                        <Typography
                                            gutterBottom
                                            variant="p"
                                            component="p"
                                            className="font-medium text-base inline-block"
                                        >
                                            {singleNews.authorName}
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="p"
                                            component="p"
                                            color='text.secondary'
                                            className="font-medium text-base inline-block"
                                        >
                                            -  {singleNews.date}
                                        </Typography>
                                    </div>
                                    <Typography
                                        gutterBottom
                                        variant="p"
                                        component="p"
                                        color='text.secondary'
                                        className="font-medium text-base"
                                    >
                                        {singleNews.details}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/*  second column */}
                    <Grid item xs={12} lg={4} md={6} sm={6} className='h-full flex flex-col gap-5'>
                        {
                            fourNews.map(news =>
                                <Card classNAme='h-[108px] py-0'>
                                    <CardActionArea className='flex h-[100%] p-0'>
                                        <CardMedia
                                            component="img"
                                            image={news.img}
                                            className='p-0 h-[108px] w-[40%]'
                                            alt="img"
                                        />
                                        <CardContent className="p-0 ml-4">
                                            <Typography
                                                gutterBottom
                                                variant="h2"
                                                component="h2"
                                                className="font-bold text-lg">
                                                {news.heading}
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="p"
                                                component="p"
                                                color='text.secondary'
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
                    <Grid item xs={12} lg={4} md={6} sm={6} className='h-full flex flex-col gap-5'>
                        {
                            fourNews.map(news =>
                                <Card classNAme='h-[108px] py-0'>
                                    <CardActionArea className='flex h-[100%] p-0'>
                                        <CardMedia
                                            component="img"
                                            image={news.img}
                                            className='p-0 h-[108px] w-[40%]'
                                            alt="img"
                                        />
                                        <CardContent className="p-0 ml-4">
                                            <Typography
                                                gutterBottom
                                                variant="h2"
                                                component="h2"
                                                className="font-bold text-lg">
                                                {news.heading}
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="p"
                                                component="p"
                                                color='text.secondary'
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
