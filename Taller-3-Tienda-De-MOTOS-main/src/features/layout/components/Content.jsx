import {
  Container,
  Typography,
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
      <Container sx={{ py: 10 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
        >

          <Box flex={1}>
            <Typography variant="h3" fontWeight="bold">
              Tu próxima moto empieza aquí
            </Typography>

            <Typography sx={{ mt: 2, color: "text.secondary" }}>
              Descubre modelos diseñados para velocidad, ahorro
              y estilo. Perfectas para tu día a día o aventuras.
            </Typography>

            <Button
              component={RouterLink}
              to="/Article"
              variant="contained"
              sx={{
                mt: 4,
                borderRadius: "30px",
                px: 4,
                background: "linear-gradient(45deg,#ff416c,#ff4b2b)"
              }}
            >
              Explorar catálogo
            </Button>
          </Box>

          <Box flex={1}>
            <Box
              component="img"
              src="/img/moto 4.jpg"
              alt="Moto"
              sx={{
                width: "100%",
                borderRadius: 4,
                boxShadow: 6
              }}
            />
          </Box>

        </Stack>
      </Container>

      {/* NUEVA SECCIÓN */}
      <Box sx={{ py: 10, background: "#0f172a", color: "white" }}>
        <Container>

          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mb={6}
          >
            Lo que te ofrecemos
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "2fr 1fr"
              },
              gap: 4
            }}
          >

            <Box
              sx={{
                p: 5,
                borderRadius: 4,
                background: "linear-gradient(135deg,#1e293b,#334155)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2
              }}
            >
              <SpeedIcon sx={{ fontSize: 50 }} />

              <Typography variant="h5" fontWeight="bold">
                Rendimiento superior
              </Typography>

              <Typography sx={{ opacity: 0.8 }}>
                Equipadas con motores que responden con potencia
                y eficiencia en cualquier tipo de recorrido.
              </Typography>
            </Box>

            <Box sx={{ display: "grid", gap: 4 }}>

              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: "#1e293b"
                }}
              >
                <SecurityIcon sx={{ fontSize: 35, mb: 1 }} />

                <Typography fontWeight="bold">
                  Seguridad avanzada
                </Typography>

                <Typography sx={{ fontSize: 14, opacity: 0.7 }}>
                  Sistemas diseñados para mayor control y estabilidad.
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: "#1e293b"
                }}
              >
                <TwoWheelerIcon sx={{ fontSize: 35, mb: 1 }} />

                <Typography fontWeight="bold">
                  Diseño moderno
                </Typography>

                <Typography sx={{ fontSize: 14, opacity: 0.7 }}>
                  Estética actual que se adapta a ciudad y carretera.
                </Typography>
              </Box>

            </Box>

          </Box>

        </Container>
      </Box>

      {/* PRODUCTOS */}
      <Container sx={{ py: 10 }}>

        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={6}
        >
          Catálogo destacado
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)"
            },
            gap: 4
          }}
        >

          {products.map((product) => (

            <Box
              key={product.name}
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                cursor: "pointer",
                "&:hover .overlay": {
                  opacity: 1
                }
              }}
            >

              <CardMedia
                component="img"
                image={product.img}
                sx={{ height: 250 }}
              />

              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.7)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "0.3s"
                }}
              >

                <Typography variant="h6">
                  {product.name}
                </Typography>

                <Typography sx={{ mb: 2 }}>
                  {product.price}
                </Typography>

                <Button
                  component={RouterLink}
                  to="/shopping"
                  variant="contained"
                  size="small"
                >
                  Ver más
                </Button>

              </Box>

            </Box>

          ))}

        </Box>

      </Container>

      {/* REPOSITORIO */}
      <Container sx={{ py: 10, textAlign: "center" }}>

        <GitHubIcon sx={{ fontSize: 50, mb: 2 }} />

        <Typography variant="h4" fontWeight="bold">
          Código del proyecto
        </Typography>

        <Typography sx={{ mt: 2, color: "text.secondary" }}>
          Revisa cómo fue construido este sistema con React,
          Vite y Material UI.
        </Typography>

        <Button
          href="https://github.com/Mayaemerson14/Taller-3----Bajaj.git"
          target="_blank"
          variant="outlined"
          sx={{
            mt: 4,
            borderRadius: 5,
            px: 5
          }}
        >
          Ir a GitHub
        </Button>

      </Container>

    </main>
  );
};