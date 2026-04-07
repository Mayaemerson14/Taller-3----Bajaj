import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  InputBase,
  Divider
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

import { useFavorites } from "../../view/hooks/useFavorites";
import { useShopping } from "../../auth/hooks/useShopping";

export const Header = () => {

  const { count } = useFavorites();
  const { totalItems } = useShopping();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  const menuItems = [
    { text: "Inicio", link: "/", icon: <HomeIcon /> },
    { text: "Ofertas", link: "/Offer", icon: <LocalOfferIcon /> },
    { text: "Artículos", link: "/Article", icon: <ArticleIcon /> },
    { text: "Favoritos", link: "/Favorite", icon: <FavoriteIcon /> },
    { text: "Carrito", link: "/Shopping", icon: <ShoppingCartIcon /> },
    { text: "Cuenta", link: "/Account", icon: <PersonIcon /> }
  ];

  return (
    <Box component="header">

      {/* HEADER PRINCIPAL */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "#0f172a",
          px: 2
        }}
      >

        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* IZQUIERDA */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

            <IconButton
              onClick={toggleDrawer}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component={NavLink}
              to="/"
              sx={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: 20
              }}
            >
              Bajaj
            </Typography>

          </Box>

          {/* BUSCADOR */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              background: "#1e293b",
              borderRadius: "50px",
              px: 2,
              width: "40%"
            }}
          >

            <SearchIcon sx={{ color: "gray", mr: 1 }} />

            <InputBase
              placeholder="Buscar..."
              sx={{ color: "white", width: "100%" }}
            />

          </Box>

          {/* DERECHA */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

            <Button
              component={NavLink}
              to="/"
              sx={{ color: "white", display: { xs: "none", md: "flex" } }}
              startIcon={<HomeIcon />}
            >
              Inicio
            </Button>

            <Button
              component={NavLink}
              to="/Offer"
              sx={{ color: "white", display: { xs: "none", md: "flex" } }}
              startIcon={<LocalOfferIcon />}
            >
              Ofertas
            </Button>

            <IconButton
              component={NavLink}
              to="/Favorite"
              sx={{ color: "white" }}
            >
              <Badge badgeContent={count} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            <IconButton
              component={NavLink}
              to="/Shopping"
              sx={{ color: "white" }}
            >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

          </Box>

        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>

        <Box sx={{ width: 260 }}>

          <Typography sx={{ p: 2, fontWeight: "bold" }}>
            Navegación
          </Typography>

          <Divider />

          <List>

            {menuItems.map((item) => (

              <ListItem key={item.text} disablePadding>

                <ListItemButton
                  component={NavLink}
                  to={item.link}
                  onClick={toggleDrawer}
                >

                  {item.icon}

                  <ListItemText
                    primary={item.text}
                    sx={{ ml: 2 }}
                  />

                </ListItemButton>

              </ListItem>

            ))}

          </List>

        </Box>

      </Drawer>

      {/* ESPACIADOR */}
      <Toolbar />

    </Box>
  );
};