import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link href="/">
                <h3>PRIYANSHU KUMAR</h3>
            </Link>
            <Link href="/projects">
                <h3>Projects</h3>
            </Link>
            <Link href="/experience">
                <h3>Experience</h3>
            </Link>
            <Link href="/about">
              <h3>About</h3>
            </Link>
        </div>
    );
};

export default Navbar;
