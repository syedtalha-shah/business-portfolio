import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const InteractiveCharts = ({ chartData }) => {
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']

  // Transform data for charts
  const revenueData = chartData.revenue?.labels.map((label, index) => ({
    year: label,
    revenue: chartData.revenue.data[index]
  })) || []

  const projectsData = chartData.projects?.labels.map((label, index) => ({
    name: label,
    value: chartData.projects.data[index]
  })) || []

  const growthData = chartData.growth?.labels.map((label, index) => ({
    quarter: label,
    projects: chartData.growth.data[index]
  })) || []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Revenue Line Chart */}
      {chartData.revenue && (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            {chartData.revenue.label}
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Projects Pie Chart */}
      {chartData.projects && (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            {chartData.projects.label}
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {projectsData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={chartData.projects.colors[index] || COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Growth Bar Chart */}
      {chartData.growth && (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md lg:col-span-2">
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            {chartData.growth.label}
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="quarter" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="projects" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default InteractiveCharts

