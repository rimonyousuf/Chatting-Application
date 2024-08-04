import { Avatar, Button, Card, CardHeader, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const ChatboxHeader = () => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <>
                        <Button>
                            <ArrowBackIcon />
                        </Button>
                        <Avatar>R</Avatar>
                    </>
                }
                action={
                    <>
                        <IconButton>
                            <AddIcCallIcon />
                        </IconButton>
                        <IconButton>
                            <VideoCallIcon />
                        </IconButton>
                    </>
                }
                title={<p>Rimon Yousuf</p>}
                subheader={<Typography>Full Stack Developer</Typography>}
            />
        </Card>
    );
};

export default ChatboxHeader;