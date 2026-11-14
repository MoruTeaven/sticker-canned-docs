<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  window.setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

const WEB_APP_URL = 'https://app.sticker.moruteaven.com/'
const PLUGIN_URL = 'https://www.u-tools.cn/plugins/detail/%E8%A1%A8%E6%83%85%E7%BD%90%E5%A4%B4/'

const heroHighlights = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4"></path>
      <path d="m16.2 7.8 2.9-2.9"></path>
      <path d="M18 12h4"></path>
      <path d="m16.2 16.2 2.9 2.9"></path>
      <path d="M12 18v4"></path>
      <path d="m4.9 19.1 2.9-2.9"></path>
      <path d="M2 12h4"></path>
      <path d="m4.9 4.9 2.9 2.9"></path>
    </svg>`,
    label: '一键呼出'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>`,
    label: '本地优先'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>`,
    label: '隐私可靠'
  }
]

const previewTags = ['收藏', '摸鱼', '开会', '猫咪', '回复']

const previewItems = [
  { title: '收到', desc: '确认回复' },
  { title: '稍等', desc: '缓冲一下' },
  { title: '在忙', desc: '快速说明' },
  { title: '赞同', desc: '顺手表达' },
  { title: '加油', desc: '鼓励一下' },
  { title: '下班', desc: '今日收工' }
]

const platforms = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>`,
    accent: 'var(--tk-tomato)',
    badge: '推荐',
    title: '表情罐头 Web 版',
    description: '浏览器打开即用，无需安装。搜索、浏览、收藏一站完成，随时随地管理你的表情素材库。',
    linkText: '打开网页版',
    link: WEB_APP_URL,
    external: true
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>`,
    accent: 'var(--tk-sun)',
    badge: '',
    title: 'uTools 插件',
    description: 'Alt + Space 一键呼出，关键词即刻定位表情并发送，深度集成 uTools 全局搜索与超级面板。',
    linkText: '前往插件商店',
    link: PLUGIN_URL,
    external: true
  }
]

const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>`,
    accent: 'var(--tk-tomato)',
    title: '快速搜索',
    description: '输入关键词即可定位表情，减少翻找文件夹和聊天收藏的时间。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>`,
    accent: 'var(--tk-sun)',
    title: '收藏管理',
    description: '将高频表情沉淀为收藏，常用内容可以更快被呼出和发送。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>`,
    accent: 'var(--tk-mint)',
    title: '本地/云端混合存储',
    description: '兼顾本地隐私与云端同步，按自己的使用方式管理资源。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>`,
    accent: 'var(--tk-sky)',
    title: '多标签搜索',
    description: '通过多维标签筛选表情，将复杂的表情库整理成清晰索引。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>`,
    accent: 'var(--tk-pink)',
    title: '聚合搜索',
    description: '一次输入，同时检索本地收藏与在线图库，结果聚合呈现。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <circle cx="11" cy="11" r="1"></circle>
    </svg>`,
    accent: 'var(--tk-mint)',
    title: '多种图床支持',
    description: 'imgBB、图仓等主流图床自由搭配，存储方案随需求灵活扩展。'
  }
]

const docCards = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>`,
    accent: 'var(--tk-tomato)',
    title: '快速上手',
    description: '安装插件、呼出面板、发送第一张表情，三步完成。',
    link: '/guide/getting-started'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>`,
    accent: 'var(--tk-mint)',
    title: '存储配置',
    description: 'imgBB、图仓等图床的接入与切换方法，逐项图解。',
    link: '/guide/storage/'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>`,
    accent: 'var(--tk-sky)',
    title: '更新日志',
    description: '各端版本的功能演进与修复记录，持续更新。',
    link: '/changelog'
  }
]

