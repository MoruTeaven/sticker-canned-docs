# 开发规范

## 近期更新

### 2026-11-15
- 新增「爬虫声明」页 /bot（docs/bot.md），与网页版 app.sticker.moruteaven.com/bot.txt 同步：说明 MoruTeaven-bot/0.1 的用途/礼貌参数/索引纪律/退出机制；bot.txt 里声明的官网地址 https://sticker.moruteaven.com/bot 此前 404，本次补齐；docs/public 下新增 bot.txt（逐字副本）+ robots.txt，顶部导航与首页 footer 各加入口
- 「最新收录」卡片改为链接（div → a），href 指向 app.sticker.moruteaven.com/i/<id> 详情页；自有域已在外链白名单，点击直跳无确认页；补 aria-label 与 focus-visible 焦点环
- 「最新收录」卡片 UI 对齐网页版实测样式：CSS 多列瀑布流（column-count:5 / column-gap:16px，图片按原始比例自然撑开不拉伸）、纯图卡片（3px 描边 + 5px 硬阴影 + 18px 圆角）、来源药丸绝对定位叠图片左下角（白底 + 彩色圆点，按 source_site 映射五色板）；移除关键词文字行、棋盘格底、彩色顶条
- 移除首页三张收录统计卡（statCards/fetchedDate 计算属性、stats-inline DOM 与样式一并删除）；收录墙描述与 CTA 仍引用 /stats 的 images 数字
- 首页搜索框做真：表单 GET 提交到 app.sticker.moruteaven.com/search/?q=（自有域已在白名单，无确认页），热词胶囊带火苗图标可点击搜索
- 「最新收录」区（统计三卡 + 14 张表情墙）上移到多端矩阵之前，成为首屏下滑第一内容区；统计卡并入 wall-section（stats-inline）
- 首页接入索引实时数据：构建前经 scripts/fetch-latest.mjs 拉 /latest + /stats 烘进静态页（快照 docs/.vitepress/data/latest.json 随仓库提交兜底），接口异常沿用旧快照不阻塞部署
- 新增收录规模统计卡（已收录/来源站点/索引状态，同 app 三卡布局）与「最新收录」14 张表情墙（含来源徽章与索引版权声明），删除原理念三卡区
- 收录墙 grid 用 minmax(0,1fr) 防图片固有宽度撑爆容器

### 2026-11-14
- 外链确认页白名单加入 moruteaven.com（覆盖全部自有子域，app.sticker.moruteaven.com 直跳）
- 视觉风格对齐已上线的网页版（app.sticker.moruteaven.com 的暖色贴纸风：奶油底 + 点阵、3px 描边 + 硬偏移阴影、tomato/sun/mint/sky/pink 五色板、ZCOOL KuaiLe 标题字体栈）
- 全站品牌色通过 themeConfig.colors 切换为网页版番茄红 #ff5a3c（文档页与首页统一）
- 暗色模式沿用网页版深色方案：暖黑底 + 浅奶油描边
- 域名定位调整：sticker.moruteaven.com 保持为产品主站，网页版使用 app.sticker.moruteaven.com 子域名
- 首页改版为产品主站：网页版入口升为主操作，新增多端矩阵（Web 版 / uTools 插件）与文档导航区
- 新增 /download 客户端下载页与 /changelog 更新日志页（挂载 greencandy 组件，数据沿用 config.ts 既有配置）
- 顶部导航补全：下载、更新日志、网页版入口
- 恢复磁盘零化事故：源码从 GitHub 远端重建工作树与 git 仓库（原 .git 索引与 pack 损坏已更换），依赖经 D 盘 junction 重装以规避 F 盘空间不足

