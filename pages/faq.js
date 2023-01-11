import { Container, Title, Accordion, createStyles } from "@mantine/core";

import Content from "../content-files/faq/faq.json";
//import Answers from "../content-files/faq/answers.json";

const env = process.env.NODE_ENV

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    //backgroundColor: '#fff',
    '&[data-active]': {
        border : "2px solid #36BA96"
      },

    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export default function FaqSimple() {
  const { classes } = useStyles();

  if(env !== "development"){
    return <p>Coming soon!</p>
  }

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      {/* <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion> */}
      {Content &&
        Content.map((item) => (
          <Accordion variant="separated" key={item.id} color="green">
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>
                {item.question.English}
              </Accordion.Control>
              <Accordion.Panel>{item.answer.English}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        ))}
    </Container>
  );
}
