import { useState } from "react";

const Home = () => {
    return (
        <>
        <div className="flex">
<div className="w-1/4 py-6 flex justify-center">
                    <p className="text-lg text-blue-600 font-semibold hover:text-blue-700">Hector Diaz</p>
</div>
<div className="w-1/2">

</div>
<div className="w-1/4 py-6">
<a href="" target="_blank" className="text-lg text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Linkedin</a>
</div>
        </div>
        <div className="flex justify-center">
<div className="w-11/12 sm:w-4/5">
<p>Hector Alberto Diaz Gomez</p>
<p>Programming, autonomus agents and economics</p>
<p className="italic">In that order</p>
</div>
        </div>
        </>
    );
}

export default Home;