### 2026-08-04
- 从 Vercel 部署切换到 GitHub Pages 部署
- 仓库地址变更为 https://github.com/MoruTeaven/sticker-canned-docs
- 创建 GitHub Actions 自动部署工作流（.github/workflows/deploy.yml）
- 添加自定义域名 CNAME 文件（docs/public/CNAME，域名 sticker.moruteaven.com）
- 删除 vercel.json 配置文件
- 更新 README 部署说明
- 修复 greencandy 主题配置：修复 enhanceApp 覆盖问题（下载页和更新日志页组件现在正确注册）
- 删除 custom.css 文件（避免与 greencandy 主题样式冲突）
- 删除未使用的 Layout.vue 文件
- 移除自定义白色主色调配置，使用 greencandy 默认绿色主题
- 简化 theme/index.ts，直接基于 GreenCandyTheme 扩展
- 修复首页配色：将 Home.vue 中的橙色/紫色自定义配色替换为 greencandy 绿色主题色
- 将 appearance 从 'dark' 改为 true，启用 greencandy 主题模式切换
- 将 @rollup/rollup-win32-x64-msvc 移至 optionalDependencies，修复 GitHub Actions Linux 构建

### 2026-06-25
- 切换到绿沈之饴（greencandy）主题
- 安装 greencandy 主题包
- 更新主题入口文件以使用 greencandy 主题
- 在 config.ts 中添加主题配置（主题色、圆角、阴影、不蒜子统计、外部链接跳转）
- 删除 custom.css 文件，避免与 greencandy 主题样式冲突
- 配置黑色主题风格（白色主色调，深色背景）
- 添加下载页配置（uTools 插件下载）
- 添加更新日志页配置（uTools 插件更新记录）
- 优化搜索配置（启用详细搜索视图）

### 2026-06-13
- 优化了首页设计
- 使用 Noto Sans SC 字体提升中文显示效果
- 优化了 Hero 区域背景效果（新增浮动光球 orb 动画、改进渐变 drift 动画）
- 增加了 logo 悬停时的圆环效果
- 调整了标题层级结构，中文标题为主标题，英文为副标题
- 优化了按钮和卡片的阴影效果，更加柔和
- 精简了装饰元素，移除了多余的 decoration-grid、decoration-circle、decoration-dots
- 优化了粒子动画分布和动效时长
- 改进了 feature-card 悬停效果（调整了上移距离和阴影）
- 优化了 stats-section 的图标和文字大小比例
- 完善了移动端适配，768px 以下隐藏 orb 背景

### 2026-05-17
- 完善了首页视觉效果和交互体验
- 增加了 Hero 区域动态背景效果（渐变、网格、粒子动画）
- 添加了功能区块和统计数据展示区
- 优化了功能卡片的入场动画和悬停效果
- 完善了移动端响应式设计
- 将无数据支撑的统计数据改为功能性描述（轻量高效、简单易用、安全可靠）
- 扩充"核心功能"至6个：快速搜索、收藏管理、本地/云端混合存储、多标签搜索、聚合搜索、多种图床支持

### 2026-05-18
- 配置了页面右侧目录（On this page）显示到四级标题（h2-h4）
- 在 config.ts 中设置 outline.level 为 [2, 4]
- 实现了右侧栏四级菜单嵌套结构
- 优化了文档导航的组织方式，将存储配置按层级分类
- 在 config.ts 中配置了包含 imgBB 和图仓的嵌套菜单
- 修复了 Vercel 构建失败问题，移除了平台特定的 @rollup/rollup-win32-x64-msvc 依赖

## 开发规范

### 代码规范
- 前端开发不要使用 emoji
- 使用 MIT 或 Apache 开源协议的符号库
- 不要使用 GPL 协议的库

### 文件管理
- 进行比较大的更改时，记得更新本 AGENTS.md 文件

## 技术栈
- VitePress 1.3.4
- Vue 3
- TypeScript
- 绿沈之饴（greencandy）主题

## 项目结构
```
docs/
  .vitepress/       # VitePress 配置
    config.ts      # 主配置文件
    theme/         # 主题配置
  guide/           # 用户指南文档
  public/          # 静态资源
    CNAME          # GitHub Pages 自定义域名
.github/
  workflows/
    deploy.yml     # GitHub Actions 部署工作流
```
