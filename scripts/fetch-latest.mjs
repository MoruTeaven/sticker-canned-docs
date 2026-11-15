// 构建前拉取表情罐头索引数据（/latest + /stats），写入 docs/.vitepress/data/latest.json
// 容错：任何失败都保留旧快照继续构建，绝不阻塞部署
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const API = 'https://api.sticker.moruteaven.com'
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs', '.vitepress', 'data', 'latest.json')
const TIMEOUT_MS = 15000

async function getJson(url) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { accept: 'application/json' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } finally {
    clearTimeout(timer)
  }
}

function pickItem(it) {
  return {
    id: it.id,
    thumb_url: it.thumb_url,
    source_site: it.source_site,
    keywords: Array.isArray(it.keywords) ? it.keywords.slice(0, 2) : [],
    animated: it.animated === true,
    width: it.width || 240,
    height: it.height || 240
  }
}

function loadExisting() {
  try {
    if (existsSync(OUT)) return JSON.parse(readFileSync(OUT, 'utf8'))
  } catch {}
  return null
}

async function main() {
  mkdirSync(dirname(OUT), { recursive: true })

  let stats = null
  let items = null
  const errors = []

  try {
    const raw = await getJson(`${API}/latest`)
    items = Array.isArray(raw?.items) ? raw.items.map(pickItem) : []
    if (!items.length) errors.push('latest: empty items')
  } catch (e) {
    errors.push(`latest: ${e.message}`)
  }

  try {
    stats = await getJson(`${API}/stats`)
    if (typeof stats?.images !== 'number' || !Array.isArray(stats?.sources)) {
      errors.push('stats: unexpected shape')
      stats = null
    }
  } catch (e) {
    errors.push(`stats: ${e.message}`)
  }

  const prev = loadExisting()
  if (!items && !prev?.items?.length && !stats && !prev?.stats) {
    // 首次且全部失败：写空骨架，页面显示占位而不是构建失败
    writeFileSync(OUT, JSON.stringify({ fetchedAt: new Date().toISOString(), degraded: true, stats: null, items: [] }, null, 2))
    console.warn('[fetch-latest] 全部拉取失败，写入空骨架')
    return
  }

  const doc = {
    fetchedAt: new Date().toISOString(),
    degraded: errors.length > 0,
    stats: stats ?? prev?.stats ?? null,
    items: items ?? prev?.items ?? []
  }
  writeFileSync(OUT, JSON.stringify(doc, null, 2))
  console.log(`[fetch-latest] ok images=${doc.stats?.images ?? '?'} sources=${doc.stats?.sources?.length ?? '?'} items=${doc.items.length}${errors.length ? `（降级: ${errors.join('; ')}）` : ''}`)
}

main().catch((e) => {
  console.warn(`[fetch-latest] 意外失败（保留旧快照继续构建）: ${e.message}`)
  process.exit(0)
})
