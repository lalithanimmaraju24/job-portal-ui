import { useTheme } from "../context/ThemeContext";

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using JobPortal, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the platform.",
  },
  {
    title: "Using JobPortal",
    body: "You must provide accurate information when creating an account and are responsible for keeping your login credentials secure. You agree to use the platform only for lawful job search and recruitment purposes.",
  },
  {
    title: "Job Listings & Applications",
    body: "Employers are responsible for the accuracy of the job listings they post. Job seekers are responsible for the accuracy of the information submitted in their applications and profiles.",
  },
  {
    title: "Account Termination",
    body: "We may suspend or terminate accounts that violate these terms, including fraudulent listings, misuse of the platform, or abusive behavior toward other users.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms of Service from time to time. Continued use of JobPortal after changes are posted constitutes acceptance of the updated terms.",
  },
];

const TermsOfService = () => {
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
          Terms of Service
        </h1>
        <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-lg mb-10`}>
          These terms govern your use of JobPortal. Please read them carefully.
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

export default TermsOfService;
