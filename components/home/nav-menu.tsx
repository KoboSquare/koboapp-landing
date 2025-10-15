"use client";

import { useState } from "react";
import { Menu, Button, type ButtonVariant } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { motion, type Variants } from "framer-motion";

type Props = {
  label: string;
  children: React.ReactNode;
  color?: string;
  buttonVariant?: ButtonVariant;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: 6, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.18, ease: EASE },
  },
};

function NavMenu({
  label,
  children,
  color = "white",
  buttonVariant = "subtle",
}: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      shadow="md"
      opened={opened}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      trigger="hover"
      openDelay={100}
      closeDelay={400}
    >
      <Menu.Target>
        <Button
          variant={buttonVariant}
          color={color}
          rightSection={
            <motion.span
              initial={false}
              animate={{ rotate: opened ? 180 : 0 }}
              transition={{ type: "tween", duration: 0.18, ease: EASE }}
              style={{ display: "inline-flex" }}
            >
              {opened ? (
                <IconChevronUp size={14} />
              ) : (
                <IconChevronDown size={14} />
              )}
            </motion.span>
          }
          onClick={() => setOpened((o) => !o)}
        >
          {label}
        </Button>
      </Menu.Target>

      <Menu.Dropdown
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: "1.5rem",
          borderBottomLeftRadius: "1.5rem",
          transformOrigin: "top right",
        }}
      >
        {/* Animate the content inside the dropdown; Mantine handles mount/unmount */}
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate={opened ? "show" : "hidden"}
        >
          {children}
        </motion.div>
      </Menu.Dropdown>
    </Menu>
  );
}

export default NavMenu;
