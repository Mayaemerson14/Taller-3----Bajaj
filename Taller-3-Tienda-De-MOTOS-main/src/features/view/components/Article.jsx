import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Box,
  Stack
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SpeedIcon from "@mui/icons-material/Speed";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";

import { useShopping } from "../../auth/hooks/useShopping";
import { useFavorites } from "../hooks/useFavorites";

export const Article = () => {
  const { addCart } = useShopping();
  const { toggleFavorite, isFavorite } = useFavorites();

  const motos = [
    { id:1, img:"moto 1.jpg", name:"Bajaj Boxer CT 100", price:"$4.000.000", speed:"90 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:2, img:"moto 5.jpg", name:"Bajaj Boxer 125", price:"$7.500.000", speed:"100 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:3, img:"pulsar 125.jpg", name:"Bajaj Pulsar 125", price:"$8.200.000", speed:"110 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:4, img:"pulsar 150.jpg", name:"Bajaj Pulsar 150", price:"$9.500.000", speed:"120 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:5, img:"moto 2.jpg", name:"Bajaj Pulsar 180", price:"$11.000.000", speed:"130 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:6, img:"pulsar 160.jpg", name:"Bajaj Pulsar NS 160", price:"$12.500.000", speed:"135 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:7, img:"moto 3.jpg", name:"Bajaj Pulsar NS 200", price:"$14.500.000", speed:"140 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:8, img:"pulsar rs 200.jpg", name:"Bajaj Pulsar RS 200", price:"$16.000.000", speed:"150 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:9, img:"dominar 250.jpg", name:"Bajaj Dominar 250", price:"$18.000.000", speed:"145 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:10, img:"dominar 400.jpg", name:"Bajaj Dominar 400", price:"$22.000.000", speed:"165 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:11, img:"avenger 160.jpg", name:"Bajaj Avenger 160", price:"$13.000.000", speed:"120 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:12, img:"avenger 220.jpg", name:"Bajaj Avenger 220", price:"$15.000.000", speed:"130 km/h", fuel:"Gasolina", trans:"Manual"}
  ];

  return (
    <main>

      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          overflow: "hidden"
        }}
      >
        <Box
          component="img"
          src="/img/bajaja.jpg"
          alt="Motocicleta deportiva Bajaj"
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
            background: "rgba(0,0,0,0.6)"
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
            color: "#ffffff",
            textAlign: "center",
            px: 2
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            Bajaj Motor Store
          </Typography>

          <Typography
            component="p"
            variant="body1"
            sx={{ mt: 2, maxWidth: 600 }}
          >
            Descubre las mejores motocicletas Bajaj con potencia,
            economía y diseño deportivo.
          </Typography>
        </Box>
      </Box>

      {/* ESTADISTICAS */}
      <Container sx={{ py: 6 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="center"
          textAlign="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="bold">
              12+
            </Typography>
            <Typography color="text.secondary">
              Modelos disponibles
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" fontWeight="bold">
              500+
            </Typography>
            <Typography color="text.secondary">
              Clientes satisfechos
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" fontWeight="bold">
              Bajaj
            </Typography>
            <Typography color="text.secondary">
              Marca líder en motos
            </Typography>
          </Box>
        </Stack>
      </Container>

      {/* LISTA DE MOTOS */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={6}
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
            gap: { xs: 3, md: 4 }
          }}
        >

          {motos.map((moto) => {

            const favorite = isFavorite(moto.id);

            return (
              <Card
                key={moto.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  transition: "0.25s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6
                  }
                }}
              >

                <CardMedia
                  component="img"
                  image={`/img/${moto.img}`}
                  alt={`Moto ${moto.name}`}
                  loading="lazy"
                  sx={{ height: 200, objectFit: "cover" }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center"
                  }}
                >

                  <Box>

                    <Typography variant="h6" fontWeight="bold">
                      {moto.name}
                    </Typography>

                    <Typography
                      fontWeight="bold"
                      mb={2}
                      sx={{
                        color: "#ff6b00",
                        fontSize: "1.2rem"
                      }}
                    >
                      {moto.price}
                    </Typography>

                    <Stack spacing={1}>

                      <Box display="flex" justifyContent="center" gap={1}>
                        <SpeedIcon fontSize="small" />
                        <Typography variant="body2">
                          {moto.speed}
                        </Typography>
                      </Box>

                      <Box display="flex" justifyContent="center" gap={1}>
                        <LocalGasStationIcon fontSize="small" />
                        <Typography variant="body2">
                          {moto.fuel}
                        </Typography>
                      </Box>

                      <Box display="flex" justifyContent="center" gap={1}>
                        <SettingsIcon fontSize="small" />
                        <Typography variant="body2">
                          {moto.trans}
                        </Typography>
                      </Box>

                    </Stack>

                  </Box>

                  <Stack spacing={1.5} mt={3}>

                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => addCart(moto)}
                      sx={{
                        backgroundColor: "#16a34a",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#15803d"
                        }
                      }}
                    >
                      Comprar
                    </Button>

                    <Button
                      variant={favorite ? "contained" : "outlined"}
                      startIcon={<FavoriteBorderIcon />}
                      fullWidth
                      onClick={() => toggleFavorite(moto)}
                      sx={{
                        bgcolor: favorite ? "error.dark" : "transparent",
                        color: favorite ? "white" : "text.primary",
                        borderColor: favorite ? "error.dark" : "divider",
                        "&:hover": {
                          bgcolor: favorite ? "error.main" : "action.hover"
                        }
                      }}
                    >
                      {favorite ? "Guardado" : "Agregar a favoritos"}
                    </Button>

                  </Stack>

                </CardContent>

              </Card>
            );

          })}

        </Box>

        <Divider sx={{ my: 8 }} />

      </Container>

    </main>
  );
};