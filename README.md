# 🏎️ Formula 1 Dashboard

A comprehensive Formula 1 Dashboard providing real-time and historical insights into F1 races, driver and constructor standings, race analytics, and more.  
**Live at** 👉 [formula1dashboard.xyz](https://www.formula1dashboard.xyz)

<p align="center">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue?logo=node.js" />
  <img src="https://img.shields.io/badge/Backend-FastAPI-green?logo=fastapi" />
  <img src="https://img.shields.io/badge/Frontend-Next.js-black?logo=next.js" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb" />
  <img src="https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/Data%20Source-Ergast%20API%20%7C%20FastF1-yellow?logo=data" />
  <img src="https://img.shields.io/badge/Fronted%20Deployed%20on-Vercel-black?logo=vercel" />
  <img src="https://img.shields.io/badge/Backend%20Hosted%20on-AWS%20EC2-FF9900?logo=amazonaws&logoColor=white" />
</p>

---

## 🌐 Project Overview

The Formula 1 Dashboard is a data-rich, interactive platform built for F1 fans and analysts to explore:

- **Current Season Stats**: Live driver and constructor standings, total Grand Prix and Sprint Races, countdown to the next race, and live news from X (Twitter) and YouTube.
- **Historical Data**: Explore F1 history from **1950 onwards**. View past seasons' standings, race stats, and detailed race-specific insights.
- **Race Analytics**: Advanced race visualizations like team pace comparison, tyre strategies, position changes, and more.

---

## 🚀 Features

### 🔴 Landing Page
- Navigation to current and past season dashboards.

### 📅 Current Season
- **Driver & Constructor Standings** – Auto-updated.
- **Total Grand Prix & Sprint Races** this season.
- **Countdown Timer** to the next Grand Prix.
- **Live News** from X (Twitter) and YouTube.

### 📜 Past Seasons
- Select any year from **1950 onwards**.
- View:
  - Final Driver & Constructor Standings.
  - Total Drivers, Constructors, and Races that year.
  - List of all Grand Prix. User may click on any one GP for more information.

#### 🏁 Race View Tab
- **Race Results Table** – click on any driver for a detailed performance view:
  - Avg Speed  
  - Fastest Lap Time & Rank  
  - Time Taken  
  - Points Scored  
  - Starting Grid Position  
  - Involved Incidents

#### 📊 Analytics Tab
Includes 5 interactive visualizations:
1. Fastest Lap Gear Shifts  
2. Team Pace Comparison  
3. Tyre Strategies  
4. Driver's Lap Times by Tyre Compound  
5. Position Changes During the Race

### 👤 Authentication
- **JWT Auth**
- **User Signup & Login**

---

## 🧰 Tech Stack

| Layer        | Tech                                                                 |
|--------------|----------------------------------------------------------------------|
| Frontend     | React, NextJS Framework (Deployed on **Vercel**)               |
| Backend      | Node.js with Express.js, FastAPI (Deployed on **AWS EC2 Instance**)          |
| Database     | MongoDB (with **Mongoose**)                                          |
| Data Sources | [Ergast API](https://ergast.com/mrd/) & [FastF1 API](https://pypi.org/project/fastf1/) |
| Visualisation| Python (NumPy, Matplotlib)                                           |
| Auth         | JWT                                                                  |

---


## 📦 Repositories

- 🔗 **Node.js Backend**: [Formula-1-Dashboard Backend](https://github.com/AvneetKapoor28/Formula-1-Dashboard)  
- 🔗 **FastAPI Analytics Backend**: [Formula1 Analytics Backend](https://github.com/AvneetKapoor28/formula1-analytics-backend)

---

## 🌍 Live Project

> 🖥️ Visit: [https://www.formula1dashboard.xyz](https://www.formula1dashboard.xyz)

---

## 📸 Screenshots & Demo Videos

<details>
<summary>Click to expand</summary>

### 🖼️ Screenshots

#### 🔹 Landing Page  
![Landing Page](https://www.formula1dashboard.xyz/screenshots/landing-page-ss.png)

---

### 🎥 Demo Videos

#### 🔸 Current Season Page Demo  
[![Watch Current Season Demo](https://img.youtube.com/vi/bZ-nDWxcQrM/0.jpg)](https://youtu.be/bZ-nDWxcQrM)

---

#### 🔸 Past Seasons Page Demo  
[![Watch Past Seasons Demo](https://img.youtube.com/vi/BW5IZVNdKCY/0.jpg)](https://youtu.be/BW5IZVNdKCY)

---

#### 🔸 Data Visualization Demo  
[![Watch Data Visualization Demo](https://img.youtube.com/vi/YiZM-1QJ5yk/0.jpg)](https://youtu.be/YiZM-1QJ5yk)

---

#### 🔹 Signup Page  
![Signup Page](https://www.formula1dashboard.xyz/screenshots/signup-page-ss.png)

---

</details>

---
## 📱 Mobile Responsive

The Formula 1 Dashboard is fully **responsive** and optimized for all devices, including:

- 📱 Smartphones
- 💻 Laptops
- 🖥️ Desktops
- 📲 Tablets

<details>
  <summary>Click to view screenshots</summary>
  <div align="center">
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile1.jpeg" width="30%" style="margin:10px;" />
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile2.jpeg" width="30%" style="margin:10px;" />
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile3.jpeg" width="30%" style="margin:10px;" />
  <br />
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile4.jpeg" width="30%" style="margin:10px;" />
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile5.jpeg" width="30%" style="margin:10px;" />
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile6.jpeg" width="30%" style="margin:10px;" />
  <br />
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile7.jpeg" width="30%" style="margin:10px;" />
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile8.jpeg" width="30%" style="margin:10px;" />
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile9.jpeg" width="30%" style="margin:10px;" />
  <br />
  <img src="https://www.formula1dashboard.xyz/screenshots/mobile10.jpeg" width="30%" style="margin:10px;" />
</div>
  
</details>

All pages — from the landing page to the detailed analytics view — adapt seamlessly to various screen sizes to ensure a smooth and engaging experience for users on the go.

---
## 🔒 Authentication

JWT-based authentication ensures secure access. Signup/Login enables personalized experience and possibly feature extensions in the future.

---

## 📈 Data Visualization Samples

- Matplotlib graphs rendered from race telemetry.
- FastF1 provides real-time gear shifts, lap time, and car telemetry.
- Cleanly visualized comparisons of team and driver performance.

---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/AvneetKapoor28/Formula-1-Dashboard.git
