export default function Footer() {
    return (
      <footer className="bg-base-200 p-6 mt-8 shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Made with ❤️ using <a href="https://nextjs.org" className="text-primary hover:underline">Next.js</a> and <a href="https://daisyui.com" className="text-primary hover:underline">DaisyUI</a>.
          </p>
        </div>
      </footer>
    );
  }