import React from "react";
import Linksicon from "../components/content/Linksicon";

const HomePage: React.FC = () => {
    return (
        <div className="flex w-[640px] flex-wrap mt-[40px] p-2 flex-grow max-h-screen overflow-y-auto bg-gray-100 items-start">
            {/* Using Array.map() to render Linksicon component 15 times */}
            {Array.from({ length: 35 }).map((_, index) => (
                <Linksicon key={index} />
            ))}
        </div>
    );
};

export default HomePage;
