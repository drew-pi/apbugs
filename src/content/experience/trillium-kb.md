---
job_title: Software Engineer Intern
company_name: Trillium Trading
company_link: https://www.trlm.com/
start_date: 2024-05
end_date: 2024-08
location: New York, NY
description: "I rebuilt Trillium’s internal knowledge base into a faster, easier-to-use platform that helps traders quickly find the information they need, saving valuable time and improving productivity across the company."
links:
  # - display_name:
  #   link:
  # - display_name:
  #   link:
tags:
tools:
  [
    Next.js,
    React,
    TypeScript,
    JavaScript,
    HTML,
    CSS,
    Tailwind CSS,
    MUI,
    Node.js,
    Next Auth,
    Auth0,
    Microsoft Entra ID (Azure AD),
    Confluence,
    Payload CMS,
    MongoDB,
    AWS S3,
    GitHub Actions,
    AWS EC2,
    Webpack,
    Cypress,
    Jest,
    Postman,
  ]
---

<figure>
  <p align="center">
    <img src="/apbugs/assets/experience/trillium/gala.jpg" alt="" height="500" style="display:block; margin:0 auto; padding:5px; box-sizing:border-box;">
  </p>
  <figcaption style="text-align:center; font-style:italic;">The manager of the Knowledge Base team, John Heffernan, and I at the end-of-year Trillium Gala, January 2024</figcaption>
</figure>

### tldr;

Redesigned and rebuilt Trillium Trading’s internal knowledge base from the ground up, replacing a slow, outdated Refined/Confluence system with a high-performance Next.js, React, TypeScript, MUI, Tailwind application. Architected a fast, layered search experience using optimized API calls and caching, integrated Confluence REST APIs, Microsoft Entra ID, and Outlook, and implemented MongoDB, S3, and Payload CMS for scalable content management. Led a team of interns to develop reusable UI components, and achieved 80% test coverage with Jest and Cypress to ensure enterprise-grade reliability. The result was a dramatically faster, more intuitive, and fully scalable platform that streamlined trader access to mission-critical company resources.

### trillium knowledge base (kb)

When I joined Trillium for the summer after high school, my job was pretty simple: I was maintaining the company’s existing knowledge base which was on Refined, a platform that integrates with Atlassian Confluence. My work involved fixing small visual bugs (such as screen jittering and formatting issues) by using custom JavaScript and essentially “hacking” the site to work the way we needed it to. Refined was a super easy to use system for storing documentation, but it was clunky, hard to navigate, and, most importantly for a trading company where every second counts, it was slow. Because of these tradeoffs, my division decided it was finally time to scrap Refined and rebuild the entire knowledge base front-end interface from scratch, while also planning to gradually migrate the back-end content management system (CMS) away from Confluence. I was incredibly lucky with my timing, because I joined right as the project began, which meant I had the rare opportunity to help shape the foundation of such a large initiative.

Throughout my first semester of university, while working remotely, I focused on learning everything I could about front-end design and how to build the kind of fast, robust, and user-friendly website the company envisioned. I dove into research on modern web design practices, and by the time my winternship in January 2024 rolled around, I was already creating detailed Figma prototypes optimized for all screen sizes - starting with smaller ones first to prioritize the most important elements and establish a clear visual hierarchy. I also began designing and implementing custom UI components using React, TypeScript, MUI, Tailwind, HTML, and CSS that would eventually serve as reusable building blocks across the entire application.

At that point, our early stage application was still running on Create-React-App (CRA), a React boilerplate created for small single-page apps but was already outdated and not ideal for a project of this scale. Through my research, I discovered Next.js, a popular framework designed for large-scale applications, offering server-side rendering for better performance and providing a much better developer experience. By the end of that winter, we had officially laid the groundwork for what would become a massive project.

When I returned in the summer of 2024, we had the framework in place, many of the designs finalized, and a small group of eager (but mostly inexperienced) interns ready to learn. We were finally ready to build this thing.

#### making it fast, smart, and useful

One of the largest problems with the old Refined system was search. Traders needed to find documentation on internal resources and tools instantly, but the existing search was slow, inaccurate and frustrating to use. I spent weeks understanding how people actually searched - what words they used, where they expected to find the search bar, and how they wanted results sorted. For example, employees tended to search for tools by their nicknames rather than their official development names, so we built in redundancies to make sure those searches still worked.

To make search as fast as possible, we implemented a layered approach. First, the app would fire off a broad, less precise API call that returned most results almost instantly. Then, in the background, a slower, more fine-tuned search would run and be smoothly merged with the general results as the user continued scrolling. We also put a lot of effort into optimized caching so that frequently accessed results could be served immediately. It was a bit heavier on resources, but for our use case where seconds matter, it was worth the time savings.

Beyond search, we wanted to make the whole site smart and easy to navigate. Most of the content still lived in Confluence, so I worked with its REST APIs to pull information dynamically. But we also needed new features, like site-wide notifications and a custom dashboard that integrated Microsoft tools like Outlook for calendars, Entra ID for authentication, and user-specific preferences. For extra storage, we brought in MongoDB and used S3 to manage media assets. By the end of the summer, I began configuring Payload CMS to help the team migrate documentation away from Confluence, a change that would give both developers and non-technical editors a much better experience.

Everything had to be rock solid, resilient, and robust. Components needed to work every single time, on any screen size, no matter what. So I spent a lot of time making sure nothing would break, even if people were accessing it from different devices. Using Jest and Cypress, I wrote unit tests for individual components, integration tests to make sure different parts of the system worked seamlessly together, and end-to-end (E2E) tests to simulate how a user would navigate the site. By the end, we hit 80% test coverage - an incredibly high mark for a project of this scale - while also making sure to validate every critical workflow and component before deployment.

#### deployment

We hosted everything on AWS EC2, which wasn’t the flashiest option, but it was highly reliable, cost-effective, and familiar to the team, so they could maintain it after I left. CI/CD (continuous integration and deployment) was handled through GitHub Actions, which automatically ran all our tests - including regression tests - before pushing any updates live.

This was also my first experience leading a small team. I was the most experienced intern on the project, so I spent a lot of time reviewing code, helping others debug, and making sure we stayed on schedule. It was a strange mix of writing my own code and managing others, but I learned a lot about balancing both roles.

#### conclusion

By the end of my summer, we had transformed the knowledge base into something fast, intuitive, reliable and scalable. It wasn’t the perfect system - if we had more time, I would have loved to add a proper caching system with Redis, a more robust deployment and infrastructure pipeline and more advanced CMS migration. But for a small team working under a tight deadline and a small budget, we delivered the best possible product that solved all of the old system’s issues and went the extra mile to create a dramatically improved experience.

This project was my first real experience building a large-scale application, and it taught me just how much goes into making something people rely on every day. It wasn’t just about writing code; it was about understanding how people use the system, making tradeoffs between ideal solutions and what’s realistic, and making sure every decision had a clear reason behind it. Although I’ve since moved on from Trillium to gain experience in other areas of computer science, this project made me fall in love with full-stack development and the entire lifecycle of building big, complex products.

If I had to sum it up, it was the summer I stopped just “writing code” and started building products.
