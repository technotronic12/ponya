export interface ResumeItem {
  years: string;
  title: string;
  text: string;
}

// todo: add technology tags to each item (node, scala, js, java)
export const resumeItems: ResumeItem[] = [{
  years: '2018-Present',
  title: 'Wix.com | Full-stack developer @ Fed infra group',
  text: 'A member of the Core Services team, developing tools and services used by millions of Wix users around the world. Focused on improving application performance and stability.',
}, {
  years: '2017-2018',
  title: 'Wix.com | Development lead @ Production operations team',
  text: 'Improving stability, visibility and reducing downtime while allowing development velocity. Developing internal incident and alert management tools.',
}, {
  years: '2014-2018',
  title: 'Wix.com | Full-stack developer @ Production operations team',
  text: 'Building change management system to allow better visibility and incident investigation.',
}, {
  years: '2013-2014',
  title: 'Hapisga.co.il | Full-stack developer',
  text: [
    'Hapisga is a vacation resort booking portal for couples only.',
    'I was responsible for building new components received from the designers.',
    'Converted the application to a responsive design to look stunning on mobile!'
  ].join(' ')
}];
