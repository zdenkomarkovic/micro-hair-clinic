"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../../../components/ui/textarea";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { Button } from "../../../components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Molimo unesite vase ime i prezime" }),
  phone: z.string().min(2, { message: "Molimo unesite vas broj telefona" }),
  email: z.string().email({ message: "Molimo unesite vasu email adresu" }),
  message: z.string().min(10, {
    message: "Poruka mora imati najmanje 10 karaktera.",
  }),
});
export default function Contact() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\n Telefon: ${values.phone}\n Email: ${values.email}\n Poruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });

    if (response?.messageId) {
      toast.success("Application Submitted Successfully.");
    } else {
      toast.error("Failed To send application.");
    }
    form.reset();
  };
  return (
    <div className="container mx-auto pt-28 pb-16 px-2 md:px-8 md:py-32 space-y-8 md:space-y-24 ">
      <h1 className="text-2xl md:text-5xl pl-2 md:px-32">
        Pa izvolite kako vam je zgodnije...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className=" mx-6 md:mx-20 md:space-y-10">
          <div className="space-y-3 md:space-y-2 text-lg md:text-xl">
            <p className="font-bold text-2xl">Office: Serbia Nis</p>
            <a
              href="tel:+381641967267"
              className="py-[7px] flex border-b-[1px] border-gray-800"
            >
              <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                <FaPhone className="text-[20px] lg:text-[22px]" /> +38164 1967
                267
              </button>
            </a>
            <a
              href="viber://chat?number=%2B381641967267"
              className="py-[7px] flex border-b-[1px] border-gray-800"
            >
              <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                <FaViber className="text-[28px] lg:text-[27px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
                +38164 1967 267
              </button>
            </a>
            <a
              href="https://wa.me/381641967267"
              className="py-[7px] flex border-b-[1px] border-gray-800"
            >
              <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                <FaWhatsappSquare className="text-[30px] lg:text-[30px] rounded-2xl text-green-700 " />{" "}
                +38164 1967 267
              </button>
            </a>
          </div>
          <div className="space-y-3 md:space-y-2 text-lg md:text-xl">
            <p className="font-bold text-2xl">Office: Washington, D.C., USA</p>
            <a
              href="tel:+12408103730"
              className="py-[7px] flex border-b-[1px] border-gray-800"
            >
              <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                <FaPhone className="text-[20px] lg:text-[22px]" /> +12408103730
              </button>
            </a>
            <a
              href="viber://chat?number=%2B12408103730"
              className="py-[7px] flex border-b-[1px] border-gray-800"
            >
              <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                <FaViber className="text-[20px] lg:text-[27px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
                +12408103730
              </button>
            </a>
            <a
              href="https://wa.me/12408103730"
              className="py-[7px] flex border-b-[1px] border-gray-800"
            >
              <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                <FaWhatsappSquare className="text-[20px] lg:text-[30px] rounded-2xl text-green-700 " />{" "}
                +12408103730
              </button>
            </a>
          </div>
          <div>
            <a
              href="mailto:manikamwebsolutions@gmail.com"
              className="py-[7px] flex border-b-[1px] border-gray-800"
            >
              <button className="hover:scale-110 transition-transform duration-500 px-auto md:px-8 text-xl">
                Email: manikamwebsolutions@gmail.com
              </button>
            </a>
            <div className="flex pt-4 lg:pt-12 gap-10 lg:gap-20 text-[33px] lg:text-[40px] justify-center items-center text-center">
              <a
                href="https://www.instagram.com/manikam.web.solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:scale-110 transition-transform duration-500"
              >
                <FaInstagram className="" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574784286298"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:scale-110 transition-transform duration-500"
              >
                <FaFacebook className="" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-20 bg-gray-50 rounded-3xl shadow-2xl">
          <Form {...form}>
            <form
              className="grid grid-cols-3 items-center p-4 lg:p-10"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="col-span-3 flex flex-col gap-4 lg:col-span-3 lg:gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-xl">
                        Ime i Prezime:
                      </FormLabel>

                      <FormControl>
                        <Input placeholder="Unesite ime i prezime" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-xl">
                        Broj telefona:
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Unesite vas broj telefona"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-xl">Email:</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-xl">Vasa poruka:</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Vasa poruka za nas" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  disabled={isLoading}
                  className="bg-gray-800  hover:bg-gray-600 transition-colors ease-in-out duration-500"
                >
                  {isLoading ? "Sending....." : "Send"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
