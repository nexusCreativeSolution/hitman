import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQs } from '@/lib/FAQ';

const FAQ = () => {
  return (
    <section id='faq' className='py-16 bg-white'>
      <div className='container px-6 mx-auto'>
        <h3 className='mb-8 text-3xl font-bold text-center text-gray-800'>
          Frequently Asked Questions
        </h3>
        <Accordion type='single' collapsible>
          {FAQs.map((faq) => (
            <AccordionItem value={faq.question} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
