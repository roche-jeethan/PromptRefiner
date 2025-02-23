import React from "react";

function Footer() {
    return (
        <footer className="w-full px-6 py-4 flex justify-center items-center bg-[#ffe4e1] dark:bg-black">
        <p className="text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} Prompt Refiner. All rights reserved.
        </p>
        </footer>
    );
};

export default Footer;