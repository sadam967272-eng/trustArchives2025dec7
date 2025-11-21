"use client"

import { useState } from "react"

export function ChatButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isAiOpen, setIsAiOpen] = useState(false)

  return (
    <>
      <div className="chat-buttons-container">
        <button className="ai-toggle-btn" id="aiToggle" onClick={() => setIsAiOpen(!isAiOpen)}>
          <span>اسأل الذكاء الصناعي</span>
          <i className="fas fa-robot"></i>
        </button>

        <button className="chat-toggle-btn" id="chatToggle" onClick={() => setIsChatOpen(!isChatOpen)}>
          <span>دردشة الفريق</span>
          <i className="fas fa-comments"></i>
          <span className="notification-badge hidden" id="notificationBadge">
            0
          </span>
        </button>
      </div>

      {/* Chat Window */}
      <div className={`chat-window ${isChatOpen ? "active" : ""}`} id="chatWindow">
        <div className="chat-header" id="chatHeader">
          <div className="chat-title">
            <span>دردشة ارشيف الثقة</span>
            <span className="online-indicator"></span>
          </div>
          <div className="chat-controls">
            <button className="mute-btn" id="muteBtn" title="تكتيم/إلغاء تكتيم الإشعارات">
              <i className="fas fa-volume-up"></i>
            </button>
            <button id="minimizeBtn">
              <i className="fas fa-minus"></i>
            </button>
            <button>
              <i className="fa-solid fa-window-restore"></i>
            </button>
            <button id="closeBtn" onClick={() => setIsChatOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className="chat-area" id="chatArea">
          <div className="typing-indicator" id="typingIndicator">
            <span></span>
            <div className="typing-dots">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        </div>

        <div className="chat-input-area">
          <input type="text" className="chat-input" id="chatInput" placeholder="اكتب رسالتك هنا..." />
          <button className="send-btn" id="sendBtn">
            <i className="fas fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* AI Window */}
      <div className={`ai-window ${isAiOpen ? "active" : ""}`} id="aiWindow">
        <div className="ai-header" id="aiHeader">
          <div className="ai-title">
            <span>Trust.Ai</span>
            <span className="online-indicator"></span>
          </div>
          <div className="ai-controls">
            <button className="mute-btn" id="aiMuteBtn" title="تكتيم/إلغاء تكتيم الإشعارات">
              <i className="fas fa-volume-up"></i>
            </button>
            <button id="aiMinimizeBtn">
              <i className="fas fa-minus"></i>
            </button>
            <button>
              <i className="fa-solid fa-window-restore"></i>
            </button>
            <button id="aiCloseBtn" onClick={() => setIsAiOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="ai-area" id="aiArea">
          <div className="ai-message message-incoming">
            <div className="ai-avatar">T</div>
            <div className="message-content">
              <div className="message-sender">Trust.Ai</div>
              <div className="message-text">يا حيا بالحبيب .. تفضل ، ما بنفسك تسأل ، و كيف اقدر اساعدك 😁</div>
              <div className="message-time">10:30 صباحاً</div>
            </div>
          </div>
          <div className="ai-typing-indicator" id="aiTypingIndicator">
            <span>Trust.Ai يكتب</span>
            <div className="typing-dots">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        </div>
        <div className="ai-input-area">
          <input type="text" className="ai-input" id="aiInput" placeholder="اسأل الذكاء الاصطناعي..." />
          <button className="ai-send-btn" id="aiSendBtn">
            <i className="fas fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  )
}
