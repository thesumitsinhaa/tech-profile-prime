const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} Sumit Sinha. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              Made with <span className="text-red-500">♥</span> by Sumit
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
