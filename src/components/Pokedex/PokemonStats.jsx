import React, { useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const statNames = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defensa',
  'special-attack': 'Ataque Esp.',
  'special-defense': 'Defensa Esp.',
  speed: 'Velocidad'
};

const statColors = {
  hp: { bg: 'rgba(34, 197, 94, 0.3)', border: 'rgba(34, 197, 94, 0.8)', point: 'rgba(34, 197, 94, 1)' },
  attack: { bg: 'rgba(239, 68, 68, 0.3)', border: 'rgba(239, 68, 68, 0.8)', point: 'rgba(239, 68, 68, 1)' },
  defense: { bg: 'rgba(59, 130, 246, 0.3)', border: 'rgba(59, 130, 246, 0.8)', point: 'rgba(59, 130, 246, 1)' },
  'special-attack': { bg: 'rgba(168, 85, 247, 0.3)', border: 'rgba(168, 85, 247, 0.8)', point: 'rgba(168, 85, 247, 1)' },
  'special-defense': { bg: 'rgba(99, 102, 241, 0.3)', border: 'rgba(99, 102, 241, 0.8)', point: 'rgba(99, 102, 241, 1)' },
  speed: { bg: 'rgba(245, 158, 11, 0.3)', border: 'rgba(245, 158, 11, 0.8)', point: 'rgba(245, 158, 11, 1)' }
};

function PokemonStats({ stats }) {
  const [selectedStat, setSelectedStat] = useState('all');

  if (!stats || stats.length === 0) {
    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Estadísticas:</h3>
        <p className="text-gray-500">No hay estadísticas disponibles</p>
      </div>
    );
  }

  // Filtrar stats si se selecciona uno específico
  const filteredStats = selectedStat === 'all'
    ? stats
    : stats.filter(stat => stat.stat.name === selectedStat);

  const labels = filteredStats.map(stat => statNames[stat.stat.name] || stat.stat.name);
  const data = filteredStats.map(stat => stat.base_stat);

  // Calcular el máximo dinámico para el eje radial
  const maxStat = Math.max(...data);
  const dynamicMax = Math.ceil((maxStat + 20) / 10) * 10; // redondear a la decena superior

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Estadísticas Base',
        data,
        backgroundColor: filteredStats.map(stat => statColors[stat.stat.name]?.bg || 'rgba(107, 114, 128, 0.3)'),
        borderColor: filteredStats.map(stat => statColors[stat.stat.name]?.border || 'rgba(107, 114, 128, 0.8)'),
        borderWidth: 3,
        pointBackgroundColor: filteredStats.map(stat => statColors[stat.stat.name]?.point || 'rgba(107, 114, 128, 1)'),
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: filteredStats.map(stat => statColors[stat.stat.name]?.point || 'rgba(107, 114, 128, 1)'),
        pointHoverBorderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: dynamicMax,
        min: 0,
        ticks: {
          display: false, // Quitar los números del centro
        },
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
          lineWidth: 1,
        },
        angleLines: {
          color: 'rgba(107, 114, 128, 0.2)',
          lineWidth: 1,
        },
        pointLabels: {
          color: '#374151',
          font: {
            size: 11,
            weight: '600',
          },
          padding: 15,
          callback: function(value, index) {
            return [value, data[index]];
          }
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 2,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed.r}`;
          }
        }
      },
    },
    elements: {
      line: {
        tension: 0.1,
      },
    },
  };

  return (
    <div className="mt-4">
      <div className="mb-2 flex flex-wrap gap-2 items-center">
        <label className="font-semibold text-gray-700">Filtrar stat:</label>
        <select
          className="border rounded px-2 py-1 text-sm"
          value={selectedStat}
          onChange={e => setSelectedStat(e.target.value)}
        >
          <option value="all">Todas</option>
          {stats.map(stat => (
            <option key={stat.stat.name} value={stat.stat.name}>
              {statNames[stat.stat.name] || stat.stat.name}
            </option>
          ))}
        </select>
      </div>
      {selectedStat === 'all' ? (
        <div className="h-72 bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 absolute">Estadísticas:</h3>
          <Radar data={chartData} options={options} />
        </div>
      ) : (
        <div className="h-48 bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{statNames[selectedStat] || selectedStat}</h3>
          <Bar
            data={{
              labels: [statNames[selectedStat] || selectedStat],
              datasets: [
                {
                  label: statNames[selectedStat] || selectedStat,
                  data: [data[0]],
                  backgroundColor: statColors[selectedStat]?.bg || 'rgba(107, 114, 128, 0.3)',
                  borderColor: statColors[selectedStat]?.border || 'rgba(107, 114, 128, 0.8)',
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              indexAxis: 'y',
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return `Valor: ${context.parsed.x}`;
                    }
                  }
                }
              },
              scales: {
                x: {
                  min: 0,
                  max: dynamicMax,
                  ticks: { color: '#374151', font: { size: 14, weight: 'bold' } },
                  grid: { color: 'rgba(107, 114, 128, 0.1)' },
                },
                y: {
                  ticks: { color: '#374151', font: { size: 14, weight: 'bold' } },
                  grid: { display: false },
                },
              },
            }}
            height={120}
          />
          <div className="mt-4 text-3xl font-bold text-gray-800">{data[0]}</div>
        </div>
      )}
    </div>
  );
}

export default PokemonStats; 
