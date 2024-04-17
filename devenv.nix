{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  # https://devenv.sh/basics/
  env.GREET = "otel test project";

  # https://devenv.sh/packages/
  packages = with pkgs; [nodejs nodePackages.pnpm bun];
}
