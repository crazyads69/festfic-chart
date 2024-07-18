import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import Image from "next/image";

import { WattpadStory } from "@/hooks/use-get-wattpad-data";

export interface RankingItemProps {
    wattpadStory: WattpadStory[];
}

export default function RankItem({ wattpadStory }: RankingItemProps) {
    // Use the wattpadStory prop to render the story data in the component
    return (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            {wattpadStory.map((story) => (
                <ListItem key={story.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <Image alt={story.title} height={40} src={story.cover} width={40} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={story.title} secondary={story.description} />
                </ListItem>
            ))}
        </List>
    );
}
