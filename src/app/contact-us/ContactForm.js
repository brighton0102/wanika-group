"use client";
import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
          console.log("Message sent successfully");
          setLoading(false);
          // reset the form

          event.target.name.value = "";
          event.target.email.value = "";
          event.target.message.value = "";
      }
      
      if (!response.ok) {
          console.log("Error sending message");
          setLoading(false)
      }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-full my-4">
                    <label className="font-bold text-gray-800" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="p-5 border border-gray-100 bg-custorm-gray"
                        type="text"
                        minLength={3}
                        max={150}
                        required
                        autoComplete="off"
                        id="name"
                    />
                </div>
                <div className="flex flex-col w-full my-4">
                    <label className="font-bold text-gray-800" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="p-5 border border-gray-100 bg-custorm-gray"
                        type="email"
                        minLength={5}
                        maxLength={150}
                        required
                        autoComplete="off"
                        id="email"
                    />
                </div>
                <div>
                    <label className="font-bold text-gray-800" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        required
                        minLength={10}
                        maxLength={500}
                        name="message"
                        rows={4}
                        className="w-full p-5 border border-gray-100 bg-custorm-gray"
                        id="message"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-40 px-4 py-2 mt-5 text-white bg-custorm-green disabled:text-gray-100 disabled:bg-gray-400 md:text-base"
                >
                    Send Message
                </button>
            </form>
        </>
    );
}
