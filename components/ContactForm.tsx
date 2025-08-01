"use client";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { SectionCommon } from "@/types/index";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Molimo unesite vase ime i prezime" }),
  phone: z.string().min(2, { message: "Molimo unesite vas broj telefona" }),
  email: z.string().email({ message: "Molimo unesite vasu email adresu" }),
  message: z.string().min(10, {
    message: "Poruka mora imati najmanje 10 karaktera.",
  }),
});

type Props = {
  section: SectionCommon;
};

export default function Contact({ section }: Props) {
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
  const { trackFormSubmission } = useGoogleAnalytics();
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\n Telefon: ${values.phone}\n Email: ${values.email}\n Poruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });

    if (response?.messageId) {
      toast.success("Application Submitted Successfully.");
      trackFormSubmission('contact_form');
    } else {
      toast.error("Failed To send application.");
    }
    form.reset();
  };
  return (
    <div className="mx-5 md:mx-20  bg-gray-50 rounded-2xl shadow-2xl">
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
                  <FormLabel className="lg:text-xl">{section.label1}</FormLabel>

                  <FormControl>
                    <Input placeholder="Unesite ime i prezime" {...field} />
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
                  <FormLabel className="lg:text-xl">{section.label2}</FormLabel>
                  <FormControl>
                    <Input placeholder={section.placeholder2} {...field} />
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
                  <FormLabel className="lg:text-xl">{section.label3}</FormLabel>
                  <FormControl>
                    <Input placeholder={section.placeholder3} {...field} />
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
                  <FormLabel className="lg:text-xl">{section.label5}</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder={section.placeholder5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isLoading}
              className="bg-gray-800  hover:bg-gray-600 transition-colors ease-in-out duration-500"
            >
              {section.submitButton}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
