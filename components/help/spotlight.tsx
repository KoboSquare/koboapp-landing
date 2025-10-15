"use client";

import "@mantine/spotlight/styles.css";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@mantine/core";
import {
  Spotlight,
  type SpotlightActionData,
  spotlight,
} from "@mantine/spotlight";
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import { motion, type Variants } from "framer-motion";

// typed cubic-bezier
const EASE = [0.22, 1, 0.36, 1] as const;

// variants
const container: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.35, ease: EASE },
  },
};

const hintVariants: Variants = {
  hidden: { opacity: 0, y: -4 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.2, ease: EASE },
  },
};

function CustomSpotlight() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  const handleSpotlightOpen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    spotlight.open();
  }, []);

  const actions: SpotlightActionData[] = [
    {
      id: "home",
      label: "Home",
      description: "Get to home page",
      onClick: () => router.push("/"),
      leftSection: <IconHome size={24} stroke={1.5} />,
    },
    {
      id: "kobovault",
      label: "Kobo Vault",
      description: "Get to Kobo Vault page",
      onClick: () => router.push("/personal"),
      leftSection: <IconDashboard size={24} stroke={1.5} />,
    },
    {
      id: "contactus",
      label: "Contact Us",
      description: "Get to Contact Us page",
      onClick: () => router.push("/contact"),
      leftSection: <IconFileText size={24} stroke={1.5} />,
    },
  ];

  return (
    <div className="mb-10 md:mb-12">
      {/* Search input + animated right chip */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Input
          onClick={handleSpotlightOpen}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => {
            setQuery(e.currentTarget.value);
            spotlight.open();
          }}
          value={query}
          size="md"
          radius="xl"
          placeholder="Search for answers or use Command + K"
          leftSection={<IconSearch size={20} stroke={1.5} />}
          rightSection={
            // animated keyboard shortcut chip
            <motion.kbd
              initial={false}
              animate={{
                scale: focused ? 1.04 : 1,
              }}
              transition={{ type: "tween", duration: 0.18, ease: EASE }}
              className="hidden sm:inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-0.5 text-xs text-gray-600 shadow-sm mr-5"
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              }}
            >
              <span>⌘</span>
              <p>K</p>
            </motion.kbd>
          }
          classNames={{
            input:
              "transition-shadow focus:shadow-[0_0_0_3px_rgba(0,127,95,0.12)]",
          }}
        />
        {/* Helper line under input when typing */}
        <motion.div
          variants={hintVariants}
          initial="hidden"
          animate={query ? "show" : "hidden"}
          className="pl-1 pt-1 text-sm text-[#5B6667]"
        >
          Press <span className="font-medium">Enter</span> to search or use the
          arrow keys to navigate results.
        </motion.div>
      </motion.div>

      {/* Mantine Spotlight (portal) */}
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        // onClose={() => setFocused(false)}
        onQueryChange={setQuery}
        searchProps={{
          value: query,
          onChange: (e) => setQuery(e.currentTarget.value),
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: "Search...",
        }}
      />
    </div>
  );
}

export default CustomSpotlight;
