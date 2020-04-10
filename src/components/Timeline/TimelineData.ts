export interface ResumeItemTitle {
  company: string;
  role: string;
  team?: string;
}

export interface ResumeItem {
  years: string;
  title: ResumeItemTitle;
  text: string;
}

// todo: add technology tags to each item (node, scala, js, java)
export const resumeItems: ResumeItem[] = [{
  years: '2018-Present',
  title: { company: 'Wix.com', role: 'Full-stack developer', team: 'Fed infra group' },
  text: 'A member of the Core Services team, developing tools and services used by millions of Wix users around the world. Focused on improving application performance and stability.',
}, {
  years: '2017-2018',
  title: { company: 'Wix.com', role: 'Development lead', team: 'Production operations team' },
  text: 'Improving stability, visibility and reducing downtime while allowing development velocity. Developing internal incident and alert management tools.',
}, {
  years: '2014-2018',
  title: { company: 'Wix.com', role: 'Full-stack developer', team: 'Production operations team' },
  text: 'Building change management system to allow better visibility and incident investigation.',
}, {
  years: '2013-2014',
  title: { company: 'Hapisga.co.il', role: 'Full-stack developer' },
  text: [
    'Hapisga is a vacation resort booking portal for couples only.',
    'I was responsible for building new components received from the designers.',
    'Converted the application to a responsive design to look stunning on mobile!'
  ].join(' ')
}];
