---
job_title: Computer Vision Research Assistant
company_name: Bio-Inspired Fluid Lab
company_link: https://sites.google.com/cornell.edu/sunnyjsh
start_date: 2024-01
end_date: 2025-02
location: Ithaca, NY
description: "Research project exploring automated imaging and 3D reconstruction to accurately measure plant growth, especially leaf count and leaf surface area"
links:
  # - display_name:
  #   link:
  # - display_name:
  #   link:a
tags:
tools:
  [
    Raspberry Pi,
    Google Collab,
    Python,
    nerf studio,
    OpenCV,
    pandas,
    GARField,
    Gaussian Splatting,
    NeRF,
  ]
---

<figure>
  <p align="center">
    <img src="/apbugs/assets/experience/3d-modelling/manual.png" alt="" height="300" style="display:block; margin:0 auto; padding:5px; box-sizing:border-box;">
  </p>
  <figcaption style="text-align:center; font-style:italic;">3D reconstruction done manually using smartphone to capture continous video</figcaption>
</figure>

### tldr;

Helped build an experimental ML-enabled plant monitoring system to accurately measure plant growth. Engineered a Raspberry Pi-based automated camera track to capture high-resolution, multi-angle images and developed a processing pipeline using GARField, Gaussian Splatting, NeRF, and traditional CV techniques (K-segmentation, watershed, skeletonization). Achieved reliable leaf count and area estimation with 2D segmentation and 3D plant reconstructions, demonstrating the feasibility of automated plant phenotyping. This work laid the groundwork for building scalable, research-grade biomass and height estimation systems.

### full story

I’ve been fascinated by AgriTech since high school, when I toured [Square Roots](https://www.linkedin.com/company/square-roots-urban-growers/) in Brooklyn, NY. So when I got to Cornell - home to some of the best Computer Science and Agricultural programs - I immediately started looking for a place to learn more about the application of technology in agriculture.

I found [Dr. Sunghwan Jung](https://cals.cornell.edu/people/sunghwan-sunny-jung) and [Dr. Hosung Kang](https://www.linkedin.com/in/hosung-kang-110b3199/)’s (a visiting research fellow at Cornell at the time) project using Machine Learning to help measure plant growth sometime during my first semester at school and joined the following semester to help develop this system.

The project was very experimental - more "let's see what works" proof of concept than a finished system. One of the first challenges we encountered was image diversity and quality. To get usable 3D models of plants, we needed dozens of high-resolution images from different angles. So, Dr. Kang’s solution was to build a rotating track that moved a camera around the plant, changing height as it went, to get a full set of viewpoints.

We used a Raspberry Pi with a high-quality camera and built a processing pipeline using (at the time) cutting-edge models like GARField and Gaussian Splatting. We also tested NeRF and traditional Computer Vision techniques to see if there was actually any benefit to using 3D reconstruction. Our crude system worked pretty well, but it was still inaccurate and not suitable for scientific research or real world estimation because of how sensitive 3D reconstruction is to lighting, image quality, and background clutter.

This project never had a formal completion because Dr. Kang left Cornell unexpectedly, but it did introduce me to the exciting field of machine learning enabled plant monitoring and laid the groundwork for my current project where we are building a reliable, low-cost ML-enabled platform to estimate plant height, biomass as well as leaf count and area (you can read more about it [here](/apbugs/experience/canopy-dash)).

Below I have included a gallery of the images associated with this project

<figure>   
  <p align="center">     
    <img src="/apbugs/assets/experience/3d-modelling/trial.png" width="800" style="display:block; margin:0 auto; padding:5px; box-sizing:border-box;">     
    <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; box-sizing:border-box;">       
      <img src="/apbugs/assets/experience/3d-modelling/side_graph.png" width="800" style="max-width:33%; padding:5px; box-sizing:border-box;">       
      <img src="/apbugs/assets/experience/3d-modelling/angled_graph.png" width="800" style="max-width:33%; padding:5px; box-sizing:border-box;">     
    </div>  
  </p>   
  <figcaption style="text-align:center; font-style:italic;">Live capture of basil with leaf area estimate from two different angles</figcaption> 
</figure>

Before building a track system to rotate the camera around the plant, we experimented with fixing a camera and measuring leaf area. As you can see it was highly inaccurate because as the plant grew its leaves changed angles and moved around so a fixed camera would lose sight of some of the leaves leading to unexpected decreases.

<figure>     
  <p align="center">         
    <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; box-sizing:border-box;">         
      <img src="/apbugs/assets/experience/3d-modelling/seg1.png" alt="" width="800" style="max-width:32%; padding:5px; box-sizing:border-box;">         
      <img src="/apbugs/assets/experience/3d-modelling/seg2.png" alt="" width="800" style="max-width:32%; padding:5px; box-sizing:border-box;">        
      <img src="/apbugs/assets/experience/3d-modelling/seg3.png" alt="" width="800" style="max-width:32%; padding:5px; box-sizing:border-box;">         
    </div>     
  </p>     
  <figcaption style="text-align:center; font-style:italic;">2D Leaf segmentation</figcaption> 
</figure>

<figure>     
  <p align="center">         
    <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; box-sizing:border-box;">         
      <img src="/apbugs/assets/experience/3d-modelling/watershed.png" alt="Alt text" width="800" style="max-width:40%; padding:5px; box-sizing:border-box;">         
      <img src="/apbugs/assets/experience/3d-modelling/skeletonize.png" alt="Alt text" width="800" style="max-width:40%; padding:5px; box-sizing:border-box;">        
    </div>     
  </p>     
  <figcaption style="text-align:center; font-style:italic;">3D computer vision techniques applied</figcaption> 
</figure>

<figure>   
  <p align="center">     
    <img src="/apbugs/assets/experience/3d-modelling/leaf_count.png" alt="" height="300" style="display:block; margin:0 auto; padding:5px; box-sizing:border-box;">   
  </p>   
  <figcaption style="text-align:center; font-style:italic;">Using segmentation to estimate leaf count and area</figcaption> 
</figure>

Using traditional computer vision techniques like K-segmentation, watershed and skeletonization we found that we could get good accuracy for specific metrics such as leaf count.

<figure>   
  <p align="center">     
    <img src="/apbugs/assets/experience/3d-modelling/guass_splat.png" alt="Alt text" height="400" style="display:block; margin:0 auto; padding:5px; box-sizing:border-box;">   
  </p>   
  <figcaption style="text-align:center; font-style:italic;">Automated capture and 3D reconstruction using Guassian splatting</figcaption> 
</figure>

Finally using our automated track system we did a few trials to get 3D models like the one above.
