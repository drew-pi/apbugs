---
title: Higher or Lower
description: Higher or Lower is a game where given two cities decide which one has a larger population. Developed using the Flask python-web framework with a fully functioning backend with SQlite.
github: https://github.com/drew-pi/p1-Squirtle_Squadron/tree/main
links:
  # - display_name:
  #   link:
  # - display_name:
  #   link:
tags: [fullstack, collaborative, frontend, backend]
tools: [Python, Flask, Jinja, SQlite, HTML, Bootstrap, CSS, Linux, Nginx]
date: 2022
---

<figure>
  <p align="center">
    <img src="/public/assets/projects/HigherOrLowerGame.png" alt="The homepage" height="400" style="display:block; margin:0 auto; padding:5px; box-sizing:border-box;">
  </p>
  <figcaption style="text-align:center; font-style:italic;">The landing page of the website</figcaption>
</figure>

Organized and led a group of 6 students for a mid year project in my Senior year Software Development class. We used Flask, Python (the Jinja library), and bootstrap for the frontend and middleware and SQlite for the backend to create a higher or lower game where the user is presented with two cities and has to guess which one has a greater population. We used the Python flask app routes to facilitate the website and functionality. We used a SQlite database to store peoples accounts and RESTful apis to gather the data about cities (including population, location, etc).

For some time, this site was hosted on a DigitalOcean droplet using Nginx, however our student credits ran out so it is no longer online.

Possible further improvements would be to implement the leaderboard functionality. We started implementing this feature (as you can see by the button nubs) but we ran out of time. Additionally, potentially loading some of the images into the database before starting the game may take some load off the program and lead to less lag and faster loading times.
