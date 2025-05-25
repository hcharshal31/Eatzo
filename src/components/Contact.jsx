import { useState } from "react";

const Contact = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const [formStatus, setFormStatus] = useState(false);

    const handleForm = (ev)=>{
        ev.preventDefault();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!userName.trim() || !userEmail.trim() || !query.trim()){
            alert("Please fill all the form fields!")
        } else if(!emailRegex.test(userEmail)){
            alert("Please enter a valid email address.");
        }else {
            setFormStatus(true);
        }

    }

    const handleEnter = (ev)=>{
        if(ev.key === 'Enter'){
            ev.preventDefault();
        
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!userName.trim() || !userEmail.trim() || !query.trim()){
                alert("Please fill all the form fields!")
            } else if(!emailRegex.test(userEmail)){
                alert("Please enter a valid email address.");
            }else {
                setFormStatus(true);
            }
        }

    }

    const handleNameChange = (ev)=>{
        setUserName(ev.target.value);
    }

    const handleEmailChange = (ev)=>{
        setEmail(ev.target.value);
    }

    const handleQueryChange = (ev)=>{
        setQuery(ev.target.value);
    }

    return (
        <div className="pt-35">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl text-center font-bold pb-4">Contact Us</h1>
                    <p className="text-xl text-center font-bold pb-6">Any questions or remarks? Just write us a message!</p>

                    {formStatus?
                        <div className="flex w-1/2 h-[440px] items-center bg-amber-200 p-10 rounded-4xl">
                        <p className="text-center text-3xl font-bold">Thank you for submitting the form! A member of our team will reach out to you soon.</p>
                        </div>:
                    <form className="w-1/2 border-1 p-14 bg-white rounded-lg">
                        <div className="flex justify-between w-[100%] flex-wrap">
                            <div className="w-[45%]">
                                <label for="email">Email</label><br />
                                <input onChange={handleEmailChange} className="border-1 rounded-xl w-[100%] h-12 p-4 text-lg bg-gray-200" type="email" id="email" placeholder="Enter a valid email address" />
                            </div>
                            <div className="w-[45%]">
                                <label for="name">Name</label><br />
                                <input onChange={handleNameChange} className="border-1 rounded-xl w-[100%] h-12 p-4 text-lg bg-gray-200" type="text" id="name" placeholder="Enter your name" />
                            </div>
                        </div>
                        <div className="mt-8">
                            <textarea cols={40} rows={4} placeholder="Write your query" onChange={handleQueryChange} className="block w-[100%] border-1 rounded-xl p-4 text-lg bg-gray-200"></textarea>
                            <button type="submit" className="rounded-xl w-[100%] h-12 text-lg mt-8 bg-black text-lg text-white hover:cursor-pointer" onClick={handleForm} onKeyDown={handleEnter}>SUBMIT</button>
                        </div>
                    </form>}
                </div>
            </div>
    );
}

export default Contact;