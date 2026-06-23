import { useTheme } from "../context/ThemeContext";

const sections = [
  {
    title: "What Are Cookies",
    body: "Cookies are small text files stored on your device when you visit JobPortal. They help us remember your preferences, keep you signed in, and understand how you use our site.",
  },
  {
    title: "How We Use Cookies",
    body: "We use cookies to maintain your session (such as your login state and theme preference), remember jobs you've saved, and improve the overall performance of the site.",
  },
  {
    title: "Types of Cookies We Use",
    body: "Essential cookies are required for core features like authentication and saved jobs. Preference cookies remember settings such as light/dark mode. We do not use third-party advertising cookies.",
  },
  {
    title: "Managing Cookies",
    body: "Most browsers let you block or delete cookies through their settings. Note that disabling essential cookies may prevent features like sign-in and saved jobs from working correctly.",
  },
];

const CookiePolicy = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-[calc(100vh-5rem)] ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-primary-50"
      } px-4 py-16`}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent mb-4">
          Cookie Policy
        </h1>
        <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-lg mb-10`}>
          This policy explains how JobPortal uses cookies and similar technologies.
        </p>

        <div className="space-y-8">
          {sections.map(({ title, body }) => (
            <div key={title}>
              <h2
                className={`text-xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {title}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
