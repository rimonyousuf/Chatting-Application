import { Box } from "@mui/material";
import ChatboxHeader from "../ChatboxHeader/ChatboxHeader";
import ChatArea from "../ChatArea/ChatArea";
import ChatBoxFooter from "../ChatBoxFooter/ChatBoxFooter";

const ChatBox = () => {
    return (
        <Box
            sx={{
                width: "50vw",
                display: "flex",
                flexDirection: "column",
                height: "100%"
            }}>
            <ChatboxHeader />
            <ChatArea/>
            <ChatBoxFooter/>
        </Box>
    );
};

export default ChatBox;