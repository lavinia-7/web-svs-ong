import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  IconButton,
  InputAdornment,
  List,
  Link as MuiLink,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
    
   return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <Container maxWidth="md">
        <Box
          component="nav"
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: "white",
            pt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
               pb: 4,
            }}
          >
            <Typography
              component={Link}
              to="/"
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
                  fontWeight: "bold",
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
                  height: "1px",
                  backgroundColor: "divider",
                  mb: 4,
                }}
              />
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
        </Box>

       
      </Container>
    </Box>
  );
}

export default HomePage;