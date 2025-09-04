// components/InfoBox.jsx
import React from 'react';

const infobox = ({ children }) => {
  return (
    <div 
      style={{
        backgroundColor: '#f9fafb', // 浅色背景，可根据需要调整
        border: '1px solid #e5e7eb', // 边框样式，平角
        borderRadius: '4px', // 可选：轻微圆角让视觉更柔和，若要完全平角设为 0
        padding: '16px',
        display: 'flex',
        alignItems: 'flex-start',
        margin: '16px 0',
      }}
    >
      {/* 左侧信息图标，这里用文字模拟，也可以用 SVG/Icon 组件 */}
      <span 
        style={{
          color: '#6b7280', 
          marginRight: '8px', 
          fontSize: '18px',
        }}
      >
        ℹ️
      </span>
      <div>{children}</div>
    </div>
  );
};

export default InfoBox;