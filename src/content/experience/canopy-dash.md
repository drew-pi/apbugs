---
job_title: Software and ML Agritech Engineer
company_name: Bio-Inspired Fluid Lab
company_link: https://sites.google.com/cornell.edu/sunnyjsh
start_date: 2025-02
end_date:
location: Ithaca, NY
description: "Developing a low-cost automated plant monitoring platform called Canopy Dash to replace manual measurements, aiming to deliver accurate, real-time growth metrics and expand access to scientific-grade plant tracking for small labs and growers."
links:
  - display_name: Github
    link: https://github.com/drew-pi/canopydash
  # - display_name:
  #   link:
tags:
tools:
  [
    Jetson Nano,
    Raspberry Pi,
    Python,
    Django,
    Docker,
    Celery,
    Redis,
    Nginx,
    Gunicorn,
    PostgreSQL,
    supervisord,
    PyTorch,
    TensorFlow OpenCV,
    Jupyter Lab,
    DINOv2,
    DepthAnywhereV2,
    NeRF,
    CUDA,
    REST APIs,
    Linux,
    bash,
  ]
---

<figure>
  <p align="center">
    <img src="/public/assets/experience/canopy-dash/overhead.png" alt="" height="300" style="display:block; margin:0 auto; padding:5px; box-sizing:border-box;">
  </p>
  <figcaption style="text-align:center; font-style:italic;">Overhead view of basil plants</figcaption>
</figure>

### tldr;

Building a low-cost plant growth monitoring platform called Canopy Dash to automate manual measurements of 36 plants daily. Designed an overhead stereo RGB camera setup on a Jetson Nano and developing a CUDA-accelerated pipeline using models like DINOv2, DepthAnywhereV2, and NeRF to estimate height, leaf count, and biomass from continuous video. Integrated the system with a Django-based web application containerized with Docker, served with Nginx and Gunicorn, using FFmpeg for video capture and Celery + Redis for asynchronous processing. The system is still in active development, with work focusing on improving model accuracy and robustness to lighting and camera shifts, and integrating environmental sensors like pH and EC. The next major step is building a fully automated pipeline and custom APIs to deliver real-time, validated plant metrics suitable for research and agricultural use.

### canopy dash

This project started because of a problem: measuring plants. While working at the Bio-Inspired Fluid Lab in 2024, I had been experimenting with 3D reconstruction to estimate plant metrics like leaf count and leaf area (you can read more about that [here](/apbugs/experience/3d-modelling)). Around the same time at the same lab, I also became involved with a hydroponic basil experiment to study how upward wind affected plant growth. Working on that project made me realize how tedious manual measurements could be. Measuring a few plants by hand was manageable, but doing it for all thirty-six plants every single day was exhausting and the fatigue inevitably led to less accurate results.

