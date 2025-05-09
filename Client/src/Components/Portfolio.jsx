import React, { useRef } from "react";

function Portfolio() {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const fullstackRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const listStyle = "hover:text-blue-500";
  return (
    <section className="flex h-screen text-white bg-gray-950 px-24 pt-6 space-x-20">
      <nav className="text-center items-center justify-center w-[100%]">
        <h3>PORTFOLIO</h3>
        <ul className="flex space-x-10 items-center justify-center mt-10">
          <li className={listStyle}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(frontendRef);
              }}
            >
              Frontend Projects
            </a>
          </li>
          <li className={listStyle}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(backendRef, backendProjects);
              }}
            >
              Backend Projects
            </a>
          </li>
          <li className={listStyle}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(fullstackRef);
              }}
            >
              Fullstack Projects
            </a>
          </li>
        </ul>
      </nav>
      {/* Backend Projects */}
      {/* <section>
        <h2>PROJECT 1</h2>
        <h3>E-Commence Platform</h3>
        <h5>Features</h5>
        <ol>
          <li>Handles User Registration and Login</li>
          <li>Product catalogue with categories</li>
          <li>Shopping Cart</li>
          <li>Admin Specific Actions</li>
        </ol>
      </section> */}
    </section>
  );
}

const backendProjects = (onClick) => {
  return (
    <>
      <div>
        <h2>PROJECT 1</h2>
        <h3>E-Commence Platform</h3>
        <h5>Features</h5>
        <ol>
          <li>Handles User Registration and Login</li>
          <li>Product catalogue with categories</li>
          <li>Shopping Cart</li>
          <li>Admin Specific Actions</li>
        </ol>
      </div>
      <div>
        <h2>PROJECT 2</h2>
        <h3>Blog Platform</h3>
        <h5>Features</h5>
        <ol>
          <li>Handles User Registration and Login</li>
          <li>CRUD operators for blog posts</li>
          <li>Comment system for blog post</li>
          <li>User rules and permissions</li>
        </ol>
      </div>
      <div>
        <h2>PROJECT 3</h2>
        <h3>Task Management Application</h3>
        <h5>Features</h5>
        <ol>
          <li>Handles User Registration and Login</li>
          <li>CRUD operators for blog posts</li>
          <li>Comment system for blog post</li>
          <li>User rules and permissions</li>
        </ol>
      </div>
    </>
  );
};
export default Portfolio;