const stats = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>`,
    accent: 'var(--tk-tomato)',
    title: '轻量高效',
    label: '毫秒级呼出与检索，不拖慢聊天节奏'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5"></path>
    </svg>`,
    accent: 'var(--tk-mint)',
    title: '简单易用',
    label: '零学习成本，打开就能找到想要的表情'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
    </svg>`,
    accent: 'var(--tk-sky)',
    title: '安全可靠',
    label: '数据归属清晰，本地与云端都由你掌控'
  }
]
</script>

<template>
  <div class="home">
    <section class="hero" :class="{ loaded: isLoaded }">
      <div class="hero-background" aria-hidden="true">
        <span class="sticker sticker-can">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <ellipse cx="24" cy="10" rx="14" ry="5"></ellipse>
            <path d="M10 10v26c0 3 6 6 14 6s14-3 14-6V10"></path>
            <path d="M10 20c0 3 6 6 14 6s14-3 14-6"></path>
          </svg>
        </span>
        <span class="sticker sticker-smile">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <rect x="8" y="8" width="32" height="32" rx="10"></rect>
            <circle cx="18" cy="21" r="1.6" fill="currentColor" stroke="none"></circle>
            <circle cx="30" cy="21" r="1.6" fill="currentColor" stroke="none"></circle>
            <path d="M17 29c2.5 3 11.5 3 14 0"></path>
          </svg>
        </span>
        <span class="sticker sticker-star">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M24 6l5.6 12.3L43 20l-9.5 8.7L36.5 42 24 35.2 11.5 42l3-13.3L5 20l13.4-1.7z"></path>
          </svg>
        </span>
      </div>

      <div class="hero-content">
        <div class="hero-copy">
          <div class="eyebrow">
            <span class="eyebrow-dot"></span>
            多端表情包管理平台
          </div>

          <h1 class="title">
            <span class="title-cn">搜罗表情<em>一罐装</em></span>
            <span class="title-en">表情罐头 · Emoji Can</span>
          </h1>

          <p class="description">
            网页版与 uTools 插件共享同一份素材库：聚合搜索、收藏、标签和本地/云端存储，把零散表情整理成随叫随到的个人资源站。
          </p>

          <div class="actions">
            <a :href="WEB_APP_URL" class="action-button primary">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              打开网页版
            </a>
            <a :href="PLUGIN_URL" target="_blank" rel="noreferrer" class="action-button secondary">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              下载 uTools 插件
            </a>
          </div>

          <div class="hero-features">
            <div class="hero-feature" v-for="item in heroHighlights" :key="item.label">
              <span class="hero-feature-icon" v-html="item.icon"></span>
              <span class="feature-label">{{ item.label }}</span>
            </div>
          </div>
        </div>

        <div class="hero-preview" aria-label="表情罐头网页版界面预览">
          <div class="preview-shell">
            <div class="preview-toolbar">
              <div class="window-dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="preview-address">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>app.sticker.moruteaven.com</span>
              </div>
            </div>

            <div class="preview-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span>搜索表情包，如：熊猫头 / 开心 / 迷茫…</span>
            </div>

            <div class="preview-tags">
              <span v-for="tag in previewTags" :key="tag">{{ tag }}</span>
            </div>

            <div class="preview-grid">
              <div
                class="preview-card"
                v-for="(item, index) in previewItems"
                :key="item.title"
                :style="{ animationDelay: `${index * 0.06}s` }"
              >
                <span class="preview-card-mark">{{ index + 1 }}</span>
                <span class="preview-card-title">{{ item.title }}</span>
                <span class="preview-card-desc">{{ item.desc }}</span>
              </div>
            </div>

            <div class="preview-status">
              <span class="status-dot"></span>
              网页版 · 打开即用
            </div>
          </div>

          <div class="preview-floating-card card-search">
            <span class="floating-number">01</span>
            <span>聚合搜索</span>
          </div>
          <div class="preview-floating-card card-sync">
            <span class="floating-number">02</span>
            <span>多端同步</span>
          </div>
        </div>
      </div>
    </section>

    <section class="platforms">
      <div class="section-header">
        <span class="section-kicker">Cross Platform</span>
        <h2 class="section-title">一个表情库，<em>多端随行</em></h2>
        <p class="section-description">同一份收藏与标签体系，在浏览器和桌面工具里保持一致的体验。</p>
      </div>

      <div class="platform-grid">
        <article
          class="sticker-card platform-card"
          :class="{ featured: platform.badge }"
          v-for="platform in platforms"
          :key="platform.title"
          :style="{ '--accent': platform.accent }"
        >
          <span class="card-topline" aria-hidden="true"></span>
          <span class="platform-badge" v-if="platform.badge">{{ platform.badge }}</span>
          <div class="platform-icon" v-html="platform.icon"></div>
          <h3>{{ platform.title }}</h3>
          <p>{{ platform.description }}</p>
          <a
            class="platform-link"
            :href="platform.link"
            :target="platform.external ? '_blank' : undefined"
            :rel="platform.external ? 'noreferrer' : undefined"
          >
            {{ platform.linkText }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </article>
      </div>
    </section>

    <section class="features">
      <div class="section-header">
        <span class="section-kicker">Core Features</span>
        <h2 class="section-title">核心功能</h2>
        <p class="section-description">从搜索到存储，围绕日常聊天场景减少每一次重复操作。</p>
      </div>

      <div class="feature-grid">
        <article
          class="sticker-card feature-card"
          v-for="(feature, index) in features"
          :key="feature.title"
          :style="{ '--accent': feature.accent, animationDelay: `${index * 0.08}s` }"
        >
          <span class="card-topline" aria-hidden="true"></span>
          <span class="feature-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="feature-icon" v-html="feature.icon"></div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section class="docs-nav">
      <div class="section-header">
        <span class="section-kicker">Documentation</span>
        <h2 class="section-title">上手与配置，<em>一步到位</em></h2>
        <p class="section-description">按场景整理的使用指南，跟着走就能把表情罐头用顺。</p>
      </div>

      <div class="docs-grid">
        <a
          class="sticker-card doc-card"
          v-for="(doc, index) in docCards"
          :key="doc.title"
          :href="doc.link"
          :style="{ '--accent': doc.accent, animationDelay: `${index * 0.08}s` }"
        >
          <span class="card-topline" aria-hidden="true"></span>
          <div class="doc-icon" v-html="doc.icon"></div>
          <div class="doc-copy">
            <h3>{{ doc.title }}</h3>
            <p>{{ doc.description }}</p>
          </div>
          <svg class="doc-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-shell">
        <div class="stats-heading">
          <span class="section-kicker">Designed For Chat</span>
          <h2>让表情管理更贴近真实使用</h2>
          <p>保持轻量、简单和可控，不把整理表情变成另一件麻烦事。</p>
        </div>

        <div class="stats-container">
          <div
            class="sticker-card stat-item"
            v-for="stat in stats"
            :key="stat.title"
            :style="{ '--accent': stat.accent }"
          >
            <span class="card-topline" aria-hidden="true"></span>
            <div class="stat-icon" v-html="stat.icon"></div>
            <div class="stat-content">
              <span class="stat-number">{{ stat.title }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="footer-section">
      <div class="footer-content">
        <p class="footer-text">
          网页版打开即用；桌面端输入 <code>表情罐头</code> 或 <code>表情包</code> 快速启动，也可以把常用内容固定为收藏。
        </p>
        <div class="footer-links">
          <a :href="WEB_APP_URL">打开网页版</a>
          <span class="divider">|</span>
          <a :href="PLUGIN_URL" target="_blank" rel="noreferrer">下载插件</a>
          <span class="divider">|</span>
          <a href="/guide/getting-started">使用文档</a>
          <span class="divider">|</span>
          <a href="/guide/storage/">存储配置</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ============ 贴纸风设计系统（对齐网页版 app.sticker.moruteaven.com） ============ */
.home {
  --tk-bg: #fff6ea;
  --tk-paper: #ffffff;
  --tk-ink: #16130e;
  --tk-muted: #837666;
  --tk-line: #16130e;
  --tk-soft: #fdf0df;
  --tk-dot: rgba(22, 19, 14, 0.08);
  --tk-tomato: #ff5a3c;
  --tk-sun: #ffc83d;
  --tk-mint: #22c7a9;
  --tk-sky: #4d8dff;
  --tk-pink: #ff8fb1;
  --tk-bd: 3px solid var(--tk-line);
  --tk-bd2: 2px solid var(--tk-line);
  --tk-sh: 5px 5px 0 var(--tk-line);
  --tk-sh-lg: 8px 8px 0 var(--tk-line);
  --tk-r: 18px;
  --tk-f-disp: 'ZCOOL KuaiLe', 'Fredoka', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
  --tk-f-num: 'Fredoka', 'PingFang SC', 'Microsoft YaHei', sans-serif;

  background-color: var(--tk-bg);
  background-image: radial-gradient(var(--tk-dot) 1.5px, transparent 1.5px);
  background-size: 18px 18px;
  color: var(--tk-ink);
  font-family: 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
}

.dark .home {
  --tk-bg: #171411;
  --tk-paper: #211d18;
  --tk-ink: #f2e9db;
  --tk-muted: #a2937f;
  --tk-line: #efe6d8;
  --tk-soft: #262118;
  --tk-dot: rgba(242, 233, 219, 0.09);
}

/* ============ Hero ============ */

.hero {
  position: relative;
  padding: calc(var(--vp-nav-height, 64px) + 64px) 24px 96px;
  overflow: hidden;
}

.hero-content {
  position: relative;
  max-width: var(--vp-layout-max-width, 1480px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  align-items: center;
  gap: 56px;
}

.hero-copy {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.hero.loaded .hero-copy {
  opacity: 1;
  transform: translateY(0);
}

/* 漂浮手绘贴纸 */
.sticker {
  position: absolute;
  display: grid;
  place-items: center;
  animation: sticker-bob 7s ease-in-out infinite;
}

.sticker svg {
  width: 100%;
  height: 100%;
}

.sticker-can {
  width: 64px;
  height: 64px;
  top: 14%;
  left: 5%;
  color: var(--tk-tomato);
  transform: rotate(-12deg);
}

.sticker-smile {
  width: 52px;
  height: 52px;
  top: 20%;
  right: 6%;
  color: var(--tk-sky);
  transform: rotate(10deg);
  animation-delay: -2.4s;
}

.sticker-star {
  width: 44px;
  height: 44px;
  bottom: 16%;
  left: 3%;
  color: var(--tk-sun);
  transform: rotate(-6deg);
  animation-delay: -4.8s;
}

@keyframes sticker-bob {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -12px; }
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 7px 16px;
  border-radius: 999px;
  background: var(--tk-sun);
  border: var(--tk-bd2);
  color: var(--tk-ink);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  box-shadow: 3px 3px 0 var(--tk-line);
}

.eyebrow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--tk-tomato);
  border: 2px solid var(--tk-line);
}

.title {
  display: flex;
  flex-direction: column;
  margin: 26px 0 0;
  border: none;
  padding: 0;
}

.title-cn {
  font-family: var(--tk-f-disp);
  font-weight: 900;
  font-size: clamp(2.4rem, 5.4vw, 3.6rem);
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: var(--tk-ink);
}

.title-cn em {
  font-style: normal;
  color: var(--tk-tomato);
  background: linear-gradient(transparent 62%, var(--tk-sun) 62%, var(--tk-sun) 92%, transparent 92%);
  padding: 0 4px;
}

.title-en {
  margin-top: 10px;
  font-family: var(--tk-f-num);
  font-weight: 700;
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--tk-muted);
}

.description {
  margin: 18px 0 0;
  max-width: 560px;
  font-size: 15.5px;
  line-height: 1.8;
  color: var(--tk-muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 26px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.action-button.primary {
  background: var(--tk-tomato);
  color: #ffffff;
  border: var(--tk-bd);
  box-shadow: 4px 4px 0 var(--tk-line);
}

.action-button.primary:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--tk-line);
}

.action-button.secondary {
  background: var(--tk-paper);
  color: var(--tk-ink);
  border: var(--tk-bd);
  box-shadow: 4px 4px 0 var(--tk-line);
}

.action-button.secondary:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--tk-line);
}

.hero-features {
  display: flex;
  gap: 16px;
  margin-top: 34px;
}

.hero-feature {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--tk-paper);
  border: var(--tk-bd2);
  color: var(--tk-ink);
  font-size: 13px;
  font-weight: 600;
  box-shadow: 3px 3px 0 var(--tk-line);
}

.hero-feature-icon {
  display: grid;
  place-items: center;
  color: var(--tk-tomato);
}

.hero-feature-icon svg {
  width: 16px;
  height: 16px;
}

/* ============ Hero 预览窗 ============ */

.hero-preview {
  position: relative;
  opacity: 0;
  transform: translateY(24px) scale(0.98);
  transition: opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s;
}

.hero.loaded .hero-preview {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.preview-shell {
  position: relative;
  border-radius: var(--tk-r);
  background: var(--tk-paper);
  border: var(--tk-bd);
  box-shadow: var(--tk-sh-lg);
  padding: 0 20px 18px;
  overflow: visible;
}

.preview-toolbar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0 10px;
  border-bottom: var(--tk-bd2);
  margin: 0 -20px 16px;
  padding-left: 16px;
  padding-right: 16px;
}

.window-dots {
  display: flex;
  gap: 7px;
}

.window-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--tk-line);
}

.window-dots span:nth-child(1) { background: var(--tk-tomato); }
.window-dots span:nth-child(2) { background: var(--tk-sun); }
.window-dots span:nth-child(3) { background: var(--tk-mint); }

.preview-address {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 14px;
  border-radius: 999px;
  background: var(--tk-soft);
  border: var(--tk-bd2);
  color: var(--tk-muted);
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.preview-address svg {
  color: var(--tk-tomato);
}

.preview-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  border-radius: 999px;
  background: var(--tk-paper);
  border: var(--tk-bd);
  box-shadow: 3px 3px 0 var(--tk-line);
  color: var(--tk-muted);
  font-size: 14px;
}

.preview-search svg {
  color: var(--tk-tomato);
}

.preview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 16px;
}

.preview-tags span {
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 700;
  background: var(--tk-paper);
  color: var(--tk-ink);
  border: var(--tk-bd2);
  box-shadow: 2px 2px 0 var(--tk-line);
}

.preview-tags span:first-child {
  background: var(--tk-sun);
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 16px;
}

.preview-card {
  position: relative;
  padding: 12px 10px 10px;
  border-radius: 12px;
  background: var(--tk-soft);
  border: var(--tk-bd2);
  display: flex;
  flex-direction: column;
  gap: 3px;
  opacity: 0;
  animation: card-in 0.5s ease forwards;
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.preview-card-mark {
  position: absolute;
  top: 7px;
  right: 9px;
  font-family: var(--tk-f-num);
  font-size: 10px;
  font-weight: 700;
  color: var(--tk-muted);
}

.preview-card-title {
  font-size: 14px;
  font-weight: 800;
  color: var(--tk-ink);
}

.preview-card-desc {
  font-size: 11.5px;
  color: var(--tk-muted);
}

.preview-status {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding-top: 13px;
  border-top: 2px dashed var(--tk-line);
  font-size: 12.5px;
  font-weight: 600;
  color: var(--tk-muted);
}

.status-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--tk-mint);
  border: 2px solid var(--tk-line);
  animation: dot-pulse 2.4s ease-in-out infinite;
}

@keyframes dot-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.25); }
}

.preview-floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--tk-sun);
  border: var(--tk-bd2);
  box-shadow: 4px 4px 0 var(--tk-line);
  font-size: 13.5px;
  font-weight: 800;
  color: var(--tk-ink);
  animation: float-card 6s ease-in-out infinite;
}

.floating-number {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--tk-paper);
  border: 2px solid var(--tk-line);
  font-family: var(--tk-f-num);
  font-size: 11px;
  font-weight: 800;
  color: var(--tk-ink);
}

.card-search {
  top: 22px;
  left: -26px;
}

.card-sync {
  bottom: 36px;
  right: -22px;
  background: var(--tk-paper);
  animation-delay: -3s;
}

@keyframes float-card {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-9px); }
}

/* ============ Section 通用 ============ */

.section-header {
  max-width: 640px;
  margin: 0 auto 44px;
  text-align: center;
}

.section-kicker {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 999px;
  background: var(--tk-paper);
  border: var(--tk-bd2);
  box-shadow: 3px 3px 0 var(--tk-line);
  font-family: var(--tk-f-num);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tk-tomato);
}

.section-title {
  margin: 16px 0 0;
  font-family: var(--tk-f-disp);
  font-weight: 900;
  font-size: clamp(1.6rem, 3.4vw, 2.2rem);
  letter-spacing: 0.02em;
  color: var(--tk-ink);
  border-top: none;
  padding-top: 0;
}

.section-title em {
  font-style: normal;
  color: var(--tk-tomato);
  background: linear-gradient(transparent 62%, var(--tk-sun) 62%, var(--tk-sun) 92%, transparent 92%);
  padding: 0 4px;
}

.section-description {
  margin: 14px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: var(--tk-muted);
}

/* ============ 贴纸卡片 ============ */

.sticker-card {
  position: relative;
  background: var(--tk-paper);
  border: var(--tk-bd);
  border-radius: var(--tk-r);
  box-shadow: var(--tk-sh);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.sticker-card:hover {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 var(--tk-line);
}

.card-topline {
  position: absolute;
  top: 0;
  left: 14px;
  right: 14px;
  height: 7px;
  border-radius: 0 0 6px 6px;
  background: var(--accent, var(--tk-tomato));
  border: var(--tk-bd2);
  border-top: none;
}

/* ============ 多端矩阵 ============ */

.platforms {
  padding: 72px 24px;
}

.platform-grid {
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 26px;
}

.platform-card {
  padding: 34px 28px 26px;
}

.platform-card.featured {
  background:
    linear-gradient(160deg, rgba(255, 90, 60, 0.08), transparent 45%),
    var(--tk-paper);
}

.platform-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 13px;
  border-radius: 999px;
  background: var(--tk-sun);
  border: var(--tk-bd2);
  font-size: 12px;
  font-weight: 800;
  color: var(--tk-ink);
  box-shadow: 2px 2px 0 var(--tk-line);
}

.platform-icon {
  width: 58px;
  height: 58px;
  margin-bottom: 18px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background: var(--tk-soft);
  border: var(--tk-bd2);
  color: var(--tk-ink);
}

.platform-icon svg {
  width: 30px;
  height: 30px;
}

.platform-card h3 {
  margin: 0;
  font-family: var(--tk-f-disp);
  font-size: 19px;
  font-weight: 900;
  color: var(--tk-ink);
  border-top: none;
  padding-top: 0;
}

.platform-card p {
  margin: 10px 0 18px;
  font-size: 14px;
  line-height: 1.75;
  color: var(--tk-muted);
}

.platform-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  font-weight: 800;
  color: var(--tk-tomato);
  text-decoration: none;
  transition: gap 0.2s ease;
}

.platform-link:hover {
  gap: 11px;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

/* ============ 核心功能 ============ */

.features {
  padding: 40px 24px 72px;
}

.feature-grid {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  padding: 28px 24px 24px;
  opacity: 0;
  animation: card-in 0.55s ease forwards;
}

.feature-index {
  position: absolute;
  top: 18px;
  right: 20px;
  font-family: var(--tk-f-num);
  font-size: 13px;
  font-weight: 800;
  color: var(--tk-muted);
}

.feature-icon {
  width: 54px;
  height: 54px;
  margin-bottom: 16px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background: var(--tk-soft);
  border: var(--tk-bd2);
  color: var(--tk-ink);
}

.feature-icon svg {
  width: 26px;
  height: 26px;
}

.feature-card h3 {
  margin: 0;
  font-family: var(--tk-f-disp);
  font-size: 17px;
  font-weight: 900;
  color: var(--tk-ink);
  border-top: none;
  padding-top: 0;
}

.feature-card p {
  margin: 9px 0 0;
  font-size: 13.8px;
  line-height: 1.7;
  color: var(--tk-muted);
}

/* ============ 文档导航 ============ */

.docs-nav {
  padding: 40px 24px 72px;
}

.docs-grid {
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}

.doc-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 20px 20px;
  text-decoration: none;
  opacity: 0;
  animation: card-in 0.55s ease forwards;
}

.doc-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: var(--tk-soft);
  border: var(--tk-bd2);
  color: var(--tk-ink);
}

.doc-icon svg {
  width: 22px;
  height: 22px;
}

.doc-copy {
  flex: 1;
  min-width: 0;
}

.doc-copy h3 {
  margin: 0;
  font-family: var(--tk-f-disp);
  font-size: 15.5px;
  font-weight: 900;
  color: var(--tk-ink);
  border-top: none;
  padding-top: 0;
}

.doc-copy p {
  margin: 5px 0 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--tk-muted);
}

.doc-arrow {
  flex-shrink: 0;
  color: var(--tk-muted);
  transition: transform 0.2s ease, color 0.2s ease;
}

.doc-card:hover .doc-arrow {
  transform: translateX(4px);
  color: var(--tk-tomato);
}

/* ============ 理念 ============ */

.stats-section {
  padding: 40px 24px 80px;
}

.stats-shell {
  max-width: 1080px;
  margin: 0 auto;
}

.stats-heading {
  max-width: 640px;
  margin: 0 auto 44px;
  text-align: center;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 26px 22px 22px;
}

.stat-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: var(--tk-soft);
  border: var(--tk-bd2);
  color: var(--tk-ink);
}

.stat-icon svg {
  width: 24px;
  height: 24px;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-family: var(--tk-f-disp);
  font-size: 16.5px;
  font-weight: 900;
  color: var(--tk-ink);
  letter-spacing: 0.02em;
}

.stat-label {
  font-size: 13px;
  line-height: 1.6;
  color: var(--tk-muted);
}

/* ============ 页脚 ============ */

.footer-section {
  padding: 40px 24px 56px;
  border-top: var(--tk-bd2);
}

.footer-content {
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  margin: 0 0 18px;
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--tk-muted);
}

.footer-text code {
  padding: 2px 9px;
  border-radius: 999px;
  background: var(--tk-paper);
  border: var(--tk-bd2);
  color: var(--tk-ink);
  font-size: 12.5px;
  font-weight: 700;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 13.5px;
}

.footer-links a {
  color: var(--tk-ink);
  text-decoration: none;
  font-weight: 700;
}

.footer-links a:hover {
  color: var(--tk-tomato);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

.footer-links .divider {
  color: var(--tk-muted);
  opacity: 0.6;
}

/* ============ 响应式 ============ */

@media (max-width: 960px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .hero-preview {
    max-width: 560px;
    margin: 0 auto;
    width: 100%;
  }

  .card-search {
    left: 4px;
  }

  .card-sync {
    right: 4px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: calc(var(--vp-nav-height, 64px) + 36px);
    padding-bottom: 64px;
  }

  .hero-features {
    flex-wrap: wrap;
    gap: 12px;
  }

  .preview-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sticker-can { width: 44px; height: 44px; left: 2%; }
  .sticker-smile { width: 38px; height: 38px; right: 2%; }
  .sticker-star { display: none; }

  .platform-grid,
  .docs-grid,
  .stats-container {
    grid-template-columns: 1fr;
  }
}

/* 尊重动效偏好 */
@media (prefers-reduced-motion: reduce) {
  .sticker,
  .preview-floating-card,
  .status-dot {
    animation: none;
  }

  .preview-card,
  .feature-card,
  .doc-card {
    animation-duration: 0.01s;
  }
}
</style>
