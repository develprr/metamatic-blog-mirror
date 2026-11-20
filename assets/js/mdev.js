var timeoutId = 0;
var clipTimeoutId = 0;

jQuery(function () {
  $(document).ready(() => {
    $(window).on("scroll", loadVideosAndAudiosOnDelay);
    $(window).on("resize", loadVideosAndAudiosOnDelay);
    $(".yt-sidebar").on("scroll", loadVideosAndAudiosOnDelay);
    $(".yt-list").on("scroll", loadVideosAndAudiosOnDelay);
    $(".yt-article-scroll").on("scroll", loadVideosAndAudiosOnDelay);
    $(".listen-button").click(narrate);
    $(".audio-clickable").click(narrateListedPost);
  });
});

const initPageContent = () => {
  ClipVideo.clearCache();
  loadThumbnailVideos();
  ClipVideo.populateClipDivs();
  ClipVideo.loadClipVideos();
};

const loadVideosAndAudiosOnDelay = () => {
  clearTimeout(timeoutId);
  clearTimeout(clipTimeoutId);
  timeoutId = setTimeout(function () {
    loadThumbnailVideos();
  }, 250);

  clipTimeoutId = setTimeout(function () {
    ClipVideo.loadClipVideos();
  }, 500);
};

const loadThumbnailVideos = () => {
  const allVideos = [];
  $(".thumbnail-video").each(function () {
    const source = $(this).find("source");
    const slug = $(source).attr("data-src");
    allVideos.push({
      el: this,
      video: $(this)[0],
      source: source,
      slug: slug,
      visible: isElementInViewport(this)
    });
  });

  allVideos.forEach(v => {
    if (v.visible) {
      $(v.el).addClass("is-visible");
      const posterUrl = ThumbnailVideo.getPosterUrl(v.slug);
      $(v.el).attr("poster", posterUrl);

      if (!ThumbnailVideo.isLoaded(v.slug)) {
        const dataSource = ThumbnailVideo.getVideoUrl(v.slug);
        $(v.source).attr("src", dataSource);
        v.video.load();
        ThumbnailVideo.addToCache(v.slug);
      }
      
      if (v.video.paused) {
        v.video.play().catch(e => {});
      }
    } else {
      $(v.el).removeClass("is-visible");
      if (!v.video.paused) {
        v.video.pause();
      }
    }
  });
};

function isElementInViewport(el) {
  if (!el) {
    return false;
  }
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const vertInView = rect.top < windowHeight && rect.bottom > 0;
  const horInView = rect.left < windowWidth && rect.right > 0;
  return vertInView && horInView;
}

const ThumbnailVideo = {
  _cache: {
    w200: {},
    w560: {},
  },
  getWindowWidth: () => {
    return window.innerWidth;
  },
  getVideoUrl: (slug) => {
    if (ThumbnailVideo.getWindowWidth() >= 600) {
      return "/assets/mp4/w200/" + slug + ".mp4";
    } else {
      return "/assets/mp4/w560/" + slug + ".mp4";
    }
  },
  getPosterUrl: (slug) => {
    if (ThumbnailVideo.getWindowWidth() >= 600) {
      return "/assets/cover/w200/" + slug + ".jpg";
    } else {
      return "/assets/cover/w560/" + slug + ".jpg";
    }
  },
  getCache: () => {
    if (ThumbnailVideo.getWindowWidth() >= 600) {
      return ThumbnailVideo._cache["w200"];
    } else {
      return ThumbnailVideo._cache["w560"];
    }
  },
  addToCache: (slug) => {
    var url = ThumbnailVideo.getVideoUrl(slug);
    var cache = ThumbnailVideo.getCache();
    cache[url] = true;
  },
  removeFromCache: (slug) => {
    var url = ThumbnailVideo.getVideoUrl(slug);
    var cache = ThumbnailVideo.getCache();
    delete cache[url];
  },
  isLoaded: (slug) => {
    var url = ThumbnailVideo.getVideoUrl(slug);
    var cache = ThumbnailVideo.getCache();
    return !!cache[url];
  },
};

