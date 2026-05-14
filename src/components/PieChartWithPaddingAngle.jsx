'use client';

import React from 'react';
import { Pie, PieChart, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFriend } from '@/context/FriendContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {
  const { events } = useFriend();

  const callCount = events.filter((e) => e.type === 'call').length;
  const textCount = events.filter((e) => e.type === 'text').length;
  const videoCount = events.filter((e) => e.type === 'video').length;

  const data = [
    { name: 'Call', value: callCount, fill: COLORS[0] },
    { name: 'Text', value: textCount, fill: COLORS[1] },
    { name: 'Video', value: videoCount, fill: COLORS[2] },
  ];

  const total = callCount + textCount + videoCount;

  return (
    <div className="flex justify-center">
      {total === 0 ? (
        <div className="text-center text-black/50">No interaction events yet.</div>
      ) : (
        <div style={{ width: '100%', maxWidth: 500, height: 360 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={100}
                cornerRadius={8}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
