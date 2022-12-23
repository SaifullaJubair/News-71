// import { Button, Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

const SportsNews = () => {

    const { data: sports = [], } = useQuery({
        queryKey: ['sports'],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/news/Sports`);
            const data = await res.json();

            return data;
        }
    })

    // console.log(sports)

    const { data: sports1 = [], } = useQuery({
        queryKey: ['sports1'],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/news/Sports?length=1`);
            const data = await res.json();

            return data;
        }
    })
    // console.log(sports1)



    const theme = useTheme();
    return (
        <div className='bg-red-4000 rounded flex flex-col justify-center '>
            <h2 className="  text-black font-bold text-xl my-4">Sports</h2>

            <div className='grid lg:grid-cols-3 border-t-2'>
                {/* left side  */}
                {
                    sports1.map(sport1 => <div className='rounded-lg   border-gray-200 my-2 py-2 lg:col-span-2 md:col-span-0'>
                        <div>
                            <img className='w-full rounded my-2' src={sport1.img} alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl'>
                                {sport1.heading}
                            </h2>
                            <p className='text-xs'>
                                {sport1?.details?.slice(0, 200)}...
                            </p>
                            <div className='flex justify-evenly'>
                                <Button>More +</Button>
                                <Button>Share </Button>
                            </div>
                        </div>
                    </div>)
                }

                {/* right side  */}

                <div className=' border-l'>
                    <div className='flex flex-col justify-center items-center'>
                        {
                            sports.map(sport => <Link href={'/'} className='rounded-lg  border-2  m-2 p-2 lg:p-0 lg:flex justify-between gap-2'>
                                <div>
                                    <img className='lg:w-40 rounded my-2 ' src={sport.img} alt="" />
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <h2 className='text-xl'>
                                        {sport.heading}
                                    </h2>
                                    <p className='text-xs'>
                                        {sport?.details?.slice(0, 50)}...
                                    </p>
                                    <div className='flex justify-evenly lg:hidden'>
                                        <Button>More +</Button>
                                        <Button>Share </Button>
                                    </div>
                                </div>
                            </Link>)
                        }
                    </div>


                </div>


            </div>

        </div>
    );
};

export default SportsNews;