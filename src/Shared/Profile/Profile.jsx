import { Avatar, Box, Typography } from "@mui/material";

const Profile = () => {
    return (
        <Box sx={{
            width: "30vw",
            background: "#eee",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Avatar sx={{ width: "200px", height: "200px" }} src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Guy%2C_Ava_Lauren_at_XRCO_Awards_2007_1_%28cropped%29.jpg" />
            <Typography
                variant="h4"
                sx={{ textTransform: "uppercase", color: "skyblue" }}
            >
                Johnny Sins</Typography>
            <Typography variant="h5">Actor</Typography>
            <Typography variant="body1">johnny@gmail.comm</Typography>
        </Box>
    );
};

export default Profile;