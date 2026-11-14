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
    title: '快速搜索',
    description: '输入关键词即可定位表情，减少翻找文件夹和聊天收藏的时间。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>`,
    title: '收藏管理',
    description: '将高频表情沉淀为收藏，常用内容可以更快被呼出和发送。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>`,
    title: '本地/云端混合存储',
    description: '兼顾本地隐私与云端同步，按自己的使用方式管理资源。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>`,
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
    title: '聚合搜索',
    description: '一次输入，同时检索本地收藏与在线图库，结果聚合呈现。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <circle cx="11" cy="11" r="1"></circle>
    </svg>`,
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
    title: '快速上手',
    description: '安装插件、呼出面板、发送第一张表情，三步完成。',
    link: '/guide/getting-started'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>`,
    title: '存储配置',
    description: 'imgBB、图仓等图床的接入与切换方法，逐项图解。',
    link: '/guide/storage/'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>`,
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
    title: '轻量高效',
    label: '毫秒级呼出与检索，不拖慢聊天节奏'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5"></path>
    </svg>`,
    title: '简单易用',
    label: '零学习成本，打开就能找到想要的表情'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
    </svg>`,
    title: '安全可靠',
    label: '数据归属清晰，本地与云端都由你掌控'
  }
]
</script>

<template>
  <div class="home">
    <section class="hero" :class="{ loaded: isLoaded }">
      <div class="hero-background" aria-hidden="true">
        <div class="bg-gradient"></div>
        <div class="bg-mesh"></div>
        <div class="bg-grid"></div>
        <div class="bg-orb orb-1"></div>
        <div class="bg-orb orb-2"></div>
        <div class="bg-particles">
          <span class="particle" v-for="n in 10" :key="n"></span>
        </div>
      </div>

      <div class="hero-content">
        <div class="hero-copy">
          <div class="eyebrow">
            <span class="eyebrow-dot"></span>
            多端表情包管理平台
          </div>

          <div class="brand-lockup">
            <div class="logo-container">
              <div class="logo-wrapper">
                <div class="logo-glow"></div>
                <div class="logo-ring"></div>
                <img src="/logo.png" alt="表情罐头 Logo" class="logo">
              </div>
            </div>

            <h1 class="title">
              <span class="title-sub">表情罐头</span>
              <span class="title-main">Emoji Can</span>
            </h1>
          </div>

          <p class="tagline">把常用表情装进一个更快的入口</p>
          <p class="description">
            网页版与 uTools 插件共享同一份素材库：聚合搜索、收藏、标签和本地/云端存储，把零散表情整理成随叫随到的个人资源站。
          </p>

          <div class="actions">
            <a
              :href="WEB_APP_URL"
              class="action-button primary"
            >
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              打开网页版
            </a>
            <a
              :href="PLUGIN_URL"
              target="_blank"
              rel="noreferrer"
              class="action-button secondary"
            >
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>app.sticker.moruteaven.com</span>
              </div>
            </div>

            <div class="preview-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span>搜索 摸鱼 猫咪 回复</span>
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
        <h2 class="section-title">一个表情库，多端随行</h2>
        <p class="section-description">同一份收藏与标签体系，在浏览器和桌面工具里保持一致的体验。</p>
      </div>

      <div class="platform-grid">
        <article
          class="platform-card"
          :class="{ featured: platform.badge }"
          v-for="(platform, index) in platforms"
          :key="platform.title"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <span class="platform-badge" v-if="platform.badge">{{ platform.badge }}</span>
          <div class="platform-icon-wrapper">
            <div class="platform-icon-bg"></div>
            <div class="platform-icon" v-html="platform.icon"></div>
          </div>
          <h3>{{ platform.title }}</h3>
          <p>{{ platform.description }}</p>
          <a
            class="platform-link"
            :href="platform.link"
            :target="platform.external ? '_blank' : undefined"
            :rel="platform.external ? 'noreferrer' : undefined"
          >
            {{ platform.linkText }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
          class="feature-card"
          v-for="(feature, index) in features"
          :key="feature.title"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <span class="feature-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="feature-icon-wrapper">
            <div class="feature-icon-bg"></div>
            <div class="feature-icon" v-html="feature.icon"></div>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section class="docs-nav">
      <div class="section-header">
        <span class="section-kicker">Documentation</span>
        <h2 class="section-title">上手与配置，一步到位</h2>
        <p class="section-description">按场景整理的使用指南，跟着走就能把表情罐头用顺。</p>
      </div>

      <div class="docs-grid">
        <a
          class="doc-card"
          v-for="(doc, index) in docCards"
          :key="doc.title"
          :href="doc.link"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <div class="doc-icon" v-html="doc.icon"></div>
          <div class="doc-copy">
            <h3>{{ doc.title }}</h3>
            <p>{{ doc.description }}</p>
          </div>
          <svg class="doc-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
          <div class="stat-item" v-for="stat in stats" :key="stat.title">
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
.home {
  --home-grad-soft: var(--vp-c-brand-soft);
  overflow-x: hidden;
}

/* ==================== Hero ==================== */

.hero {
  position: relative;
  padding: calc(var(--vp-nav-height, 64px) + 72px) 24px 96px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(60% 50% at 20% 0%, var(--vp-c-brand-soft), transparent 70%),
    radial-gradient(50% 45% at 85% 15%, var(--gc-c-bg-mute), transparent 75%),
    linear-gradient(180deg, var(--gc-c-bg-soft), transparent 60%);
  opacity: 0.9;
}

.bg-mesh {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 30% 30%, var(--vp-c-brand-soft) 0, transparent 40%),
    radial-gradient(circle at 70% 60%, var(--gc-c-bg-mute) 0, transparent 45%);
  filter: blur(40px);
  opacity: 0.6;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--gc-c-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--gc-c-border) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%);
  opacity: 0.5;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  animation: orb-drift 16s ease-in-out infinite alternate;
}

.orb-1 {
  width: 420px;
  height: 420px;
  top: -120px;
  right: -80px;
  background: radial-gradient(circle, var(--vp-c-brand-soft), transparent 70%);
}

.orb-2 {
  width: 320px;
  height: 320px;
  bottom: -60px;
  left: -60px;
  background: radial-gradient(circle, var(--gc-c-bg-mute), transparent 70%);
  animation-delay: -8s;
}

@keyframes orb-drift {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(40px, 30px, 0) scale(1.08);
  }
}

.bg-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--vp-c-brand-3);
  opacity: 0.25;
  animation: particle-float 14s ease-in-out infinite;
}

.particle:nth-child(1) { left: 8%; top: 22%; animation-delay: 0s; }
.particle:nth-child(2) { left: 18%; top: 64%; animation-delay: -2s; }
.particle:nth-child(3) { left: 27%; top: 34%; animation-delay: -4s; }
.particle:nth-child(4) { left: 38%; top: 76%; animation-delay: -6s; }
.particle:nth-child(5) { left: 52%; top: 18%; animation-delay: -8s; }
.particle:nth-child(6) { left: 63%; top: 58%; animation-delay: -3s; }
.particle:nth-child(7) { left: 74%; top: 30%; animation-delay: -5s; }
.particle:nth-child(8) { left: 84%; top: 70%; animation-delay: -7s; }
.particle:nth-child(9) { left: 92%; top: 44%; animation-delay: -9s; }
.particle:nth-child(10) { left: 45%; top: 8%; animation-delay: -11s; }

@keyframes particle-float {
  0%, 100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.18;
  }
  50% {
    transform: translate3d(12px, -22px, 0);
    opacity: 0.4;
  }
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

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  border: 1px solid var(--gc-c-border-strong);
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--vp-c-brand-2);
  box-shadow: 0 0 0 4px var(--vp-c-brand-soft);
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 28px;
}

.logo-container {
  flex-shrink: 0;
}

.logo-wrapper {
  position: relative;
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
}

.logo-glow {
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--vp-c-brand-soft), transparent 70%);
  animation: logo-glow-pulse 4s ease-in-out infinite;
}

@keyframes logo-glow-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.08); }
}

.logo-ring {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  border: 2px solid var(--gc-c-border-strong);
  transition: transform 0.4s ease, border-color 0.4s ease;
}

.logo-wrapper:hover .logo-ring {
  transform: rotate(8deg) scale(1.05);
  border-color: var(--vp-c-brand-2);
}

.logo {
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 14px;
}

.title {
  display: flex;
  flex-direction: column;
  margin: 0;
  border: none;
  padding: 0;
}

.title-sub {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 0.02em;
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.title-main {
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-top: 6px;
}

.tagline {
  margin: 26px 0 0;
  font-size: clamp(1.15rem, 2.4vw, 1.45rem);
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.description {
  margin: 14px 0 0;
  max-width: 560px;
  font-size: 15.5px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 12px 24px;
  border-radius: calc(var(--vp-radius, 0.625rem) + 2px);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
}

.action-button.primary {
  background: var(--vp-c-brand);
  color: #ffffff;
  border: 1px solid transparent;
  box-shadow: 0 8px 24px -8px var(--vp-c-brand-soft);
}

.action-button.primary:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 14px 32px -10px var(--vp-c-brand-soft);
}

.action-button.secondary {
  background: var(--gc-card-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--gc-c-border-strong);
  backdrop-filter: blur(8px);
}

.action-button.secondary:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.hero-features {
  display: flex;
  gap: 28px;
  margin-top: 34px;
}

.hero-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--vp-c-text-2);
  font-size: 13.5px;
  font-weight: 500;
}

.hero-feature-icon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.hero-feature-icon svg {
  width: 17px;
  height: 17px;
}

/* ==================== Hero Preview ==================== */

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
  border-radius: calc(var(--vp-radius, 0.625rem) + 8px);
  background: var(--gc-card-bg);
  border: 1px solid var(--gc-c-border-strong);
  backdrop-filter: blur(14px);
  box-shadow:
    0 24px 60px -24px rgba(15, 23, 42, 0.25),
    0 2px 6px -1px rgba(15, 23, 42, 0.08);
  padding: 0 20px 18px;
  overflow: hidden;
}

.preview-toolbar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0 10px;
  border-bottom: 1px solid var(--gc-c-border);
  margin: 0 -20px 16px;
  padding-left: 16px;
  padding-right: 16px;
}

.window-dots {
  display: flex;
  gap: 7px;
}

.window-dots span {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.window-dots span:nth-child(1) { background: #ff5f57; }
.window-dots span:nth-child(2) { background: #febc2e; }
.window-dots span:nth-child(3) { background: #28c840; }

.preview-address {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 14px;
  border-radius: 999px;
  background: var(--gc-c-bg-mute);
  border: 1px solid var(--gc-c-border);
  color: var(--vp-c-text-2);
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.preview-address svg {
  color: var(--vp-c-brand-2);
}

.preview-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: calc(var(--vp-radius, 0.625rem) + 2px);
  background: var(--gc-c-bg-soft);
  border: 1px solid var(--gc-c-border-strong);
  color: var(--vp-c-text-3);
  font-size: 14px;
}

.preview-search svg {
  color: var(--vp-c-brand-2);
}

.preview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.preview-tags span {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 500;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border: 1px solid transparent;
}

.preview-tags span:first-child {
  border-color: var(--gc-c-border-strong);
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 14px;
}

.preview-card {
  position: relative;
  padding: 12px 10px 10px;
  border-radius: var(--vp-radius, 0.625rem);
  background: var(--gc-c-bg-soft);
  border: 1px solid var(--gc-c-border);
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
  top: 8px;
  right: 10px;
  font-size: 10px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  opacity: 0.7;
}

.preview-card-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.preview-card-desc {
  font-size: 11.5px;
  color: var(--vp-c-text-3);
}

.preview-status {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed var(--gc-c-border);
  font-size: 12.5px;
  color: var(--vp-c-text-2);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-c-brand-2);
  box-shadow: 0 0 0 4px var(--vp-c-brand-soft);
  animation: dot-pulse 2.4s ease-in-out infinite;
}

@keyframes dot-pulse {
  0%, 100% { box-shadow: 0 0 0 4px var(--vp-c-brand-soft); }
  50% { box-shadow: 0 0 0 7px transparent; }
}

.preview-floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: calc(var(--vp-radius, 0.625rem) + 2px);
  background: var(--gc-card-bg);
  border: 1px solid var(--gc-c-border-strong);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 32px -12px rgba(15, 23, 42, 0.3);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  animation: float-card 6s ease-in-out infinite;
}

.floating-number {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 11px;
  font-weight: 800;
}

.card-search {
  top: 34px;
  left: -26px;
}

.card-sync {
  bottom: 40px;
  right: -22px;
  animation-delay: -3s;
}

@keyframes float-card {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-9px); }
}

/* ==================== Section 通用 ==================== */

.section-header {
  max-width: 640px;
  margin: 0 auto 44px;
  text-align: center;
}

.section-kicker {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.section-title {
  margin: 12px 0 0;
  font-size: clamp(1.5rem, 3.2vw, 2.1rem);
  font-weight: 800;
  letter-spacing: 0.01em;
  color: var(--vp-c-text-1);
  border-top: none;
  padding-top: 0;
}

.section-description {
  margin: 14px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

/* ==================== 多端矩阵 ==================== */

.platforms {
  position: relative;
  padding: 72px 24px;
  background: var(--gc-c-bg-soft);
  border-top: 1px solid var(--gc-c-border);
  border-bottom: 1px solid var(--gc-c-border);
}

.platform-grid {
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
}

.platform-card {
  position: relative;
  padding: 30px 28px 26px;
  border-radius: calc(var(--vp-radius, 0.625rem) + 6px);
  background: var(--gc-card-bg);
  border: 1px solid var(--gc-c-border);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-4px);
  border-color: var(--gc-c-border-strong);
  box-shadow: 0 18px 44px -20px rgba(15, 23, 42, 0.28);
}

.platform-card.featured {
  border-color: var(--gc-c-border-strong);
  background:
    linear-gradient(180deg, var(--vp-c-brand-soft), transparent 55%),
    var(--gc-card-bg);
}

.platform-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--vp-c-brand);
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
}

.platform-icon-wrapper {
  position: relative;
  width: 62px;
  height: 62px;
  margin-bottom: 18px;
}

.platform-icon-bg {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  background: var(--vp-c-brand-soft);
  transition: transform 0.35s ease;
}

.platform-card:hover .platform-icon-bg {
  transform: scale(1.06) rotate(-3deg);
}

.platform-icon {
  position: relative;
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  color: var(--vp-c-brand-1);
}

.platform-icon svg {
  width: 30px;
  height: 30px;
}

.platform-card h3 {
  margin: 0;
  font-size: 18.5px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  border-top: none;
  padding-top: 0;
}

.platform-card p {
  margin: 10px 0 18px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.platform-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: gap 0.25s ease;
}

.platform-link:hover {
  gap: 11px;
}

/* ==================== 核心功能 ==================== */

.features {
  padding: 80px 24px;
}

.feature-grid {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.feature-card {
  position: relative;
  padding: 26px 24px;
  border-radius: calc(var(--vp-radius, 0.625rem) + 6px);
  background: var(--gc-card-bg);
  border: 1px solid var(--gc-c-border);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--gc-c-border-strong);
  box-shadow: 0 18px 44px -20px rgba(15, 23, 42, 0.28);
}

.feature-index {
  position: absolute;
  top: 20px;
  right: 22px;
  font-size: 12px;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  opacity: 0.55;
  letter-spacing: 0.08em;
}

.feature-icon-wrapper {
  position: relative;
  width: 54px;
  height: 54px;
  margin-bottom: 16px;
}

.feature-icon-bg {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: var(--vp-c-brand-soft);
  transition: transform 0.35s ease;
}

.feature-card:hover .feature-icon-bg {
  transform: scale(1.06) rotate(-3deg);
}

.feature-icon {
  position: relative;
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  color: var(--vp-c-brand-1);
}

.feature-icon svg {
  width: 26px;
  height: 26px;
}

.feature-card h3 {
  margin: 0;
  font-size: 16.5px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  border-top: none;
  padding-top: 0;
}

.feature-card p {
  margin: 9px 0 0;
  font-size: 13.8px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

/* ==================== 文档导航 ==================== */

.docs-nav {
  padding: 72px 24px 84px;
  background: var(--gc-c-bg-soft);
  border-top: 1px solid var(--gc-c-border);
}

.docs-grid {
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.doc-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 20px;
  border-radius: calc(var(--vp-radius, 0.625rem) + 4px);
  background: var(--gc-card-bg);
  border: 1px solid var(--gc-c-border);
  backdrop-filter: blur(10px);
  text-decoration: none;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.doc-card:hover {
  transform: translateY(-3px);
  border-color: var(--gc-c-border-strong);
  box-shadow: 0 14px 36px -18px rgba(15, 23, 42, 0.26);
}

.doc-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
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
  font-size: 15.5px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  border-top: none;
  padding-top: 0;
}

.doc-copy p {
  margin: 5px 0 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.doc-arrow {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
  transition: transform 0.25s ease, color 0.25s ease;
}

.doc-card:hover .doc-arrow {
  transform: translateX(4px);
  color: var(--vp-c-brand-1);
}

/* ==================== 理念 ==================== */

.stats-section {
  padding: 80px 24px;
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
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 22px;
  border-radius: calc(var(--vp-radius, 0.625rem) + 6px);
  background: var(--gc-card-bg);
  border: 1px solid var(--gc-c-border);
  backdrop-filter: blur(10px);
}

.stat-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
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
  font-size: 16.5px;
  font-weight: 800;
  color: var(--vp-c-text-1);
  letter-spacing: 0.02em;
}

.stat-label {
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* ==================== 页脚 ==================== */

.footer-section {
  padding: 40px 24px 56px;
  border-top: 1px solid var(--gc-c-border);
  background: var(--gc-c-bg-soft);
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
  color: var(--vp-c-text-2);
}

.footer-text code {
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 12.5px;
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
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.25s ease;
}

.footer-links a:hover {
  color: var(--vp-c-brand-1);
}

.footer-links .divider {
  color: var(--vp-c-text-3);
  opacity: 0.6;
}

/* ==================== 响应式 ==================== */

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
    padding-top: calc(var(--vp-nav-height, 64px) + 40px);
    padding-bottom: 64px;
  }

  .hero-features {
    flex-wrap: wrap;
    gap: 14px;
  }

  .preview-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .bg-orb {
    display: none;
  }

  .platform-grid,
  .docs-grid,
  .stats-container {
    grid-template-columns: 1fr;
  }
}

/* ==================== 暗色微调 ==================== */

.dark .preview-shell,
.dark .platform-card,
.dark .feature-card,
.dark .doc-card,
.dark .stat-item,
.dark .preview-floating-card {
  box-shadow: 0 20px 50px -22px rgba(0, 0, 0, 0.55);
}

.dark .action-button.primary {
  background: var(--vp-c-brand-2);
}

.dark .action-button.primary:hover {
  background: var(--vp-c-brand-3);
}

.dark .bg-grid {
  opacity: 0.35;
}

.dark .platform-badge {
  background: var(--vp-c-brand-2);
}
</style>
