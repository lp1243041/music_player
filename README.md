# 音频播放器

一个基于 React + Vite 构建的现代化音频播放器，完美适配移动端设备。

## 功能特性

- 🎵 支持 MP3 等主流音频格式播放
- 📱 完美适配移动端，响应式设计
- 🎨 优雅的UI设计，圆形专辑封面
- ⏯️ 播放/暂停控制
- 📊 音频进度条控制
- ⏱️ 实时时间显示
- 🌟 现代化的毛玻璃效果

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 添加资源文件

将以下文件放置到 `public` 目录：

- `bg.jpg` - 背景图片（建议 1080x1920 竖屏比例）
- `cover.jpg` - 专辑封面（建议 500x500 正方形）
- `audio.mp3` - 音频文件

### 3. 本地开发

```bash
npm run dev
```

访问 `http://localhost:3000` 查看效果

### 4. 构建项目

```bash
npm run build
```

## 部署到 Vercel

### 方法一：通过 Git 仓库部署

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. Vercel 会自动检测为 Vite 项目并配置构建

### 方法二：通过 Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel --prod
```

## 项目结构

```
musicPlayer/
├── public/           # 静态资源
│   ├── index.html   
│   ├── bg.jpg       # 背景图片
│   ├── cover.jpg    # 专辑封面
│   └── audio.mp3    # 音频文件
├── src/             # 源代码
│   ├── App.jsx      # 主组件
│   ├── App.module.css # 样式文件
│   └── main.jsx     # 入口文件
├── package.json
├── vite.config.js
└── vercel.json      # Vercel 配置
```

## 技术栈

- **React 18** - 用户界面库
- **Vite** - 构建工具
- **CSS Modules** - 样式管理
- **Vercel** - 部署平台

## 浏览器支持

- Chrome (推荐)
- Safari
- Firefox
- Edge

## 移动端适配

项目针对以下设备进行了优化：
- iPhone (所有尺寸)
- Android 手机
- 平板设备

## 自定义配置

你可以在 `src/App.jsx` 中修改：
- 歌曲标题和副标题
- 品牌名称
- 底部文字信息

在 `src/App.module.css` 中自定义：
- 颜色主题
- 字体大小
- 布局间距

## 许可证

MIT License 