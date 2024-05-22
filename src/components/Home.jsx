

import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../App.css";
function Home() {
  const [applianceCounter, setApplianceCounter] = useState(1);
  
  const [insulation, setInsulation] = useState("low"); // Default insulation level
  const [results, setResults] = useState({
    perDay: 0,
    perMonth: 0,
    perYear: 0,
  });
  const [inputs, setInputs] = useState([
    { appliance: "", power: "", hours: "", recommendation: "" },
  ]);

  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const pieChartInstance = useRef(null);

  const applianceData = {
    fridge: "Fridge",
    tv: "TV",
    washingMachine: "Washing Machine",
    airConditioner: "Air Conditioner",
    computer: "Computer",
    lights: "Lights",
    microwave: "Microwave",
    oven: "Oven",
    tableFan: "Table Fan",
    iron: "Iron",
    induction: "Induction",
    hairDryer: "Hair Dryer",
  };

  useEffect(() => {
    calculate();
    updateBarChart();
    updatePieChart();
  }, [inputs, insulation]);

  const addAppliance = () => {
    setApplianceCounter((prevCounter) => prevCounter + 1);
    setInputs((prevInputs) => [
      ...prevInputs,
      { appliance: "", power: "", hours: "", recommendation: "" },
    ]);
  };

  const removeAppliance = () => {
    if (applianceCounter > 1) {
      setApplianceCounter((prevCounter) => prevCounter - 1);
      setInputs((prevInputs) => prevInputs.slice(0, -1));
    }
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;

 
    const powerFloat = parseFloat(newInputs[index].power);
    const hoursFloat = parseFloat(newInputs[index].hours);

    if (hoursFloat > 2 && powerFloat > 0) {
      const energyPerDay = (powerFloat * hoursFloat) / 1000;
      if (energyPerDay > 2) {
        newInputs[index]["recommendation"] = `Consider reducing usage for ${applianceData[newInputs[index].appliance]}.`;
      } else {
        newInputs[index]["recommendation"] = `Usage for ${applianceData[newInputs[index].appliance]} is OK.`;
      }
    } else {
      newInputs[index]["recommendation"] = "";
    }

    setInputs(newInputs);
  };

  const handleInsulationChange = (event) => {
    setInsulation(event.target.value);
  };

  const calculate = () => {
    let totalEnergyPerDay = 0;
    let totalEnergyPerMonth = 0;
    let totalEnergyPerYear = 0;

    inputs.forEach(({ power, hours }) => {
      const powerFloat = parseFloat(power);
      const hoursFloat = parseFloat(hours);

      const energyPerDay = (powerFloat * hoursFloat) / 1000;
      const energyPerMonth = energyPerDay * 30;
      const energyPerYear = energyPerMonth * 12;

      totalEnergyPerDay += energyPerDay;
      totalEnergyPerMonth += energyPerMonth;
      totalEnergyPerYear += energyPerYear;
    });

    const insulationFactor = getInsulationFactor(insulation);
    totalEnergyPerDay *= insulationFactor;
    totalEnergyPerMonth *= insulationFactor;
    totalEnergyPerYear *= insulationFactor;

    setResults({
      perDay: totalEnergyPerDay.toFixed(2),
      perMonth: totalEnergyPerMonth.toFixed(2),
      perYear: totalEnergyPerYear.toFixed(2),
    });
  };

  const getInsulationFactor = (insulation) => {
    switch (insulation) {
      case "low":
        return 1;
      case "medium":
        return 0.9;
      case "high":
        return 0.8;
      default:
        return 1;
    }
  };

  const updateBarChart = () => {
    if (barChartInstance.current) {
      barChartInstance.current.data.datasets[0].data = [
        parseFloat(results.perDay),
        parseFloat(results.perMonth),
        parseFloat(results.perYear),
      ];
      barChartInstance.current.update();
    }
  };

  const updatePieChart = () => {
    if (pieChartInstance.current) {
      pieChartInstance.current.data.datasets[0].data = [
        parseFloat(results.perDay),
        parseFloat(results.perMonth),
        parseFloat(results.perYear),
      ];
      pieChartInstance.current.update();
    }
  };

  useEffect(() => {
   
    if (barChartRef && barChartRef.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }

      const ctx = barChartRef.current.getContext("2d");

      barChartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Per Day", "Per Month", "Per Year"],
          datasets: [
            {
              label: "Energy Consumption (kWh)",
              data: [
                parseFloat(results.perDay),
                parseFloat(results.perMonth),
                parseFloat(results.perYear),
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

 
    if (pieChartRef && pieChartRef.current) {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }

      const ctx = pieChartRef.current.getContext("2d");

      pieChartInstance.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Per Day", "Per Month", "Per Year"],
          datasets: [
            {
              label: "Energy Consumption (kWh)",
              data: [
                parseFloat(results.perDay),
                parseFloat(results.perMonth),
                parseFloat(results.perYear),
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [results]);

  return (
    <div className="outer">

    
    <div className="calculator">
      <h1>Calculate</h1>
      <div id="appliances">
        {inputs.map((input, index) => (
          <div key={index} className="equipment">
            <div>
              <label htmlFor={`appliance${index + 1}`}>
                Select Appliance:
              </label>
              <select
                className="appliance"
                id={`appliance${index + 1}`}
                name="appliance"
                value={input.appliance}
                onChange={(e) => handleInputChange(index, e)}
              >
                {Object.keys(applianceData).map((key) => (
                  <option key={key} value={key}>
                    {applianceData[key]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={`power${index + 1}`}>
                <i className="fa-solid fa-bolt"></i> Power Consumption (Watts):
              </label>
              <input
                type="number"
                className="power"
                id={`power${index + 1}`}
                name="power"
                min="1"
                step="1"
                value={input.power}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
            <div>
              <label htmlFor={`hours${index + 1}`}>
                <i className="fa-solid fa-clock-rotate-left"></i> Hours of Use per
                Day:
              </label>
              <input
                type="number"
                className="hours"
                id={`hours${index + 1}`}
                name="hours"
                min="0"
                step="0.5"
                value={input.hours}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
            {input.recommendation && (
              <div className="recommendation">
                <p>{input.recommendation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="insulation">Select Insulation Level:</label>
        <select id="insulation" value={insulation} onChange={handleInsulationChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="butt">
        <button onClick={addAppliance}>Add Appliance</button>
        <button onClick={removeAppliance}>Remove Appliance</button>
      </div>
      <div className="result" id="result">
        <h3>Energy Consumption:</h3>
        <p>Total Energy consumed per day: {results.perDay} kWh/day</p>
        <p>Total Energy consumed per month: {results.perMonth} kWh/month</p>
        <p>Total Energy consumed per year: {results.perYear} kWh/year</p>
      </div>
      <div className="chartcontainer">

      <div className="chart-container">
        <canvas ref={barChartRef} />
      </div>
      <div className="chart-container">
        <canvas ref={pieChartRef} />
      </div>
      </div>
    </div>
    </div>
  );
}

export default Home;

