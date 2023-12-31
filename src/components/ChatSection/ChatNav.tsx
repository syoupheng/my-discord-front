import { PropsWithChildren } from "react";

const ChatNav = ({ children }: PropsWithChildren) => {
  return (
    <section className="basis-auto shrink-0 grow-0 relative flex items-center min-w-0 w-full h-12 px-2 cursor-default border-b border-tertiary">
      {children}
    </section>
  );
};

export default ChatNav;

ChatNav.LeftSection = ({ children }: PropsWithChildren) => {
  return <div className="relative flex-auto flex items-center min-w-0 overflow-hidden">{children}</div>;
};

ChatNav.RightSection = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center basis-auto shrink-0 grow-0 min-w-0 text-h-secondary">{children}</div>;
};
