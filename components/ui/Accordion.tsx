"use client";
import { Accordion } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

function CustomAccordion({ items }: { items: AccordionItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Accordion
      onChange={() => setIsOpen(!isOpen)}
      styles={{
        content: { backgroundColor: "white" },
        label: { color: "#010101", fontWeight: 500 },
      }}
      chevronIconSize={12}
      chevron={isOpen ? <IconMinus size={18} /> : <IconPlus size={18} />}>
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
