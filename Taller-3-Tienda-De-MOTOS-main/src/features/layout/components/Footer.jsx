import { Box, Container, Typography, Link, Stack } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg,#0f0f0f,#1a1a1a)",
        color: "#e5e5e5",
        mt: 10,
        py: 6
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)"
            },
            gap: 5
          }}
        >

          {/* Marca */}
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Bajaj Power
            </Typography>

            <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
              Especialistas en motocicletas Bajaj. 
              Potencia, rendimiento y estilo para cada tipo de piloto.
            </Typography>
          </Box>

          {/* Navegación */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Navegación
            </Typography>

            <Stack spacing={1}>
              <Link href="#" underline="hover" color="#bdbdbd">
                Inicio
              </Link>

              <Link href="#" underline="hover" color="#bdbdbd">
                Motocicletas
              </Link>

              <Link href="#" underline="hover" color="#bdbdbd">
                Promociones
              </Link>

              <Link href="#" underline="hover" color="#bdbdbd">
                Soporte
              </Link>
            </Stack>
          </Box>

          {/* Contacto */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contáctanos
            </Typography>

            <Typography variant="body2" sx={{ color: "#bdbdbd", mb: 1 }}>
              📧 ventas@bajajstore.com
            </Typography>

            <Typography variant="body2" sx={{ color: "#bdbdbd", mb: 1 }}>
              📞 +57 310 456 7890
            </Typography>

            <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
              📍 Medellín, Colombia
            </Typography>
          </Box>

          {/* Redes */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Síguenos
            </Typography>

            <Stack spacing={1}>
              <Link href="#" underline="hover" color="#bdbdbd">
                Instagram
              </Link>

              <Link href="#" underline="hover" color="#bdbdbd">
                Facebook
              </Link>

              <Link href="#" underline="hover" color="#bdbdbd">
                YouTube
              </Link>
            </Stack>
          </Box>

        </Box>

        {/* Parte inferior */}
        <Box
          sx={{
            borderTop: "1px solid #333",
            mt: 6,
            pt: 3,
            textAlign: "center"
          }}
        >
          <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
            © 2026 Bajaj Power Store | Proyecto académico React + MUI
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};