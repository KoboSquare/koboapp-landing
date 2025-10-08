import { defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "About Us",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      initialValue: { current: "about-us" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Hero Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "subtitle",
          title: "Hero Subtitle",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required(),
        },
        {
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "missionSection",
      title: "Mission Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "description",
          title: "Mission Description",
          type: "text",
          rows: 4,
        },
        {
          name: "image",
          title: "Mission Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    },
    {
      name: "valuesSection",
      title: "Values Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Section Subtitle",
          type: "text",
          rows: 2,
        },
        {
          name: "values",
          title: "Company Values",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Value Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "description",
                  title: "Value Description",
                  type: "text",
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "icon",
                  title: "Value Icon",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative Text",
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  title: "title",
                  media: "icon",
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1).max(6),
        },
      ],
    },
    {
      name: "teamSection",
      title: "Team Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Section Subtitle",
          type: "text",
          rows: 2,
        },
        {
          name: "showSection",
          title: "Show Team Section",
          type: "boolean",
          initialValue: true,
        },
      ],
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title || "About Page",
      };
    },
  },
});
