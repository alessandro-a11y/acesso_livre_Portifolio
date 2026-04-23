import librasImg from "./icon-libras.png";
import chatImg   from "./icon-chat.png";
import audioImg  from "./icon-audio.png";

export const IconSign = () => (
  <div style={{
    width: 90, height: 90, borderRadius: "50%",
    background: "#FEBE92",
    boxShadow: "0 4px 20px #FEBE9266",
    display: "flex", alignItems: "center", justifyContent: "center",
    overflow: "hidden",
  }}>
    <img src={librasImg} alt="Libras" style={{ width: 90, height: 90, objectFit: "cover" }} />
  </div>
);

export const IconChat = () => (
  <div style={{
    width: 90, height: 90, borderRadius: "50%",
    background: "#D4F3FF",
    boxShadow: "0 4px 20px #D4F3FF66",
    display: "flex", alignItems: "center", justifyContent: "center",
    overflow: "hidden",
  }}>
    <img src={chatImg} alt="Chat" style={{ width: 90, height: 90, objectFit: "cover" }} />
  </div>
);

export const IconAudio = () => (
  <div style={{
    width: 90, height: 90, borderRadius: "50%",
    background: "#CFE5D5",
    boxShadow: "0 4px 20px #CFE5D566",
    display: "flex", alignItems: "center", justifyContent: "center",
    overflow: "hidden",
  }}>
    <img src={audioImg} alt="Áudio Descritivo" style={{ width: 90, height: 90, objectFit: "cover" }} />
  </div>
);

export const LogoIcon = ({ color = "#D97F5C" }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill={color} opacity="0.15" />
    <circle cx="13" cy="12" r="4" fill={color} />
    <circle cx="23" cy="12" r="4" fill={color} opacity="0.7" />
    <path d="M8 26 Q13 20 18 22 Q23 20 28 26" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const UserIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="20" fill="#FEBE92" opacity="0.3" />
    <circle cx="20" cy="16" r="6" fill="#D97F5C" opacity="0.7" />
    <path d="M8 34 Q12 26 20 26 Q28 26 32 34" fill="#D97F5C" opacity="0.5" />
  </svg>
);

export const iconMap = {
  sign:  <IconSign />,
  chat:  <IconChat />,
  audio: <IconAudio />,
};
