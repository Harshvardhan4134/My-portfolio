import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import Footer from "./Footer";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "100vh",
        marginBottom: "2%",
      }}
    >
      <NavigationBar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          fontWeight={700}
          fontSize={isMobile ? 32 : 40}
          variant="h2"
          sx={{
            textAlign: isMobile ? "center" : "start",
            color: "#ebdddd",
            marginTop: isMobile ? "12%" : "12.5%",
            marginBottom: isMobile ? "20%" : "10%",
          }}
        >
          Tech Stack
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={isMobile ? 2 : 4}
        justifyContent="start"
        sx={{ marginBottom: "5%" }}
      >
        {[
          // { imageSrc: "./python.svg", alt: "python", text: "python", rating: 3 },
          {
            imageSrc: "./python.svg",
            alt: "Python",
            text: "Python",
            rating: 3,
          },
          {
            imageSrc: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
            alt: "Git",
            text: "Git",
            rating: 3,
          },
          {
            imageSrc: "./postgresql.svg",
            alt: "Postgre Sql",
            text: "Postgre Sql",
            rating: 3,
          },
          { imageSrc: "./mongodb.svg", alt: "Mongo Db", text: "Mongo Db", rating: 2 },
          {
            imageSrc: "./power bi.svg",
            alt: "Power Bi",
            text: "Power Bi",
            rating: 2,
          },
          {
            imageSrc: "./excel.svg",
            alt: "Microsoft Excel",
            text: "Microsoft Excel",
            rating: 3,
          },
          {
            imageSrc: "./sql.svg",
            alt: "SQL",
            text: "SQL",
            rating: 3,
          },
          {
            imageSrc: "./c.svg",
            alt: "C",
            text: "C",
            rating: 2,
          },
          {
            imageSrc: "./tableau.svg",
            alt: "Tableau",
            text: "Tableau",
            rating: 2,
          },
        ].map((skill, index) => (
          <Grid item xs={6} sm={3} md={3} key={index}>
            <SkillBox {...skill} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ backgroundColor: "#ebdddd" }} />

      <Box sx={{ marginTop: "5%", marginBottom: "10%" }}>
        <motion.div
          style={{
            color: "#ebdddd",
            fontSize: isMobile ? 14 : 20,
            fontWeight: 400,
            textAlign: "start",
          }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5 }}
        >
          <b>Disclaimer: </b>
          <br />
          Obviously I'm not an experienced analyst yet, so I'm not a master in
          any of these technologies. But I'm trying to improve myself and learn
          new things about these technologies every day.
        </motion.div>
      </Box>
      <Footer />
    </Container>
  );
};

const SkillBox = ({
  imageSrc,
  alt,
  text,
  rating,
}: {
  imageSrc: string;
  alt: string;
  text: string;
  rating: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <motion.img
          animate={{ opacity: 1, y: -40 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5 }}
          src={imageSrc}
          alt={alt}
          style={{ width: 100, height: 100, margin: 5 }}
        />
        <Typography sx={{ color: "#ebdddd", fontSize: 20 }}>{text}</Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}
        >
          {Array.from({ length: 5 }, (_, index) =>
            index < rating ? (
              <StarIcon key={index} sx={{ color: "#ebdddd" }} />
            ) : (
              <StarBorderIcon key={index} sx={{ color: "#ebdddd" }} />
            )
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Skills;