Drawing on my experience from the previous 3D reconstruction project, I realized that machine learning could not only speed up data collection but also estimate metrics that are impossible to measure conventionally, like biomass and total leaf surface area. But when I looked for existing tools, nothing suitable existed. So I pulled together a small subteam - just three of us: Patrick Wu, [Yoojung Joe](https://www.linkedin.com/in/yoojung-joe-365b31215/) and me - working under Dr. Sunghwan Jung and Crystal Fowler. Our goal was clear: build a first-of-its-kind, reliable, automated platform for tracking plant growth, something that small labs and possibly small scale farms could use.

#### hardware

Because we wanted the system to be low-cost and accessible, we avoided expensive pre-calibrated cameras and commercial mounting rigs. Instead, we used what was already available in the lab: wooden boards, RGB cameras, a Jetson Nano, and a few Raspberry Pis. Luckily, another team had already built a custom hydroponic setup in a controlled-environment grow tent that could hold 36 plants. They were also running a wind experiment that required regular measurements. This gave us both a stable environment and consistent ground-truth data to validate our system.

We decided on an overhead stereo RGB camera system because depth information is essential for estimating basic plant metrics like height. By mounting two cameras side by side, we could experiment with both monocular and binocular depth estimation. In addition to the camera system, we are planning to integrate pH, electrical conductivity (EC), and possibly temperature and humidity sensors to monitor important environmental parameters in our controlled environment.

Monocular depth estimation relies on machine learning models trained on tens of thousands or even millions of images, both supervised and unsupervised. This was one of the most exciting parts of the project since it allowed us to test state-of-the-art ML models, such as DepthAnywhereV2, on real plant data. At the same time, we wanted to try a more traditional approach: binocular depth estimation, a classic computer vision technique. Here, depth comes from disparity which is the horizontal shift in where the same point appears in each image. Because our cameras are aligned on the same axis and fixed to a single wooden board, the only difference between their images is the baseline distance between them. That makes depth calculation pretty simple: once we figured out the disparity and baseline, we can compute how far away from the camera any given shared pixel is, giving us the depth.

The physical setup was really simple but effective. We screwed both cameras onto a flat wooden board, keeping them rigidly aligned to avoid calibration drift. The cameras were connected to a Jetson Nano instead of a Raspberry Pi because the Nano can handle two cameras simultaneously and has much better hardware acceleration for video encoding and decoding.

#### software

While setting up the hardware took planning, it was fairly straightforward since we were limited to the tools in the lab. The software, however, was a completely different story. There were endless decisions to make: which models to use, which programming frameworks to choose, and how to design a system that could process continuous video in real time while extracting scientifically meaningful data like biomass, height, leaf count, and leaf area.

We started by using the Jetson Nano to design a CUDA-accelerated pipeline, taking advantage of its GPU to handle the computationally heavy workload. Right now, we’re still in the experimental stage. We mostly work in Jupyter Notebooks, testing different computer vision techniques and state-of-the-art models. Some of the models we’re experimenting with include DINOv2 for feature extraction, DepthAnywhereV2 for depth estimation, and NeRF for 3D reconstruction, alongside libraries like PyTorch, TensorFlow, and OpenCV.

Scientific reliability has been a huge focus from the start. For this system to actually be useful in research or agricultural settings, it needs to produce accurate measurements and remain robust in the real-world where lighting changes, slight camera shifts, and natural plant movement constantly occur.

Equally important was usability. We didn’t want this to be a terminal tool; it had to be easy for anyone to use. So, we built a Django based web application with three main features: capturing data, streaming a live feed of the hydroponic system, and visualizing real-time plant metrics through interactive charts and graphs. Everything is containerized with Docker for portability and we use Nginx and Gunicorn to serve recordings and the front-end interface reliably. For video capture, FFmpeg records hour-long segments, which are currently stored locally, though we plan to migrate to a more robust solution, possibly network-attached storage (NAS). Celery workers and Redis handle asynchronous processing, such as cutting and combining video clips before serving them through the web app.

To make the system fault-tolerant and reliable for long-term operation, we used tools like Supervisord, along with custom bash scripts and cron jobs to manage services and scheduled tasks, and implemented structured logging to track performance and detect failures early.

The next big step is to move beyond experimentation and develop a fully automated machine learning pipeline. This will run alongside custom-built APIs that take in raw data and output usable plant metrics in real time.

#### conclusion

The system is still in active development, so there isn’t a finalized product yet, but we have been making rapid progress. We’re aiming to release the first version for testing in our own lab within the next few months. As previously mentioned, the long-term goal is to make this an open-source, portable platform that small labs and even growers with few resources can use.

What excites me the most about this project is how it brings together so many of my interests: deploying machine learning models, optimizing them for real-world use, and turning raw data into meaningful, actionable measurements that integrate seamlessly into full-stack applications. I’ve been enjoying every part of the project from managing my amazing team, to learning a lot about model optimization and building robust APIs, all while strengthening my full-stack development skills.

There’s still plenty of work ahead, but watching the plants grow and knowing that every frame we capture is being turned into real, usable science is incredibly rewarding.
