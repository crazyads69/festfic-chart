/* eslint-disable no-nested-ternary */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface WattpadStory {
    id: number;
    title: string;
    description: string;
    cover: string;
    url: string;
    reads: number;
    votes: number;
    comments: number;
}

const Item = styled(ListItem)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 8,
    width: "100%", // Make each list item fill the width
    "&:hover": {
        backgroundColor: theme.palette.mode === "dark" ? "#212529" : "#f2f2f2", // Change background color on hover
        cursor: "pointer", // Add cursor pointer
    },
}));

const CoverImage = styled(Image)(({ theme }) => ({
    width: "15%",
    height: "15%",
    display: "block",
    marginRight: theme.spacing(2),
    borderRadius: 8,
}));

const RankingContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    width: "10%", // Adjust the width to accommodate the larger ranking
    height: "100%",
    ml: "auto",
    mr: 4,
    padding: "0.5rem",
    color: "text.primary",
}));

function WattpadStoriesList({ stories }: { stories: WattpadStory[] }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography
                gutterBottom
                color="text.primary"
                sx={{ mb: 4, fontWeight: "bold", fontSize: "3rem" }}
                variant="h1"
            >
                Danh sách truyện
            </Typography>
            <List sx={{ width: "100%" }}>
                {stories.map((story, index) => (
                    <Item key={story.id}>
                        <CoverImage alt={story.title} height={100} src={story.cover} width={100} />
                        <ListItemText
                            primary={
                                <Typography
                                    gutterBottom
                                    noWrap // Prevent the title from wrapping
                                    className="select-none"
                                    color="text.primary"
                                    variant="h2"
                                >
                                    {story.title}
                                </Typography>
                            }
                            secondary={
                                <div className="flex flex-col">
                                    <Typography
                                        color="text.secondary"
                                        sx={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 4,
                                            WebkitBoxOrient: "vertical",
                                        }}
                                        variant="body2"
                                    >
                                        {!isMobile
                                            ? story.description.length > 100
                                                ? `${story.description.substring(0, 100)}...`
                                                : story.description
                                            : "No description"}
                                    </Typography>
                                    <Typography color="text.secondary" variant="body2">
                                        Số lượt vote: {story.votes}
                                    </Typography>
                                    <Typography color="text.secondary" variant="body2">
                                        Số lượt comment: {story.comments}
                                    </Typography>
                                    <Typography color="text.secondary" variant="body2">
                                        Số lượt đọc: {story.reads}
                                    </Typography>
                                </div>
                            }
                        />
                        <RankingContainer>
                            <Typography
                                fontWeight="bold"
                                sx={{
                                    color:
                                        index === 0
                                            ? "#FFD700" // Gold
                                            : index === 1
                                              ? "#C0C0C0" // Silver
                                              : index === 2
                                                ? "#CD7F32" // Bronze
                                                : "text.primary", // Default color
                                }}
                                variant="h2"
                            >
                                {`#${index + 1}`}
                            </Typography>
                        </RankingContainer>
                    </Item>
                ))}
            </List>
        </Box>
    );
}

export default WattpadStoriesList;
