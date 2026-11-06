# 刘昶旭 / Changxu Liu 的个人网站

基于 Jekyll 的单页学术主页，部署在 <https://austinliu01.github.io/>。
先在本地修改和预览，确认后推送 GitHub Pages。

## 本地开发

首次安装依赖（需要联网）：

```bash
bash bin/setup
```

Apple Silicon Mac 若没有 Ruby 3.2 及以上版本，脚本会下载并校验 Homebrew 的
portable Ruby 3.4.5，安装到项目的 `.local/`，无需 sudo。
其他环境请先安装 Ruby 3.2 及以上版本。macOS 需要 Xcode Command Line Tools。

启动预览：

```bash
bash bin/serve
```

访问 <http://localhost:4000/>。修改内容和样式后会自动构建并刷新；按 `Ctrl+C` 停止。
修改 `_config.yml` 或 `_config.dev.yml` 后需要重启服务。
照片、图标和样式均保存在仓库中，本地预览不依赖外部服务，也不会计入访客统计。

检查生产构建：

```bash
bash bin/build
```

本地预览输出到 `_site/`；生产检查输出到 `.local/production-site/`，互不覆盖。
不要编辑生成文件。`.local/`、`vendor/` 等本地工具和依赖已忽略，不提交；
`Gemfile.lock` 应提交，以固定依赖版本。此项目无需 npm 或前端打包步骤。

## 文件目录

```text
_pages/           首页正文、404 页面和常用旧入口的跳转
_publications/    论文元数据，每篇一个 Markdown 文件
_data/            实习、研究兴趣、News、导航和 CCF 等级
_layouts/         首页、简单页面和旧论文网址的跳转模板
_includes/        SEO、论文条目和访客统计组件
assets/css/       首页样式
assets/js/        访客统计脚本
images/           新证件照、浏览器图标、联系方式图标及其来源说明
bin/              本地安装、预览和构建脚本
_config.yml       正式站点配置
_config.dev.yml   本地预览配置
```

旧版的博客示例、演讲／作品集／教学页面、地图工具、论文 PDF、旧简历、旧照片和
配套的模板样式、脚本与字体已移除。许可证保留，Git 历史未重写。

## 内容维护

- 简介：编辑 `_pages/about.md`。
- 照片、邮件和学术链接：编辑 `_config.yml` 的 `author`。
- 实习、研究兴趣、News 和求职说明：编辑 `_data/home.yml`。
- 实习使用 `bullets` 分点概述职责，不发布具体性能指标或完整简历。
- News 的接收、入职、获奖月份由本人提供，与论文正式出版日期分别维护。
  `icon` 可使用 🎉（接收）、🚀（入职）、🏅（获奖）、📄（技术报告）。
- 最近更新时间：修改 `_data/home.yml` 的 `last_updated`，构建不会自动改变它。
- 论文：编辑 `_publications/*.md` 的 YAML 头部，无需重复撰写页面正文。
  首页使用 `title`、`authors`、`date`、`venue_short`、`venue_name`、`summary`、`paperurl`。
  简介保持一句话，链接使用出版社、会议或 arXiv 的在线页面。
- 作者为 `Changxu Liu` 时自动加粗；`equal_authors` 列出共同一作并显示星号。
- 论文只确认年份时设置 `date_precision: year`，排序占位月份不会显示成发表月份。
- CCF 等级在 `_data/ccf.yml` 配置；未配置的刊会和 arXiv 不显示等级。
- 页面结构在 `_layouts/home.html`，论文条目在 `_includes/publication-compact.html`，
  样式在 `assets/css/home.css`。

`/about/` 和 `/about.html` 跳转到首页；`/publications/` 跳到研究区，
`/cv/` 和 `/resume` 跳到实习区；原 `/publication/...` 网址跳到首页对应论文。
其他已删除页面使用 404 页面，不再发布模板示例或重复的旧版详情页。

## 访客统计

页尾通过[原版不蒜子](https://busuanzi.ibruce.info/)的 JSONP 接口显示访问量（PV）和访客估计值（UV），
不追溯接入前的历史访问。UV 使用服务商口径，不等同于精确人数。
统计仅在生产构建且访问域名与 `_config.yml` 的 `url` 一致时加载；
开发构建、localhost 和其他域名的预览均不计数。服务不可用时显示提示；延迟返回的数据可恢复显示。
此前使用的 `cdn.busuanzi.cc` 接口缺少 CORS 响应头，已切换服务，两个服务的历史统计不互通。

地域地图使用 ClustrMaps，需要为自己的正式网址生成组件：

1. 在 [ClustrMaps](https://clustrmaps.com/) 为 `https://austinliu01.github.io` 创建组件并获取嵌入代码。
2. 取出 `map_v2.js?d=...` 的 `d` 参数，填入 `_config.yml` 的 `visitor_stats.clustrmaps_id`。
   这是公开的组件 ID，不是账号密码。
3. 重新构建并部署。ID 为空时不显示地图，也不会请求 ClustrMaps。

`visitor_stats.enabled: false` 可关闭外部统计。地域由服务商根据 IP 估算；
页面不展示单个访客的原始 IP。正式站点加载统计时会向相应服务商发送访问请求。

## 发布

仓库 Pages 设置使用 `Deploy from a branch` → `master` → `/ (root)`。

```bash
bash bin/build
git status
git add .
git commit -m "Update personal website"
git push origin master
```

在仓库 Actions 中等待 `pages build and deployment` 成功，再检查正式网址。
提交源文件即可，不提交 `_site/` 或本地依赖。

当前保留 `AustinLiu01` 账号和网址。`liuchangxu.github.io` 需要由相应 GitHub 用户或组织持有；
若保持当前账号，可绑定自己拥有的独立域名。

## 许可与来源

本项目由 [Academic Pages](https://github.com/academicpages/academicpages.github.io) /
[Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) 模板精简而来，保留原 [MIT 许可](LICENSE)。
联系方式图标的来源、修改和许可见 [images/profile-icons/README.md](images/profile-icons/README.md)。
