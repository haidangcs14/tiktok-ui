import { useState } from "react";
import { forwardRef } from "react";

import PropTypes from "prop-types";

import images from "~/assets/images";
import classNames from "classnames";
import styles from "./Image.module.scss";

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallBack, setFallBack] = useState("");
    const handleError = () => {
      setFallBack(customFallback);
    };
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,

  alt: PropTypes.string,

  className: PropTypes.string,

  fallback: PropTypes.string,
};
export default Image;
