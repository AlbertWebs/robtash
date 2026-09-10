import makmidKamara from "../assets/team/makmid-kamara.jpg";
import samuelAppiah from "../assets/team/samuel-appiah.jpg";
import sebastianNkrumah from "../assets/team/sebastian-nkrumah.jpg";
import wilhelminaPelsTandoh from "../assets/team/wilhelmina-pels-tandoh.jpg";
import michaelTettehDoku from "../assets/team/michael-tetteh-doku.jpg";
import gretchenRohr from "../assets/team/gretchen-rohr.jpg";
import lylaAdwanKamara from "../assets/team/lyla-adwan-kamara.jpg";
import work1 from "../assets/work/work-1.jpg";
import work2 from "../assets/work/work-2.jpg";
import work3 from "../assets/work/work-3.jpg";
import work4 from "../assets/work/work-4.jpg";
import work5 from "../assets/work/work-5.jpg";

export const navLinks = [
  { to: "/about", label: "Who we are" },
  { to: "/work", label: "Our work" },
  { to: "/resources", label: "Resources" },
  { to: "/get-involved", label: "Get involved" },
] as const;

export const vision =
  "A just and equitable future for Africans and people of African descent.";

export const missionLead =
  "We accelerate African-led solutions that advance impactful reparatory and transitional justice for historical and contemporary injustices.";

export const aboutShort =
  "Reform Initiatives is an ethics-driven Pan-African institution undertaking non-partisan research, policy, advocacy, convening, and strategic engagement across Africa and the African diaspora.";

export const themes = [
  {
    id: "reparatory-justice",
    title: "Reparatory Justice",
    summary:
      "African-led approaches to confronting the historical and ongoing harms of colonialism, enslavement, and exploitation - through reparations, restitution, historical memory, healing, and self-determination.",
    sections: [
      {
        title: "What this theme covers",
        text: "RI’s Reparatory Justice work advances African-led approaches to confronting and addressing the historical and ongoing harms of colonialism, enslavement, exploitation, and other systems of injustice. It brings together reparations, restitution, historical memory, accountability, healing, and African self-determination.",
      },
      {
        title: "How we work in this field",
        text: "We serve as a facilitator, connector, and platform for African-led reparatory justice efforts - bringing movements, institutions, researchers, policymakers, cultural actors, and communities together to define what repair means in their own contexts.",
      },
      {
        title: "The 6Rs framework",
        text: "Our approach is guided by Reconnect, Re-Education, Repair, Rebuild, Resist, and Reimagine - a practical vocabulary for reclaiming histories, addressing harm, and shaping just futures rooted in African agency.",
      },
    ],
  },
  {
    id: "human-rights",
    title: "Human Rights",
    summary:
      "Protecting, promoting, and realising human rights across Africa by connecting communities, rights actors, and decision-makers so lived experience informs policy and practice.",
    sections: [
      {
        title: "What this theme covers",
        text: "RI’s Human Rights work focuses on advancing the protection, promotion, and realisation of human rights across Africa. We collaborate with communities, civil society, non-state actors, and policymakers to address rights challenges and strengthen systems that uphold dignity, equality, justice, and accountability.",
      },
      {
        title: "How we work in this field",
        text: "The programme creates space to respond to emerging human rights concerns while supporting civil society-led approaches to the complex crises affecting African societies - keeping lived experience close to policy and practice.",
      },
      {
        title: "Who we connect",
        text: "We strengthen connections between communities, rights actors, and decision-makers so community perspectives can inform reform, prevention, and accountability efforts across the continent.",
      },
    ],
  },
  {
    id: "transitional-justice",
    title: "Transitional Justice",
    summary:
      "Addressing legacies of mass violations while supporting societies to pursue truth, accountability, reparations, reconciliation, institutional reform, and non-recurrence.",
    sections: [
      {
        title: "What this theme covers",
        text: "RI’s Transitional Justice work addresses legacies of mass human rights violations and atrocities while supporting societies to build more peaceful, inclusive, and just futures through truth, accountability, reparations, reconciliation, institutional reform, and guarantees of non-recurrence.",
      },
      {
        title: "How we work in this field",
        text: "Bringing partners and communities together to engage policymakers is central. We support dialogue and learning around transitional justice initiatives grounded in the experiences and aspirations of affected communities.",
      },
      {
        title: "Why it matters",
        text: "Sustainable peace and accountability depend on responses to past and ongoing violations that communities recognise as their own - not imported templates disconnected from local realities.",
      },
    ],
  },
  {
    id: "democracy-governance",
    title: "Democracy & Governance",
    summary:
      "Examining barriers to meaningful representation, participation, and accountability - and reforming local, regional, and international governance systems.",
    sections: [
      {
        title: "What this theme covers",
        text: "RI’s democracy and governance work examines barriers that prevent meaningful representation, participation, and accountability across Africa - including how weak representation can erode checks and balances and perpetuate colonial legacies.",
      },
      {
        title: "How we work in this field",
        text: "We engage people across generations to explore sustainable approaches to reforming local, regional, and international governance systems, structures, and processes - from civic innovation to institutional accountability.",
      },
      {
        title: "Our hypothesis",
        text: "Representation without meaningful participation weakens democratic life. Our work seeks people-centred reforms that harvest democratic dividends and keep power answerable to ordinary people.",
      },
    ],
  },
] as const;

