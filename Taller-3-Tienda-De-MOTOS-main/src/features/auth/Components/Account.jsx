import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  TextField,
  Button,
  Box,
  Stack,
  InputAdornment,
  Snackbar,
  Alert,
  LinearProgress
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import UploadIcon from "@mui/icons-material/Upload";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import { useAccount } from "../hooks/useAccount";

export const Account = () => {
  const {
    user,
    form,
    errors,
    snackbar,
    isOnline,
    handleChange,
    handleImage,
    saveUser,
    deleteUser,
    closeSnackbar
  } = useAccount();

  const getColor = (field) => {
    if (!form[field]) return "inherit";
    return errors[field] ? "error.main" : "success.main";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser();
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6
      }}
    >

      <Card
        sx={{
          width: "100%",
          borderRadius: 5,
          boxShadow: 8,
          overflow: "hidden"
        }}
      >

        {/* HEADER */}
        <Box
          sx={{
            height: 140,
            background: form.background || user?.background
              ? `url(${form.background || user.background})`
              : "linear-gradient(135deg,#0f172a,#1e293b)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <CardContent sx={{ mt: -8, textAlign: "center" }}>

          <Avatar
            src={form.image || user?.image || ""}
            sx={{
              width: 110,
              height: 110,
              mx: "auto",
              mb: 2,
              border: "4px solid white"
            }}
          >
            {!form.image && !user?.image && <PersonIcon />}
          </Avatar>

          <Typography variant="h6" fontWeight="bold">
            {user ? "Editar perfil" : "Crear cuenta"}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: isOnline ? "success.main" : "error.main",
              mb: 3
            }}
          >
            {isOnline ? "● En línea" : "● Sin conexión"}
          </Typography>

          {/* FORM */}
          <Stack
            spacing={2.5}
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >

            <TextField
              label="Nombre"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: getColor("name") }} />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              label="Correo"
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: getColor("email") }} />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              label="Contraseña"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: getColor("password") }} />
                  </InputAdornment>
                )
              }}
            />

            {/* IMAGEN */}
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadIcon />}
              fullWidth
            >
              {form.image ? "Imagen cargada" : "Subir foto"}
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => handleImage(e, "image")}
              />
            </Button>

            {form.image && (
              <LinearProgress variant="determinate" value={100} />
            )}

            {/* FONDO */}
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadIcon />}
              fullWidth
            >
              {form.background ? "Fondo cargado" : "Subir fondo"}
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => handleImage(e, "background")}
              />
            </Button>

            {form.background && (
              <LinearProgress variant="determinate" value={100} />
            )}

            {/* BOTONES */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<SaveIcon />}
              sx={{
                mt: 1,
                borderRadius: 3,
                background: "#ff4b2b"
              }}
            >
              {user ? "Guardar cambios" : "Registrarse"}
            </Button>

            {user && (
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={deleteUser}
              >
                Eliminar cuenta
              </Button>
            )}

          </Stack>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={closeSnackbar}
      >
        <Alert severity="success" variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>

    </Container>
  );
};