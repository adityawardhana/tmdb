/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "../page";
import { Suspense } from "react";

// it("App Router: Works with Server Components", () => {
//   const { container } = render(
//     <Suspense>
//       <Page searchParams={{ filter: "", page: 1 }} />
//     </Suspense>
//   );
//   expect(container).toMatchSnapshot();
// });
