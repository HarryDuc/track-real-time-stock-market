import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo">
          <Image
            src="assets/icons/logo.svg"
            alt="Signalist Logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="italic text-white text-opacity-80 text-sm lg:text-base">
            "The stock market is filled with individuals who know the price of
            everything, but the value of nothing."
          </blockquote>
        </div>
        <div className="flex items-center justify-between">
          <cite className="auth-testimonial-author">- Minh Đức</cite>
          <div className="flex items-start gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Image
                key={star}
                alt="Star Icon"
                src="assets/icons/star.svg"
                height={20}
                width={20}
                className="w-5 h-5"
              />
            ))}
          </div>
        </div>
        <div className="flex relative">
          <Image
            src="/assets/images/dashboard.png"
            alt="Auth Right Image"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
}
