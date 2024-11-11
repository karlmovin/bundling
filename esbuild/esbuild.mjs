import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["app.jsx"],
  bundle: true,
  outfile: "app.js",
});