export function getThemeById(id: string | undefined) {
  return themes.find((item) => item.id === id);
}

export const sixRs = [
  {
    title: "Reconnect",
    text: "With histories, identities, cultures, communities, lands, and knowledge systems disrupted by historical injustice.",
  },
  {
    title: "Re-Education",
    text: "Reclaim knowledge, challenge dominant narratives, and deepen understanding of African histories, contributions, and resistance.",
  },
  {
    title: "Repair",
    text: "Address material, political, social, cultural, and psychological harms through restitution, redress, and accountability.",
  },
  {
    title: "Rebuild",
    text: "Strengthen communities, institutions, systems, and movements for agency, dignity, resilience, and self-determination.",
  },
  {
    title: "Resist",
    text: "Challenge structures and narratives that reproduce inequality, exploitation, and dispossession.",
  },
  {
    title: "Reimagine",
    text: "Create just futures rooted in African agency, solidarity, and dignity - alternatives to systems of domination.",
  },
] as const;

export const impactStories = [
  {
    id: "unga-resolution",
    title: "Supporting a UN resolution that names enslavement as a crime against humanity",
    partner: "Government of Ghana · Global",
    themeId: "reparatory-justice",
    meta: "Policy · Global",
    text: "Supported the Government of Ghana in drafting, negotiating, and mobilising support for UNGA Resolution A/80/L.48, recognising the trafficking of enslaved Africans and racialised chattel enslavement as the gravest crime against humanity.",
    image: work1,
  },
  {
    id: "wakati-wetu",
    title: "Co-organising Africa’s first festival dedicated to reparations",
    partner: "Wakati Wetu · Continental",
    themeId: "reparatory-justice",
    meta: "Convening · Continental",
    text: "Co-organised Africa’s first festival dedicated to reparations, bringing diverse stakeholders together to advance dialogue, awareness, and action around reparatory justice.",
    image: work2,
  },
  {
    id: "accra-reparations",
    title: "Shaping the Accra Proclamation and a Global Reparations Fund conversation",
    partner: "Accra Reparations Conference · 2023",
    themeId: "reparatory-justice",
    meta: "Diplomacy · 2023",
    text: "Served as institutional rapporteur and contributed to conversations on a Global Reparations Fund based in Africa and the development of the Accra Proclamation.",
    image: work3,
  },
  {
    id: "ovaherero-nama",
    title: "Standing with Ovaherero and Nama communities in their campaign for repair",
    partner: "OTA & NTLA · Namibia",
    themeId: "human-rights",
    meta: "Solidarity · Namibia",
    text: "Partnering with the Ovaherero Traditional Authority and Nama Traditional Leaders Association in their campaign for reparations - including ongoing fiscal sponsorship support.",
    image: work4,
  },
  {
    id: "democracy-cafe",
    title: "Opening space for young people to prototype more just democratic participation",
    partner: "AU ECOSOCC · Accra & Lusaka",
    themeId: "democracy-governance",
    meta: "Open call · Youth",
    text: "Supporting the Democracy Innovations Café for young people in Accra and Lusaka with ideas that could make democracy more just and resilient.",
    image: work5,
  },
  {
    id: "transitional-learning",
    title: "Connecting community-centred transitional justice learning across continents",
    partner: "GIJTR & partners · Global",
    themeId: "transitional-justice",
    meta: "Learning · Global",
    text: "Participating in roundtables and learning exchanges that centre communities in truth, accountability, reparations, and non-recurrence.",
    image: work1,
  },
] as const;

