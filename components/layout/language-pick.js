import { useState, useContext, useEffect } from "react";
import {
  createStyles,
  UnstyledButton,
  Menu,
  Image,
  Group,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
//import images from "./images";
import Context from "../../store/context";

const data = [
  { language: "English", label: "English", image: "/images/icons/english.png" },
  { language: "Deutsch", label: "German", image: "/images/icons/german.png" },
  { language: "عربي", label: "Arabic", image: "/images/icons/arabic.png" },
  { language: "עִברִית", label: "Hebrew", image: "/images/icons/israel.jpg" },
  { language: "Русский", label: "Russian", image: "/images/icons/russian.png" },
  { language: "Français", label: "French", image: "/images/icons/french.png" },
  { language: "Español", label: "Spanish", image: "/images/icons/spanish.png" },
  { language: "Italian", label: "Italian", image: "/images/icons/italian.png" },

  //data.language --> display , data.label --> logic
];

const useStyles = createStyles((theme, { opened }) => ({
  control: {
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

export function LanguagePicker() {
  const appCtx = useContext(Context);

  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);

  useEffect(() => {
    if (localStorage.getItem("language")) {
      const selected = localStorage.getItem("language");
      const parsedSelected = JSON.parse(selected);
      setSelected(parsedSelected);
    }
  }, []);
  function languageHandler(item) {
    setSelected(item);
    appCtx.setLanguage(item);
    localStorage.setItem("language", JSON.stringify(item));
  }

  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} />}
      onClick={() => languageHandler(item)}
      key={item.label}
    >
      {item.language}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image src={selected.image} width={22} height={22} />
            <span className={classes.label}>{selected.language}</span>
          </Group>
          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
