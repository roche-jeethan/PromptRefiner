import React from "react";
import step1 from "../assets/apidocs/step1.png";
import step2 from "../assets/apidocs/step2.png";
import step3 from "../assets/apidocs/step3.png";
import step4 from "../assets/apidocs/step4.png";
import step5 from "../assets/apidocs/step5.png";
import step6 from "../assets/apidocs/step6.png";

function ApiDocs() {
    return(
        <div className="flex flex-col bg-bgWhite text-white dark:bg-bgDark">
            <div className="ml-5 mr-">
            <h1 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-5xl mt-3">Guidelines</h1>
            <p className="mt-3 text-black text-sm sm:text-base md:text-lg lg:text-xl">Step 1: Click on the 
                <a className=""href="https://aistudio.google.com/app/apikey"> Link </a>
                 To redirect to Google API Keys from Google AI Studio
            </p>
            <div className="flex justify-center w-full my-4">
                <img src={step1} alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-black text-sm sm:text-base md:text-lg lg:text-xl">Step 2: Click on the "Create API Key" button to generate a new API key.</p>
            <div className="flex justify-center w-full my-4">
                <img src={step2} alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-black text-sm sm:text-base md:text-lg lg:text-xl">Step 3: Copy the generated API key and paste it into the input field in the application.</p>
            <div className="flex justify-center w-full my-4">
                <img src={step3} alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-black text-sm sm:text-base md:text-lg lg:text-xl">Step 4: Click on the "Verify" button to validate your API key.</p>
            <div className="flex justify-center w-full my-4">
                <img src={step4} alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-black text-sm sm:text-base md:text-lg lg:text-xl">Step 5: If the API key is valid, you will see a success message. If not, you will see an error message.</p>
            <div className="flex justify-center w-full my-4">
                <img src={step5} alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-black text-sm sm:text-base md:text-lg lg:text-xl">Step 6: Once the API key is verified, you can start using the application.</p>
            <div className="flex justify-center w-full my-4">
                <img src={step6} alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-black text-sm sm:text-base md:text-lg lg:text-xl">Note: Make sure to keep your API key secure and do not share it with anyone.</p>
            </div>
        </div>
    );
};

export default ApiDocs;