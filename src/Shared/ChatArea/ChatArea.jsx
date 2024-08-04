import { Avatar, Box, Chip, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ChatArea = () => {
    return (
        <Box sx={{
            overflow: "auto",
            flex: "1 0 0",
            background: "#f9f9f9"
        }}>
            <Stack
                direction="row"
                justifyContent="center"
                sx={{
                    py: 2,
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                    background: "#f9f9f9"
                }}
            >
                <Chip label="Today" />
            </Stack>

            <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
                <ListItem alignItems="flex-start">
                    <Box sx={{ display: "flex", width: "80%" }}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <Paper sx={{ width: "100%", p: 1.5 }}>
                            <ListItemText
                                sx={{ m: 0 }}
                                primary="Johnny Sins"
                                secondary={<Typography variant="caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet atque odio ipsum minus, praesentium officiis ipsa quod, cupiditate corrupti accusantium consequatur temporibus eius debitis eligendi unde, perferendis inventore assumenda incidunt.</Typography>}
                            />
                            <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="body2">12.20</Typography>
                                <Box>
                                    <IconButton>
                                        <ReplyIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: "red" }}>
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </ListItem>

                <ListItem sx={{ flexDirection: "row-reverse" }}>
                    <Box sx={{ display: "flex", width: "80%", flexDirection: "row-reverse" }}>
                        <ListItemAvatar
                            sx={{ display: "flex", flexDirection: "row-reverse" }}
                        >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <Paper sx={{ width: "100%", p: 1.5, background: "#ccc" }}>
                            <ListItemText
                                sx={{ m: 0 }}
                                primary="Johnny Sins"
                                secondary={<Typography variant="caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet atque odio ipsum minus, praesentium officiis ipsa quod, cupiditate corrupti accusantium consequatur temporibus eius debitis eligendi unde, perferendis inventore assumenda incidunt.</Typography>}
                            />
                            <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="body2">12.20</Typography>
                                <Box>
                                    <IconButton>
                                        <ReplyIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: "red" }}>
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </ListItem>
            </List>
        </Box>
    );
};

export default ChatArea;