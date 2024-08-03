import { Paper } from "@mui/material";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const Chat = () => {
    return (
        <Paper square elevation={0} sx={{width: "100vh"}}>
            <Sidebar/>
        </Paper>
    );
};

export default Chat;