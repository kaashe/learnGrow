import React from "react";
import {
  AppBar,
  Grid,
  Typography,
  Toolbar,
  Backdrop,
  Button,
} from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CodeIcon from "@mui/icons-material/Code";
export const Portfolio = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <ImportContactsIcon sx={{ fontSize: "40px" }} />
          <Typography variant="h6" component="div" sx={{ ml: 2 }}>
            LearnGrow
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        mt={1}
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/8099589/pexels-photo-8099589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundSize: "cover",
          backgroundColor: "#a1a6a2",
          position: "relative", // Ensure backdrop covers the whole container
        }}
      >
        <Backdrop
          sx={{
            zIndex: 1,
            position: "absolute",
            backgroundColor: "rgba(209, 201, 201, 0.2)", // Adjust the opacity as needed
            width: "100%",
            height: "100%",
          }}
          open={true} // Adjust this according to when you want the blur effect
        />
        <Grid container direction={"column"} alignContent="center">
        
          <Typography variant="h3" sx={{ color: "#9b6969" }}>
            BEST ONLINE
          </Typography>
          <Typography variant="h3" sx={{ color: "#9b6969" }}>
            LEARNING SYSTEM
          </Typography>
          <Typography variant="body1" fontWeight={"bolder"}>
            Welcome to our comprehensive online learning platform where
            education meets innovation.
          </Typography>
          <Typography variant="body1" fontWeight={"bolder"}>
            Our learning website offers a dynamic and engaging learning
            experience for individuals of all ages and background
          </Typography>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "10px 10px 10px 0px" }}
            >
              Learn more
            </Button>
          </Grid>
        </Grid>
        <Grid container marginLeft={27.4} mt={4} justifyContent={"start"}>
          <Typography variant="h4"  sx={{
              color: "white",
              backgroundColor: "#3e86d0",
              width: "285px",
              textAlign: "center",
              borderRadius:'5px'
            }}>
            Categories
          </Typography>
        </Grid>
        <Grid
          container
          direction={"row"}
          gap={2}
          justifyContent={"center"}
          mt={1}
          mb={1}
        >
          <Grid
            item
            sx={{
              height: "280px",
              backgroundColor: "#9b6969",
              boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
            }}
            xs={12}
            md={4}
            sm={12}
            padding={2}
          >
            <CodeIcon sx={{ fontSize: "40px", color: "white " }} />
            <Typography variant="h4" component="div" color={"white"}>
              Frontend
            </Typography>
            <p style={{ color: "white", wordSpacing: "8px" }}>
            Frontend Magic 🎨✨! Your creativity and coding skills have turned pixels into beautiful user interfaces. Your dedication to crafting seamless user experiences is truly commendable. Keep up the fantastic work as you continue to shape the digital world with your frontend prowess!
            </p>
          </Grid>
          <Grid
            item
            sx={{
              height: "280px",
              backgroundColor: "#9b6969",
              boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
            }}
            xs={12}
            md={4}
            sm={12}
            padding={2}
          >
            <CodeIcon sx={{ fontSize: "40px", color: "white " }} />
            <Typography variant="h4" component="div" color={"white"}>
              Backend
            </Typography>
            <p style={{ color: "white", wordSpacing: "8px" }}>
            Behind-the-Scenes Sorcery 🧙‍♂️🌐! Your backend wizardry has been the backbone of our applications, ensuring data flows smoothly and logic runs flawlessly. Your dedication to building robust and efficient systems is truly remarkable. Here's to your continued excellence in backend programming – you're the unsung hero making it all work
            </p>
          </Grid>{" "}
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
