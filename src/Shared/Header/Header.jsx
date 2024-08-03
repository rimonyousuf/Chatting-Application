import { Avatar, Card, CardHeader, IconButton, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header = () => {
    return (
        <Card sx={{
            bgcolor: "#0768FF",
        }}>
            <CardHeader
                avatar={
                    <Avatar>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon className="text-white" />
                    </IconButton>
                }
                title={<p className="text-gray-100">Rimon Yousuf</p>}
                subheader={<Typography className="text-gray-100">Full Stack Developer</Typography>}
            />
        </Card>
    );
};

export default Header;