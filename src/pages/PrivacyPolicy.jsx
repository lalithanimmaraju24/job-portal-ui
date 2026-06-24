import { useTheme } from "../context/ThemeContext";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email, resume details, and job preferences when you create an account or apply for jobs.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to match you with relevant job opportunities, communicate with employers on your behalf, and improve the overall JobPortal experience.",
  },
  {
    title: "Sharing Your Information",
    body: "We share your application details with employers you apply to. We do not sell your personal information to third parties.",
  },
  {
    title: "Your Choices",
    body: "You can update or delete your profile information at any time from your account settings. Contact us if you have questions about your data.",
  },
];

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-lg mb-10`}>
          This policy explains how JobPortal collects, uses, and protects your information.
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

export default PrivacyPolicy;
