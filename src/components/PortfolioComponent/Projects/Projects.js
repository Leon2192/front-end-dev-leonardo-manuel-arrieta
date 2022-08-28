import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import fire from "../../Assets/fire.png";
import rl from "../../Assets/LOGO avhicado.jpg";
import recreo from "../../Assets/recreologo.png";
import netflix from "../../Assets/netflixlogo.png";
import poke from "../../Assets/poke.png";
import sunny from "../../Assets/sunny.png";
import ml from "../../Assets/mercado.png";
import ron from "../../Assets/ron.png";
import "./Projects.css";

export default function Projects() {
  return (
    <div id="proyectos" className="projects-container">
      <h2>Proyectos</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={ron}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    RON Inmobiliaria
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Proyecto real. Cliente "Ron Inmobiliaria", está desarrollado
                    con las tecnologías React Js, Node Js y Chakra UI.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/Leon2192/ron-inmobiliaria">
                    <CodeIcon />
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a href="https://ron-inmobiliaria.vercel.app/">
                    <RocketLaunchIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={rl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    R+L Arquitectura
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Proyecto real desarrollado para cliente estudio de
                    arquitectura. Se emplea como tecnologías maquetado html y
                    css junto con Javascript.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div className="button-action">
                  <Button size="small" color="primary">
                    <a href="https://github.com/Leon2192/R-L-Arq">
                      <CodeIcon />
                    </a>
                  </Button>
                  <Button size="small" color="primary">
                    <a href="https://r-l-arq-leon2192.vercel.app/">
                      <RocketLaunchIcon />
                    </a>
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={fire}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Firechat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Se trata de una App mobile para conocer personas,
                    desarrollada con las tecnologías Node Js, Html, Css, JS,
                    React/React Native Y expo CLI.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/Leon2192/Firechat-ProyectoFinalReactNative-Arrieta-Leonardo">
                    <CodeIcon />
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a href="https://expo.dev/@leonardoarrieta/firechat?serviceType=classic&distribution=expo-go">
                    <RocketLaunchIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={netflix}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Netflix
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Clon desarrollado con HTML, CSS, Javascript, React Js,
                    Redux, Styled Components, Axios y Firebase. Conexión con API
                    TMDB.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/Leon2192/Netflix-Clone">
                    <CodeIcon />
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a href="https://netflix-clon-tawny.vercel.app/">
                    <RocketLaunchIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={recreo}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    El Recreólogo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Proyecto para cliente real desarrollado con tecnologías
                    HTML, Css, JS, React js y Node Js.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/Leon2192/El-Recreo-logo">
                    <CodeIcon />
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a href="https://el-recreo-logo.vercel.app/">
                    <RocketLaunchIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={poke}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    PokeChallenge
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Proyecto desarrollado con las tecnologías HTML, CSS,
                    Javascript y consume la api POKEAPI.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/Leon2192/pokeChallenge">
                    <CodeIcon />
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a href="https://poke-challenge-arrieta-leonardo.vercel.app/">
                    <RocketLaunchIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={sunny}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MEET-APPs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Proyecto desarrollado con tecnologías HTML, Css, React Js y
                    Node Js. Comunica con la API de Accu Weather's.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/Leon2192/Meetups-App">
                    <CodeIcon />
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a href="https://meetups-app-six.vercel.app/">
                    <RocketLaunchIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={ml}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mercadolibre Clon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Clon desarrollado basado en la UI oficial de Mercado Libre.
                    Utiliza Html, Css, Javascript y Styled Components.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/Leon2192/MercadoLibre-Clone-Product-Section">
                    <CodeIcon />
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a href="https://mercado-libre-clon-styled-components.netlify.app/">
                    <RocketLaunchIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
