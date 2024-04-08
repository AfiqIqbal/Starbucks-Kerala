import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard-container">
        <Head>
          <title>Dashboard - STARBUKS KERALA</title>
          <meta property="og:title" content="Dashboard - STARBUKS KERALA" />
        </Head>
        <div className="dashboard-navbar">
          <header
            data-role="Header"
            className="dashboard-header max-width-container"
          >
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="/starbucks-logo-png-200w.png"
                  className="dashboard-image"
                />
              </a>
            </Link>
            <div className="dashboard-navbar1">
              <div className="dashboard-container01"></div>
              <input
                type="text"
                placeholder="search"
                className="dashboard-textinput input"
              />
              <div className="dashboard-middle">
                <div className="dashboard-left">
                  <Link href="/">
                    <a className="dashboard-link1 navbar-link">HOME</a>
                  </Link>
                  <span className="navbar-link">GIFT</span>
                  <span className="navbar-link">ORDER</span>
                  <span className="navbar-link">PAY</span>
                  <span className="navbar-link">
                    <span>STORE</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="dashboard-icons">
                <img
                  alt="iconsbxscart3271299"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                  className="dashboard-image1"
                />
                <img
                  alt="iconsbxsheartcircle3271300"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                  className="dashboard-image2"
                />
                <Link href="/dashboard">
                  <a className="dashboard-link2">
                    <img
                      alt="AccountCircle3271301"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                      className="dashboard-image3"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div data-role="BurgerMenu" className="dashboard-burger-menu">
              <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="dashboard-mobile-menu">
              <div className="dashboard-nav">
                <div className="dashboard-container02">
                  <span className="dashboard-logo-center">MOBILLIO</span>
                  <div
                    data-role="CloseMobileMenu"
                    className="dashboard-close-mobile-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="dashboard-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="dashboard-middle1">
                  <span className="dashboard-text07">SHOP</span>
                  <span className="dashboard-text08">LOOKBOOK</span>
                  <span className="dashboard-text09">SPECIAL</span>
                  <span className="dashboard-text10">ABOUT</span>
                  <span className="dashboard-text11">BLOG</span>
                  <span className="dashboard-text12">CONTACT</span>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="dashboard-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="dashboard-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="dashboard-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="dashboard-main">
          <div className="dashboard-categories section-container column"></div>
          <div className="dashboard-container03">
            <div className="dashboard-container04">
              <div className="dashboard-container05">
                <Script
                  html={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Starbucks Admin Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
        }

        .container {
            max-width: 1200px;
            margin: 20px auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .chart {
            width: 45%;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 20px;
            box-sizing: border-box;
        }

        h2 {
            font-size: 20px;
            margin-bottom: 15px;
            color: #333;
        }

        .bar {
            display: flex;
            align-items: flex-end;
            height: 200px;
            margin-bottom: 15px;
        }

        .bar-inner {
            flex: 1;
            background-color: #4caf50;
            margin: 0 5px;
            border-radius: 4px;
            transition: height 0.3s ease-in-out;
        }

        .pie {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            position: relative;
            margin: auto;
        }

        .slice {
            position: absolute;
            width: 100%;
            height: 100%;
            clip-path: polygon(50% 50%, 100% 0, 100% 100%);
        }

        .slice:nth-child(1) { background-color: #4caf50; transform: rotate(0deg); }
        .slice:nth-child(2) { background-color: #ff9800; transform: rotate(90deg); }
        .slice:nth-child(3) { background-color: #2196f3; transform: rotate(180deg); }
        .slice:nth-child(4) { background-color: #ff5722; transform: rotate(270deg); }

        .slice::before {
            content: '';
            position: absolute;
            width: 50%;
            height: 100%;
            background: inherit;
            clip-path: polygon(0 0, 100% 0, 50% 100%);
        }

        .slice:nth-child(1)::before { transform: rotate(var(--percentage)); }
        .slice:nth-child(2)::before { transform: rotate(var(--percentage)); }
        .slice:nth-child(3)::before { transform: rotate(var(--percentage)); }
        .slice:nth-child(4)::before { transform: rotate(var(--percentage)); }

        .legend {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        .legend-item {
            display: flex;
            align-items: center;
            margin-right: 20px;
        }

        .legend-item div {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 5px;
        }

        .line-chart,
        .area-chart {
            width: 100%;
            height: 300px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }

        .progress {
            width: 100%;
            background-color: #f8f8f8;
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-bar {
            width: 70%;
            height: 20px;
            background-color: #4caf50;
            transition: width 0.5s ease-in-out;
        }

        .badge {
            display: inline-block;
            padding: 5px 10px;
            background-color: #4caf50;
            color: #fff;
            border-radius: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="chart">
            <h2>Avil Milk</h2>
            <div class="bar">
                <div class="bar-inner" style="height: 80%;"></div>
                <div class="bar-inner" style="height: 60%;"></div>
                <div class="bar-inner" style="height: 90%;"></div>
                <div class="bar-inner" style="height: 70%;"></div>
            </div>
        </div>
        <div class="chart">
            <h2>Coffee</h2>
            <div class="pie">
                <div class="slice" style="--percentage: 25;"></div>
                <div class="slice" style="--percentage: 35;"></div>
                <div class="slice" style="--percentage: 20;"></div>
                <div class="slice" style="--percentage: 20;"></div>
            </div>
            <div class="legend">
                <div class="legend-item">
                    <div style="background-color: #4caf50;"></div>
                    <span>Starbucks Blend</span>
                </div>
                <div class="legend-item">
                    <div style="background-color: #ff9800;"></div>
                    <span>Latte</span>
                </div>
                <div class="legend-item">
                    <div style="background-color: #2196f3;"></div>
                    <span>Cappuccino</span>
                </div>
                <div class="legend-item">
                    <div style="background-color: #ff5722;"></div>
                    <span>Espresso</span>
                </div>
            </div>
        </div>
        <div class="line-chart">
            <h2>Sales Trend</h2>
            <canvas id="lineChart"></canvas>
        </div>
        <div class="doughnut-chart">
            <h2>Daily Sales</h2>
            <canvas id="doughnutChart"></canvas>
        </div>
        <div class="area-chart">
            <h2>Area Chart</h2>
            <canvas id="areaChart"></canvas>
        </div>
        <div class="progress">
            <div class="progress-bar" style="width: 70%;"></div>
        </div>
        <span class="badge">New</span>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Dummy data for charts
        const lineChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales Trend',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#4caf50',
                tension: 0.4
            }]
        };

        const doughnutChartData = {
            labels: ['Starbucks Blend', 'Latte', 'Cappuccino', 'Espresso'],
            datasets: [{
                data: [300, 50, 100, 80],
                backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#ff5722']
            }]
        };

        const areaChartData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Daily Sales',
                data: [12, 19, 3, 5, 2, 3, 10],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        };

        // Create line chart
        var lineCtx = document.getElementById('lineChart').getContext('2d');
        var lineChart = new Chart(lineCtx, {
            type: 'line',
            data: lineChartData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Create doughnut chart
        var doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
        var doughnutChart = new Chart(doughnutCtx, {
            type: 'doughnut',
            data: doughnutChartData
        });

        // Create area chart
        var areaCtx = document.getElementById('areaChart').getContext('2d');
        var areaChart = new Chart(areaCtx, {
            type: 'bar',
            data: areaChartData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
</body>
</html>
`}
                ></Script>
              </div>
            </div>
            <div className="dashboard-container06"></div>
          </div>
          <div className="dashboard-container07">
            <div className="dashboard-container08">
              <Script
                html={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Starbucks Admin Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
        }

        .container {
            max-width: 1200px;
            margin: 20px auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .chart {
            width: 45%;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 20px;
            box-sizing: border-box;
        }

        h2 {
            font-size: 20px;
            margin-bottom: 15px;
            color: #333;
        }

        .bar {
            display: flex;
            align-items: flex-end;
            height: 200px;
            margin-bottom: 15px;
        }

        .bar-inner {
            flex: 1;
            background-color: #4caf50;
            margin: 0 5px;
            border-radius: 4px;
            transition: height 0.3s ease-in-out;
        }

        .pie {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            position: relative;
            margin: auto;
        }

        .slice {
            position: absolute;
            width: 100%;
            height: 100%;
            clip-path: polygon(50% 50%, 100% 0, 100% 100%);
        }

        .slice:nth-child(1) { background-color: #4caf50; transform: rotate(0deg); }
        .slice:nth-child(2) { background-color: #ff9800; transform: rotate(90deg); }
        .slice:nth-child(3) { background-color: #2196f3; transform: rotate(180deg); }
        .slice:nth-child(4) { background-color: #ff5722; transform: rotate(270deg); }

        .slice::before {
            content: '';
            position: absolute;
            width: 50%;
            height: 100%;
            background: inherit;
            clip-path: polygon(0 0, 100% 0, 50% 100%);
        }

        .slice:nth-child(1)::before { transform: rotate(var(--percentage)); }
        .slice:nth-child(2)::before { transform: rotate(var(--percentage)); }
        .slice:nth-child(3)::before { transform: rotate(var(--percentage)); }
        .slice:nth-child(4)::before { transform: rotate(var(--percentage)); }

        .legend {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        .legend-item {
            display: flex;
            align-items: center;
            margin-right: 20px;
        }

        .legend-item div {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 5px;
        }

        .line-chart,
        .area-chart {
            width: 100%;
            height: 300px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        .card {
            width: 30%;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 20px;
            box-sizing: border-box;
        }

        .card h3 {
            margin-top: 0;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="chart">
            <h2>Avil Milk</h2>
            <div class="bar">
                <div class="bar-inner" style="height: 80%;"></div>
                <div class="bar-inner" style="height: 60%;"></div>
                <div class="bar-inner" style="height: 90%;"></div>
                <div class="bar-inner" style="height: 70%;"></div>
            </div>
        </div>
        <div class="chart">
            <h2>Coffee</h2>
            <div class="pie">
                <div class="slice" style="--percentage: 25;"></div>
                <div class="slice" style="--percentage: 35;"></div>
                <div class="slice" style="--percentage: 20;"></div>
                <div class="slice" style="--percentage: 20;"></div>
            </div>
            <div class="legend">
                <div class="legend-item">
                    <div style="background-color: #4caf50;"></div>
                    <span>Starbucks Blend</span>
                </div>
                <div class="legend-item">
                    <div style="background-color: #ff9800;"></div>
                    <span>Latte</span>
                </div>
                <div class="legend-item">
                    <div style="background-color: #2196f3;"></div>
                    <span>Cappuccino</span>
                </div>
                <div class="legend-item">
                    <div style="background-color: #ff5722;"></div>
                    <span>Espresso</span>
                </div>
            </div>
        </div>
        <div class="line-chart">
            <h2>Sales Trend</h2>
            <canvas id="lineChart"></canvas>
        </div>
        <div class="card">
            <h3>Recent Activities</h3>
            <p>No recent activities.</p>
        </div>
        <div class="card">
            <h3>Statistics</h3>
            <p>Total Users: 100</p>
            <p>Total Orders: 50</p>
            <p>Total Revenue: \$5000</p>
        </div>
        <div class="card">
            <h3>Recent Users</h3>
            <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        </div>
        <div class="card">
            <h3>Notifications</h3>
            <p>No new notifications.</p>
        </div>
        <div class="card">
            <h3>Settings</h3>
            <p>You can update your settings here.</p>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td>Admin</td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>jane@example.com</td>
                    <td>User</td>
                </tr>
                <tr>
                    <td>Bob Johnson</td>
                    <td>bob@example.com</td>
                    <td>User</td>
                </tr>
            </tbody>
        </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Dummy data for charts
        const lineChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales Trend',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#4caf50',
                tension: 0.4
            }]
        };

        const doughnutChartData = {
            labels: ['Starbucks Blend', 'Latte', 'Cappuccino', 'Espresso'],
            datasets: [{
                data: [300, 50, 100, 80],
                backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#ff5722']
            }]
        };

        const areaChartData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Daily Sales',
                data: [12, 19, 3, 5, 2, 3, 10],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        };

        // Create line chart
        var lineCtx = document.getElementById('lineChart').getContext('2d');
        var lineChart = new Chart(lineCtx, {
            type: 'line',
            data: lineChartData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Create doughnut chart
        var doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
        var doughnutChart = new Chart(doughnutCtx, {
            type: 'doughnut',
            data: doughnutChartData
        });

        // Create area chart
        var areaCtx = document.getElementById('areaChart').getContext('2d');
        var areaChart = new Chart(areaCtx, {
            type: 'bar',
            data: areaChartData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
</body>
</html>
`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="dashboard-footer">
          <div className="dashboard-max-width max-width-container">
            <footer className="dashboard-footer1">
              <div className="dashboard-container09">
                <h3 className="dashboard-text13">
                  <span className="Heading-3">STARBUCKS KERALA</span>
                  <br></br>
                </h3>
                <span className="dashboard-text16">
                  <span>ALANALLUR, PALAKKAD, KERALA</span>
                  <br></br>
                </span>
                <span className="dashboard-text19">
                  <span>+91 8129984737</span>
                  <br></br>
                </span>
                <span className="dashboard-text22">
                  contact@starbuckskerala.com
                </span>
              </div>
              <div className="dashboard-container10">
                <span className="dashboard-text23">Company</span>
                <span className="dashboard-text24">Shop</span>
                <span className="dashboard-text25">Lookbook</span>
                <span className="dashboard-text26">Specials</span>
                <span className="dashboard-text27">About</span>
                <span className="dashboard-text28"></span>
              </div>
              <div className="dashboard-container11">
                <span className="dashboard-text29">Resources</span>
                <span className="dashboard-text30">Contact us</span>
                <span className="dashboard-text31">Order</span>
                <span className="dashboard-text32">Track your order</span>
                <span className="dashboard-text33">
                  Shipping &amp; Delivery
                </span>
              </div>
              <div className="dashboard-links-container"></div>
            </footer>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .dashboard-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            padding-top: 70px;
            flex-direction: column;
          }
          .dashboard-navbar {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: fixed;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-pallet-green);
          }
          .dashboard-header {
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .dashboard-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            text-decoration: none;
          }
          .dashboard-navbar1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .dashboard-container01 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .dashboard-textinput {
            width: 100%;
            max-width: var(--dl-size-size-xxlarge);
            transition: 0.3s;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .dashboard-textinput:hover {
            border-color: var(--dl-color-pallet-yellow);
          }
          .dashboard-middle {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 1;
            border-color: transparent;
            justify-content: center;
          }
          .dashboard-left {
            display: flex;
            grid-gap: 45px;
            position: relative;
            align-items: flex-start;
          }
          .dashboard-link1 {
            text-decoration: none;
          }
          .dashboard-icons {
            display: flex;
          }
          .dashboard-image1 {
            width: 24px;
            height: 24px;
            margin: 0 24px 0 0;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
          }
          .dashboard-image2 {
            width: 24px;
            height: 24px;
            margin: 0 24px 0 0;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
          }
          .dashboard-link2 {
            display: contents;
          }
          .dashboard-image3 {
            width: 24px;
            height: 24px;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
            text-decoration: none;
          }
          .dashboard-burger-menu {
            display: none;
          }
          .dashboard-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .dashboard-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .dashboard-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .dashboard-logo-center {
            color: var(--dl-color-gray-black);
            height: auto;
            font-size: 24px;
            font-family: Jost;
            font-weight: 500;
            line-height: 20px;
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
            letter-spacing: 0.4em;
            text-decoration: none;
          }
          .dashboard-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .dashboard-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .dashboard-middle1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .dashboard-text07 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .dashboard-text08 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .dashboard-text09 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .dashboard-text10 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .dashboard-text11 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .dashboard-text12 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .dashboard-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .dashboard-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .dashboard-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .dashboard-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .dashboard-categories {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .dashboard-container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .dashboard-container04 {
            width: 1132px;
          }
          .dashboard-container05 {
            display: contents;
          }
          .dashboard-container06 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .dashboard-container07 {
            width: 1131px;
          }
          .dashboard-container08 {
            display: contents;
          }
          .dashboard-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-950);
            border-width: 1px;
            flex-direction: column;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .dashboard-max-width {
            align-items: center;
            justify-content: center;
          }
          .dashboard-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: space-between;
          }
          .dashboard-container09 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text13 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .dashboard-text16 {
            color: var(--dl-color-gray-black50);
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .dashboard-text19 {
            color: var(--dl-color-gray-black50);
            margin-top: var(--dl-space-space-twounits);
          }
          .dashboard-text22 {
            color: var(--dl-color-gray-black50);
            margin-top: 12px;
          }
          .dashboard-container10 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .dashboard-text23 {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 14px;
            margin-bottom: 44px;
          }
          .dashboard-text24 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-text25 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-text26 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-text27 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-text28 {
            color: var(--dl-color-gray-black50);
          }
          .dashboard-container11 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dashboard-text29 {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 14px;
            margin-bottom: 44px;
          }
          .dashboard-text30 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-text31 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-text32 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-text33 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-links-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .dashboard-container01 {
              display: none;
            }
            .dashboard-left {
              display: none;
            }
            .dashboard-icons {
              display: none;
            }
            .dashboard-burger-menu {
              display: flex;
            }
            .dashboard-icon {
              width: 24px;
              height: 24px;
              display: flex;
            }
            .dashboard-logo-center {
              margin-left: 0px;
            }
            .dashboard-footer1 {
              flex-direction: column-reverse;
            }
            .dashboard-links-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .dashboard-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .dashboard-main {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .dashboard-footer1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .dashboard-links-container {
              margin-top: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .dashboard-container {
              padding-top: 55px;
            }
            .dashboard-header {
              padding: var(--dl-space-space-unit);
            }
            .dashboard-mobile-menu {
              padding: 16px;
            }
            .dashboard-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .dashboard-container10 {
              margin-right: var(--dl-space-space-unit);
            }
            .dashboard-links-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

export default Dashboard
