import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const delay = index * 0.1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="mb-6 last:mb-0"
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={`item-${index}`} className="border-none">
          <AccordionTrigger className="bg-accent hover:bg-accent/80 transition-colors font-heading font-medium p-4 rounded-lg text-left">
            {question}
          </AccordionTrigger>
          <AccordionContent className="bg-white p-4 rounded-b-lg shadow-sm text-gray-600">
            {answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "What accounting services do you offer for small businesses?",
      answer:
        "We offer a wide range of accounting services tailored to the needs of small businesses, including bookkeeping, financial statement preparation, bank reconciliations, payroll management, tax returns, and tax advisory. Our approach is personalized, providing solutions that fit the size and sector of your business.",
    },
    {
      question: "How does Solutumsa help me optimize my tax burden?",
      answer:
        "Our team of tax experts analyzes your company's situation in detail to identify legitimate tax optimization opportunities. We develop customized strategies that take advantage of available incentives and deductions, always ensuring compliance with current regulations. Our goal is to minimize your tax burden while keeping your company in full compliance with tax laws.",
    },
    {
      question: "How often will I receive financial reports?",
      answer:
        "The frequency of financial reports is established according to the specific needs of each client. By default, we provide monthly reports that include basic financial statements, cash flow analysis, and comparisons with previous periods. We also offer more detailed quarterly reports and a complete annual analysis. We can customize both the frequency and content of the reports according to your company's requirements.",
    },
    {
      question: "How do you ensure the confidentiality of my information?",
      answer:
        "Confidentiality is an absolute priority at Solutumsa. We implement strict security protocols and use systems with advanced encryption to protect all our clients' information. All our staff sign confidentiality agreements, and we limit access to sensitive information only to personnel who work directly with your account. Additionally, we comply with all applicable data protection regulations.",
    },
    {
      question: "What makes Solutumsa different from other accounting firms?",
      answer:
        "What distinguishes Solutumsa is our comprehensive and personalized approach. With more than 50 years of experience, we combine deep knowledge with close and accessible service. We don't just limit ourselves to fulfilling accounting and tax obligations; we become true strategic partners for your business, identifying opportunities for improvement and supporting you in decision-making. Our multidisciplinary team offers complete solutions adapted to the specific needs of each client.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We answer the most common questions about our services and how we can help your
            business.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
