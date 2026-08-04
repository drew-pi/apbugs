---
job_title: Software Engineer Intern
company_name: Quantori
company_link: https://quantori.com/
start_date: 2025-06
end_date: 2025-08
location: Remote
description: "Built a system that lets Memorial Sloan Kettering cancer researchers ask questions in plain English and get accurate results from a complex medical database, removing the need to write code and making data access faster and easier."
links:
  # - display_name:
  #   link:
  # - display_name:
  #   link:
tags: [backend, ai, agents, validation]
tools:
  [
    LangChain,
    LangGraph,
    Azure OpenAI,
    Pydantic,
    Open WebUI,
    PostgreSQL,
    Pandas,
    Numpy,
    Pytest,
    RAGAs,
    LangFuse,
    Testcontainers,
    Docker,
    Docker Compose,
    Bitbucket Pipelines,
  ]
---

### tldr;

Engineered a multi-agent text-to-SQL pipeline for Memorial Sloan Kettering that transformed natural language cancer research questions into optimized SQL queries on the TCGA dataset, eliminating the need for researchers to know SQL. Leveraged LangChain, LangGraph, Pydantic, Open WebUI, and Azure-hosted OpenAI models to orchestrate specialized LLM agents for query parsing, planning, and validation. Designed and implemented a rigorous LLM evaluation framework using RAGAs, LangFuse, and Testcontainers to run CI-style regression tests on output format, relevance, safety, and correctness, ensuring scientific-grade reliability. Delivered a system that significantly accelerated data retrieval for clinical research while maintaining compliance and trustworthiness.

### chat tcga

When I joined Quantori, I wanted to see how AI agents and large language models (LLMs) were being used in the real world, especially in life sciences and healthcare. I’d been hearing a lot about AI and agents and their uses, but I wanted to understand how these systems work and what they can be used for.

The team I joined was working with Memorial Sloan Kettering (MSK) to help researchers work with the TCGA cancer dataset. TCGA — The Cancer Genome Atlas — is a massive open dataset with genomic and clinical data from thousands of cancer patients. It’s an incredibly useful resource, but it comes with a big catch: to use it, a researcher would need to know SQL (Structured Query Language). This is a steep barrier for world-leading biologists, chemists, and oncologists who’ve never worked with databases before, so our job was to create a system which could translate plain English questions into SQL and query the dataset.

Over the summer, we built a multi-agent text-to-SQL system that did exactly this. On the surface it looked like a simple chat bot that answered questions. But under the hood, using LangChain and LangGraph, we coordinated specialized agents that each fulfilled their own role like understanding the user’s question, planning the SQL structure, and validating the syntax. We also used Pydantic for strict data validation, Open WebUI for a clean, accessible front-end and Azure-hosted OpenAI models to stay compliant with MSK’s privacy requirements.

If that was the flashy side of the project, my focus was on the less visible but equally important part: validation and evaluation. LLMs are powerful, but they’re also unpredictable. They can get a query right but then hallucinate something incredibly important the very next moment - and they’ll sound confident either way. So I dove deep into LLM testing, figuring out where our pipeline was most likely to break and how to catch those failures before they ever reached production. Using open-source frameworks like RAGAs and LangFuse, I built automated CI-style regression integration tests that performed checks for output format, relevance, safety, and factual accuracy. I also brought in Testcontainers to spin up temporary, isolated databases so tests could run without touching real data. That meant we could run hundreds of tests in a row, confident that each one started in a clean environment.

Validating an LLM system like this was completely different from any testing I’d done before. In traditional software, the aim is to cover every branch with unit tests, then verify common workflows with integration tests, and finally run end-to-end tests for full-system validation. With LLMs, responses are inherently probabilistic, so we couldn’t rely on fixed inputs and outputs. Instead, every test effectively became an integration test, often involving multiple LLM calls to reduce randomness. We adopted a pyramid-shaped testing strategy: many simple checks at the base (formatting, safety), fewer but more detailed relevance checks in the middle, and a smaller set of complex correctness checks at the top. This structure gave us a consistent, reliable way to measure and ensure system accuracy.

#### hackathon

Somewhere along the way, I discovered Autoblocks - a startup building tools for exactly this kind of LLM validation. They were hosting a healthcare AI hackathon in New York City, and I figured I might as well jump in and get to experience what a hackathon is like. My team ended up building “Claim Champion,” a platform which matches patients who’d been denied healthcare claims with professional advocates who could help them fight back. Even though we didn’t place in the competition, I still had a great time and it was an amazing experience. I met industry professionals and came away with a much bigger picture of how validation challenges show up not just in research tools, but in healthcare systems that impact real patients every day.

#### conclusion

By the end of my time at Quantori, I realized that what fascinated me most wasn’t just building LLM pipelines, but figuring out how to make sure they are trustworthy. It gave me a huge appreciation for the behind-the-scenes work that ensures systems meet their specifications, don’t roll back progress, and can be relied on for critical decisions. This experience showed me just how much untapped potential there is in creating AI tools that are not only powerful, but truly dependable. It’s a space I’m excited to keep exploring and I’d love to keep building my experience - maybe even at a startup that’s pushing the boundaries of AI validation.
