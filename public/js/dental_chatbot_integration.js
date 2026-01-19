// Dental Chatbot Widget - Floating Integration Script
// This script creates a floating chat widget that can be embedded in any dental website
(function () {
  // Configuration
  const config = {
    practiceName: "Dental Surgery Clinic Assistant",
    contactNumber: "0321-4591889",
    clinicHours: "Mon-Fri: 5PM-10:30PM, Sat: 5PM-11PM",
    backgroundColor: "#007BFF",
    primaryColor: "#FFFFFF",
    accentColor: "#0056b3",
    whatsappNumber: "923214591889", // <-- WhatsApp number (no +)
    botAvatar: "🤖",
    userAvatar: "🧑‍⚕️",
  };

  if (document.getElementById("dental-chat-widget")) return;

  // --- Widget Container ---
  const widgetContainer = document.createElement("div");
  widgetContainer.id = "dental-chat-widget";
  widgetContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 10000;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  `;

  // --- Launcher Button ---
  const launcherButton = document.createElement("button");
  launcherButton.id = "chat-launcher";
  launcherButton.innerHTML = `💬`;
  launcherButton.style.cssText = `
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${config.backgroundColor};
      border: none;
      color: ${config.primaryColor};
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      transition: all 0.3s ease;
  `;

  // --- Chat Container ---
  const chatContainer = document.createElement("div");
  chatContainer.id = "chat-container";
  chatContainer.style.cssText = `
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      display: none;
      flex-direction: column;
      overflow: hidden;
      position: absolute;
      bottom: 70px;
      right: 0;
  `;

  // --- Header ---
  const chatHeader = document.createElement("div");
  chatHeader.style.cssText = `
      background: linear-gradient(135deg, ${config.backgroundColor}, ${config.accentColor});
      color: ${config.primaryColor};
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  `;
  chatHeader.innerHTML = `
      <div>
          <h3 style="margin:0;font-size:1rem;font-weight:600;">${config.practiceName}</h3>
          <p style="margin:0;font-size:0.8rem;opacity:0.9;">We're here to help</p>
      </div>
      <div style="font-size:0.8rem;display:flex;align-items:center;gap:6px;">
          <span style="width:10px;height:10px;border-radius:50%;background:#4CAF50;display:inline-block;"></span>
          Online
          <button id="close-chat-btn" style="margin-left:10px;background:none;border:none;color:white;font-size:1.2rem;cursor:pointer;">✕</button>
      </div>
  `;

  // --- Messages Area ---
  const chatMessages = document.createElement("div");
  chatMessages.id = "chat-messages";
  chatMessages.style.cssText = `
      flex:1;
      padding:15px;
      overflow-y:auto;
      background:#f9f9f9;
      display:flex;
      flex-direction:column;
      gap:12px;
  `;

  // --- Input Area ---
  const chatInputArea = document.createElement("div");
  chatInputArea.style.cssText = `
      padding:15px;
      background:white;
      border-top:1px solid #eee;
      display:flex;
      gap:10px;
      align-items:center;
  `;

  const messageInput = document.createElement("textarea");
  messageInput.placeholder = "Type your message...";
  messageInput.rows = 1;
  messageInput.style.cssText = `
      flex:1;
      border:1px solid #ddd;
      border-radius:24px;
      padding:12px 20px;
      resize:none;
      max-height:100px;
      font-size:1rem;
      outline:none;
      color:black;
      background-color:white;
  `;

  const sendButton = document.createElement("button");
  sendButton.innerHTML = "➤";
  sendButton.style.cssText = `
      width:46px;
      height:46px;
      border-radius:50%;
      background:${config.backgroundColor};
      border:none;
      color:white;
      font-size:18px;
      cursor:pointer;
  `;

  chatInputArea.appendChild(messageInput);
  chatInputArea.appendChild(sendButton);
  chatContainer.appendChild(chatHeader);
  chatContainer.appendChild(chatMessages);
  chatContainer.appendChild(chatInputArea);
  widgetContainer.appendChild(launcherButton);
  widgetContainer.appendChild(chatContainer);
  document.body.appendChild(widgetContainer);

  // --- Styles ---
  const style = document.createElement("style");
  style.textContent = `
      .message { display:flex; gap:10px; max-width:85%; }
      .bot-message { align-self:flex-start; }
      .user-message { align-self:flex-end; }
      .message-content {
          background:white; padding:10px 14px; border-radius:18px;
          box-shadow:0 2px 6px rgba(0,0,0,0.05);
      }
      .user-message .message-content {
          background:linear-gradient(135deg, ${config.backgroundColor}, ${config.accentColor});
          color:white;
      }
      .quick-reply {
          background:#eef7ff; border:1px solid ${config.backgroundColor};
          color:${config.backgroundColor}; border-radius:16px;
          padding:6px 12px; font-size:0.8rem; cursor:pointer;
          margin-top:6px; display:inline-block;
      }
  `;
  document.head.appendChild(style);

  // --- Add Message ---
  function addMessage(text, sender, withButtons = false) {
    const msg = document.createElement("div");
    msg.classList.add("message", `${sender}-message`);

    const content = document.createElement("div");
    content.classList.add("message-content");
    content.innerHTML = `<p>${text}</p>`;

    if (withButtons && sender === "bot") {
      const buttons = document.createElement("div");
      buttons.innerHTML = `
        <button class="quick-reply" data-action="appointment">💬 Book Appointment</button>
        <button class="quick-reply" data-action="hours">🕓 Clinic Hours</button>
        <button class="quick-reply" data-action="services">💎 Our Services</button>
      `;
      content.appendChild(buttons);

      // Add event listeners for quick replies
      buttons.querySelectorAll(".quick-reply").forEach((btn) => {
        btn.addEventListener("click", () => {
          handleQuickReply(btn.getAttribute("data-action"));
        });
      });
    }

    msg.appendChild(content);
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // --- Quick Reply Handler ---
  function handleQuickReply(action) {
    if (action === "appointment") {
      const whatsappLink = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
        "Hello! I'd like to book a dental appointment."
      )}`;
      addMessage(
        `You can book your appointment easily on WhatsApp.<br><br>
        <a href="${whatsappLink}" target="_blank"
          style="display:inline-block;background-color:#25D366;color:white;
          padding:10px 16px;border-radius:6px;text-decoration:none;
          font-weight:600;">💬 Book on WhatsApp</a>`,
        "bot"
      );
    } else if (action === "hours") {
      addMessage(`Our office hours are ${config.clinicHours}. We're closed on Sundays.`, "bot");
    } else if (action === "services") {
      addMessage(
        "We offer cleanings, whitening, implants, orthodontics, and more. Would you like to know about a specific service?",
        "bot"
      );
    }
  }

  // --- Send Message ---
  function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;

    addMessage(text, "user");
    messageInput.value = "";
    setTimeout(() => generateBotResponse(text), 800);
  }

  // --- Bot Logic ---
  function generateBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    if (msg.includes("appointment")) {
      handleQuickReply("appointment");
    } else if (msg.includes("hours")) {
      handleQuickReply("hours");
    } else if (msg.includes("service")) {
      handleQuickReply("services");
    } else {
      addMessage("I'm here to help! What would you like to do today?", "bot", true);
    }
  }

  // --- Events ---
  launcherButton.addEventListener("click", () => {
    chatContainer.style.display =
      chatContainer.style.display === "flex" ? "none" : "flex";
  });

  sendButton.addEventListener("click", sendMessage);
  messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Close button event listener - attach after DOM insertion
  setTimeout(() => {
    const closeChatBtn = document.getElementById('close-chat-btn');
    if (closeChatBtn) {
      closeChatBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        chatContainer.style.display = "none";
      });
    }
  }, 100); // Small delay to ensure DOM is ready

  // --- Auto Popup ---
  setTimeout(() => {
    chatContainer.style.display = "flex";
    addMessage("👋 Hi there! Can I help you with something today?", "bot", true);
  }, 3000);
})();

