import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const AnimatedWelcome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const roles:string[] = [
    "Data Analyst.",
    "Business Analyst.",
    "Product Analyst."
  ];
  const [newRoles, setNewRoles] = useState<number>(0);
  const [newName, setNewName] = useState<string>(roles[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setNewRoles(prevRole => {
        const nextRole = (prevRole + 1) % roles.length;
        setNewName(roles[nextRole]);
        return nextRole;
      });
    },10000);
    return() => clearInterval(interval)
  },[newRoles, roles.length]);

  const text1 = "Hi!".split("");
  const text2 = "My name is".split("");
  const text3 = "Gedela Harshvardhan";
  const text4 = `I am Intrested in `.split("");
  const text5 =  `${newName}`.split("");

  const buttonVariants = {
    hidden: { opacity: 0, y: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      y: [0, -10, 10],
      scale: 1,
      transition: {
        delay: 2.25,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    hover: {
      boxShadow: "8px 8px 12px #e0e10a",
    },
    tap: { scale: 1.95 },
  };
  // const imgVariant = {
  //   hidden: { opacity:0, x:100},
  //   visible: {
  //     opacity: 1,
  //     scale: 1.05,
  //     transition: {duration:0.3},
  //   },
  //   hover: {
  //     boxShadow: "0px 0px #2D1046, #300A56"
  //   }
  // }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: isMobile ? "5%" : "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            textAlign: "center",
            marginBottom: isMobile ? "2rem" : 0,
          }}
        >
            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            style={{
              marginBottom: "0px",
              fontSize: isMobile ? "2rem" : "3rem",
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #e0e10a, #e0e10a)",
            }}
          >
            {text1.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            style={{
              marginTop: "3px",
              fontSize: isMobile ? "1.5rem" : "2rem",
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #e0e10a, #e0e10a)",
            }}
          >
            {text2.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.08 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            style={{
              marginTop: isMobile ? "-1rem" : "-2rem",
              fontSize: isMobile ? "2rem" : "3rem",
              background: "-webkit-linear-gradient(45deg, #e0e10a, #e0e10a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
            }}
          >
            {text3.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.75 + index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 2 }}
            style={{
              marginTop: isMobile ? "-1rem" : "-2rem",
              fontSize: isMobile ? "1.5rem" : "2rem",
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #e0e10a, #e0e10a)",
            }}
          >
            {text4.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.25 + index * 0.08 }}
              >
                {letter}
              </motion.span>
            ))}
            {text5.map((letter) => (
              <motion.span
              style={{
                marginTop: isMobile ? "-1rem" : "-2rem",
                fontSize: isMobile ? "2rem" : "3rem",
                background: "-webkit-linear-gradient(45deg, #e0e10a, #e0e10a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                zIndex: 1,
                boxShadow:
                  "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
              }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </Box>
        <motion.img
          // initial={{ opacity: 0, x: 100 }}
          // animate={{ opacity: 1, x: 10 }}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
          src={"./pf2.png"}
          alt="Memoji of"
          style={{
            zIndex: 1,
            userSelect: "none",
            height: "auto",
            width: isMobile ? "14rem" : "20rem",
            marginBottom: isMobile ? "2rem" : "5rem",
            borderRadius: "250%", // Ensures the image itself is circular
            objectFit: "cover",
            // boxShadow:
            //   "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
          }}
          // whileHover={{
          //   boxShadow: "0px 0px #2D1046, #300A56", // Change on hover
          //   scale: 1.05, // Optional: Add some scaling effect on hover
          //   transition: { duration: 0.3 }, // Smooth transition for hover effect
          // }}
        />
      </Box>

      <motion.button
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          window.location.href = "/projects";
        }}
        style={{
          width: "16rem",
          margin: "auto",
          marginBottom: "5rem",
          padding: "1rem",
          color: "white",
          height: "4rem",
          border: "none",
          fontSize: "1.4rem",
          background: "linear-gradient(to right, #e0e10a, #e0e10a)",
          borderRadius: "15px",
          cursor: "pointer",
        }}
        className="animation-button"
      >
        Discover my work
      </motion.button>
      <Footer />
    </>
  );
};

export default AnimatedWelcome;
