"use client";

import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white flex flex-col px-20 lg:px-40 py-14">
            <div className="flex flex-col lg:flex-row justify-between gap-10">

                {/* Footer Menu Items */}
                <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
                    <div>
                        <p className="mb-6 font-bold">Company</p>
                        <p className="text-[#BBBBBB]">About us</p>
                        <p className="text-[#BBBBBB]">Team</p>
                        <p className="text-[#BBBBBB]">Careers</p>
                        <p className="text-[#BBBBBB]">Blog</p>
                    </div>

                    <div>
                        <p className="mb-6 font-bold">Contact</p>
                        <p className="text-[#BBBBBB]">Help & Support</p>
                        <p className="text-[#BBBBBB]">Partner with us</p>
                        <p className="text-[#BBBBBB]">Ride with us</p>
                    </div>

                    <div>
                        <p className="mb-6 font-bold">Legal</p>
                        <p className="text-[#BBBBBB]">Terms & Conditions</p>
                        <p className="text-[#BBBBBB]">Refund & Cancellation</p>
                        <p className="text-[#BBBBBB]">Privacy Policy</p>
                        <p className="text-[#BBBBBB]">Cookie Policy</p>
                    </div>
                </div>

                {/* Follow + Subscription */}
                <div className="w-full lg:w-[380px]">
                    <p className="text-[#F5F5F5] font-bold mb-6">FOLLOW US</p>
                    <div className="flex space-x-4 mb-8">
                        <Instagram className="size-[24px]" />
                        <Facebook className="size-[24px]" />
                        <Twitter className="size-[24px] fill-white" />
                    </div>

                    <p className="text-[#BBBBBB] font-bold mb-6">
                        Receive exclusive offers in your mailbox
                    </p>

                    {/* Subscription form */}
                    <form className="flex items-center  rounded-lg ">
                        <div className="bg-[#424242] p-2 rounded-l-lg flex items-center">
                            <Mail className="text-[#ADADAD]" />
                        </div>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow p-2 rounded-r-lg text-[#ADADAD] bg-[#424242] focus:outline-none"
                            name="email"
                        />

                        <button
                            type="submit"
                            className="food-btn-add px-3 rounded-lg m-4"
                            data-testid="food-find-meal-btn"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
            <div className="border-t border-gray-100 my-4 ">
            </div>
            <div className="flex justify-between">
                <div><p className="text-[#F5F5F5]">All rights Reserved © 2024 FoodWagen</p></div>
                <div><p className="text-[#F5F5F5] font-bold">spMade by JoachimBang</p></div>
            </div>
        </footer>
    );
}
