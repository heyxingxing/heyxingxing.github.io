# 宋星星 · Xingxing Song

个人主页：<https://heyxingxing.github.io/>

参照 [Xianzhe Meng 的主页](https://xianzhemeng.github.io/) 重写的英文个人学术主页：800px 居中布局、Lato 字体、左侧简介与右侧头像、奖项列表和图文研究条目。内容来自原主页，包括研究兴趣、GUITestScape 论文、GUI Agent 交互环境、实习与科研经历、教育背景和公开项目。

## 本地预览

这是一个无需安装依赖的静态网站。

```sh
python3 -m http.server 4178 --directory dist
```

打开 <http://localhost:4178>。

## 更新内容

- `dist/index.html`：个人资料、论文、项目、经历和联系邮箱。
- `dist/styles.css`：排版、配色、桌面与移动端样式。
- `dist/data/XingxingSong-CV.pdf`：首页 CV 入口对应的简历，点击后在新标签页打开。
- `dist/assets/images/profile-20261011.png`：用户提供的个人头像原图。
- `dist/assets/images/`：论文插图与项目示意图；项目 SVG 为根据原主页内容绘制的结构示意，不是产品截图。
- `dist/assets/fonts/`：本地 Lato 字体及其 OFL 许可，不依赖 Google Fonts 在线加载。
- `.github/workflows/pages.yml`：将 `dist/` 自动发布到 GitHub Pages。

将更新推送到 `main` 后，GitHub Actions 自动部署。仓库 Settings → Pages 的 Source 应为 **GitHub Actions**。

个人经历沿用原主页中依据 2026 年 9 月简历整理的信息。预计结束或毕业日期已注明，后续应随经历变化更新。论文链接：<https://arxiv.org/abs/2605.29532>。

CV 入口使用用户提供的《宋星星_简历.pdf》，以 `dist/data/XingxingSong-CV.pdf` 原样发布。更新简历时替换该文件即可，链接保持不变。联系邮箱按简历原文保留。

## 素材与参考

- 排版参考：Xianzhe Meng / Jon Barron，页脚保留链接致谢。
- 头像：用户于 2026 年 10 月 11 日提供的图片。
- GUIJudge 插图：[GUITestScape 论文 Figure 4](https://arxiv.org/html/2605.29532v1#S4.F4)。
- SuperMuse 与 XHAUS 项目介绍：分别来自 [SuperMuse](https://github.com/heyxingxing/SuperMuse) 与 [XHAUS_FINAL](https://github.com/hareonna-hina/XHAUS_FINAL) 仓库。
- SuperMuse、Mobile-Gym、XHAUS 生活助理、Agent Lab 配图：本项目编写的 SVG 示意图，不使用项目 Logo。
- `dist/class2408/` 是独立的原有页面，主页改版未修改此目录。