export const insights = [
  {
    tag: "Call for applications",
    title: "Democracy Innovations Café",
    excerpt:
      "What if your idea could help make democracy more just and resilient? Applications are open for young people shaping civic participation in Accra and Lusaka.",
    href: "/resources/insights",
  },
  {
    tag: "Insight",
    title: "Why You(th) Should Care About Reparatory Justice",
    excerpt:
      "A plain-language entry point into African history, historical injustice, and why reparatory justice matters for young people today.",
    href: "/resources/insights",
  },
  {
    tag: "Statement",
    title: "Ghana’s Community Service Bill, 2026",
    excerpt:
      "Reform Initiatives commends the passage of Ghana’s Community Service Bill as a meaningful step for justice and accountability.",
    href: "/resources/insights",
  },
] as const;

export const resources = [
  {
    id: "policy-papers",
    title: "Policy Papers",
    summary:
      "Briefings, statements, and analytical notes that connect African-led justice agendas to policy processes across the continent and beyond.",
    sections: [
      {
        title: "What you will find",
        text: "Policy papers and public statements that track legislation, diplomatic breakthroughs, and institutional reform - written for movements, partners, and decision-makers.",
      },
      {
        title: "How we use them",
        text: "These papers support advocacy and engagement by translating complex justice questions into clear options for action.",
      },
    ],
    items: [
      {
        tag: "Statement",
        title: "Ghana’s Community Service Bill, 2026",
        excerpt:
          "Reform Initiatives commends the passage of Ghana’s Community Service Bill as a meaningful step for justice and accountability.",
        meta: "Public statement · Ghana",
      },
      {
        tag: "Briefing",
        title: "From Accra to the UN: African leadership on reparations",
        excerpt:
          "How RI’s support to Ghana’s diplomacy connects continental advocacy with global recognition of enslavement as a crime against humanity.",
        meta: "Policy note · Global",
      },
    ],
  },
  {
    id: "insights",
    title: "Insights",
    summary:
      "Essays, explainers, and open calls that invite communities, young people, and partners into the work of African-led repair.",
    sections: [
      {
        title: "What you will find",
        text: "Accessible writing and calls that open reparatory justice, human rights, and democratic reform to wider audiences - especially youth and community organisers.",
      },
      {
        title: "How we use them",
        text: "Insights keep the conversation alive between major campaigns, offering entry points into complex histories and live opportunities to engage.",
      },
    ],
    items: [
      {
        tag: "Call for applications",
        title: "Democracy Innovations Café",
        excerpt:
          "What if your idea could help make democracy more just and resilient? Applications are open for young people shaping civic participation in Accra and Lusaka.",
        meta: "Open call · Accra & Lusaka",
      },
      {
        tag: "Insight",
        title: "Why You(th) Should Care About Reparatory Justice",
        excerpt:
          "A plain-language entry point into African history, historical injustice, and why reparatory justice matters for young people today.",
        meta: "Essay · Youth & justice",
      },
    ],
  },
  {
    id: "podcasts",
    title: "Podcasts",
    summary:
      "Audio conversations that carry African perspectives on reparatory justice, democratic futures, and collective repair beyond the page.",
    sections: [
      {
        title: "What you will find",
        text: "Episodes and series - including Reparatory Futures - featuring practitioners, organisers, and thinkers shaping justice conversations across Africa and the diaspora.",
      },
      {
        title: "How we use them",
        text: "Podcasts extend RI’s narrative work into listening spaces, making complex justice debates portable, personal, and shareable.",
      },
    ],
    items: [
      {
        tag: "Podcast",
        title: "Reparatory Futures",
        excerpt:
          "A series elevating African discourses on reparations, historical injustice, and the futures communities are building together.",
        meta: "Series · Audio",
      },
      {
        tag: "Episode",
        title: "Creative democracy and African leadership",
        excerpt:
          "Why placing creatives at the centre of democracy conversations matters for reimagining participation and public life.",
        meta: "Episode · Democracy",
      },
    ],
  },
] as const;

