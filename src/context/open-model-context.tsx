// "use client";
// import {
//   createContext,
//   ReactNode,
//   useState,
//   Dispatch,
//   SetStateAction,
// } from "react";
// interface ContextValue {
//   open: boolean | null;
//   setOpen: Dispatch<SetStateAction<boolean | null>>;
// }
// export const OpenModalContext = createContext<ContextValue | undefined>(
//   undefined
// );

// export const Provider = ({ children }: { children: ReactNode }) => {
//   const [open, setOpen] = useState<boolean | null>(null);
//   return (
//     <OpenModalContext.Provider value={{ open, setOpen }}>
//       {children}
//     </OpenModalContext.Provider>
//   );
// };
