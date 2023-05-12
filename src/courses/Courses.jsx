import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useParams } from "react-router";
import Link from '@mui/material/Link';
import { Grid, Paper,Typography, Box, boxShadow } from "@mui/material";
import CardContent from '@mui/material/CardContent';

const Courses = () => {
  return (
    <>
      <Typography variant="h3" marginTop={5} marginLeft={80} marginBottom={5}>COURSES</Typography>
      <Grid container>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345, marginLeft: "5vw", marginBottom: "6vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAeFBMVEUFvuL///8AvOFPyefv+v1PzeiK1+yf3vDh9Pv3/P1s0OoAuuCB0+suwuSM3fCb3O/Q7Pbb7/jI6fXp9/s9xeWu4PGo4fEbwePf8/nU7/d50uu95fOc2u7C6vWQ2e5kzumv5/S77Pdizuhz1OtLxOUzyOar3vCS1uxkrvwYAAAGXUlEQVR4nO2a6ZqiOhRFyYFGMNAioAiIdHXX8P5veJGgAkkAS/2kvHv9qEECZpPkTIlhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPifkxwx6NndeARERnnY/nl7e/uzXS19ejWRlHh5xE5Y4Sp+LYXctFzWIdq/0kxNPItJbPxnd+tuxIUsryL0X2MMKQmU+hgLypdQyDcafYytdaaGiDj/KZZ2odWnn6Xx8rBa2eVPmMNkOgMCmaeQQIbd3BNm8ze1ZLtDAgMu35JszrdYm7krJD8a0seYKd1R7jqTOJm3Qp4P62Nhr/9k7roNNs/p+FRoRB+L+oa0b3Nd1TKdDRSPCbT+dm8wpSVbJE/q/CR+jQl0vaPDqwep+kl8K7Vw5hyX078xgcxNt0sz9itiszykihZzjnfIHhVYswvCMFhrHMry2SoGmCQwyjef+89NHihSjtkLHJ+ixdIUeVPim8sfN0UnGJmMn/t/DLFlIxO9z1ggfYwJtMruHaXUIpx1YkyDkehxfHoZgy+FPocndX0aA8lgMz79UK3sBa/FvHMm8gezJcakBUZeR+Eufkq/p0PetekSxWFr/OauT84OumSqhNc/JYTOftYGpmE1oE9dsqDEtP/kb9ts9sNXwz+1+lKdgmPN6cdUnSgJNfrCWcco0yE/VxqamTuAq1gpFK5/xgqbBGUKgZH5OgNIX5Ug6+LyqwSpUrz8hsCO3dEYIZL/efCrJL8yM0Fm2otNURT59lBWiWLEtoqaaNP+l5aP5CSLjA91k3aJg0SbR6/2pcVCsXNdb2HXf2WWpRXoWVoiJzT5sXhThk6kbOH+bqnhaf1Z/tjqapKzgssxp/upaT9WB1jEFKsy44ZWnZH2zWf5IwWSaakqYzxnmeaGsUJHTkP15MvaJv9cBXlkaY5yR1lWMVmhnjmjAnf2wIaAW7YedLbeC916uB36yw5qHbmbKb92VKA7tOHhnt0Pxevzp5G0CXI3fWaUqs10ZVxdpatoBOYriUUnJnKLhYLDJQMRBR6xXB9VICc/0JbFKv+vLFs3AstjybsL5+3B9biKywo064F2/Fqh9R23O0FfXCj3AJuLKUvLOmnoOmehQtUjii+zMxpbVsISLYys/n3n4lWzy86rVfBb25GkqLpp++/Z8p1aYcmQQP9yomE9LJBEgc4qKRY59987DiGR+W+13dr2rmPV+vBLMuyG2dmkDgg0WgKHR5D8WpabVVHBsvYW2pl0PRTvWzNpwAUt2zYjPwVUEwWyd0NapK0+CBeR8yZU1D3wW9jtOGNg+6u3gV/41wl0trbXJivfz1UAMoWLqH1Gk804+rl0FbzbbVfrgaSAKxTvYqrA6tldLCc4fDR3idMreTMtv8R/d9FH791eM0drRfe9lmxrTBO4GyjVfdVjJqztuW7O6/G8k6uQTqZpHtsONBrSukPjAgNPH8vUwQMX7+7t5N1JmLO7nGgwpW2+VB1EyAPYhFnjAtd+udHsJlZfxw1K6lUSnUOMZjW4d3AVdJDKE5a6OMEVKY83VSAlcen97nI6chsTFytwf4mFuLAz4e2uQrHdojsJophmGz5VYBX8iOppCxGUVSFcKYbXWbcQ7/327WLF0R/XVo+gQuDndIEKSETXXwPp8O7m6sUVAhWm8GvyFFUKFKZkP5BuuardkOsEypvQmoeq9g7HjAz56yGBzdLTldKP3FxuVhwvtNSxDMXS3mHXTSgMAongLlD1kowmJHPqNpbTR3Rsc2NiSLFkv0NdW8ngiu3qRuDGljisxLTOPfladbFoP08qI3Dxdeok+xqk43S6WI3i3mnuvBOq6XH3UoggIQ8yNT273VX0Zp62wFtFdR07k5/q0GMCo2xkY1yz7pv9/1s3taiTBLF0IF1qHy50d6e8flRg0T+pILNTFewSEUXubtNXUV5chZsPViQp3qZiZQSHfsKrJTdLbZx2Qm24xX3uv1tXIfl2eHzHrvM2FjkQ+dlqsVhl/qUuQwd9x90oXBk801y10lxIT9XLovFMwc1l4KrbsVkRTzDJdR7eScYN39QTH7PiRHsxicUfGgXNk+9RQuyXEL5xs5rhBka71b27BQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/Ff8+lU4iG0ldgAAAAAElFTkSuQmCC"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions>
              <Link href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi%27">DSA</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345, marginLeft: "5vw", marginBottom: "6vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="data:image/jpeg;base64,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"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions>
              <Link href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi%27">Discrete Mathematics</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345, marginLeft: "5vw", marginBottom: "6vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXniyNLvwUafs_Ow5WynJzeXeeiz7fN-fUw&usqp=CAU"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions>
              <Link href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi%27">Operating system</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345, marginLeft: "5vw", marginBottom: "6vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKnST6LMgwdFCrnbMGuz5vs9LtkOEUz40Bg&usqp=CAU"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions>
              <Link href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi%27">Big Data Analytics</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345, marginLeft: "5vw", marginBottom: "6vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://static.javatpoint.com/dbms/images/dbms-tutorial.jpg"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions>
              <Link href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi%27">DBMS</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345, marginLeft: "5vw", marginBottom: "6vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaid8Q30XMItKAfKz2Rz9SgdOapzP2NV10KQ&usqp=CAU"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions>
              <Link href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi%27">Machine Learning</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345, marginLeft: "5vw", marginBottom: "6vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://electrosome.com/wp-content/uploads/2017/04/Intel-Core-i7.jpg"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions>
              <Link href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi%27">Microprocessor</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345, marginLeft: "5vw", marginBottom: "6vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChZCVvNzlXwhen_SH23P7zrdlRm1a_4bi3Q&usqp=CAU"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions>
              <Link href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi%27">Software Project Management</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345, marginLeft: "5vw", marginBottom: "6vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnzOLuQvponLNZDVGT7sdWSPX_okiSGrsLw&usqp=CAU"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActions>
              <Link href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi%27">Blockchain</Link>
            </CardActions>
          </Card>
        </Grid>

      </Grid>

    </>
  )
}

export default Courses