export function getResourceById(id: string | undefined) {
  return resources.find((item) => item.id === id);
}

export const registeredIn = ["Ghana", "Sierra Leone", "United States of America"];

export const partnerPlaces = [
  "Namibia",
  "The Gambia",
  "Ethiopia",
  "Liberia",
  "Senegal",
  "Zambia",
  "Egypt",
  "Scotland",
  "Colombia",
  "Jamaica",
  "Barbados",
];

export const values = [
  "Professionalism & Ethics",
  "Integrity & Transparency",
  "Versatility & Quality",
  "Impartiality & Independence",
] as const;

export const contact = {
  phone: "+233 55 336 9902",
  email: "info@reforminitiatives.org",
  location: "3 Nii Ashitey Trebi Street, East Legon, Accra, Ghana",
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/reforminitiate",
  },
  {
    label: "X",
    href: "https://x.com/reforminitiate",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reforminitiatives/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/reform-initiatives",
  },
] as const;

export const valueDetails = [
  {
    title: "Professionalism & Ethics",
    text: "We hold ourselves to rigorous standards in research, advocacy, and partnership - grounded in care for the communities we serve.",
  },
  {
    title: "Integrity & Transparency",
    text: "We communicate clearly about our work, funding relationships, and decisions so trust can grow across movements and institutions.",
  },
  {
    title: "Versatility & Quality",
    text: "We move across themes and geographies with disciplined craft - from policy drafting to convening and narrative change.",
  },
  {
    title: "Impartiality & Independence",
    text: "As a non-partisan institution, we protect the independence needed to advance justice without capturing agendas.",
  },
] as const;

export const team = [
  {
    name: "Makmid Kamara",
    role: "Founder and Director",
    text: "Sierra Leonean human rights leader and reparatory justice advocate with almost 20 years’ experience across Africa and the UK. Founder of Reform Initiatives, based in Accra.",
    image: makmidKamara,
  },
  {
    name: "Samuel Appiah",
    role: "Co-Founder / Financial Director",
    text: "Chartered Accountant with over 13 years leading finance, grants, and compliance for African development organisations. Oversees RI’s financial management.",
    image: samuelAppiah,
  },
  {
    name: "Sebastian Nkrumah",
    role: "Human Rights Officer",
    text: "Advances human rights, democracy, and inclusive governance - with a focus on equitable leadership and expanding women’s representation and participation.",
    image: sebastianNkrumah,
  },
  {
    name: "Wilhelmina Pels-Tandoh",
    role: "Admin and Programme Assistant",
    text: "Provides organisational and programme support at RI. History and Information Studies graduate pursuing law at GIMPA, with a keen interest in human rights advocacy.",
    image: wilhelminaPelsTandoh,
  },
  {
    name: "Michael Tetteh Doku",
    role: "Communications and Outreach Associate",
    text: "Communications strategist advancing justice narratives through digital advocacy, media relations, and storytelling across Africa and the diaspora.",
    image: michaelTettehDoku,
  },
  {
    name: "Gretchen Rohr",
    role: "Snr. Adviser on Reparations Strategies",
    text: "Over 20 years securing systemic relief for communities impacted by mass atrocities - spanning litigation, grantmaking, and reparations strategy.",
    image: gretchenRohr,
  },
  {
    name: "Lyla Adwan-Kamara",
    role: "Technical Advisor",
    text: "25 years in research, participation, and inclusive grant-making. Supports RI’s strategic planning with user-led and disability-justice approaches.",
    image: lylaAdwanKamara,
  },
] as const;

