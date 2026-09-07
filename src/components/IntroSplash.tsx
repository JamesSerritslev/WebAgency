"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BRAND_NAME } from "@/lib/brand";

const VIDEO_MS = 1000;
const WORD_STAGGER_MS = 420;
const WORD_IN_MS = 540;
const HOLD_MS = 320;
const TEXT_MS = WORD_STAGGER_MS * 2 + WORD_IN_MS + HOLD_MS;
const SWIPE_MS = 620;

export function IntroSplash() {
  const [open, setOpen] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [wordsIn, setWordsIn] = useState(false);
  const finished = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setLeaving(true);
    window.setTimeout(() => {
      document.documentElement.classList.remove("intro-lock");
      document.documentElement.classList.add("intro-done");
      setOpen(false);
    }, SWIPE_MS);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finished.current = true;
      document.documentElement.classList.add("intro-done");
      setOpen(false);
      return;
    }

    document.documentElement.classList.add("intro-lock");
    const video = videoRef.current;
    const play = video?.play();
    if (play) {
      play.catch(() => finish());
    }

    const wordTimer = window.setTimeout(() => {
      video?.pause();
      setWordsIn(true);
    }, VIDEO_MS);
    const swipeTimer = window.setTimeout(finish, VIDEO_MS + TEXT_MS);
    return () => {
      window.clearTimeout(wordTimer);
      window.clearTimeout(swipeTimer);
    };
  }, [finish]);

  if (!open) return null;

  return (
    <div
      className={`intro-splash ${wordsIn ? "intro-splash--words" : ""} ${leaving ? "intro-splash--out" : ""}`}
      role="dialog"
      aria-label={`${BRAND_NAME} intro`}
      aria-modal="true"
    >
      <video
        ref={videoRef}
        className="intro-video h-full w-full object-contain"
        src="/brand/cor-intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        onError={finish}
      />
      <p className="intro-tagline pointer-events-none absolute inset-x-0 top-[59%] flex flex-wrap justify-center gap-x-[0.38em] px-6 text-center font-display text-3xl leading-[1.05] text-ink md:text-5xl">
        <span className="intro-word">
          Create<span className="text-amber">.</span>
        </span>
        <span className="intro-word">
          Optimize<span className="text-amber">.</span>
        </span>
        <span className="intro-word">
          Rank<span className="text-amber">.</span>
        </span>
      </p>
    </div>
  );
}
