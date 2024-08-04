import { Paper } from "@mui/material";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import ChatBox from "../../Shared/ChatBox/ChatBox";
import Profile from "../../Shared/Profile/Profile";

const Chat = () => {
    return (
        <Paper square elevation={0} sx={{height: "100vh", display: "flex"}}>
            <Sidebar/>
            <ChatBox/>
            <Profile/>
        </Paper>
    );
};

export default Chat;