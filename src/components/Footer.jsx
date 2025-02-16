import React from "react";

function Footer() {
    return (
        <footer className="w-full px-6 py-4 flex justify-center items-center bg-gray-200 dark:bg-gray-800">
        <p className="text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} Prompt Refiner. All rights reserved.
        </p>
        </footer>
    );
};

export default Footer;