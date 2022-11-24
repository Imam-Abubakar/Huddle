import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://8080-imamabubakar-huddle-en8k9u6d5kg.ws-eu77.gitpod.io/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
