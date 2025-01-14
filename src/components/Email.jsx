"use client";

import { useState } from "react";
import { Card } from "./Card";
import { sendContactForm } from "../lib/api";

const initValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function Email() {
    const [values, setValues] = useState(initValues);

    const handleChange = ({ target }) => {
        setValues((prev) => ({
            ...prev,
            [target.name]: target.value,
        }));
    };

    const onSubmit = async () => {
        try {
            console.log("완료");
            await sendContactForm(values);
            alert("이메일이 전송되었습니다!"); 
            setValues(initValues);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="p-10 lg:p-20 lg:px-40">
            <Card className="p-10 flex flex-col gap-4">
                <div className="flex flex-col gap-1 items-center">
                    <p className="text-4xl lg:text-6xl">📬</p>
                    <h3 className="font-bold text-3xl lg:text-5xl"
                    >Contact Me!</h3>
                </div>
                <form className="text-sm flex flex-col gap-4 lg:p-20" 
                onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                    <label className="flex flex-col gap-1 lg:text-base">
                        Your Name
                        <input
                            type="text"
                            name="name"
                            className="text-gray-900 focus:outline-emerald-300 bg-white/60 rounded-sm text-sm h-6 p-1.5
                            lg:text-base md:h-10"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="flex flex-col gap-1 lg:text-base">
                        Your Email
                        <input
                            type="email"
                            name="email"
                            className="text-gray-900 focus:outline-emerald-300 bg-white/60 rounded-sm text-sm h-6 p-1.5
                            lg:text-base md:h-10"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="flex flex-col gap-1 lg:text-base">
                        Subject
                        <input
                            type="text"
                            name="subject"
                            className="text-gray-900 focus:outline-emerald-300 bg-white/60 rounded-sm text-sm h-6 p-1.5
                            lg:text-base md:h-10"
                            value={values.subject}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="flex flex-col gap-1 lg:text-base">
                        Message
                        <textarea
                            name="message"
                            rows={6}
                            className="text-gray-900 focus:outline-emerald-300 bg-white/60 rounded-sm text-sm p-1.5
                            lg:text-base"
                            value={values.message}
                            onChange={handleChange}
                        />
                    </label>
                    <div className="flex mt-6 justify-center">
                        <button
                            type="submit"
                            className="border border-white/15 rounded-xl w-20 h-10 text-sm">
                            Submit
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
}