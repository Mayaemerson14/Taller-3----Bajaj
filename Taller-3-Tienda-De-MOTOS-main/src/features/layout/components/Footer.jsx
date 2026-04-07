import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Divider
} from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#020617",
        color: "white",
        mt: 10,
        pt: 8,
        pb: 4
      }}
    >
      <Container maxWidth="lg">

        {/* PARTE SUPERIOR */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "2fr 1fr 1fr"
            },
            gap: 6,
            mb: 6
          }}
        >

          {/* INFO + SUSCRIPCIÓN */}
          <Box>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Bajaj
            </Typography>

            <Typography sx={{ color: "#94a3b8", mb: 3 }}>
              Encuentra motocicletas diseñadas para ofrecer
              rendimiento, seguridad y estilo en cada recorrido.
            </Typography>

            <Stack direction="row" spacing={2}>
              <TextField
                placeholder="Tu correo"
                size="small"
                sx={{
                  background: "white",
                  borderRadius: 2
                }}
              />

              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                  background: "#ff4b2b"
                }}
              >
                Suscribirse
              </Button>
            </Stack>
          </Box>

          {/* ENLACES */}
          <Box>
            <Typography fontWeight="bold" mb={2}>
              Secciones
            </Typography>

            <Stack spacing={1}>
              <Typography sx={{ color: "#94a3b8" }}>Inicio</Typography>
              <Typography sx={{ color: "#94a3b8" }}>Ofertas</Typography>
              <Typography sx={{ color: "#94a3b8" }}>Artículos</Typography>
              <Typography sx={{ color: "#94a3b8" }}>Cuenta</Typography>
            </Stack>
          </Box>

          {/* CONTACTO */}
          <Box>
            <Typography fontWeight="bold" mb={2}>
              Contacto
            </Typography>

            <Stack spacing={1}>
              <Typography sx={{ color: "#94a3b8" }}>
                ventas@bajajstore.com
              </Typography>

              <Typography sx={{ color: "#94a3b8" }}>
                +57 310 456 7890
              </Typography>

              <Typography sx={{ color: "#94a3b8" }}>
                Medellín, Colombia
              </Typography>
            </Stack>
          </Box>

        </Box>

        <Divider sx={{ borderColor: "#1e293b", mb: 3 }} />

        {/* PARTE INFERIOR */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2
          }}
        >

          <Typography sx={{ color: "#64748b" }}>
            © 2026 Bajaj
          </Typography>

          <Stack direction="row" spacing={3}>
            <Typography sx={{ color: "#64748b" }}>
              Privacidad
            </Typography>

            <Typography sx={{ color: "#64748b" }}>
              Términos
            </Typography>

            <Typography sx={{ color: "#64748b" }}>
              Soporte
            </Typography>
          </Stack>

        </Box>

      </Container>
    </Box>
  );
};