export const approaches = [
  {
    id: "research-policy",
    title: "Research & policy",
    text: "Investigate causes, assess systems critically, and develop pragmatic pathways for reparatory and transitional justice.",
    sections: [
      {
        title: "What this looks like",
        text: "We investigate the causes of injustice, provide critical assessments of systems and institutions, and develop pragmatic, workable pathways for reparatory and transitional justice - grounded in African experience and evidence.",
      },
      {
        title: "How it advances the mission",
        text: "Research and policy work give movements and decision-makers shared language, options, and proof. It turns lived experience into agendas that can travel from communities to continental and global forums.",
      },
      {
        title: "Who we work with",
        text: "Communities, researchers, civil society partners, and policymakers who need rigorous analysis that stays accountable to people most affected by historical and contemporary harm.",
      },
    ],
  },
  {
    id: "advocacy-global-engagement",
    title: "Advocacy & global engagement",
    text: "Support African actors to shape regional and international processes - from Accra to New York and beyond.",
    sections: [
      {
        title: "What this looks like",
        text: "We support African actors to shape regional and international processes - from Accra to New York and beyond - through strategic advocacy, diplomatic accompaniment, and coalition building.",
      },
      {
        title: "How it advances the mission",
        text: "Global engagement ensures African-led justice agendas are present where norms, funds, and recognition are decided. It connects continental priorities with international mechanisms without ceding authorship.",
      },
      {
        title: "Who we work with",
        text: "Governments, intergovernmental bodies, civil society coalitions, and diaspora partners seeking to advance reparations, human rights, and democratic accountability in shared spaces.",
      },
    ],
  },
  {
    id: "convening-dialogue",
    title: "Convening & dialogue",
    text: "Create intergenerational and transcontinental spaces where movements, policymakers, and communities learn together.",
    sections: [
      {
        title: "What this looks like",
        text: "We create intergenerational and transcontinental spaces - forums, roundtables, festivals, and learning tours - where movements, policymakers, cultural actors, and communities exchange knowledge and build trust.",
      },
      {
        title: "How it advances the mission",
        text: "Convening is where relationships form and agendas align. Dialogue keeps reform work people-centred, connects siloed actors, and surfaces solutions that research and advocacy alone cannot invent.",
      },
      {
        title: "Who we work with",
        text: "Youth organisations, traditional authorities, civil society networks, funders, and public institutions ready to learn across difference and geography.",
      },
    ],
  },
  {
    id: "narrative-communications",
    title: "Narrative & communications",
    text: "Advance progressive African narratives through campaigns, storytelling, media partnerships, and public education.",
    sections: [
      {
        title: "What this looks like",
        text: "We advance progressive African narratives through campaigns, storytelling, media partnerships, and public education - challenging dominant frames and amplifying community voice.",
      },
      {
        title: "How it advances the mission",
        text: "Narrative change shapes what publics and institutions believe is possible. Clear, credible communications expand who feels invited into reparatory justice, human rights, and democratic reform.",
      },
      {
        title: "Who we work with",
        text: "Journalists, creatives, digital organisers, educators, and partners who want African perspectives to lead conversations on justice and governance.",
      },
    ],
  },
  {
    id: "partnerships-capacity-support",
    title: "Partnerships & capacity support",
    text: "Connect institutions and movements, and provide fiscal sponsorship, grants management, and operational support for CSOs.",
    sections: [
      {
        title: "What this looks like",
        text: "We connect institutions and movements, and provide fiscal sponsorship, grants management, training, and operational support so civil society organisations can sustain their work with integrity.",
      },
      {
        title: "How it advances the mission",
        text: "Strong partners multiply impact. Capacity support protects African-led initiatives from administrative barriers while keeping resources accountable and mission-aligned.",
      },
      {
        title: "Who we work with",
        text: "CSOs, NGO start-ups, traditional authorities, and networks that need hosting, financial stewardship, or technical accompaniment to deliver justice-focused programmes.",
      },
    ],
  },
] as const;

export function getApproachById(id: string | undefined) {
  return approaches.find((item) => item.id === id);
}

export const involvePathways = [
  {
    title: "Partner with us",
    text: "Collaborate on research, advocacy, convenings, or fiscal sponsorship that advances African-led justice agendas.",
    cta: "Email partnerships",
    href: "mailto:info@reforminitiatives.org",
  },
  {
    title: "Donate",
    text: "Support African-led research, advocacy, and convening that advances reparatory justice, human rights, and democratic accountability.",
    cta: "Email to donate",
    href: "mailto:info@reforminitiatives.org?subject=Donation%20enquiry",
  },
  {
    title: "Stay informed",
    text: "Receive updates on campaigns, publications, and opportunities to strengthen democratic accountability.",
    cta: "Go to newsletter",
    href: "/get-involved#newsletter",
  },
] as const;

