import { SafeNumber } from "@/utils/types";
import { Circle } from "@mui/icons-material";
import Image from "next/image";
import { CSSProperties } from "react";
import Carousel from "react-material-ui-carousel";
type Props = {
  images: string[];
  width?: SafeNumber | undefined;
  height?: SafeNumber | undefined;
  style?: CSSProperties | undefined;
};
const ImageCarousel = ({ images, width, style, height }: Props) => {
  return (
    <Carousel
      animation={"slide"}
      IndicatorIcon={<Circle sx={{ fontSize: "1.2rem" }} />}
      navButtonsAlwaysInvisible={true}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#4692FE",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          color: "#4692FE24",
          padding: "0.4rem",
        },
      }}
    >
      {images.map((image) => (
        <Image
          key={image}
          src={image}
          alt="Payment icon"
          width={width || 1400}
          height={height || 520}
          style={{
            width: "100%",
            height: "52rem",
            borderRadius: "0.8rem",
            objectFit: "cover",
            ...style,
          }}
        />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
