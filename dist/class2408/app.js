if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('motion-ready');
}

const music = document.querySelector('#moon-music');
const musicToggle = document.querySelector('#music-toggle');
const musicState = musicToggle.querySelector('.music-state');
const musicStatus = document.querySelector('#music-status');
let fadeFrame;

function showMusicState(playing) {
  musicToggle.classList.toggle('is-playing', playing);
  musicToggle.setAttribute('aria-pressed', String(playing));
  musicToggle.setAttribute('aria-label', `${playing ? '暂停' : '播放'}背景音乐：月下同窗`);
  musicState.textContent = playing ? '正在播放 · 点击暂停' : '开启配乐';
}

music.addEventListener('play', () => showMusicState(true));
music.addEventListener('pause', () => {
  cancelAnimationFrame(fadeFrame);
  showMusicState(false);
});
music.addEventListener('error', () => {
  showMusicState(false);
  musicState.textContent = '加载失败 · 点击重试';
  musicStatus.textContent = '配乐暂时无法加载，请点击音乐按钮重试。';
});

musicToggle.addEventListener('click', async () => {
  if (!music.paused) {
    music.pause();
    return;
  }
  musicToggle.disabled = true;
  musicToggle.setAttribute('aria-busy', 'true');
  musicState.textContent = '月色与音乐，稍候…';
  musicStatus.textContent = '';
  try {
    if (music.error) music.load();
    music.volume = 0;
    await music.play();
    const start = performance.now();
    function fadeIn(now) {
      const progress = Math.min(1, (now - start) / 1400);
      music.volume = .32 * progress;
      if (progress < 1 && !music.paused) fadeFrame = requestAnimationFrame(fadeIn);
    }
    fadeFrame = requestAnimationFrame(fadeIn);
  } catch {
    showMusicState(false);
    musicState.textContent = '暂未播放 · 点击重试';
    musicStatus.textContent = '未能开始播放，请再次点击音乐按钮。';
  } finally {
    musicToggle.disabled = false;
    musicToggle.removeAttribute('aria-busy');
  }
});
