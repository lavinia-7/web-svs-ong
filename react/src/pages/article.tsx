import { useState } from "react";
import greeceTravel from "../assets/greece-travel.png";
import {
  Box,
  Container,
  IconButton,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function ArticlePage() {
  const [menuOpen, setMenuOpen] = useState(false);
const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const title = "What Traveling Greece For 2 Weeks Taught Me About Life";
const category = "Travel";
const matchesSearch = title
  .toLowerCase()
  .includes(search.toLowerCase());
const matchesCategory =
  selectedCategory === null || selectedCategory === category;
const matchesArticle = matchesSearch && matchesCategory;
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
                to="/"
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
          <Box 
          sx={{ 
            mb: 4,
            display:"flex",
            justifyContent:"center",
             }}
             >
  <Box
  component="input"
    type="text"
    placeholder="Search articles..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    sx={{
      width:"100%",
      maxWidth:"320px",
      height:"42px",
      px:2,
      border:"1px solid #ccc",
      borderRadius:"6px",
      fontFamily:"Times New Roman, Times, serif",
      fontsize:"16px",
      outline:"none",
      boxSizing:"border-box",
      "&:focus":{
        borderColor:"#2020240",
      },
    }}
  />
</Box>
{matchesArticle && (
          <Box component="header">
            <MuiLink
              component={Link}
              to="/"
              underline="none"
              sx={{
                color: "black",
                fontFamily: "Times New Roman, Times, serif",
                fontSize: "16px",
              }}
            >
              ← Back to all articles
            </MuiLink>
            <Box
              sx={{
                width: "165px",
                height: "2px",
                backgroundColor: "black",
                mt: 4,
                mb: 5,
              }}
            />
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "#202040",
                color: "white",
                px: 1.5,
                py: 0.6,
                borderRadius: "4px",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Travel
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "32px",
                fontFamily: "Times New Roman, Times, serif",
                fontWeight: "bold",
                color: "black",
                lineHeight: 1.1,
              }}
            >
              What Traveling Greece For 2 Weeks Taught Me About Life
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 3,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "#dceaf2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  JD
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Times New Roman, Times, serif",
                  color: "gray",
                }}
              >
                James Doe
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Times New Roman, Times, serif",
                  color: "gray",
                }}
              >
                Jun 21, 2021
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Times New Roman, Times, serif",
                  color: "gray",
                }}
              >
                11 min read
              </Typography>
            </Box>
            <Box
              component="img"
              src={greeceTravel}
              alt="Peisaj din Grecia"
              sx={{
                width: "100%",
                display: "block",
                mb: 5,
              }}
            />
          </Box>
)}
          {!matchesArticle ? (
  <Typography
    sx={{
      fontSize: "16px",
      fontFamily: "Times New Roman, Times, serif",
      color: "gray",
      mb: 4,
    }}
  >
    No articles match your search
  </Typography>
) : (
  <>
          <Box component="section">
            <Typography
              variant="body1"
              sx={{
                mt: 0,
                mb: 4,
                fontSize: "16px",
                lineHeight: 1.8,
                fontFamily: "Times New Roman, Times, serif",
                color: "black",
              }}
            >
              There's a particular kind of silence you find only in Greece not the silence of emptiness, but the silence of accumulated 
              time. Standing at the edge of a cliff in Zakynthos, watching the turquoise water carve itself against white limestone, I
              understood for the first time what it means to be small in a beautiful way.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 4,
                mb: 4,
                fontSize: "16px",
                lineHeight: 1.8,
                fontFamily: "Times New Roman, Times, serif",
                color: "black",
              }}
            >
              I went to Greece thinking I was going on a food trip. I came back understanding something much harder to name.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 4,
                mb: 4,
                fontSize: "16px",
                lineHeight: 1.8,
                fontFamily: "Times New Roman, Times, serif",
                color: "black",
              }}
            >
              By hour four you've accepted that you're simply a small object moving slowly across a large blue surface, and that this is fine.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 4,
                mb: 5,
                fontSize: "16px",
                lineHeight: 1.8,
                fontFamily: "Times New Roman, Times, serif",
                color: "black",
              }}
            >
              Santorini's food is overpriced and the views are, frankly, absurd. Oia at sunset feels like someone turned the saturation up
              past what reality permits. But the best meal I had there wasn't at a clifftop restaurant — it was a paper plate of grilled octopus
              from a fisherman who had a cooler and a portable grill and absolutely no menu.
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
              What I actually learned
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 4,
                mb: 4,
                fontSize: "16px",
                lineHeight: 1.8,
                fontFamily: "Times New Roman, Times, serif",
                color: "black",
              }}
            >
              Greece taught me that slowness is a skill. That a two-hour lunch is not laziness — it's a practice. That food tastes different
              when it arrives without urgency, when the person who made it sat down at the table next to you and is also eating.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 4,
                mb: 4,
                fontSize: "16px",
                lineHeight: 1.8,
                fontFamily: "Times New Roman, Times, serif",
                color: "black",
              }}
            >
              I came home with olive oil, dried herbs, and a determination to stop eating lunch at my desk. I've managed one of those three things consistently.
            </Typography>
          </Box>
          </>
)}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              pb: 4,
            }}
          >
           <Box
  onClick={() =>
    setSelectedCategory(
      selectedCategory === "Travel" ? null : "Travel"
    )
  }
  sx={{
    border: "1px solid #ddd",
    borderRadius: "20px",
    px: 2,
    py: 0.8,
    cursor: "pointer",
    backgroundColor:
      selectedCategory === "Travel" ? "#202040" : "transparent",
    color:
      selectedCategory === "Travel" ? "white" : "gray",
  }}
>
  <Typography
    sx={{
      fontSize: "14px",
      color: "inherit",
    }}
  >
    Travel
  </Typography>
</Box>
<Box
  onClick={() =>
    setSelectedCategory(
      selectedCategory === "Greece" ? null : "Greece"
    )
  }
  sx={{
    border: "1px solid #ddd",
    borderRadius: "20px",
    px: 2,
    py: 0.8,
    cursor: "pointer",
    backgroundColor:
      selectedCategory === "Greece" ? "#202040" : "transparent",
    color:
      selectedCategory === "Greece" ? "white" : "gray",
  }}
>
  <Typography
    sx={{
      fontSize: "14px",
      color: "inherit",
    }}
  >
    Greece
  </Typography>
</Box>
<Box
  onClick={() =>
    setSelectedCategory(
      selectedCategory === "Food Culture" ? null : "Food Culture"
    )
  }
  sx={{
    border: "1px solid #ddd",
    borderRadius: "20px",
    px: 2,
    py: 0.8,
    cursor: "pointer",
    backgroundColor:
      selectedCategory === "Food Culture" ? "#202040" : "transparent",
    color:
      selectedCategory === "Food Culture" ? "white" : "gray",
  }}
>
  <Typography
    sx={{
      fontSize: "14px",
      color: "inherit",
    }}
  >
    Food Culture
  </Typography>
</Box>
<Box
  onClick={() =>
    setSelectedCategory(
      selectedCategory === "Islands" ? null : "Islands"
    )
  }
  sx={{
    border: "1px solid #ddd",
    borderRadius: "20px",
    px: 2,
    py: 0.8,
    cursor: "pointer",
    backgroundColor:
      selectedCategory === "Islands" ? "#202040" : "transparent",
    color:
      selectedCategory === "Islands" ? "white" : "gray",
  }}
>
  <Typography
    sx={{
      fontSize: "14px",
      color: "inherit",
    }}
  >
    Islands
  </Typography>
</Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default ArticlePage;