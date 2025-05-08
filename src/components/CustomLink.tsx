
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

interface CustomLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  iconName?: string;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

const CustomLink = ({
  href,
  className,
  children,
  iconName,
  iconPosition = "right",
  isExternal = false,
}: CustomLinkProps) => {
  const linkClasses = cn(
    "inline-flex items-center transition-colors text-[#9b87f5] hover:text-[#8a70f2]",
    className
  );

  const content = (
    <>
      {iconName && iconPosition === "left" && (
        <Icon name={iconName} className="mr-2 h-4 w-4" />
      )}
      {children}
      {iconName && iconPosition === "right" && (
        <Icon name={iconName} className="ml-2 h-4 w-4" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={linkClasses}>
      {content}
    </Link>
  );
};

export default CustomLink;
