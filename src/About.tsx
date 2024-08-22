import {
  Box,
  Chip,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const About = () => {
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
      <Box sx={{ mt: 10, px: 2, marginLeft: isMobile ? "0" : "-1rem" }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ebdddd", maxWidth: "75ch", mb: 2 }}
          >
            I am a driven Mechanical Engineering student with a deep passion for data analysis, 
            financial markets, and generative AI. Through hands-on experience in Python, SQL, 
            and advanced Excel, I have developed a strong proficiency in extracting insights from
             complex data sets, visualizing trends, and delivering actionable solutions. 
             My projects in stock market analysis, web scraping, and AI applications have further 
             sharpened my ability to solve problems with creativity and precision.
             I am excited to leverage my technical skills and analytical mindset to contribute to data-driven innovation.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Work Experience
          </Typography>
          <WorkExperience
            title="Internship at Stu valley technology"
            date="05.2024 - 06.2024"
            label="Intern"
          />
          {/* <WorkExperience
            title="Internship as IT-Specialist"
            date="06.2023 - 07.2023"
            label="Internship"
          />
          <WorkExperience
            title="Self Employed - Hardware related services"
            date="12.2022 - 05.2024"
            label="Self Employed"
          />
          <WorkExperience
            title="Voluntary Social Year"
            date="10.2021 - 09.2022"
            label="Social Year"
          /> */}
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Education
          </Typography>
          <Education
            title="Raghu Engineeering College"
            date="2021 - present"
            label="Undergraduate"
          />
          <Education
            title="Self Teaching - Data Analyst"
            date="2023 - present"
            label="Self Teaching"
          />
          
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

const WorkExperience = ({
  title,
  date,
  label,
}: {
  title: string;
  date: string;
  label: string;
}) => (
  <Box sx={{ mb: 4 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2" sx={{ color: "#ebdddd", opacity: 0.7 }}>
        {title}
      </Typography>
      <Chip
        label={label}
        variant="filled"
        sx={{ background: "#D7FFE0", color: "#1B5E20" }}
      />
    </Box>
    <Typography
      variant="body1"
      sx={{ color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1 }}
    >
      {date}
    </Typography>
    <Divider sx={{ mt: 2, backgroundColor: "#ebdddd", opacity: 0.4 }} />
  </Box>
);

const Education = ({
  title,
  date,
  label,
}: {
  title: string;
  date: string;
  label: string;
}) => (
  <Box sx={{ mb: 4 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body1" sx={{ color: "#ebdddd", opacity: 0.7 }}>
        {title}
      </Typography>
      <Chip
        label={label}
        variant="filled"
        sx={{ background: "#D7FFE0", color: "#1B5E20" }}
      />
    </Box>
    <Typography
      variant="body2"
      sx={{ color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1 }}
    >
      {date}
    </Typography>
    <Divider sx={{ mt: 2, backgroundColor: "#ebdddd", opacity: 0.4 }} />
  </Box>
);

export default About;
