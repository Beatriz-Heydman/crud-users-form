export type FlexProps = {
  justifyContent?:
    | "center"
    | "space-between"
    | "space-around"
    | "flex-start"
    | "flex-end";
  alignItems?: "flex-start" | "flex-end" | "center";
  direction?: "row" | "column";
  gap?: string;
};
