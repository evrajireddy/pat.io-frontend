export default function LanguageSelector({
  setUserLanguage,
  userLanguage,
  setTargetLanguage,
  targetLanguage,
}) {
  return (
    <div className="language-selectors">
      <label>
        Speak Language:
        <select
          value={userLanguage}
          onChange={(e) => {
            setUserLanguage(e.target.value);
            localStorage.setItem("chatLanguage", e.target.value);
          }}
        >
          <option value="en-US">English</option>
          <option value="ru-RU">Russian</option>
          <option value="it-IT">Italian</option>
          <option value="pl-PL">Polish</option>
          <option value="el-GR">Greek</option>
          <option value="yi">Yiddish</option>
          <option value="he-IL">Hebrew</option>
          <option value="ht-HT">Haitian Creole</option>
          <option value="fr-FR">French</option>
          <option value="es-ES">Spanish</option>
          <option value="pt-PT">Portuguese</option>
          <option value="zh-CN">Mandarin</option>
          <option value="zh-HK">Cantonese</option>
          <option value="hi-IN">Hindi</option>
          <option value="bn-IN">Bengali</option>
          <option value="te-IN">Telugu</option>
          <option value="pa-IN">Punjabi</option>
          <option value="ta-IN">Tamil</option>
          <option value="ko-KR">Korean</option>
          <option value="ja-JP">Japanese</option>
          <option value="vi-VN">Vietnamese</option>
          <option value="ar-SA">Arabic</option>
          <option value="ur-PK">Urdu</option>
        </select>
      </label>

      <label>
        Translate To:
        <select
          value={targetLanguage}
          onChange={(e) => {
            setTargetLanguage(e.target.value);
            localStorage.setItem("chatLanguage", e.target.value);
          }}
        >
          <option value="en-US">English</option>
          <option value="ru-RU">Russian</option>
          <option value="it-IT">Italian</option>
          <option value="pl-PL">Polish</option>
          <option value="el-GR">Greek</option>
          <option value="yi">Yiddish</option>
          <option value="he-IL">Hebrew</option>
          <option value="ht-HT">Haitian Creole</option>
          <option value="fr-FR">French</option>
          <option value="es-ES">Spanish</option>
          <option value="pt-PT">Portuguese</option>
          <option value="zh-CN">Mandarin</option>
          <option value="zh-HK">Cantonese</option>
          <option value="hi-IN">Hindi</option>
          <option value="bn-IN">Bengali</option>
          <option value="te-IN">Telugu</option>
          <option value="pa-IN">Punjabi</option>
          <option value="ta-IN">Tamil</option>
          <option value="ko-KR">Korean</option>
          <option value="ja-JP">Japanese</option>
          <option value="vi-VN">Vietnamese</option>
          <option value="ar-SA">Arabic</option>
          <option value="ur-PK">Urdu</option>
        </select>
      </label>
    </div>
  );
}
