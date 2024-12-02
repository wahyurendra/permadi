<script>
import { useLayout } from '@/layout/composables/layout';
import axios from 'axios';
import VueApexCharts from 'vue3-apexcharts';

const { getPrimary, getSurface, isDarkTheme } = useLayout();

export default {
  name: 'App',
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      showMessage: false,
      messageText: [' ','Alert Please Check!','Warning Please Check','Running Normally'],
      messageSeverity: [' ','error','warn','success'],
      breadcrumbHome: { icon: 'pi pi-home', to: '/' },
      breadcrumbItems: [{ label: 'Machine', to: '/machine' }, { label: 'Detail' }, { label: 'Machine1' }],
      chartOptions: {
        chart: {
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        title: {
          text: 'Machine Power Usage',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          min: 0,
          max: 10000,
          title: {
            text: 'Power (Watts)'
          }
        }
      },
      series: [{
        name: 'Power Usage',
        data: []

      }],
      rpmChartOptions: {
        chart: {
          type: 'radialBar',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              margin: 0,
              size: '70%'
            },
            track: {
              background: '#e7e7e7',
              strokeWidth: '97%',
              margin: 5
            },
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: '16px',
                fontWeight: 600,
                offsetY: -10
              },
              value: {
                show: true,
                fontSize: '24px',
                fontWeight: 800,
                formatter: function(val) {
                  return ((val*1500)/100).toFixed(2) + ' RPM';
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Motor Speed'],
        max: 1500
      },
      rpmSeries: [0],
      tempChartOptions: {
        chart: {
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        title: {
          text: 'Temperature Monitoring',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          min: 0,
          max: 100,
          title: {
            text: 'Temperature (°C)'
          }
        },
        legend: {
          show: true
        }
      },
      tempSeries: [
        {
          name: 'Air Temperature',
          data: []
        },
        {
          name: 'Process Temperature',
          data: []
        }
      ],
      maintenancePrediction: {
        status: null,
        confidence: 0
      },
      predictionInterval: null
    }
  },
  methods: {
    updateChart() {
      const lastValue = this.series[0].data.length > 0 
        ? this.series[0].data[this.series[0].data.length - 1].y 
        : 5000; // Starting value if no previous data
      
      const variation = Math.floor(Math.random() * 81) + 20; // Random number between 20 and 100
      const direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose increase or decrease
      
      let newY = lastValue + (variation * direction);
      
      // Keep the value within bounds (0-10000)
      newY = Math.max(0, Math.min(10000, newY));

      const newData = {
        x: new Date().getTime(),
        y: newY
      };

      this.series[0].data.push(newData);

      // Keep only last 10 data points
      if (this.series[0].data.length > 10) {
        this.series[0].data.shift();
      }
    },
    updateRPMChart() {
      const variation = Math.floor(Math.random() * 100) + 50;
      const direction = Math.random() < 0.5 ? -1 : 1;
      const currentRPM = (this.rpmSeries[0]* 1500)/100;
      let newRPM = currentRPM + (variation * direction);
      
      // Keep RPM within 0-1500 range
      newRPM = Math.max(900, Math.min(1500, newRPM));
      this.rpmSeries = [(newRPM/1500)*100];
    },
    updateTemperatures() {
      const currentTime = new Date().getTime();
      
      // Update Air Temperature
      const lastAirTemp = this.tempSeries[0].data.length > 0 
        ? this.tempSeries[0].data[this.tempSeries[0].data.length - 1].y 
        : 25; // Starting at 25°C
      
      const airVariation = Math.random() * 2;
      const airDirection = Math.random() < 0.5 ? -1 : 1;
      let newAirTemp = lastAirTemp + (airVariation * airDirection);
      newAirTemp = Math.max(20, Math.min(35, newAirTemp)); // Keep between 20-35°C
      
      // Update Process Temperature
      const lastProcessTemp = this.tempSeries[1].data.length > 0 
        ? this.tempSeries[1].data[this.tempSeries[1].data.length - 1].y 
        : 60; // Starting at 60°C
      
      const processVariation = Math.random() * 3;
      const processDirection = Math.random() < 0.5 ? -1 : 1;
      let newProcessTemp = lastProcessTemp + (processVariation * processDirection);
      newProcessTemp = Math.max(50, Math.min(80, newProcessTemp)); // Keep between 50-80°C
      
      // Add new data points
      this.tempSeries[0].data.push({
        x: currentTime,
        y: parseFloat(newAirTemp.toFixed(1))
      });
      
      this.tempSeries[1].data.push({
        x: currentTime,
        y: parseFloat(newProcessTemp.toFixed(1))
      });
      
      // Keep only last 10 data points for each series
      if (this.tempSeries[0].data.length > 10) {
        this.tempSeries[0].data.shift();
        this.tempSeries[1].data.shift();
      }
    },
    fetchMaintenancePrediction() {
      const data = {
        type: 2,
        air_temperature: this.tempSeries[0].data.length > 0 
          ? this.tempSeries[0].data[this.tempSeries[0].data.length - 1].y 
          : 25,
        process_temperature: this.tempSeries[1].data.length > 0 
          ? this.tempSeries[1].data[this.tempSeries[1].data.length - 1].y 
          : 60,
        rotational_speed: (this.rpmSeries[0] * 1500) / 100,
        torque: Math.random()*10000,
        tool_wear: Math.random()*10000
      };

      axios.post('http://127.0.0.1:5000/api/v1/machine/predict', data, {
        headers: {
          'Authorization': 'Bearer '+(localStorage.getItem('token') || sessionStorage.getItem('token')),
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        this.maintenancePrediction.status = response.data['message'][0];
      })
      .catch(error => {
        console.error('Prediction error:', error);
      });
    },
    showSuccessMessage() {
      this.showMessage = true;
      
    },



  },
  mounted() {
    setInterval(this.updateChart, 3000);
    setInterval(this.updateRPMChart, 3000);
    setInterval(this.updateTemperatures, 3000);
    setInterval(this.showSuccessMessage, 3000);
    this.predictionInterval = setInterval(this.fetchMaintenancePrediction, 3000);
  }
}
</script>

<template>
  <div id="app">
    <div class="model-container">
      <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
      <Fluid class="grid grid-cols-12 gap-8">
        <div class="col-span-12 xl:col-span-6">
          <div class="card">
            <apexchart
              type="line"
              height="350"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-3">
          <div class="card">
            <apexchart
              type="radialBar"
              height="350"
              :options="rpmChartOptions"
              :series="rpmSeries"
            ></apexchart>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-3">
          <div class="card" :style="{ height: '300px' }">
            <h3>Maintenance Prediction</h3>
            <div class="text-center mt-3">
              <i class="pi pi-cog text-6xl mb-3" 
                 :class="{'text-green-500': maintenancePrediction.status == 3, 
                         'text-yellow-500': maintenancePrediction.status == 2,
                         'text-red-500': maintenancePrediction.status == 1}">
              </i>
              <div>
                <Message v-if="showMessage" :severity="messageSeverity[maintenancePrediction.status]">{{ messageText[maintenancePrediction.status] }}</Message>
              </div>
              <!-- <div class="text-xl font-bold mb-2">
                {{ maintenancePrediction.status || 'Loading...' }}
              </div> -->
              <!-- <div class="text-sm text-500">
                Confidence: {{ maintenancePrediction.confidence }}%
              </div> -->
            </div>

            
          </div>
        </div>
        <div class="col-span-12">
          <div class="card">
            <apexchart
              type="line"
              height="350"
              :options="tempChartOptions"
              :series="tempSeries"
            ></apexchart>
          </div>
        </div>
        <div class="col-span-12">

        </div>

      </Fluid>
    </div>
  </div>
</template>

<style>
.model-container {
  width: 100%;
  height: 500px;
}
</style>
