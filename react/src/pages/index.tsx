import { useState } from "react";
import greeceimg from "../assets/greece-travel.png";
import chickenimg from "../assets/chicken-nuggets-fries.png";
import ramenimg from "../assets/ramen-broth.png";
import tokyoimg from "../assets/tokyo-restaurants.png";
import vietnamimg from "../assets/vietnam-food-diary.png";
import oliveoilimg from "../assets/olive-oil.png";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";


function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const articles = [
    {
      image: greeceimg,
      category: "Travel",
      title: "What Traveling Greece For 2 Weeks Taught Me About Life",
      date: "Jun 21, 2021 · 11 min read",
      description: "Hidden coves, ancient ruins, and meals that redefine what food means."
    },
    {
      image: chickenimg,
      category: "Food Theory",
      title: "Why You Should Never Order 12 Chicken Nuggets and Fries",
      date: "Aug 1, 2021 · 7 min read",
      description: "The math, the science, and the dark truth behind combo meal pricing."
    },
     {
      image: ramenimg,
      category: "Recipes",
      title: "The Perfect Homemade Ramen Broth Recipe",
      date: "Sep 14, 2021 · 9 min read",
      description: "Twelve hours of simmering and a tare that will ruin all other broths for you."
    },
    {
      image: tokyoimg,
      category: "Restaurants",
      title: "The Best Hidden Restaurants in Tokyo You Need to Visit",
      date: "Oct 3, 2021 · 6 min read",
      description: "Down unmarked alleys — the izakayas that locals keep to themselves."
    },
    {
      image: vietnamimg,
      category: "Travel",
      title: "Eating My Way Through Vietnam: A 10-Day Food Diary",
      date: "Nov 18, 2021 · 14 min read",
      description: "From banh mi carts at 6am to midnight pho in Hanoi."
    },
    {
      image: oliveoilimg,
      category: "Food Theory",
      title: "Why Expensive Olive Oil Is Almost Never Worth It",
      date: "Dec 5, 2021 · 5 min read",
      description: "From banh mi carts at 6am to midnight pho in Hanoi."
    },
  ];
 
   return (
  <Box component="main"
    sx={{ 
      minHeight: "100vh", 
      backgroundColor: "#fff",
      padding: 2
    }}
  >
    <Box component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pb: 4,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
        pt: 4,
      }}
    >
      <Typography
        component={Link} to="/"
        sx={{
          fontFamily: "Times New Roman, Times, serif",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#000",
          textDecoration: "none",
        }}
      >
        Food Ninja
      </Typography>

      <Box 
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                gap: 3,
              }}
            >
              <MuiLink
                component={Link}
                to="/blog"
                sx={{
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Blog
              </MuiLink>

              <MuiLink
                component={Link}
                to="/about"
                sx={{
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                About
              </MuiLink>

              <MuiLink
                component={Link}
                to="/contact"
                sx={{
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Contact
              </MuiLink>
      </Box>

      <IconButton
              onClick={() => setMenuOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "black",
              }}
            >
              <MenuIcon />
      </IconButton>
    </Box>

    {menuOpen && (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "200px",
          height: "100vh",
          backgroundColor: "background.paper",
          p: 2.5,
          boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
          zIndex: 2000,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Times New Roman, Times, serif",
              fontWeight: "bold",
              fontSize: "20px",
              color: "text.primary",
            }}
          >
            Food Ninja
          </Typography>

          <IconButton
            onClick={() => setMenuOpen(false)}
            sx={{ color: "text.primary" }}
          >
          <CloseIcon />
          </IconButton>
        </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <MuiLink
              component={Link}
              to="/"
              underline="none"
              color="text.primary"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </MuiLink>

            <MuiLink
              component={Link}
              to="/about"
              underline="none"
              color="text.primary"
              onClick={() => setMenuOpen(false)}
            >
              About
            </MuiLink>

            <MuiLink
              component={Link}
              to="/contact"
              underline="none"
              color="text.primary"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </MuiLink>

          </Box>
        </Box>
        )}

    <Box component="header"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "40px",
                fontFamily: "Times New Roman, Times, serif",
                fontWeight: "bold",
                color: "rgb(12, 12, 90)",
              }}
            >
              The Food Ninja Blog
            </Typography>
            
            <Typography
              sx={{
                color: "gray",
                fontSize: "16px",
                mt: 1,
              }}
            >
              A blog about food, experiences, and recipes.
            </Typography>
    </Box>
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2.5,
        mt: 4,
      }}
    >
    
      <TextField
      placeholder="Search for articles"
      size="small"
      sx={{
        width: "445px",
        maxWidth: "100%",
        "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
         },
      }}
      InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon
            sx={{
              fontSize: "16px",
              color: "#555",
            }}
          />
        </InputAdornment>
      ),
      }}
    />

      <Box
      sx={{
        display: "flex",
        gap: 1.5,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Button
        variant="outlined"
          sx={{
          borderRadius: "20px",
          textTransform: "none",
          fontFamily: "Times New Roman, Times, serif",
          color: "#555",
          borderColor: "#ddd",
          minWidth: "73px",
        }}
      >
      Travel
      </Button>

     <Button
        variant="outlined"
        sx={{
          borderRadius: "20px",
          textTransform: "none",
          fontFamily: "Times New Roman, Times, serif",
          color: "#555",
          borderColor: "#ddd",
        }}
      > 
        Food Theory
      </Button>

      <Button
        variant="outlined"
        sx={{
          borderRadius: "20px",
          textTransform: "none",
          fontFamily: "Times New Roman, Times, serif",
          color: "#555",
          borderColor: "#ddd",
        }}
      >
        Recipes
      </Button>

      <Button
        variant="outlined"
        sx={{
          borderRadius: "20px",
          textTransform: "none",
          fontFamily: "Times New Roman, Times, serif",
          color: "#555",
          borderColor: "#ddd",
        }}
      >
        Restaurants
      </Button>
      </Box>

    </Box>

    <Box
      sx={{
        pt: 4,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        width: "100%",
      }}
    >
    {articles.map((article) => (
      <Card
        key={article.title}
          sx={{
            border: "1px solid #ddd",
            borderRadius: "9px",
            boxShadow: "none",
            overflow: "hidden",
          }}
      >
       <CardMedia
          component="img"
          image={article.image}
          alt={article.title}
        />

       <CardContent sx={{ padding: "16px" }}>
         <Chip
          label={article.category}
          sx={{
            backgroundColor: "rgb(12, 12, 90)",
            color: "white",
            fontSize: "12px",
            height: "25px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontFamily: "Times New Roman, Times, serif",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: 1.2,
            marginBottom: "14px",
          }}
        >
          {article.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "13px",
            color: "#444",
            marginBottom: "12px",
          }}
        >
          {article.date}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "13px",
            color: "#666",
            lineHeight: 1.3,
          }}
        >
          {article.description}
        </Typography>
      </CardContent>
  </Card>
  
    ))}
  </Box>
              
  </Box>
  );
}

export default HomePage;