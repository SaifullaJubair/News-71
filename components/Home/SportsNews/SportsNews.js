// import { Button, Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Button } from "flowbite-react";

const SportsNews = () => {
  const { data: sports = [] } = useQuery({
    queryKey: ["sports"],

    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/news/Sports?length=4`);
      const data = await res.json();

      return data;
    },
  });

  console.log(sports);

  const { data: sports1 = [] } = useQuery({
    queryKey: ["sports1"],

    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/news/Sports?length=1`);
      const data = await res.json();

      return data;
    },
  });
  // console.log(sports1)

  const theme = useTheme();
  return (
    <div className=" rounded flex flex-col justify-center ">
      <h2 className="  text-black font-bold text-3xl my-10 sticky top-12 z-50 bg-green-50 p-3">
        Sports News
      </h2>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* left side  */}
        {sports1.map((sport1) => (
          <div className="rounded-lg  duration-300 hover:-translate-y-2  shadow-2xl my- py-1 lg:col-span-2 md:col-span-0">
            <Link href={`/news/view/${sport1?._id}`}>
              <div>
                <img
                  className="w-full rounded my-2 ml-2"
                  src={sport1.img}
                  alt=""
                />
              </div>
              <div className="mx-4">
                <h2 className="text-xl font-bold">{sport1.heading}</h2>
                <p className="text-xs">{sport1?.details?.slice(0, 200)}...</p>
                <div className="flex justify-evenly">
                  <div>
                    <Link
                      href={`/news/view/${sport1._id}`}
                      className="btn btn-primary "
                      outline={true}
                      gradientDuoTone="cyanToBlue"
                    >
                      <Button outline={true} gradientDuoTone="purpleToBlue">
                        Details
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Button outline={true} gradientDuoTone="cyanToBlue">
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

        {/* right side  */}

        <div className=" shadow-lg">
          <div className="flex flex-col justify-center items-center">
            {sports.map((sport) => (
              <Link
                href={`/news/view/${sport._id}`}
                className="rounded-lg     m-2 p-2 lg:p-0 lg:flex justify-between gap-2"
              >
                <div>
                  <img
                    className="lg:w-11/12 h-full rounded my-2 "
                    src={sport.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center py-4">
                  <h2 className="text-xl font-bold">{sport.heading}</h2>
                  <p className="text-xs">{sport?.details?.slice(0, 50)}...</p>
                  <div className="flex justify-evenly lg:hidden">
                    <Link
                      href={`/news/view/${sport._id}`}
                      className="btn btn-primary "
                      outline={true}
                      gradientDuoTone="cyanToBlue"
                    >
                      <Button outline={true} gradientDuoTone="purpleToBlue">
                        Details
                      </Button>
                    </Link>
                    <Button>Share </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsNews;
