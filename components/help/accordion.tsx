"use client";
import { Accordion } from '@mantine/core';


function CustomAccordion() {
    const helpItems = [
        {
            title: "What is Kobo Connect?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
        },
        {
            title: "How do I get started?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
        },
        {
            title: "What is CRS?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
        },
        {
            title: "Do I need to have a Kobo Connect account to use Kobo Connect?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
        },
    ]


    return (
        <Accordion >
            {helpItems.map((item) => (
                <Accordion.Item className='' key={item.title} value={item.title}>
                    <Accordion.Control>{item.title}</Accordion.Control>
                    <Accordion.Panel>{item.content}</Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default CustomAccordion;