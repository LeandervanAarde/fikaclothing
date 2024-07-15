import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router";
type Props = {};

export default function ProductCard({}: Props) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ width: { xs: "100%", sm: "100%", md: "100%" } }}
      onClick={() => navigate("/product/id")}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="SHOE NAME"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Shoe Name
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Brand
          </Typography>
          <Typography variant="body2" color="text.secondary">
            R1 200.00
          </Typography>
          <Typography variant="body1" color="text.secondary">
            R1 200.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ShoppingCartIcon />
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
