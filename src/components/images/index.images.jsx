export const ImageComponent = ({
  base,
  alt,
  sizes = "(max-width: 768px) 90vw, 520px",
  eager = false,
  naturalWidth = 640,
  naturalHeight = 800,
  widthParameter = "85px",
}) => (
  <picture>
    {/* AVIF primeiro */}
    <source
      type="image/avif"
      srcSet={[
        `/imgs/${base}/${base}-320.avif 320w`,
        `/imgs/${base}/${base}-640.avif 640w`,
        `/imgs/${base}/${base}-960.avif 960w`,
        `/imgs/${base}/${base}-1280.avif 1280w`,
      ].join(", ")}
      sizes={sizes}
    />
    {/* WebP fallback */}
    <source
      type="image/webp"
      srcSet={[
        `/imgs/${base}/${base}-320.webp 320w`,
        `/imgs/${base}/${base}-640.webp 640w`,
        `/imgs/${base}/${base}-960.webp 960w`,
        `/imgs/${base}/${base}-1280.webp 1280w`,
      ].join(", ")}
      sizes={sizes}
    />
    {/* Último fallback (jpg/png) */}
    <img
      src={`/imgs/${base}/${base}-640.jpg`}
      srcSet={[
        `/imgs/${base}/${base}-320.jpg 320w`,
        `/imgs/${base}/${base}-640.jpg 640w`,
        `/imgs/${base}/${base}-960.jpg 960w`,
        `/imgs/${base}/${base}-1280.jpg 1280w`,
      ].join(", ")}
      sizes={sizes}
      alt={alt}
      width={naturalWidth}
      height={naturalHeight}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      style={{ width: widthParameter, height: "auto" }}
    />
  </picture>
);
