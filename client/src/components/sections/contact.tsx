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
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
  const { t } = useTranslation();
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
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t("contact.title")}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, y: 20 }}
            animate={infoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-accent rounded-lg p-8 h-full">
              <h3 className="text-2xl font-heading font-semibold mb-6">{t("contact.locations.title")}</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">{t("contact.locations.address")}</h4>
                    <p className="text-gray-600">
                      18 de Julio número 841 apto 301
                      <br />
                      Montevideo, Uruguay
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">{t("contact.locations.phone")}</h4>
                    <p className="text-gray-600">29089595</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">{t("contact.locations.email")}</h4>
                    <p className="text-gray-600">{t("contact.locations.montevideo.email")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">{t("contact.locations.hours")}</h4>
                    <p className="text-gray-600">9:00 - 17:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">Atlantida</h4>
                    <p className="text-gray-600">
                      Calle 26 esq Calle 3
                      <br />
                      Atlantida, Canelones, Uruguay
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">{t("contact.locations.phone")}</h4>
                    <p className="text-gray-600">43716496</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">{t("contact.locations.hours")}</h4>
                    <p className="text-gray-600">9:00 - 17:00</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={formVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6">{t("contact.send")}</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                            <SelectItem value="contable">{t("services.accounting.title")}</SelectItem>
                            <SelectItem value="fiscal">{t("services.tax.title")}</SelectItem>
                            <SelectItem value="consultoria">{t("services.consulting.title")}</SelectItem>
                            <SelectItem value="nomina">{t("services.payroll.title")}</SelectItem>
                            <SelectItem value="auditoria">{t("services.audit.title")}</SelectItem>
                            <SelectItem value="financiera">{t("services.financial.title")}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-secondary transition-colors duration-300"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}