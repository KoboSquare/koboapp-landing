"use client";
import { Menu, Button } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

function NavMenu({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
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
          variant="subtle"
          style={{
            color: "#363E3F",
            "--button-color": "#363E3F",
          }}
          rightSection={
            opened ? (
              <IconChevronUp size={14} style={{ color: "#007F5F" }} />
            ) : (
              <IconChevronDown size={14} style={{ color: "#007F5F" }} />
            )
          }
          onClick={() => setOpened(!opened)}
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
        }}
      >
        {children}
      </Menu.Dropdown>
    </Menu>
  );
}

export default NavMenu;
