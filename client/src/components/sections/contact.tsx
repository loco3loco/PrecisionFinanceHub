import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Smartphone } from "lucide-react";

// Form schema with validation
const getFormSchema = (t: any) => z.object({
  nombre: z.string().min(2, { message: t("validation.name_required") }),
  apellido: z.string().min(2, { message: t("validation.lastname_required") }),
  email: z.string().email({ message: t("validation.email_invalid") }),
  telefono: z.string().optional(),
  empresa: z.string().optional(),
  servicio: z.string().optional(),
  mensaje: z.string().min(10, { message: t("validation.message_min_length") }),
  aceptar_politica: z.boolean().refine(val => val === true, {
    message: t("validation.privacy_policy_required"),
  }),
});

type ContactFormValues = z.infer<ReturnType<typeof getFormSchema>>;

export default function Contact() {
  const { t, i18n } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { toast } = useToast();

  const formSchema = getFormSchema(t);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      empresa: "",
      servicio: "",
      mensaje: "",
      aceptar_politica: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: t("contact.success"),
        description: t("contact.success"),
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: t("contact.error"),
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t("contact.title")}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={formVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 border-b pb-2 border-primary/20">{t("contact.send")}</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.name")} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.namePlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="apellido"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.lastName")} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.lastNamePlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.emailPlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.phone")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.phonePlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.company")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.companyPlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="servicio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.service")}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t("contact.form.servicePlaceholder")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ninguno">{t("contact.form.servicePlaceholder")}</SelectItem>
                            <SelectItem value="corporate_accounting">{i18n.language === 'es' ? "Contabilidad Corporativa" : "Corporate Accounting"}</SelectItem>
                            <SelectItem value="tax_advisory">{i18n.language === 'es' ? "Asesoría Fiscal" : "Tax Advisory"}</SelectItem>
                            <SelectItem value="business_consulting">{i18n.language === 'es' ? "Consultoría Empresarial" : "Business Consulting"}</SelectItem>
                            <SelectItem value="payroll_management">{i18n.language === 'es' ? "Gestión de Nómina" : "Payroll Management"}</SelectItem>
                            <SelectItem value="financial_audit">{i18n.language === 'es' ? "Auditoría Financiera" : "Financial Audit"}</SelectItem>
                            <SelectItem value="accounting_tech">{i18n.language === 'es' ? "Tecnología Contable" : "Accounting Technology"}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.message")} *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("contact.form.messagePlaceholder")}
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="aceptar_politica"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {t("contact.form.privacy")} *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-3 px-4 bg-primary text-white font-medium rounded-md hover:bg-secondary transition duration-300"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, y: 20 }}
            animate={infoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6 text-center">{t("contact.locations.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:translate-y-[-5px] duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <MapPin className="text-primary" />
                </div>
                <h4 className="text-lg font-bold text-center mb-3">{t("contact.locations.montevideo.name")}</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-primary mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium">{t("contact.locations.address")}</h5>
                      <p className="text-gray-600">
                        {t("contact.locations.montevideo.address")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-primary mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium">{t("contact.locations.phone")}</h5>
                      <p className="text-gray-600">{t("contact.locations.montevideo.phone")}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Smartphone className="text-primary mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium">{t("contact.locations.mobile")}</h5>
                      <p className="text-gray-600">{t("contact.locations.montevideo.mobile")}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-primary mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium">{t("contact.locations.email")}</h5>
                      <p className="text-gray-600">{t("contact.locations.montevideo.email")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:translate-y-[-5px] duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <MapPin className="text-primary" />
                </div>
                <h4 className="text-lg font-bold text-center mb-3">{t("contact.locations.atlantida.name")}</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-primary mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium">{t("contact.locations.address")}</h5>
                      <p className="text-gray-600">
                        {t("contact.locations.atlantida.address")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-primary mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium">{t("contact.locations.phone")}</h5>
                      <p className="text-gray-600">{t("contact.locations.atlantida.phone")}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Smartphone className="text-primary mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium">{t("contact.locations.mobile")}</h5>
                      <p className="text-gray-600">{t("contact.locations.atlantida.mobile")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="text-primary mr-2 mt-0.5" />
                <h4 className="text-lg font-semibold">{t("contact.locations.hours")}</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="font-medium">{t("contact.locations.montevideo.hours")}</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="font-medium">{t("contact.locations.atlantida.hours")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}