class ClipVideo {
  static _cache = { };
  static clearCache() {
    ClipVideo._cache = {};
  }
  static setLoaded(id) {
    ClipVideo._cache[id] = true;
  }
  static setUnloaded(id) {
    delete ClipVideo._cache[id];
  }
  static isLoaded(id) {
    return !!ClipVideo._cache[id];
  }
  static populateClipDivs() {
    var clipDivs = document.querySelectorAll(".clip");
    clipDivs.forEach((clipDiv) => {
      if ($(clipDiv).find('video').length > 0) return;
      const id = $(clipDiv).attr("id");
      const klass = $(clipDiv).attr("class");
      const $video = $("<video class='video clip-video'>")
        .prop({
          autoplay: true,
          muted: true,
          loop: true,
          playsinline: true,
          controls: false,
          controlsList: "nodownload",
        })
        .attr({
          preload: "auto",
          style: "width: 100%",
          poster: ClipVideo.getPosterUrl(id, klass),
        });
      $(clipDiv).html($video);
      $video.on('loadedmetadata', function() {
        $(this).prop('playbackRate', 1.0);
      });
    });
  }
  static loadClipVideos() {
    const allClips = [];
    $(".clip-video").each(function () {
      allClips.push({
        el: this,
        video: $(this)[0],
        id: $(this).parent().attr("id"),
        klass: $(this).parent().attr("class"),
        visible: isElementInViewport(this)
      });
    });
    allClips.forEach(c => {
      if (c.visible) {
        $(c.el).addClass("clip-visible");
        if (!ClipVideo.isLoaded(c.id) || !$(c.el).attr("src")) {
          const videoUrl = ClipVideo.getVideoUrl(c.id, c.klass);
          if (c.klass === "clip code") {
            $(c.el).attr("controls", "true");
          }
          $(c.el).attr("src", videoUrl);
          c.video.load();
          ClipVideo.setLoaded(c.id);
        }
        if (c.video.paused) {
          c.video.play().catch(e => {});
        }
      } else {
        $(c.el).removeClass("clip-visible");
        if (!c.video.paused) {
          c.video.pause();
        }
      }
    });
  }
  static getVideoUrl(id, klass) {
    const parts = id.split("/");
    const slug = parts[0];
    const name = parts[1];
    if (klass === "clip") {
      return "/assets/clip/w740/" + slug + "/" + name + ".mp4";
    }
    if (klass === "clip code") {
      return "/assets/mp4/code/" + slug + "/" + name + ".mp4";
    }    
  }
  static getPosterUrl(id, klass) {
    const parts = id.split("/");
    const slug = parts[0];
    const name = parts[1];
    if (klass === "clip") {
         return "/assets/clip/poster/w740/" + slug + "/" + name + ".jpg";
    }
    if (klass === "clip code") {
      return "/assets/cover/code/" + slug + "/" + name + ".jpg";
    }
  } 
}

var playing = false;
function narrate() {
  var audio = document.getElementById("audioplayer-audio");
  playing = !playing;
  if (playing) {
    $('#listen-img').addClass('rotating-img');
    audio.play();
  } else {
    $('#listen-img').removeClass('rotating-img');
    audio.pause();
    audio.currentTime = 0;
  }
}

function narrateListedPost() {
  var audio = document.getElementById("home-audio");
  var url = $(this).parent().attr("data-url");
  audio.src = url;
  audio.load();
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      console.log("Audio playback started successfully.");
    }).catch(error => {
      console.error("Audio playback failed:", error);
    });
  }
  $(".audio-clickable").fadeIn("slow");
  $(this).parent().find(".audio-clickable").fadeOut("slow");
}

window['ClipVideo'] = ClipVideo;
window['ThumbnailVideo'] = ThumbnailVideo;
window['initPageContent'] = initPageContent;
