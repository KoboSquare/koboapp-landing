"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Menu, Button } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

function NavMenu({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  // cubic-bezier easing (typed)
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

  return (
    <Menu
      shadow="md"
      opened={opened}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      trigger="hover"
      openDelay={100}
      closeDelay={400}
      transitionProps={{ transition: "pop-top-right", duration: 120 }}
    >
      <Menu.Target>
        <Button
          variant="subtle"
          style={
            {
              color: "#363E3F",
              "--button-color": "#363E3F",
            } as React.CSSProperties
          }
          rightSection={
            <motion.span
              aria-hidden
              initial={false}
              animate={{ rotate: opened ? 180 : 0 }}
              transition={{ type: "tween", duration: 0.18, ease: EASE }}
              style={{ display: "inline-flex" }}
            >
              {opened ? (
                <IconChevronUp size={14} style={{ color: "#007F5F" }} />
              ) : (
                <IconChevronDown size={14} style={{ color: "#007F5F" }} />
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
          backgroundColor: "#007F5F",
          color: "white",
          // avoid layout jank on appear
          transformOrigin: "top right",
        }}
      >
        {/* Animate the dropdown contents */}
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
