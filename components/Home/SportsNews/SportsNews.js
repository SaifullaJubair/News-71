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

const SportsNews = () => {
    const theme = useTheme();
    return (
        <div className='bg-red-4000 rounded flex flex-col justify-center '>
            <h2 className="  text-black font-bold text-xl my-4">Sports</h2>

            <div className='grid lg:grid-cols-3 border-t-2'>
                {/* left side  */}
                <div className='rounded-lg   border-gray-200 my-2 py-2 col-span-2'>
                    <div>
                        <img className='w-full rounded my-2' src="https://gumlet.assettype.com/bdnews24%2F2022-12%2Fb587d1e2-eb56-466a-98a7-00106e6e7a2d%2FIMG_20221216_WA0000.jpg?" alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl'>
                            Children's Victory Day
                        </h2>
                        <p className='text-xs'>
                            The morning of the 51st anniversary of Victory Day took the form of 'Kachi-Kachhar Mela'.
                        </p>
                        <div className='flex justify-evenly'>
                            <Button>More +</Button>
                            <Button>Share </Button>
                        </div>
                    </div>
                </div>

                {/* right side  */}
                <div className=' border-l'>
                    <div className='flex justify-center items-center'>
                        <Link href={'/'} className='rounded-lg  border-2  m-2 p-2 lg:p-0 lg:flex justify-between gap-2'>
                            <div>
                                <img className='lg:w-40 rounded my-2 ' src="https://gumlet.assettype.com/bdnews24%2F2022-12%2Fb587d1e2-eb56-466a-98a7-00106e6e7a2d%2FIMG_20221216_WA0000.jpg?" alt="" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-xl'>
                                    Children's Victory Day
                                </h2>
                                <p className='text-xs'>
                                    The morning of the 51st anniversary of Victory Day took the form of 'Kachi-Kachhar Mela'.
                                </p>
                                <div className='flex justify-evenly lg:hidden'>
                                    <Button>More +</Button>
                                    <Button>Share </Button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link href={'/'} className='rounded-lg  border-2  m-2 p-2 lg:p-0 lg:flex justify-between gap-2'>
                            <div>
                                <img className='lg:w-40 rounded my-2 ' src="https://gumlet.assettype.com/bdnews24%2F2022-12%2Fb587d1e2-eb56-466a-98a7-00106e6e7a2d%2FIMG_20221216_WA0000.jpg?" alt="" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-xl'>
                                    Children's Victory Day
                                </h2>
                                <p className='text-xs'>
                                    The morning of the 51st anniversary of Victory Day took the form of 'Kachi-Kachhar Mela'.
                                </p>
                                <div className='flex justify-evenly lg:hidden'>
                                    <Button>More +</Button>
                                    <Button>Share </Button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link href={'/'} className='rounded-lg  border-2  m-2 p-2 lg:p-0 lg:flex justify-between gap-2'>
                            <div>
                                <img className='lg:w-40 rounded my-2 ' src="https://gumlet.assettype.com/bdnews24%2F2022-12%2Fb587d1e2-eb56-466a-98a7-00106e6e7a2d%2FIMG_20221216_WA0000.jpg?" alt="" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-xl'>
                                    Children's Victory Day
                                </h2>
                                <p className='text-xs'>
                                    The morning of the 51st anniversary of Victory Day took the form of 'Kachi-Kachhar Mela'.
                                </p>
                                <div className='flex justify-evenly lg:hidden'>
                                    <Button>More +</Button>
                                    <Button>Share </Button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link href={'/'} className='rounded-lg  border-2  m-2 p-2 lg:p-0 lg:flex justify-between gap-2'>
                            <div>
                                <img className='lg:w-40 rounded my-2 ' src="https://gumlet.assettype.com/bdnews24%2F2022-12%2Fb587d1e2-eb56-466a-98a7-00106e6e7a2d%2FIMG_20221216_WA0000.jpg?" alt="" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-xl'>
                                    Children's Victory Day
                                </h2>
                                <p className='text-xs'>
                                    The morning of the 51st anniversary of Victory Day took the form of 'Kachi-Kachhar Mela'.
                                </p>
                                <div className='flex justify-evenly lg:hidden'>
                                    <Button>More +</Button>
                                    <Button>Share </Button>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SportsNews;