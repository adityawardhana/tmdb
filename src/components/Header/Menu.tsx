import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";

const links = [
  { label: "Movies", link: "/" },
  { label: "TV Shows", link: "/tv" },
];

interface Props {
  pathname: string;
}
const Menu: FC<Props> = ({ pathname }) => {
  return (
    <nav className="flex gap-4">
      {links.map((item) => (
        <Link
          key={item.label}
          className={classNames("text-base hover:text-primary", {
            "text-primary": pathname === item.link,
          })}
          href={item.link}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
