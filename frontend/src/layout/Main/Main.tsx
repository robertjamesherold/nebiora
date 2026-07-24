import type { MainProps } from "./Main.types";

const Main = ({ children }: MainProps) => {
  return (
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
  );
};

export default Main;
