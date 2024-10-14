import { Box, Container } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "./project4.png",
      title: "Paris Olympic 2024 Dashboard!",
      link: "https://github.com/Harshvardhan4134/Olympics-2024-Dashboard",
      description:
        "This project demonstrates how data visualization can provide key insights into various aspects of performance, trends, and data metrics for a hackathon event.",
    },
    {
      id: 2,
      image: "./project1.png",
      title: "Amazon Sales Report!",
      link: "https://github.com/Harshvardhan4134",
      description:
        "Developed a comprehensive Amazon Sales Report using Power BI, showcasing advanced data visualization skills. The report includes key metrics such as total sales, profit, and order count, alongside visual representations like time-series analysis, category-wise sales breakdown, and a performance gauge. This project demonstrates my ability to effectively analyze and present complex sales data for actionable insights.",
    },
    {
      id: 3,
      image: "./project2.png",
      title: "Stock Analysis",
      link: "https://github.com/Harshvardhan4134/Stock-Market-Analysis",
      description:
        "Created a comprehensive stock market performance analysis project using advanced data visualization techniques. The project includes line charts tracking the closing prices of all companies over the last three months, area charts detailing the stock prices for Apple, Microsoft, Amazon, and Google, moving average analysis using 10-day and 30-day periods, volatility line charts, and a scatter plot with a trendline showcasing the correlation between Apple and Google stock prices. This project highlights my expertise in financial data analysis and visualization.",
    },
  ];

  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "95%",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          marginTop: "10%",
          gap: "3%",
          display: "block",
          justifyContent: "space-around",
          alignItems: "space-around",
          height: "100%",
        }}
      >
        {projects.map((project) => (
          <Box key={project.id}>
            <motion.text
              transition={{ delay: 0.5, duration: 1.5 }}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              fontWeight={600}
              style={{
                fontSize: "2rem",
                marginBottom: "2%",
                textAlign: "center",
                display: "block",
                fontWeight: 700,
              }}
            >
              {project.title}
            </motion.text>
            <Box
              sx={{
                backgroundColor: "linear-gradient(to right, #414345, #232526)",
                padding: "2%",
                boxShadow:
                  "0px 0px 10px 0px linear-gradient(to right, #414345, #232526)",
              }}
            >
              <motion.img
                transition={{ delay: 0.5, duration: 1.5 }}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                onClick={() => window.open(project.link, "_blank")}
                src={project.image}
                alt={project.title}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "auto",
                  objectFit: "fill",
                  boxShadow: "0px 0px 7.5px 0px ",
                }}
              />

              <motion.text
                transition={{ delay: 0.5, duration: 1.5 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                fontWeight={400}
                fontSize={20}
                style={{
                  marginTop: "3%",
                  textAlign: "start",
                }}
              >
                {project.description}
              </motion.text>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ position: "relative", zIndex: 1, marginTop: 10 }}>
        <Footer />
      </Box>
    </Container>
  );
};

export default Projects;
