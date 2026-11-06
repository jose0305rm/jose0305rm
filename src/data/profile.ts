/** Personal info used across the whole site. Edit here and it updates everywhere. */

const whatsappNumber = '50662946101'; // Costa Rica (+506) 6294-6101

export const profile = {
  name: 'Jose Alberto Ruiz Mendoza',
  shortName: 'Jose Ruiz',
  initials: 'JR',
  role: 'Software Developer',
  tagline:
    'Systems engineer focused on Front-End development. I build modern, scalable and user-friendly web applications with React and TypeScript.',
  location: 'Costa Rica',

  email: 'jose0305rm@gmail.com',
  whatsapp: {
    display: '+506 6294-6101',
    url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Hi Jose! I saw your portfolio and I'd like to talk with you.",
    )}`,
  },
  github: 'https://github.com/jose0305rm',
  linkedin: 'https://www.linkedin.com/in/jos%C3%A9-ruiz-b5b86a255/',

  /** FormSubmit endpoint (the contact form sends the messages to your email) */

  about: [
    "Hello! I'm a systems engineer with a great passion for software development, especially in the Front-End area. I consider myself self-taught: I'm always looking for new knowledge and skills in emerging technologies. I'm currently perfecting my skills in React and TypeScript to deliver modern, scalable and efficient solutions.",
    'Beyond technical skills, I am responsible, creative, proactive and sociable. I adapt easily to teamwork, have experience working under pressure and know agile methodologies, particularly the Scrum framework.',
  ],

  highlights: [
    { icon: 'bi-mortarboard', title: 'Systems Engineer', text: 'Solid foundation in software engineering' },
    { icon: 'bi-translate', title: 'English C1', text: 'Certified by Centro Cultural Costarricense Norteamericano' },
    { icon: 'bi-easel', title: 'Instructor', text: 'Taught a programming course at the Moravia Public Library' },
    { icon: 'bi-people', title: 'Scrum', text: 'Teamwork with agile methodologies' },
  ],
};
