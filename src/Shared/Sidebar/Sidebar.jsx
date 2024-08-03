import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import Header from "../Header/Header";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const Sidebar = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "20vw", display: "flex", flexDirection: "column", height: "100vh" }}>
            <Header />
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
            >
                <Tab label={
                    <div className="flex gap-1 items-center">
                        <ChatBubbleOutlineOutlinedIcon />
                        Chat List
                    </div>
                } />
                <Tab label={
                    <div className="flex gap-1 items-center">
                        <PersonIcon />
                        User List
                    </div>
                } />
            </Tabs>
            {
                value === 0 && (
                    <List sx={{ p: 0, overflowY: "auto" }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <Divider component="li" />
                    </List>
                )
            }
        </Box>
    );
};

export default Sidebar;