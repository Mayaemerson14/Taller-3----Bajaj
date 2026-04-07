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
          height: "80vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white"
        }}
      >
        <Box
          component="img"
          src="/img/bajaja.jpg"
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
            background: "linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,0.9))"
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1, px: 2 }}>
          <Typography variant="h2" fontWeight="bold">
            Bajaj Store
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.85, maxWidth: 600 }}>
            Motocicletas diseñadas para ofrecer potencia, eficiencia y estilo
            en cada recorrido.
          </Typography>
        </Box>
      </Box>

      {/* PRODUCTOS */}
      <Container maxWidth="lg" sx={{ py: 10 }}>

        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={6}
        >
          Catálogo disponible
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)"
            },
            gap: 4
          }}
        >
          {motos.map((moto) => {

            const favorite = isFavorite(moto.id);

            return (
              <Card
                key={moto.id}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  transition: "0.3s",
                  "&:hover .overlay": {
                    opacity: 1
                  }
                }}
              >

                <CardMedia
                  component="img"
                  image={`/img/${moto.img}`}
                  sx={{ height: 240 }}
                />

                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.7)",
                    opacity: 0,
                    transition: "0.3s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white"
                  }}
                >
                  <Stack spacing={1} alignItems="center">
                    <Box display="flex" gap={1}>
                      <SpeedIcon fontSize="small" />
                      <Typography>{moto.speed}</Typography>
                    </Box>

                    <Box display="flex" gap={1}>
                      <LocalGasStationIcon fontSize="small" />
                      <Typography>{moto.fuel}</Typography>
                    </Box>

                    <Box display="flex" gap={1}>
                      <SettingsIcon fontSize="small" />
                      <Typography>{moto.trans}</Typography>
                    </Box>
                  </Stack>
                </Box>

                <CardContent>

                  <Typography fontWeight="bold">
                    {moto.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#ff4b2b",
                      fontWeight: "bold",
                      mb: 2
                    }}
                  >
                    {moto.price}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => addCart(moto)}
                      sx={{ borderRadius: 2 }}
                    >
                      Comprar
                    </Button>

                    <Button
                      variant={favorite ? "contained" : "outlined"}
                      onClick={() => toggleFavorite(moto)}
                      sx={{
                        minWidth: "50px",
                        borderRadius: 2
                      }}
                    >
                      <FavoriteBorderIcon />
                    </Button>
                  </Stack>

                </CardContent>

              </Card>
            );
          })}
        </Box>

      </Container>

    </main>
  );
};