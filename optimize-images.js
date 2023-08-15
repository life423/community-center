import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  const files = await imagemin(["img/*.{jpg,jpeg,png}"], {
    destination: "dist/img",
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  console.log("Images optimized:", files);
})();
