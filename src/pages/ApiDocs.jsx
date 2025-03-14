import React from "react";

function ApiDocs() {
    return(
        <div className="flex flex-col h-screen bg-bgWhite text-white dark:bg-bgDark">
            <div className="ml-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3">Guidelines</h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl">Step 1: Click on the 
                <a className=""href=""> Link </a>
                 To redirect to Google API Keys from Google AI Studio
            </p>
            <div className="flex justify-center w-full my-4">
                <img src="../assets/apidocs/step1.png" alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl">Step 2: Click on the "Create API Key" button to generate a new API key.</p>
            <div className="flex justify-center w-full my-4">
                <img src="../assets/apidocs/step2.png" alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl">Step 3: Copy the generated API key and paste it into the input field in the application.</p>
            <div className="flex justify-center w-full my-4">
                <img src="../assets/apidocs/step3.png" alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl">Step 4: Click on the "Verify" button to validate your API key.</p>
            <div className="flex justify-center w-full my-4">
                <img src="../assets/apidocs/step4.png" alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl">Step 5: If the API key is valid, you will see a success message. If not, you will see an error message.</p>
            <div className="flex justify-center w-full my-4">
                <img src="../assets/apidocs/step5.png" alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl">Step 6: Once the API key is verified, you can start using the application.</p>
            <div className="flex justify-center w-full my-4">
                <img src="../assets/apidocs/step6.png" alt="API Key Guide" className="max-w-[600px] w-full" />
            </div>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl">Note: Make sure to keep your API key secure and do not share it with anyone.</p>
            </div>
        </div>
    );
};

export default ApiDocs;