# 表情罐头 - 文档站

这是表情罐头 for uTools 的官方文档站点，使用 VitePress 构建。

## 特点

- 🎨 **黑白配色** - 简洁优雅的视觉设计
- 📱 **响应式布局** - 完美适配各种设备
- ⚡ **快速加载** - 基于 VitePress 的极致性能
- 🌙 **暗色模式** - 自动适配系统主题

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署到 GitHub Pages

站点通过 GitHub Actions 自动部署到 GitHub Pages，使用自定义域名 `sticker.moruteaven.com`。

### 首次配置

1. 将代码推送到 GitHub 仓库
2. 在仓库 **Settings > Pages** 中，将 **Source** 设置为 **GitHub Actions**
3. 在 DNS 服务商添加 CNAME 记录，将 `sticker.moruteaven.com` 指向 `moruteaven.github.io`
4. 推送代码到 `main` 分支即可自动触发部署

### 部署流程

- 推送到 `main` 分支后，GitHub Actions 会自动构建并部署
- 部署工作流定义在 `.github/workflows/deploy.yml`
- 自定义域名配置在 `docs/public/CNAME`

## 项目结构

```
├── docs/
│   ├── .vitepress/
│   │   ├── components/
│   │   │   └── Home.vue       # 自定义首页组件
│   │   ├── theme/
│   │   │   └── index.ts       # 主题配置
│   │   └── config.ts          # VitePress 配置
│   ├── guide/
│   │   ├── getting-started.md
│   │   ├── usage.md
│   │   └── faq.md
│   ├── public/
│   │   └── CNAME              # GitHub Pages 自定义域名
│   ├── download.md            # 客户端下载页（挂载 DownloadPage）
│   ├── changelog.md           # 更新日志页（挂载 ChangelogPage）
│   └── index.md               # 首页
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 部署工作流
└── package.json
```

## 自定义首页

首页使用自定义 Vue 组件 `Home.vue`，具有以下特点：

- 绿沈之饴（greencandy）主题配色
- 产品主站式布局：网页版入口、多端矩阵、文档导航
- 流畅的加载动画
- 响应式布局
- 暗色模式支持
- 特性展示卡片

## License

MIT
