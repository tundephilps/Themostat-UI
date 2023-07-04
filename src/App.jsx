import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <body>
        <div className="container">
          <div class="flex col">
            <div class="flex row">
              <div class="flex col">
                <div class="flex col p">
                  <h2 class="heading">WEEKLY STATUS</h2>
                  <div class="flex row">
                    <div class="flex col bar-full-height items-center">
                      <div class="bar" style={{ height: "100%" }}></div>
                      <span class="x-axis-label">M</span>
                    </div>
                    <div class="flex col bar-full-height items-center justify-end">
                      <div class="bar" style={{ height: "50%" }}></div>
                      <span class="x-axis-label">T</span>
                    </div>
                    <div class="flex col bar-full-height items-center justify-end">
                      <div class="bar" style={{ height: "25%" }}></div>
                      <span class="x-axis-label">W</span>
                    </div>
                    <div class="flex col bar-full-height items-center">
                      <div class="bar active" style={{ height: "100%" }}></div>
                      <span class="x-axis-label">T</span>
                    </div>
                    <div class="flex col bar-full-height items-center justify-end">
                      <div class="bar" style={{ height: "70%" }}></div>
                      <span class="x-axis-label">F</span>
                    </div>
                    <div class="flex col bar-full-height items-center justify-end">
                      <div class="bar" style={{ height: "50%" }}></div>
                      <span class="x-axis-label">S</span>
                    </div>
                    <div class="flex col bar-full-height items-center justify-end">
                      <div class="bar" style={{ height: "100%" }}></div>
                      <span class="x-axis-label">S</span>
                    </div>
                  </div>
                </div>
                <div class="flex col p">
                  <h2 class="heading">HUMIDITY</h2>
                  <div class="flex row items-center">
                    <div class="humidity-icon">
                      <i class="ri-blur-off-line"></i>
                    </div>
                    <div class="humidity-icon">
                      <i class="ri-drop-line"></i>
                    </div>
                    <div class="humidity-icon">
                      <i class="ri-contrast-drop-2-fill"></i>
                    </div>
                    <div class="humidity-icon">
                      <i class="ri-drop-fill"></i>
                    </div>
                    <h3 class="humidity-percent">30%</h3>
                  </div>
                </div>
              </div>
              <div class="flex row p">
                <div class="flex col">
                  <h2 class="heading">TEMPERATURE</h2>
                  <h1 class="temp">63°</h1>
                  <div class="flex row mt-auto">
                    <div class="humidity-icon">
                      <i class="ri-sun-fill"></i>
                    </div>
                    <div class="flex col">
                      <h4 class="day-time">MORNING</h4>
                      <h4 class="temp-value">64°</h4>
                    </div>
                  </div>
                  <div class="flex row mt-15">
                    <div class="humidity-icon">
                      <i class="ri-sun-fill"></i>
                    </div>
                    <div class="flex col">
                      <h4 class="day-time">NIGHT</h4>
                      <h4 class="temp-value">79°</h4>
                    </div>
                  </div>
                </div>
                <div class="indicator"></div>
              </div>
            </div>
            <div class="flex row justify-between p">
              <div class="flex row items-center">
                <i class="ri-settings-3-fill"></i>
                <span class="settings">Settings</span>
              </div>
              <label class="flex row items-center">
                <div class="switch">
                  <input type="checkbox" />
                  <div class="switch-bg"></div>
                  <div class="switch-indicator"></div>
                </div>
                <span class="switch-label">On</span>
              </label>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
