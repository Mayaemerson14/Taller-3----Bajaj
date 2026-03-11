import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Stack
} from "@mui/material";

import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Link as RouterLink } from "react-router-dom";

export const Content = () => {

  const products = [
    { img: "/img/moto 1.jpg", name: "Boxer CT 100", price: "$4.000.000" },
    { img: "/img/moto 2.jpg", name: "Pulsar 180 UG", price: "$7.000.000" },
    { img: "/img/moto 3.jpg", name: "Pulsar NS 200 FI", price: "$12.000.000" },
    { img: "/img/moto 5.jpg", name: "Boxer 125", price: "$7.500.000" }
  ];

  return (

    <main>

      {/* HERO */}

      <Box
        component="section"
        aria-labelledby="hero-title"
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          overflow: "hidden"
        }}
      >

        <Box
          component="img"
          src="/img/moto 4.jpg"
          alt="Motocicleta deportiva moderna"
          loading="eager"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg,#1f2937,#020617)",
            opacity: 0.8
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            px: 2
          }}
        >

          <Typography
            id="hero-title"
            variant="h3"
            component="h1"
            fontWeight="bold"
          >
            Explora el mundo de las motocicletas
          </Typography>

          <Typography
            component="p"
            sx={{ mt: 2, maxWidth: 600 }}
          >
            Encuentra motos confiables, económicas y deportivas.
            Diseñadas para moverte con libertad en la ciudad
            o disfrutar la carretera.
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/Article"
            sx={{
              mt: 4,
              backgroundColor: "#ff6b00",
              "&:hover": { backgroundColor: "#e85f00" }
            }}
          >
            Ver catálogo
          </Button>

        </Box>

      </Box>

      {/* CARACTERISTICAS */}

      <Container
        component="section"
        aria-labelledby="features-title"
        sx={{ py: 8 }}
      >

        <Typography
          id="features-title"
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          mb={5}
        >
          ¿Por qué elegir nuestras motos?
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="center"
          textAlign="center"
        >

          <Box>

            <SpeedIcon sx={{ fontSize: 40, mb: 1 }} />

            <Typography component="h3" fontWeight="bold">
              Potencia eficiente
            </Typography>

            <Typography color="text.secondary">
              Motores diseñados para ofrecer buen rendimiento
              y bajo consumo de combustible.
            </Typography>

          </Box>

          <Box>

            <SecurityIcon sx={{ fontSize: 40, mb: 1 }} />

            <Typography component="h3" fontWeight="bold">
              Conducción segura
            </Typography>

            <Typography color="text.secondary">
              Sistemas de frenos y estabilidad que brindan
              mayor control en todo momento.
            </Typography>

          </Box>

          <Box>

            <TwoWheelerIcon sx={{ fontSize: 40, mb: 1 }} />

            <Typography component="h3" fontWeight="bold">
              Diseños modernos
            </Typography>

            <Typography color="text.secondary">
              Motocicletas con estilos deportivos
              pensados para la ciudad y la carretera.
            </Typography>

          </Box>

        </Stack>

      </Container>

      {/* PRODUCTOS */}

      <Container
        component="section"
        aria-labelledby="products-title"
        sx={{ pb: 8 }}
      >

        <Typography
          id="products-title"
          variant="h4"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Motocicletas disponibles
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)"
            },
            gap: 3
          }}
        >

          {products.map((product) => (

            <Card
              key={product.name}
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8
                }
              }}
            >

              <CardMedia
                component="img"
                image={product.img}
                alt={`Motocicleta ${product.name}`}
                loading="lazy"
                sx={{
                  height: 220,
                  objectFit: "cover"
                }}
              />

              <CardContent>

                <Typography component="h3" variant="h6">
                  {product.name}
                </Typography>

                <Typography
                  sx={{
                    color: "#ff6b00",
                    fontWeight: "bold",
                    mt: 1
                  }}
                >
                  {product.price}
                </Typography>

                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 2 }}
                  component={RouterLink}
                  to="/shopping"
                >
                  Más detalles
                </Button>

              </CardContent>

            </Card>

          ))}

        </Box>

      </Container>

      {/* REPOSITORIO */}

      <Box
        component="section"
        aria-labelledby="repo-title"
        sx={{
          py: 10,
          px: 2,
          textAlign: "center",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "white"
        }}
      >

        <Container maxWidth="md">

          <Stack spacing={3} alignItems="center">

            <GitHubIcon sx={{ fontSize: 50 }} />

            <Typography
              id="repo-title"
              variant="h4"
              component="h2"
              fontWeight="bold"
            >
              Repositorio del Proyecto
            </Typography>

            <Typography sx={{ maxWidth: 600 }}>
              Aplicación web desarrollada como proyecto académico
              para mostrar un catálogo de motocicletas utilizando
              React, Vite y Material UI.
            </Typography>

            <Button
              component="a"
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/fauriorrego-create/Taller-3-Tienda-De-Autos"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 3,
                background: "#24292e",
                "&:hover": { background: "#000" }
              }}
            >
              Ver repositorio
            </Button>

          </Stack>

        </Container>

      </Box>

    </main>
  );
};