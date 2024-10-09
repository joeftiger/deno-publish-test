// ex. scripts/build_npm.ts
import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./main.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  typeCheck: "both",
  package: {
    // package.json properties
    name: "@joeftiger/deno-publish-test",
    version: "0.1.0",
    description: "",
    license: "UNLICENSED",
    repository: {
      url: "git+https://github.com/joeftiger/deno-publish-test.git",
    },
    bugs: {
      url: "https://github.com/joeftiger/deno-publish-test/issues",
    },
    publishConfig: {
      registry: "https://npm.pkg.github.com",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    // Deno.copyFileSync("LICENSE", "npm/LICENSE");
    // Deno.copyFileSync("README.md", "npm/README.md");
    // Deno.copyFileSync(".npmrc", "npm/.npmrc");
  },
});
