"use client"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Bebas_Neue } from "next/font/google";
import { categories } from "../../serviceData";

const bebas_neue = Bebas_Neue({
    weight:"400",
    display:"swap",
    subsets:["latin"]
})
// Define validation schema using Yup
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  country: yup.string().required("Please select a country"),
  category: yup.string().required("Please select a category"),
  message: yup.string().required("Message is required"),
});

const countries = ["United States", "Canada",  "United Kingdom", "Australia"];

const  ContactForm=()=> {
    const {
        register, handleSubmit, formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: any) => {
        // Send the data to the backend or email service
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="md:max-w-4xl mx-auto p-8 bg-white/40 backdrop-blur-md shadow-lg rounded-lg">
            <h1 className={`${bebas_neue.className}md:text-6xl text-4xl font-bold mb-6 text-center text-[#ff874a]`}>Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Username</label>
                    <input
                        type="text"
                        {...register("username")}
                        className={`w-full p-2 border ${errors.username ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                        type="text"
                        {...register("phone")}
                        className={`w-full p-2 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <select
                        {...register("country")}
                        className={`w-full p-2 border ${errors.country ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                        <option value="">Select Country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                        {...register("category")}
                        className={`w-full p-2 border ${errors.category ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                        <option value="">Select Category</option>
                        {categories.map((category, index) => (
                            <option key={index} >
                                {category.title}
                            </option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                    {...register("message")}
                    className={`w-full p-2 border ${errors.message ? "border-red-500" : "border-gray-300"}  rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button type="submit" className="w-full bg-blue-800 text-white font-bold p-2 rounded">
                Submit
            </button>
        </form>
    );
}
  
  export default ContactForm;
  