import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: '100 days of what, exactly?',
    content: () => (
      <>
        From meetups to group rides, picnics to races; expect events and friendly gatherings of all sorts.
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
        Events start, end -- and ride through ;) -- all over <ExternalLink href="https://www.google.com/maps/place/Milwaukee,+WI,+USA/@43.0578701,-88.037469,12z/data=!3m1!4b1!4m5!3m4!1s0x880502d7578b47e7:0x445f1922b5417b84!8m2!3d43.0389025!4d-87.9064736">Milwaukee</ExternalLink>. Common meeting places include&nbsp;
        <ExternalLink href="https://www.google.com/maps/place/Juneau+Park,+Milwaukee,+WI+53202,+USA/@43.0392727,-87.9104396,15z/data=!4m13!1m7!3m6!1s0x880502d7578b47e7:0x445f1922b5417b84!2sMilwaukee,+WI,+USA!3b1!8m2!3d43.0389025!4d-87.9064736!3m4!1s0x88051903cfbbe351:0x40850cb74a9cded2!8m2!3d43.0445506!4d-87.8973117">Juneau Park</ExternalLink>,&nbsp;
        <ExternalLink href="https://www.google.com/maps/place/Swing+Park/@43.0392727,-87.9104396,15z/data=!4m13!1m7!3m6!1s0x880502d7578b47e7:0x445f1922b5417b84!2sMilwaukee,+WI,+USA!3b1!8m2!3d43.0389025!4d-87.9064736!3m4!1s0x8805191a034abca5:0xf7dd877d53924e31!8m2!3d43.0536708!4d-87.9035023">Swing Park</ExternalLink>,&nbsp;
        <ExternalLink href="http://www.vulturespace.org/">Vulture Space</ExternalLink>,&nbsp;
        <ExternalLink href="https://www.purpledooricecream.com/">Purple Door Icecream</ExternalLink>,&nbsp;
        <ExternalLink href="https://anodynecoffee.com/">Anodyne Coffee</ExternalLink>, and the&nbsp;
        <ExternalLink href="https://www.riverwestcoop.org/">Riverwest Coop & Cafe</ExternalLink>.
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
