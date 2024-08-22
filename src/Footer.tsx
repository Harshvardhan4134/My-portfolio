import {
  AppBar,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { GitHub, LinkedIn, X } from "@mui/icons-material";


export const VisitorCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const docRef = doc(db, "visitorCount", "count");
      const docSnap = await getDoc(docRef);
  

      if (docSnap.exists()) {
        setCount(docSnap.data().count);
      }
    };

    fetchVisitorCount();
  }, []);

  return count ? `Total visitors: ${count}` : null;
};

const Footer = () => {
  const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    
      <AppBar
        sx={{
          boxShadow: "none",
          backgroundColor: "#111111",
          transition: "opacity 0.5s",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "start",
              marginTop: isMobile ? "3rem" : 0,
              marginBottom: isMobile ? "0.5rem" : 0,
              marginRight: isMobile ? "0" : "auto",
            }}
          >
            <Tooltip title="GitHub">
              <GitHub
                onClick={() =>
                  window.open("https://github.com/Harshvardhan4134", "_blank")
                }
                sx={{
                  color: "#ebdddd",
                  cursor: "pointer",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  width: isMobile ? "2rem" : "1.25rem",
                  height: isMobile ? "2rem" : "1.25rem",
                  marginLeft: isMobile ? "1rem" : "30.5rem",
                  marginRight: isMobile ? "1rem" : "1.5rem",
                }}
              />
            </Tooltip>
            <Tooltip title="LinkedIn">
              <LinkedIn
                onClick={() =>
                  window.open(
                    "https://de.linkedin.com/in/harshvardhan-gedela",
                    "_blank"
                  )
                }
                sx={{
                  color: "#ebdddd",
                  cursor: "pointer",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  width: isMobile ? "2.4rem" : "1.25rem",
                  height: isMobile ? "2.4rem" : "1.25rem",
                }}
              />
            </Tooltip>
            <Tooltip title="X">
              <X
                onClick={() =>
                  window.open(" https://x.com/gharsha238?t=LeowsDB__ZQlJOQbMXCKDw&s=08", "_blank")
                }
                sx={{
                  color: "#ebdddd",
                  cursor: "pointer",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  width: isMobile ? "2rem" : "1.25rem",
                  height: isMobile ? "2rem" : "1.25rem",
                  marginLeft: isMobile ? "1rem" : "1.5rem",
                  marginRight: isMobile ? "1rem" : "1.5rem",
                }}
              />
            </Tooltip>
          </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#ebdddd",
        }}
      >
        <VisitorCount />
      </Typography>
      <a
        href="/impressum"
        style={{
          fontSize: "16px",
          color: "#ebdddd",
          fontWeight: "normal",
          marginTop: "1rem",
        }}
      >
        {/* Disclaimer, Privacy Policy, and Impressum */}
      </a>
      <Typography
        variant="body2"
        sx={{
          color: "#ebdddd",
          marginTop: "3rem",
          marginLeft: isMobile ? "1rem" : "-15.5rem",
          marginRight: isMobile ? "1rem" : "25.5rem",
        }}
      >
        © 2024 Gedela Harshvardhan. All rights reserved.
      </Typography>
    </Box>
  </Toolbar>
  </AppBar>
  );
};

export default Footer;
