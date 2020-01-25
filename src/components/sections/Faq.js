import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: '100 days of what, exactly?',
    content: () => (
      <>
        From meetups to group rides, from picnics to races.
      </>
    ),
  },
  {
    title: 'Do I need to sign up to join in?',
    content: () => (
      <>
        Nope! Just bring your awesome self (and maybe your two wheels... and maybe pie).
      </>
    ),
  },
  {
    title: 'Where should I meet you to join in?',
    content: () => (
      <>
        Events happen all over <ExternalLink>Milwaukee, Wisconsin</ExternalLink>. Common meeting places include ...
      </>
    ),
  },
  {
    title: 'Can I host an event?',
    content: () => (
      <>
        We'd love if you would! Follow <ExternalLink href="http://www.bike100days.com/contact/">this link</ExternalLink> to find a short form to fill out. That's it!
      </>
    ),
  },
  {
    title: 'How long has this been going on?',
    content: () => (
      <>
        2020 will be our <strong>3<sup>rd</sup> year</strong> running. Well, biking :)
      </>
    ),
  },
  {
    title: 'Who\'s in charge here?',
    content: () => (
      <>
        This is a community sponsored event, and intends at every level to harness the diversity, spontaneity,
        and collective energy of our many supporters and friends.
      </>
    ),
  },
  {
    title: 'I\'d love to help out in more ways?!',
    content: () => (
      <>
        Suh-weet! We're always open to <strong>sponsorships</strong>, <strong>endorsements</strong>, <strong>good
        PR</strong>,
        and, of course, word of mouth!
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
