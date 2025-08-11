---
title: Plants vs Zombies
description: A Java-based game of plants vs zombies built with Processing. Defeat successive waves of zombies that get incresingly powerful to beat the game
github: https://github.com/drew-pi/Ruff-Commandos-Final-Project
links:
  # - display_name:
  #   link:
  # - display_name:
  #   link:
tags: [Java, Collaborative]
tools: [Java, Processing]
date: 2022
---

<figure>
  <p align="center">
    <img src="/public/assets/projects/PlantsVZombiesProject.png" alt="A wave of zombies attacks the pea-shooters" height="400" style="display:block; margin:0 auto; padding:5px; box-sizing:border-box;">
  </p>
  <figcaption style="text-align:center; font-style:italic;">Two thirds through a game of Plants vs Zombies</figcaption>
</figure>

This was my final project for Junior year AP Computer Science class that I worked on with one other student. We used the Java Processing library to create a Plants vs Zombies game. Processing is very similar to Swing (another popular Java GUI) library. It is a single thread program that calls on visual objects that overwrite inherited functions. Each file except for the Woo.pde file (which is the runnable file) contains data to draw and react to other visual elements. The zombies are stored in a minimum heap (which we implemented ourselves) based on how much health they have and are released periodically.

Possible further improvements would be to update the Launch Codes in the Readme. Processing needs to be downloaded separately so some instructions would be helpful for people who have never used it before. Additionally, cleaning up the codebase by placing zombie processing files in one folder, images in an assets folder, and other visual files in a setup file.
