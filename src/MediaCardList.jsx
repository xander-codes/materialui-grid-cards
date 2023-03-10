import React from 'react';
import MediaCard from "./MediaCard";
import {Stack} from "@mui/material";

const MediaCardList = () => {
    return (
        <Stack direction='row' flexWrap={"wrap"} justifyContent={"center"}>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
        </Stack>
    );
};

export default MediaCardList;