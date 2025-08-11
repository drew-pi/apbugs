---
title: Demographic Data Modelling
description: Created a map-based webapp that shows demographic information by neighborhood in NYC
github: https://github.com/HarryZhu10/P04_BubblingBanjos
links:
  # - display_name:
  #   link:
  # - display_name:
  #   link:
tags: [fullstack, collaborative, frontend, backend]
tools:
  [Python, Flask, Jinja, JavaScript, Leaflet API, SQlite, HTML, Bootstrap, CSS]
date: 2023
---

<figure>
  <p align="center">
    <img src="/public/assets/projects/DemographicModelling.png" alt="" height="400" style="display:block; margin:0 auto; padding:5px; box-sizing:border-box;">
  </p>
  <figcaption style="text-align:center; font-style:italic;">The landing page of the website which is a chloropleth map showing different NYC demographic information</figcaption>
</figure>

**WARNING**: Because of some misplaced files, this can no longer be run. The setup.py file is supposed to download some 3 GB of data from external sources and compress it into a SQlite file, however those external files are missing, so it is no longer able to run locally.

Senior year school project with a focus on using RESTful APIs and data modeling. Worked in a group of 5 to create an online map that shows different demographic data in the NYC area - including English literacy rates by neighborhood and crime scenes (using geodata). In the end we created a choropleth map using a JavaScript library, Leaflet. Our website design heavily uses standard Flask techniques and HTML and CSS with bootstrap to create the frontend and SQlite to handle storing some of the data (most of the data came from APIs though).

During my senior year this website was hosted in a DigitalOcean droplet, however my student credits ran out so it is no longer online

Possible further improvements would be to introduce lazy loading so that not all of the data is imported immediately. This would speed up website load times and also allow the website to take up less memory. Another improvement would be to allow the user to select multiple dates to filter crime scenes, currently you can only choose one date.
