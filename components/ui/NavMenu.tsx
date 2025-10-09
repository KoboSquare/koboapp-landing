"use client"
import { Menu, Button, ButtonVariant } from '@mantine/core';
import {
    IconChevronDown,
    IconChevronUp
} from '@tabler/icons-react';
import { useState } from 'react';

function NavMenu({ label, children, color = "white", buttonVariant = "subtle" }: { label: string, children: React.ReactNode, color?: string, buttonVariant?: ButtonVariant }) {
    const [opened, setOpened] = useState(false);
    return (
        <Menu shadow="md" opened={opened} onOpen={() => setOpened(true)} onClose={() => setOpened(false)} trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
                <Button variant={buttonVariant} color={color} rightSection={
                    opened ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />
                } onClick={() => setOpened(!opened)}>{label}</Button>
            </Menu.Target>


            <Menu.Dropdown style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: "1.5rem",
                borderBottomLeftRadius: "1.5rem",
            }}>
                {children}
            </Menu.Dropdown>
        </Menu>
    );
}

export default NavMenu;
