import React, { useRef, useState } from 'react'
import styles from './App.module.css'

export default function App() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    
    if (playing) {
      audio.pause()
    } else {
      audio.play().catch(e => {
        console.log('播放失败:', e)
        // 尝试用户交互后再播放
      })
    }
    setPlaying(!playing)
  }

  const onTimeUpdate = () => {
    const audio = audioRef.current
    if (audio && audio.duration) {
      setProgress(audio.currentTime / audio.duration)
      setCurrentTime(audio.currentTime)
    }
  }

  const onLoadedMetadata = () => {
    const audio = audioRef.current
    if (audio && audio.duration) {
      setDuration(audio.duration)
    }
  }

  const onProgressClick = (e) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    
    const bar = e.currentTarget
    const rect = bar.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const newTime = percent * audio.duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
    setProgress(percent)
  }

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={styles.container}>
      {/* 背景图片 */}
      <img 
        src="/bg.jpg" 
        alt="背景" 
        className={styles.bg}
        onError={(e) => {
          console.log('背景图片加载失败')
          // 设置备用背景色
          e.target.style.display = 'none'
          e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      />
      
      <div className={styles.content}>
        {/* 专辑封面 */}
        <div className={styles.coverWrapper}>
          <div className={styles.coverBorder}>
            <img 
              src="/cover.jpg" 
              alt="封面" 
              className={`${styles.cover} ${playing ? styles.coverRotating : ''}`}
              onError={(e) => {
                console.log('封面图片加载失败')
                // 使用SVG占位图
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIwIiBoZWlnaHQ9IjIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0Y2FmNTAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyZTdkMzIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjwvdGV4dD48L3N2Zz4='
              }}
            />
          </div>
        </div>

        {/* 音频元素 */}
        <audio
          ref={audioRef}
          src="/audio.mp3"
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={() => setPlaying(false)}
          onError={(e) => {
            console.log('音频加载失败:', e)
          }}
          preload="metadata"
        />

        {/* 播放控制 */}
        <div className={styles.controls}>
          <button className={styles.playBtn} onClick={togglePlay}>
            {playing ? (
              // 暂停图标
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="4" width="4" height="16" rx="2" fill="white"/>
                <rect x="14" y="4" width="4" height="16" rx="2" fill="white"/>
              </svg>
            ) : (
              // 播放图标
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="8,5 19,12 8,19" fill="white"/>
              </svg>
            )}
          </button>
        </div>

        {/* 进度条 */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar} onClick={onProgressClick}>
            <div 
              className={styles.progress} 
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {/* 时间显示 */}
        <div className={styles.timeInfo}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  )
} 