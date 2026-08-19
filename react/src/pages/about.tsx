import { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
                color: "black",
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
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Blog
              </MuiLink>

              <MuiLink
                component={Link}
                to="/about"
                sx={{
                  color: "black",
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
                  color: "black",
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

          <Box
            sx={{
              height: "1px",
              backgroundColor: "divider",
            }}
          />

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

              {/* Mobile links */}
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
          <Container
            maxWidth="md"
            sx={{
              py: { xs: 3, md: 5 },
              pl: { xs: 0, md: 0 },
            }}
          >
            <Box component="header">
              <Typography
                variant="h1"
                sx={{
                  fontSize: "32px",
                  fontFamily: "Times New Roman, Times, serif",
                  fontWeight: "bold",
                  color: "rgb(12, 12, 90)",
                }}
              >
                About Food Ninja
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: "15px",
                  fontFamily: "Times New Roman, Times, serif",
                  color: "gray",
                  mt: 2,
                  mb: 5,
                }}
              >
                Exploring the world one meal at a time.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 4,
                  mb: 4,
                  fontSize: "16px",
                  fontFamily: "Times New Roman, Times, serif",
                  color: "black",
                }}
              >
                Welcome to Food Ninja, a blog dedicated to food culture, travel,
                and the stories behind what we eat. I'm James Doe, a food writer
                and passionate traveler who believes that understanding a place
                means understanding its food.
              </Typography>

              <Box
                component="section"
                sx={{
                  mb: 5,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Times New Roman, Times, serif",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  My Story
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 4,
                    mb: 4,
                    fontSize: "16px",
                    fontFamily: "Times New Roman, Times, serif",
                    color: "black",
                  }}
                >
                  I started Food Ninja in 2020 as a way to document my culinary
                  adventures around the world. What began as a personal journal
                  has grown into a community of food enthusiasts who share a
                  curiosity about food, culture, and the connections between
                  them.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 4,
                    mb: 4,
                    fontSize: "16px",
                    fontFamily: "Times New Roman, Times, serif",
                    color: "black",
                  }}
                >
                  From hidden izakayas in Tokyo to street food in Vietnam, from
                  family recipes passed down through generations to the science
                  behind why we crave certain flavors—there's always more to
                  discover about food.
                </Typography>
              </Box>

              <Box
                component="section"
                sx={{
                  mb: 5,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Times New Roman, Times, serif",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  What I Write About
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "Times New Roman, Times, serif",
                    color: "black",
                    mt: 4,
                    mb: 2,
                  }}
                >
                  Food Ninja covers four main areas:
                </Typography>

                <List sx={{ listStyleType: "disc", pl: 0 }}>
                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{
                        mt: 0,
                        mb: 0,
                        fontSize: "16px",
                        fontFamily: "Times New Roman, Times, serif",
                        color: "black",
                        display: "list-item",
                      }}
                    >
                      <strong>Travel</strong> — Food experiences and culinary
                      adventures around the world
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{
                        mt: 0,
                        mb: 0,
                        fontSize: "16px",
                        fontFamily: "Times New Roman, Times, serif",
                        color: "black",
                        display: "list-item",
                      }}
                    >
                      <strong>Food Theory</strong> — The science, history, and
                      culture behind food and cooking
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{
                        mt: 0,
                        mb: 0,
                        fontSize: "16px",
                        fontFamily: "Times New Roman, Times, serif",
                        color: "black",
                        display: "list-item",
                      }}
                    >
                      <strong>Recipes</strong> — Tested recipes and techniques
                      worth mastering
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{
                        mt: 0,
                        mb: 0,
                        fontSize: "16px",
                        fontFamily: "Times New Roman, Times, serif",
                        color: "black",
                        display: "list-item",
                      }}
                    >
                      <strong>Restaurants</strong> — Hidden gems and notable
                      dining experiences
                    </Typography>
                  </ListItem>
                </List>
              </Box>

              <Box
                component="footer"
                sx={{
                  mt: 1,
                  pb: 4,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Times New Roman, Times, serif",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Let's Connect
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 4,
                    mb: 4,
                    fontSize: "16px",
                    fontFamily: "Times New Roman, Times, serif",
                    color: "black",
                  }}
                >
                  I'd love to hear from you! Whether you have a restaurant
                  recommendation, a recipe to share, or just want to chat about
                  food, reach out on the{" "}
                  <MuiLink component={Link} to="/contact">
                    contact page
                  </MuiLink>
                  .
                </Typography>
              </Box>
            </Box>
          </Container>
      </Container>
    </>
  );
}

export default AboutPage;
