/**
 * Video autoplay on viewport entry, pause on exit.
 * Handles play button overlay for unmuting.
 */

export function initVideoController() {
  const videos = document.querySelectorAll('video[data-autoplay]');
  if (!videos.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.25 }
  );

  videos.forEach((video) => {
    video.muted = true;
    video.playsInline = true;
    observer.observe(video);
  });

  // Play button overlays for unmuting
  document.querySelectorAll('.video-play-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.video-wrapper');
      const video = wrapper?.querySelector('video');
      if (video) {
        video.muted = !video.muted;
        btn.classList.toggle('is-muted', video.muted);
      }
    });
  });
}
