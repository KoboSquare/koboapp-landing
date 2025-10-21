"use client";
import { Accordion } from "@mantine/core";
import React from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

function CustomAccordion({ items }: { items: AccordionItem[] }) {
  return (
    <Accordion>
      {items.map((item) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.Control className='text-left'>
            {item.question}
          </Accordion.Control>
          <Accordion.Panel className='text-[#363E3F]'>
            <p className='mb-2'>{item.answer}</p>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default CustomAccordion;
